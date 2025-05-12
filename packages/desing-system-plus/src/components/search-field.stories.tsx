import type { StoryFn } from "@storybook/react";
import { SearchField } from "./search-field";

export default {
  title: "Builder/Forms/Search Field",
  component: SearchField,
};

export const Empty: StoryFn<typeof SearchField> = () => {
  return <SearchField />;
};

export const WithInitialValue: StoryFn<typeof SearchField> = () => {
  return <SearchField value={"somevalue"} title="Search" />;
};
