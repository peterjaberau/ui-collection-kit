import {
  ContainerBaseProps,
  gridItemCompToGridItems,
  InnerGrid,
} from "#lowcoder/comps/comps/containerComp/containerView";
import { BoolControl } from "#lowcoder/comps/controls/boolControl";
import { SlotControl } from "#lowcoder/comps/controls/slotControl";
import { withSelectedMultiContext } from "#lowcoder/comps/generators";
import { ControlItemCompBuilder } from "#lowcoder/comps/generators/controlCompBuilder";
import { BackgroundColorContext } from "#lowcoder/comps/utils/backgroundColorContext";
import { trans } from "#lowcoder/i18n";
import _ from "lodash";
import { ConstructorToView, wrapChildAction } from "#lowcoder-core/index";
import { createContext, useContext, useCallback } from "react";
import { tryToNumber } from "#lowcoder/util/convertUtils";
import { SimpleContainerComp } from "../containerBase/simpleContainerComp";
import { OB_ROW_ORI_INDEX, RecordType } from "./tableUtils";
import { NameGenerator } from "#lowcoder/comps/utils";
import { JSONValue } from "#lowcoder/util/jsonTypes";

const ContextSlotControl = withSelectedMultiContext(SlotControl);
export const ExpandViewContext = createContext(false);

const ContainerView = (props: ContainerBaseProps) => {
  return <InnerGrid {...props} emptyRows={15} autoHeight />;
};

function ExpandView(props: { containerProps: ConstructorToView<typeof SimpleContainerComp> }) {
  const { containerProps }: any = props;
  const background = useContext(BackgroundColorContext);
  return (
    <ContainerView
      {...containerProps}
      isDroppable={false}
      isDraggable={false}
      isResizable={false}
      isSelectable={false}
      bgColor={background}
      items={gridItemCompToGridItems(containerProps.items)}
      hintPlaceholder=""
      containerPadding={[4, 4]}
    />
  );
}

let ExpansionControlTmp = (function () {
  const label = trans("table.expandable");
  return new ControlItemCompBuilder(
    {
      expandable: BoolControl,
      slot: ContextSlotControl,
    },
    () => ({ expandableConfig: {}, expandModalView: null as any })
    )
    .setControlItemData({ filterText: label })
    .setPropertyViewFn((children, dispatch) => {
      return (
        <>
          {children.expandable.propertyView({ label })}
          {children.expandable.getView() &&
            children.slot
              .getSelectedComp()
              .getComp()
              .propertyView({ buttonText: trans("table.configExpandedView") })}
        </>
      );
    })
    .build();
})();

export class ExpansionControl extends ExpansionControlTmp {
  getView() {
    if (!this.children.expandable.getView()) {
      // @ts-ignore
      return { expandableConfig: {}, expandModalView: null };
    }
    const selectedContainer = this.children.slot.getSelectedComp();
    return {
      expandableConfig: {
        expandedRowRender: (record: RecordType, index: number) => {
          const slotControl = this.children.slot.getView()(
            {
              currentRow: _.omit(record, OB_ROW_ORI_INDEX),
              currentIndex: index,
              currentOriginalIndex: tryToNumber(record[OB_ROW_ORI_INDEX]),
            },
            String(record[OB_ROW_ORI_INDEX])
          );
          const containerProps = slotControl.children.container.getView();
          return (
            <ExpandViewContext.Provider value={true}>
              <ExpandView key={record[OB_ROW_ORI_INDEX]} containerProps={containerProps} />
            </ExpandViewContext.Provider>
          );
        },
      },
      expandModalView: selectedContainer.getView(),
    };
  }

  setSelectionAction(selection: string, params?: Record<string, unknown>) {
    return wrapChildAction("slot", ContextSlotControl.setSelectionAction(selection, params));
  }

  getPasteValue(nameGenerator: NameGenerator): JSONValue {
    return {
      ...this.toJsonValue(),
      slot: this.children.slot.getSelectedComp().getComp().getPasteValue(nameGenerator),
    };
  }

  reduce(action: any) {
    const comp = super.reduce(action);
    // console.info("ExpansionControl reduce. action: ", action, "\nthis: ", this, "\ncomp: ", comp);
    return comp;
  }
}
