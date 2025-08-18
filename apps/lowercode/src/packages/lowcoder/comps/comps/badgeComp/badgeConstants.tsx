import {
  BoolCodeControl,
  NumberControl,
  StringControl,
} from "#lowcoder/comps/controls/codeControl";
import { Section, sectionNames } from "#lowcoder-design/index";
import { numberExposingStateControl } from "#lowcoder/comps/controls/codeStateControl";
import { withDefault } from "#lowcoder/comps/generators";
import { RecordConstructorToComp } from "#lowcoder-core/index";
import { trans } from "#lowcoder/i18n";
import { dropdownControl } from "#lowcoder/comps/controls/dropdownControl";

const badgeSizeOptions = [
  {
    label: trans("badge.SizeDefault"),
    value: "default",
  },
  {
    label: trans("badge.SizeSmall"),
    value: "small",
  },
] as const;

const badgeTypeOptions = [
  {
    label: trans("badge.number"),
    value: "number",
  },
  {
    label: trans("badge.dot"),
    value: "dot",
  },
] as const;

export const badgeChildren: any = {
  badgeType: dropdownControl(badgeTypeOptions, "number"),
  badgeCount: withDefault(numberExposingStateControl("badgeCount"), "0"),
  badgeSize: dropdownControl(badgeSizeOptions, "default"),
  showZero: BoolCodeControl,
  overflowCount: withDefault(NumberControl, 99),
  badgeTitle: withDefault(StringControl, ""),
};

type badgeComp = RecordConstructorToComp<typeof badgeChildren>;

export const BadgeBasicSection = (children: badgeComp | any) => (
  <Section name={sectionNames.advanced}>
    {children.badgeType.propertyView({
      label: trans("badge.Type"),
      radioButton: true,
    })}
    {children.badgeCount.propertyView({ label: trans("badge.Count") })}
    {children.badgeType.getView() === "number" &&
      children.overflowCount.propertyView({label: trans("badge.overflowCount")})}
    {children.badgeType.getView() === "number" &&
      children.badgeSize.propertyView({ label: trans("badge.Size") })}
    {children.badgeTitle.propertyView({ label: trans("badge.Title") })}
  </Section>
);
