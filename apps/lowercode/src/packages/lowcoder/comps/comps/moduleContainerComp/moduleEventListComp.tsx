// #ts-nocheck
import { EmptyContent } from "#lowcoder/components/EmptyContent";
import { KeyValueItem, KeyValueItemListWithNewCreateState } from "#lowcoder/components/KeyValueItemList";
import { StringControl } from "#lowcoder/comps/controls/codeControl";
import CompNameControl from "#lowcoder/comps/controls/compNameControl";
import { simpleMultiComp, valueComp } from "#lowcoder/comps/generators";
import { list } from "#lowcoder/comps/generators/list";
import { NameGenerator } from "#lowcoder/comps/utils";
import { NameAndExposingInfo } from "#lowcoder/comps/utils/exposingTypes";
import { controlItem, Section, Switch, SwitchWrapper } from "#lowcoder-design/index";
import { trans } from "#lowcoder/i18n";
import { ModuleEventListItemComp } from "./moduleEventListItemComp";
import { ConfigViewSection } from "./styled";
import { messageInstance } from "#lowcoder-design/components/GlobalInstances";
import { DocLink } from "#lowcoder-design/index";
import { markdownCompCss, TacoMarkDown } from "#lowcoder-design/index";

const ModuleEventListComp: any = list(ModuleEventListItemComp);

// @ts-ignore
export class ModuleEventComp extends simpleMultiComp({
  list: ModuleEventListComp,
  enableEventTestMessage: valueComp<boolean>(true),
} as any) {
  nameGen: any = new NameGenerator();

  names() {
    return (this as any).children.list.getView().map((i: any) => i.children.name.getView()) as any;
  }

  trigger(name: string) {
    if ((this as any).children.enableEventTestMessage.getView()) {
      messageInstance.success(trans("module.eventTriggered", { name: name }));
    }
  }

  handleAdd() {
    const list: any = this.children.list;
    const name = this.nameGen.init(this.names()).genItemName("event");
    list.dispatch(list.pushAction({ name }));
  }

  handleDelete(idx: number) {
    const list: any = this.children.list;
    list.dispatch(list.deleteAction(idx));
  }

  getTestView() {
    const hasEvents: any = (this as any).children.list.getView().length > 0;
    const enableTestMessage = (this as any).children.enableEventTestMessage.getView();
    const label = trans("module.globalPromptWhenEventTriggered");
    return (
      <Section name={trans("moduleContainer.eventTest")}>
        {hasEvents
          ? controlItem(
              { filterText: label },
              <SwitchWrapper label={label}>
                <Switch
                  value={enableTestMessage}
                  onChange={(value) => {
                    (this as any).children.enableEventTestMessage.dispatchChangeValueAction(value);
                  }}
                />
              </SwitchWrapper>
            )
          : controlItem({}, <EmptyContent text={trans("module.emptyEventTest")} />)}
      </Section>
    );
  }

  getPropertyView() {
    const children: any = (this as any).children.list.getView();
    return (
      <ConfigViewSection>
        <PropertyView
          onAdd={() => this.handleAdd()}
          onDelete={(i) => this.handleDelete(i)}
          items={children}
        />
         <><br/><TacoMarkDown>{trans("module.documentationText")}</TacoMarkDown><br/><DocLink style={{ marginTop: 8 }} href={trans("docUrls.module")} title={trans("module.documentationText")}>
            {trans("module.docLink")}
          </DocLink></>
      </ConfigViewSection>
    );
  }

  nameAndExposingInfo(): NameAndExposingInfo | any {
    const result: NameAndExposingInfo | any = {};
    (this as any).children.list.getView().forEach((item: any) => {
      result[item.children.name.getView()] = item.exposingInfo();
    });
    return result;
  }
}

interface PropertyViewProps {
  onAdd: () => void;
  onDelete: (idx: number) => void;
  items: InstanceType<typeof ModuleEventListItemComp>[];
}

function PropertyView(props: PropertyViewProps) {
  const { onDelete, onAdd, items } = props;

  return (
    <div>
      <KeyValueItemListWithNewCreateState
        title={trans("module.event")}
        keyTitle={trans("module.name")}
        onAdd={onAdd}
        emptyText={trans("module.emptyEvent")}
      >
        {(newCreateIdx) =>
          items.map((i, idx) => (
            <EventItem
              key={idx}
              {...i.children}
              onDelete={() => onDelete(idx)}
              showPopover={idx === newCreateIdx}
            />
          ))
        }
      </KeyValueItemListWithNewCreateState>
    </div>
  );
}

interface EventItemProps {
  name: InstanceType<typeof CompNameControl>;
  description: InstanceType<typeof StringControl>;
  onDelete: () => void;
  showPopover: boolean;
}

function EventItem(props: EventItemProps) {
  const { name, onDelete } = props;
  const content = <>{name.propertyView({ label: trans("module.name") })}</>;
  return (
    <KeyValueItem
      del={onDelete}
      name={name.getView()}
      clickPopoverContent={content}
      defaultShowPopover={props.showPopover}
    />
  );
}
