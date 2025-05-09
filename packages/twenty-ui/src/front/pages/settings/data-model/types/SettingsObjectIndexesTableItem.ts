import { IndexType } from '@twenty-ui/front/generated-metadata/graphql';

export type SettingsObjectIndexesTableItem = {
  name: string;
  indexType: IndexType;
  isUnique: boolean;
  indexWhereClause?: string | null;
  indexFields: string;
};
