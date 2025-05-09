import { RecordLayoutTab } from '@twenty-modules/ui/layout/tab/types/RecordLayoutTab';

export type RecordLayout = {
  hideSummaryAndFields?: boolean;
  tabs: Record<string, RecordLayoutTab | null>;
};
