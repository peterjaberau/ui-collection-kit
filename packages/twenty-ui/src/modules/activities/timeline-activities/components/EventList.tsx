import styled from '@emotion/styled';
import { ReactElement } from 'react';

import { EventsGroup } from '@twenty-modules/activities/timeline-activities/components/EventsGroup';
import { TimelineActivity } from '@twenty-modules/activities/timeline-activities/types/TimelineActivity';
import { filterOutInvalidTimelineActivities } from '@twenty-modules/activities/timeline-activities/utils/filterOutInvalidTimelineActivities';
import { groupEventsByMonth } from '@twenty-modules/activities/timeline-activities/utils/groupEventsByMonth';
import { ActivityTargetableObject } from '@twenty-modules/activities/types/ActivityTargetableEntity';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { ScrollWrapper } from '@twenty-modules/ui/utilities/scroll/components/ScrollWrapper';

type EventListProps = {
  targetableObject: ActivityTargetableObject;
  title: string;
  events: TimelineActivity[];
  button?: ReactElement | false;
};

const StyledTimelineContainer = styled.div`
  align-items: center;
  align-self: stretch;

  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: flex-start;
`;

export const EventList = ({ events, targetableObject }: EventListProps) => {
  const mainObjectMetadataItem = useObjectMetadataItem({
    objectNameSingular: targetableObject.targetObjectNameSingular,
  }).objectMetadataItem;

  const { objectMetadataItems } = useObjectMetadataItems();

  const filteredEvents = filterOutInvalidTimelineActivities(
    events,
    targetableObject.targetObjectNameSingular,
    objectMetadataItems,
  );

  const groupedEvents = groupEventsByMonth(filteredEvents);

  return (
    <ScrollWrapper
      componentInstanceId={`scroll-wrapper-event-list-${targetableObject.id}`}
    >
      <StyledTimelineContainer>
        {groupedEvents.map((group, index) => (
          <EventsGroup
            mainObjectMetadataItem={mainObjectMetadataItem}
            key={group.year.toString() + group.month}
            group={group}
            month={new Date(group.items[0].createdAt).toLocaleString(
              'default',
              { month: 'long' },
            )}
            year={
              index === 0 || group.year !== groupedEvents[index - 1].year
                ? group.year
                : undefined
            }
          />
        ))}
      </StyledTimelineContainer>
    </ScrollWrapper>
  );
};
