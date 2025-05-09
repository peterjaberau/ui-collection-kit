import { gql } from '@apollo/client';

import { timelineThreadWithTotalFragment } from '@twenty-modules/activities/emails/graphql/queries/fragments/timelineThreadWithTotalFragment';

export const getTimelineThreadsFromPersonId = gql`
  query GetTimelineThreadsFromPersonId(
    $personId: UUID!
    $page: Int!
    $pageSize: Int!
  ) {
    getTimelineThreadsFromPersonId(
      personId: $personId
      page: $page
      pageSize: $pageSize
    ) {
      ...TimelineThreadsWithTotalFragment
    }
  }
  ${timelineThreadWithTotalFragment}
`;
