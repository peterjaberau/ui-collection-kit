
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoRowSelectionComp from "./row-selection";
import sourceDemoRowSelection from "./row-selection?raw";
            

import DemoNarrowComp from "./narrow";
import sourceDemoNarrow from "./narrow?raw";
            

import DemoEditRowComp from "./edit-row";
import sourceDemoEditRow from "./edit-row?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoBorderedComp from "./bordered";
import sourceDemoBordered from "./bordered?raw";
            

import DemoExpandComp from "./expand";
import sourceDemoExpand from "./expand?raw";
            

import DemoAjaxComp from "./ajax";
import sourceDemoAjax from "./ajax?raw";
            

import DemoFixedColumnsHeaderComp from "./fixed-columns-header";
import sourceDemoFixedColumnsHeader from "./fixed-columns-header?raw";
            

import DemoFilterSearchComp from "./filter-search";
import sourceDemoFilterSearch from "./filter-search?raw";
            

import DemoPaginationComp from "./pagination";
import sourceDemoPagination from "./pagination?raw";
            

import DemoMultipleSorterComp from "./multiple-sorter";
import sourceDemoMultipleSorter from "./multiple-sorter?raw";
            

import DemoHiddenColumnsComp from "./hidden-columns";
import sourceDemoHiddenColumns from "./hidden-columns?raw";
            

import DemoVirtualListComp from "./virtual-list";
import sourceDemoVirtualList from "./virtual-list?raw";
            

import DemoTreeDataComp from "./tree-data";
import sourceDemoTreeData from "./tree-data?raw";
            

import DemoDynamicSettingsComp from "./dynamic-settings";
import sourceDemoDynamicSettings from "./dynamic-settings?raw";
            

import DemoFixedColumnsComp from "./fixed-columns";
import sourceDemoFixedColumns from "./fixed-columns?raw";
            

import DemoFixedHeaderComp from "./fixed-header";
import sourceDemoFixedHeader from "./fixed-header?raw";
            

import DemoRowSelectionAndOperationComp from "./row-selection-and-operation";
import sourceDemoRowSelectionAndOperation from "./row-selection-and-operation?raw";
            

import DemoFixedGappedColumnsComp from "./fixed-gapped-columns";
import sourceDemoFixedGappedColumns from "./fixed-gapped-columns?raw";
            

import DemoGroupingColumnsComp from "./grouping-columns";
import sourceDemoGroupingColumns from "./grouping-columns?raw";
            

import DemoNestedTableComp from "./nested-table";
import sourceDemoNestedTable from "./nested-table?raw";
            

import DemoEditCellComp from "./edit-cell";
import sourceDemoEditCell from "./edit-cell?raw";
            

import DemoColspanRowspanComp from "./colspan-rowspan";
import sourceDemoColspanRowspan from "./colspan-rowspan?raw";
            

import DemoResetFilterComp from "./reset-filter";
import sourceDemoResetFilter from "./reset-filter?raw";
            

import DemoStickyComp from "./sticky";
import sourceDemoSticky from "./sticky?raw";
            

import DemoTreeTableEllipsisComp from "./tree-table-ellipsis";
import sourceDemoTreeTableEllipsis from "./tree-table-ellipsis?raw";
            

import DemoEllipsisComp from "./ellipsis";
import sourceDemoEllipsis from "./ellipsis?raw";
            

import DemoHeadComp from "./head";
import sourceDemoHead from "./head?raw";
            

import DemoEllipsisCustomTooltipComp from "./ellipsis-custom-tooltip";
import sourceDemoEllipsisCustomTooltip from "./ellipsis-custom-tooltip?raw";
            

import DemoOrderColumnComp from "./order-column";
import sourceDemoOrderColumn from "./order-column?raw";
            

import DemoFilterInTreeComp from "./filter-in-tree";
import sourceDemoFilterInTree from "./filter-in-tree?raw";
            

import DemoCustomEmptyComp from "./custom-empty";
import sourceDemoCustomEmpty from "./custom-empty?raw";
            

import DemoJsxComp from "./jsx";
import sourceDemoJsx from "./jsx?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoRowSelectionCustomComp from "./row-selection-custom";
import sourceDemoRowSelectionCustom from "./row-selection-custom?raw";
            

import DemoTreeTablePreserveSelectedRowKeysComp from "./tree-table-preserveSelectedRowKeys";
import sourceDemoTreeTablePreserveSelectedRowKeys from "./tree-table-preserveSelectedRowKeys?raw";
            

import DemoSummaryComp from "./summary";
import sourceDemoSummary from "./summary?raw";
            

