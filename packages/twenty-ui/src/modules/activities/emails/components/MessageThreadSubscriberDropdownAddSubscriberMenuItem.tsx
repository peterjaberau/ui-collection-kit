import { MessageThreadSubscriber } from '@twenty-modules/activities/emails/types/MessageThreadSubscriber';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useCreateOneRecord } from '@twenty-modules/object-record/hooks/useCreateOneRecord';
import { WorkspaceMember } from '@twenty-modules/workspace-member/types/WorkspaceMember';
import { IconPlus } from '@twenty-ui/display';
import { MenuItemAvatar } from '@twenty-ui/navigation';

export const MessageThreadSubscriberDropdownAddSubscriberMenuItem = ({
  workspaceMember,
}: {
  workspaceMember: WorkspaceMember;
}) => {
  const text = `${workspaceMember.name.firstName} ${workspaceMember.name.lastName}`;

  const { createOneRecord } = useCreateOneRecord<MessageThreadSubscriber>({
    objectNameSingular: CoreObjectNameSingular.MessageThreadSubscriber,
  });

  const handleAddButtonClick = () => {
    createOneRecord({
      workspaceMember,
    });
  };

  return (
    <MenuItemAvatar
      avatar={{
        placeholder: workspaceMember.name.firstName,
        avatarUrl: workspaceMember.avatarUrl,
        placeholderColorSeed: workspaceMember.id,
        size: 'md',
        type: 'rounded',
      }}
      text={text}
      iconButtons={[
        {
          Icon: IconPlus,
          onClick: handleAddButtonClick,
        },
      ]}
    />
  );
};
