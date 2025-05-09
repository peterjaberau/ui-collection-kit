import { MessageThreadSubscriberDropdownAddSubscriberMenuItem } from '@twenty-modules/activities/emails/components/MessageThreadSubscriberDropdownAddSubscriberMenuItem';
import { MessageThreadSubscriber } from '@twenty-modules/activities/emails/types/MessageThreadSubscriber';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useFindManyRecords } from '@twenty-modules/object-record/hooks/useFindManyRecords';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSearchInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { WorkspaceMember } from '@twenty-modules/workspace-member/types/WorkspaceMember';

export const MessageThreadSubscriberDropdownAddSubscriber = ({
  existingSubscribers,
}: {
  existingSubscribers: MessageThreadSubscriber[];
}) => {
  const { records: workspaceMembersLeftToAdd } =
    useFindManyRecords<WorkspaceMember>({
      objectNameSingular: CoreObjectNameSingular.WorkspaceMember,
      filter: {
        not: {
          id: {
            in: existingSubscribers.map(
              ({ workspaceMember }) => workspaceMember.id,
            ),
          },
        },
      },
    });

  return (
    <DropdownMenuItemsContainer>
      <DropdownMenuSearchInput />
      <DropdownMenuSeparator />
      {workspaceMembersLeftToAdd.map((workspaceMember) => (
        <MessageThreadSubscriberDropdownAddSubscriberMenuItem
          workspaceMember={workspaceMember}
        />
      ))}
    </DropdownMenuItemsContainer>
  );
};