import DemoResponsiveComp from "./responsive";
import sourceDemoResponsive from "./responsive?raw";
            

const meta = {
  title: 'Base/Table',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<any>;


export const Demo_rowSelection: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRowSelection}><DemoRowSelectionComp {...p} /></WrapperPreview>
};

export const Demo_narrow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNarrow}><DemoNarrowComp {...p} /></WrapperPreview>
};

export const Demo_editRow: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEditRow}><DemoEditRowComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_bordered: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBordered}><DemoBorderedComp {...p} /></WrapperPreview>
};

export const Demo_expand: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoExpand}><DemoExpandComp {...p} /></WrapperPreview>
};

export const Demo_ajax: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAjax}><DemoAjaxComp {...p} /></WrapperPreview>
};

export const Demo_fixedColumnsHeader: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFixedColumnsHeader}><DemoFixedColumnsHeaderComp {...p} /></WrapperPreview>
};

export const Demo_filterSearch: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFilterSearch}><DemoFilterSearchComp {...p} /></WrapperPreview>
};

export const Demo_pagination: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoPagination}><DemoPaginationComp {...p} /></WrapperPreview>
};

export const Demo_multipleSorter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoMultipleSorter}><DemoMultipleSorterComp {...p} /></WrapperPreview>
};

export const Demo_hiddenColumns: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHiddenColumns}><DemoHiddenColumnsComp {...p} /></WrapperPreview>
};

export const Demo_virtualList: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVirtualList}><DemoVirtualListComp {...p} /></WrapperPreview>
};

export const Demo_treeData: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTreeData}><DemoTreeDataComp {...p} /></WrapperPreview>
};

export const Demo_dynamicSettings: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamicSettings}><DemoDynamicSettingsComp {...p} /></WrapperPreview>
};

export const Demo_fixedColumns: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFixedColumns}><DemoFixedColumnsComp {...p} /></WrapperPreview>
};

export const Demo_fixedHeader: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFixedHeader}><DemoFixedHeaderComp {...p} /></WrapperPreview>
};

export const Demo_rowSelectionAndOperation: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRowSelectionAndOperation}><DemoRowSelectionAndOperationComp {...p} /></WrapperPreview>
};

export const Demo_fixedGappedColumns: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFixedGappedColumns}><DemoFixedGappedColumnsComp {...p} /></WrapperPreview>
};

export const Demo_groupingColumns: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGroupingColumns}><DemoGroupingColumnsComp {...p} /></WrapperPreview>
};

export const Demo_nestedTable: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNestedTable}><DemoNestedTableComp {...p} /></WrapperPreview>
};

export const Demo_editCell: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEditCell}><DemoEditCellComp {...p} /></WrapperPreview>
};

export const Demo_colspanRowspan: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoColspanRowspan}><DemoColspanRowspanComp {...p} /></WrapperPreview>
};

export const Demo_resetFilter: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResetFilter}><DemoResetFilterComp {...p} /></WrapperPreview>
};

export const Demo_sticky: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSticky}><DemoStickyComp {...p} /></WrapperPreview>
};

export const Demo_treeTableEllipsis: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTreeTableEllipsis}><DemoTreeTableEllipsisComp {...p} /></WrapperPreview>
};

export const Demo_ellipsis: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEllipsis}><DemoEllipsisComp {...p} /></WrapperPreview>
};

export const Demo_head: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoHead}><DemoHeadComp {...p} /></WrapperPreview>
};

export const Demo_ellipsisCustomTooltip: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoEllipsisCustomTooltip}><DemoEllipsisCustomTooltipComp {...p} /></WrapperPreview>
};

export const Demo_orderColumn: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoOrderColumn}><DemoOrderColumnComp {...p} /></WrapperPreview>
};

export const Demo_filterInTree: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFilterInTree}><DemoFilterInTreeComp {...p} /></WrapperPreview>
};

export const Demo_customEmpty: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomEmpty}><DemoCustomEmptyComp {...p} /></WrapperPreview>
};

export const Demo_jsx: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoJsx}><DemoJsxComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_rowSelectionCustom: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRowSelectionCustom}><DemoRowSelectionCustomComp {...p} /></WrapperPreview>
};

export const Demo_treeTablePreserveSelectedRowKeys: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTreeTablePreserveSelectedRowKeys}><DemoTreeTablePreserveSelectedRowKeysComp {...p} /></WrapperPreview>
};

export const Demo_summary: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSummary}><DemoSummaryComp {...p} /></WrapperPreview>
};

export const Demo_responsive: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoResponsive}><DemoResponsiveComp {...p} /></WrapperPreview>
};
