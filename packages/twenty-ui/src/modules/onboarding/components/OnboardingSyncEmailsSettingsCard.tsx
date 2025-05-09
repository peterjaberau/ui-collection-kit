import { onboardingSyncEmailsOptions } from '@twenty-modules/onboarding/components/onboardingSyncEmailsOptions';
import { SettingsAccountsRadioSettingsCard } from '@twenty-modules/settings/accounts/components/SettingsAccountsRadioSettingsCard';
import { MessageChannelVisibility } from '@twenty-ui/front/generated/graphql';

type OnboardingSyncEmailsSettingsCardProps = {
  onChange: (nextValue: MessageChannelVisibility) => void;
  value?: MessageChannelVisibility;
};

export const OnboardingSyncEmailsSettingsCard = ({
  onChange,
  value = MessageChannelVisibility.SHARE_EVERYTHING,
}: OnboardingSyncEmailsSettingsCardProps) => (
  <SettingsAccountsRadioSettingsCard
    name="sync-emails-visiblity"
    options={onboardingSyncEmailsOptions}
    value={value}
    onChange={onChange}
  />
);
