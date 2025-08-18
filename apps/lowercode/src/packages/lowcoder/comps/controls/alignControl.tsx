import { ValueFromOption } from "#lowcoder-design/index";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "#lowcoder-design/index";
import { dropdownControl } from "./dropdownControl";

const AlignOptions = [
  { label: <AlignLeft />, value: "left" },
  { label: <AlignCenter />, value: "center" },
  { label: <AlignRight />, value: "right" },
] as const;

export function alignControl(defaultValue: ValueFromOption<typeof AlignOptions> = "left") {
  return dropdownControl(AlignOptions, defaultValue);
}

const AlignOptionsWithJustify = [
  ...AlignOptions,
  { label: <AlignJustify />, value: "justify" },
] as const;

export function alignWithJustifyControl(
  defaultValue: ValueFromOption<typeof AlignOptions> = "left"
) {
  return dropdownControl(AlignOptionsWithJustify, defaultValue);
}
