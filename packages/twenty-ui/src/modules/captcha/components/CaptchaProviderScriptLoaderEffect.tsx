import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useRequestFreshCaptchaToken } from '@twenty-modules/captcha/hooks/useRequestFreshCaptchaToken';
import { isCaptchaScriptLoadedState } from '@twenty-modules/captcha/states/isCaptchaScriptLoadedState';
import { getCaptchaUrlByProvider } from '@twenty-modules/captcha/utils/getCaptchaUrlByProvider';
import { captchaState } from '@twenty-modules/client-config/states/captchaState';
import { CaptchaDriverType } from '@twenty-ui/front/generated/graphql';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

export const CaptchaProviderScriptLoaderEffect = () => {
  const captcha = useRecoilValue(captchaState);
  const [isCaptchaScriptLoaded, setIsCaptchaScriptLoaded] = useRecoilState(
    isCaptchaScriptLoadedState,
  );
  const { requestFreshCaptchaToken } = useRequestFreshCaptchaToken();

  useEffect(() => {
    if (!captcha?.provider || !captcha.siteKey) {
      return;
    }

    const scriptUrl = getCaptchaUrlByProvider(
      captcha.provider,
      captcha.siteKey,
    );
    if (!scriptUrl) {
      return;
    }

    let scriptElement: HTMLScriptElement | null = document.querySelector(
      `script[src="${scriptUrl}"]`,
    );
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = () => {
        if (captcha.provider === CaptchaDriverType.GoogleRecaptcha) {
          window.grecaptcha?.ready(() => {
            setIsCaptchaScriptLoaded(true);
          });
        } else {
          setIsCaptchaScriptLoaded(true);
        }
      };
      document.body.appendChild(scriptElement);
    }
  }, [captcha?.provider, captcha?.siteKey, setIsCaptchaScriptLoaded]);

  useEffect(() => {
    if (isUndefinedOrNull(captcha?.provider) || !isCaptchaScriptLoaded) {
      return;
    }

    let refreshInterval: NodeJS.Timeout;

    switch (captcha.provider) {
      case CaptchaDriverType.GoogleRecaptcha:
        // Google reCAPTCHA tokens expire after 120 seconds, refresh at 110 seconds
        refreshInterval = setInterval(requestFreshCaptchaToken, 110 * 1000);
        break;
      case CaptchaDriverType.Turnstile:
        // Cloudflare Turnstile tokens expire after 500 seconds, refresh at 480 seconds
        refreshInterval = setInterval(requestFreshCaptchaToken, 480 * 1000);
        break;
      default:
        // Note: hCaptcha has a callback system for expiration that we're not implementing now
        return;
    }

    return () => clearInterval(refreshInterval);
  }, [captcha?.provider, requestFreshCaptchaToken, isCaptchaScriptLoaded]);

  return <></>;
};
