import { getBottomResIcon } from "#lowcoder/util/bottomResUtils";
import { MultiCompBuilder, valueComp } from "#lowcoder/comps/generators";
import { bottomResListComp } from "#lowcoder/comps/generators/bottomResList";
import { NameGenerator } from "#lowcoder/comps/utils";
import { genRandomKey } from "#lowcoder/comps/utils/idGenerator";
import { trans } from "#lowcoder/i18n";
import { ReactNode } from "react";
import { BottomResComp, BottomResCompResult, BottomResTypeEnum } from "#lowcoder/types/bottomRes";
import { SimpleNameComp } from "./simpleNameComp";

const FolderItemCompBase = new MultiCompBuilder(
  {
    id: valueComp<string>(""),
    name: SimpleNameComp,
  },
  () => null as any
)
  .setPropertyViewFn(() => null as any)
  .build();

export class FolderListItemComp extends FolderItemCompBase implements BottomResComp {
  extraNode() {
    return super.extraNode();
  }
  result(): BottomResCompResult | null {
    return null;
  }
  type(): BottomResTypeEnum {
    return BottomResTypeEnum.Folder;
  }
  id() {
    return this.children.id.getView();
  }
  name(): string {
    return this.children.name.getView();
  }
  icon(): ReactNode {
    return getBottomResIcon(BottomResTypeEnum.Folder);
  }
  rename(value: string): string {
    if (!value) {
      return "";
    }
    this.children.name.dispatchChangeValueAction(value);
    return this.id();
  }
  checkName(value: string): string {
    if (!value) {
      return trans("comp.nameNotEmpty");
    }
    return "";
  }
}

export const FolderListComp = class extends bottomResListComp(
  FolderListItemComp,
  BottomResTypeEnum.Folder,
  () => {
    return {
      id: genRandomKey(),
    };
  }
) {
  override genNewName() {
    const nameGenerator = new NameGenerator();
    nameGenerator.init(this.items().map((i) => i.name()));
    return nameGenerator.genItemName(trans("query.newFolder"));
  }
  override autoSelectAfterCreate() {
    return true;
  }
};
