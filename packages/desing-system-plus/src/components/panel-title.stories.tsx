import { PanelTitle, TitleSuffixSpacer } from "./panel-title";
import { Button } from "./button";
import { XIcon, CopyIcon } from "@ui-collection-kit/icons";
import { StoryGrid } from "./storybook";

export default {
  title: "Builder/Layout/Panel/Panel Title",
};

export const Demo = () => (
  <StoryGrid>
    <PanelTitle>Without buttons</PanelTitle>

    <PanelTitle suffix={<Button prefix={<XIcon />} color="ghost" />}>
      One icon button
    </PanelTitle>

    <PanelTitle
      suffix={
        <>
          <Button prefix={<XIcon />} color="ghost" />
          <Button prefix={<CopyIcon />} color="ghost" />
        </>
      }
    >
      Many icon buttons
    </PanelTitle>

    <PanelTitle
      suffix={
        <>
          <Button prefix={<XIcon />} color="ghost" />
          <Button prefix={<CopyIcon />} color="ghost" />
          <TitleSuffixSpacer />
          <Button>Button</Button>
        </>
      }
    >
      Icon and regular buttons
    </PanelTitle>
  </StoryGrid>
);
Demo.storyName = "Panel Title";
