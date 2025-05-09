import { LayoutCard } from '@twenty-modules/ui/layout/tab/types/LayoutCard';
import { TabVisibilityConfig } from '@twenty-modules/ui/layout/tab/types/TabVisibilityConfig';
import { IconComponent } from '@twenty-ui/display';

export type RecordLayoutTab = {
  title: string;
  position: number;
  Icon: IconComponent;
  hide: TabVisibilityConfig;
  cards: LayoutCard[];
};
