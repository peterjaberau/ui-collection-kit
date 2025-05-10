import { defaultSystem as themeSaas } from '@ui-collection-kit/saas/react';
import { system as systemChakra } from '#presets/themePreset';
import { defaultSystem as defaultChakra } from '@chakra-ui/react';

export const configOptions: any = {
  theme: {
    saas: themeSaas,
    system: systemChakra,
    chakra: defaultChakra,
  },
};

export const getThemeConfigFromOptions = ({ scope, name }: any) => {
  const getScope: any = configOptions[scope];
  if (!getScope) return null;

  const getValue: any = getScope[name];
  if (!getValue) return null;

  return getValue;
};
