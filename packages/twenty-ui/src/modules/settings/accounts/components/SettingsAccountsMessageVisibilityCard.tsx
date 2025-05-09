import { SettingsAccountsRadioSettingsCard } from '@twenty-modules/settings/accounts/components/SettingsAccountsRadioSettingsCard';
import { SettingsAccountsVisibilityIcon } from '@twenty-modules/settings/accounts/components/SettingsAccountsVisibilityIcon';
import { msg } from '@lingui/core/macro';
import { MessageChannelVisibility } from '@twenty-ui/front/generated/graphql';

type SettingsAccountsMessageVisibilityCardProps = {
  onChange: (nextValue: MessageChannelVisibility) => void;
  value?: MessageChannelVisibility;
};

const inboxSettingsVisibilityOptions = [
  {
    title: msg`Everything`,
    description: msg`Subject, body and attachments will be shared with your team.`,
    value: MessageChannelVisibility.SHARE_EVERYTHING,
    cardMedia: (
      <SettingsAccountsVisibilityIcon
        metadata="active"
        subject="active"
        body="active"
      />
    ),
  },
  {
    title: msg`Subject and metadata`,
    description: msg`Subject and metadata will be shared with your team.`,
    value: MessageChannelVisibility.SUBJECT,
    cardMedia: (
      <SettingsAccountsVisibilityIcon
        metadata="active"
        subject="active"
        body="inactive"
      />
    ),
  },
  {
    title: msg`Metadata`,
    description: msg`Timestamp and participants will be shared with your team.`,
    value: MessageChannelVisibility.METADATA,
    cardMedia: (
      <SettingsAccountsVisibilityIcon
        metadata="active"
        subject="inactive"
        body="inactive"
      />
    ),
  },
];

export const SettingsAccountsMessageVisibilityCard = ({
  onChange,
  value = MessageChannelVisibility.SHARE_EVERYTHING,
}: SettingsAccountsMessageVisibilityCardProps) => (
  <SettingsAccountsRadioSettingsCard
    name="message-visibility"
    options={inboxSettingsVisibilityOptions}
    value={value}
    onChange={onChange}
  />
);
