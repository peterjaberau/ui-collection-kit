import { CopyIcon } from "@ui-collection-kit/icons";
import { NestedInputButton } from "./nested-input-button";
import { StoryGrid, StorySection } from "./storybook";

export default {
  title: "Builder/Forms/Nested Select Button",
};

export const Demo = () => {
  return (
    <>
      <StorySection title="Text">
        <StoryGrid horizontal>
          <NestedInputButton>px</NestedInputButton>
          <NestedInputButton data-state="hover">px</NestedInputButton>
          <NestedInputButton data-state="open">px</NestedInputButton>
          <NestedInputButton disabled>px</NestedInputButton>
        </StoryGrid>
      </StorySection>
      <StorySection title="Chevron down icon">
        <StoryGrid horizontal>
          <NestedInputButton />
          <NestedInputButton data-state="hover" />
          <NestedInputButton data-state="open" />
          <NestedInputButton disabled />
        </StoryGrid>
      </StorySection>
      <StorySection title="Any Icon">
        <StoryGrid horizontal>
          <NestedInputButton>
            <CopyIcon />
          </NestedInputButton>
          <NestedInputButton data-state="hover">
            <CopyIcon />
          </NestedInputButton>
          <NestedInputButton data-state="open">
            <CopyIcon />
          </NestedInputButton>
          <NestedInputButton disabled>
            <CopyIcon />
          </NestedInputButton>
        </StoryGrid>
      </StorySection>
    </>
  );
};

Demo.storyName = "Nested Select Button";
