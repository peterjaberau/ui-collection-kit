import { NestedIconLabel } from "./nested-icon-label";
import { labelColors } from "./label";
import { GapVerticalIcon } from "@ui-collection-kit/icons";
import { StorySection, StoryGrid } from "./storybook";

export default {
  title: "Builder/Display/Nested Icon Label",
};

export const Demo = () => {
  return (
    <>
      <StorySection title="Default">
        <StoryGrid horizontal>
          {labelColors.map((color) => (
            <NestedIconLabel key={color} color={color}>
              <GapVerticalIcon />
            </NestedIconLabel>
          ))}
        </StoryGrid>
      </StorySection>
      <StorySection title="Hover">
        <StoryGrid horizontal>
          {labelColors.map((color) => (
            <NestedIconLabel key={color} color={color} hover>
              <GapVerticalIcon />
            </NestedIconLabel>
          ))}
        </StoryGrid>
      </StorySection>
      <StorySection title="Disabled">
        <StoryGrid horizontal>
          {labelColors.map((color) => (
            <NestedIconLabel key={color} color={color} disabled>
              <GapVerticalIcon />
            </NestedIconLabel>
          ))}
        </StoryGrid>
      </StorySection>
    </>
  );
};
Demo.storyName = "Nested Icon Label";
