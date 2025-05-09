import { ApolloClient, gql, useApolloClient } from '@apollo/client';
import { isUndefined } from '@sniptt/guards';

import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { getRecordsFromRecordConnection } from '@twenty-modules/object-record/cache/utils/getRecordsFromRecordConnection';
import { EMPTY_QUERY } from '@twenty-modules/object-record/constants/EmptyQuery';
import { RecordGqlOperationSignature } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationSignature';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { CombinedFindManyRecordsQueryResult } from '@twenty-modules/object-record/multiple-objects/types/CombinedFindManyRecordsQueryResult';
import { generateCombinedFindManyRecordsQueryVariables } from '@twenty-modules/object-record/multiple-objects/utils/generateCombinedFindManyRecordsQueryVariables';
import { getCombinedFindManyRecordsQueryFilteringPart } from '@twenty-modules/object-record/multiple-objects/utils/getCombinedFindManyRecordsQueryFilteringPart';
import { useRecoilValue } from 'recoil';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const usePerformCombinedFindManyRecords = () => {
  const client = useApolloClient();
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);

  const generateCombinedFindManyRecordsQuery = (
    operationSignatures: RecordGqlOperationSignature[],
    objectMetadataItemsValue: ObjectMetadataItem[],
  ) => {
    const filterPerMetadataItemArray = operationSignatures
      .map(
        ({ objectNameSingular }) =>
          `$filter${capitalize(objectNameSingular)}: ${capitalize(
            objectNameSingular,
          )}FilterInput`,
      )
      .join(', ');

    const orderByPerMetadataItemArray = operationSignatures
      .map(
        ({ objectNameSingular }) =>
          `$orderBy${capitalize(objectNameSingular)}: [${capitalize(
            objectNameSingular,
          )}OrderByInput]`,
      )
      .join(', ');

    const cursorFilteringPerMetadataItemArray = operationSignatures
      .map(
        ({ objectNameSingular }) =>
          `$after${capitalize(objectNameSingular)}: String, $before${capitalize(objectNameSingular)}: String, $first${capitalize(objectNameSingular)}: Int, $last${capitalize(objectNameSingular)}: Int`,
      )
      .join(', ');

    const limitPerMetadataItemArray = operationSignatures
      .map(
        ({ objectNameSingular }) =>
          `$limit${capitalize(objectNameSingular)}: Int`,
      )
      .join(', ');

    const queryOperationSignatureWithObjectMetadataItemArray =
      operationSignatures.map((operationSignature) => {
        const objectMetadataItem = objectMetadataItemsValue.find(
          (objectMetadataItem) =>
            objectMetadataItem.nameSingular ===
            operationSignature.objectNameSingular,
        );

        if (isUndefined(objectMetadataItem)) {
          throw new Error(
            `Object metadata item not found for object name singular: ${operationSignature.objectNameSingular}`,
          );
        }

        return { operationSignature, objectMetadataItem };
      });

    return gql`
    query CombinedFindManyRecords(
      ${filterPerMetadataItemArray}, 
      ${orderByPerMetadataItemArray}, 
      ${cursorFilteringPerMetadataItemArray}, 
      ${limitPerMetadataItemArray}
    ) {
      ${queryOperationSignatureWithObjectMetadataItemArray
        .map(
          ({ objectMetadataItem, operationSignature }) =>
            `${getCombinedFindManyRecordsQueryFilteringPart(
              objectMetadataItem,
            )} {
          edges {
            node ${mapObjectMetadataToGraphQLQuery({
              objectMetadataItems: objectMetadataItemsValue,
              objectMetadataItem,
              recordGqlFields:
                operationSignature.fields ??
                generateDepthOneRecordGqlFields({
                  objectMetadataItem,
                }),
            })}
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          totalCount
        }`,
        )
        .join('\n')}
    }
  `;
  };

  const performCombinedFindManyRecords = async ({
    operationSignatures,
    client: customClient,
  }: {
    operationSignatures: RecordGqlOperationSignature[];
    client?: ApolloClient<object>;
  }) => {
    const apolloClient = customClient || client;

    const findManyQuery = generateCombinedFindManyRecordsQuery(
      operationSignatures,
      objectMetadataItems,
    );

    const queryVariables = generateCombinedFindManyRecordsQueryVariables({
      operationSignatures,
    });

    const { data, loading } =
      await apolloClient.query<CombinedFindManyRecordsQueryResult>({
        query: findManyQuery ?? EMPTY_QUERY,
        variables: queryVariables,
      });

    const resultWithoutConnection = Object.fromEntries(
      Object.entries(data ?? {}).map(([namePlural, objectRecordConnection]) => [
        namePlural,
        getRecordsFromRecordConnection({
          recordConnection: objectRecordConnection,
        }),
      ]),
    );

    return {
      result: resultWithoutConnection,
      loading,
    };
  };

  return { performCombinedFindManyRecords };
};
