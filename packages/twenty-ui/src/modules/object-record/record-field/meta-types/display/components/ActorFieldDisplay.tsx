import { useIsFieldEmpty } from '@twenty-modules/object-record/record-field/hooks/useIsFieldEmpty';
import { useActorFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useActorFieldDisplay';
import { ActorDisplay } from '@twenty-modules/ui/field/display/components/ActorDisplay';
import { isNonEmptyString } from '@sniptt/guards';

export const ActorFieldDisplay = () => {
  const { fieldValue } = useActorFieldDisplay();

  const name = !fieldValue.workspaceMemberId
    ? fieldValue.name
    : [
        fieldValue.workspaceMember?.name.firstName,
        fieldValue.workspaceMember?.name.lastName,
      ]
        .filter(isNonEmptyString)
        .join(' ');

  const displayActorField = !useIsFieldEmpty();

  return displayActorField ? (
    <ActorDisplay
      name={name}
      source={fieldValue.source}
      avatarUrl={fieldValue.workspaceMember?.avatarUrl}
      workspaceMemberId={fieldValue.workspaceMemberId}
      context={fieldValue.context}
    />
  ) : null;
};
