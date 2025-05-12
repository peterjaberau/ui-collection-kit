import { TwoRowsIconButtonContainer } from "./two-rows-icon-button-container";
import { SmallIconButton } from "./small-icon-button";
import { TrashIcon } from "@ui-collection-kit/icons";

export const Demo = () => (
  <TwoRowsIconButtonContainer>
    <SmallIconButton variant="destructive" icon={<TrashIcon />} />
  </TwoRowsIconButtonContainer>
);

Demo.storyName = "Two Rows Small Icon Button Container";

export default {
  title: "Builder/Layout/Two Rows Small Icon Button Container",
};
