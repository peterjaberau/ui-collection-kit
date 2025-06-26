import { addons } from "storybook/manager-api"
import { create } from "storybook/theming/create"

export const theme: any = create({
  base: "light",
  brandTitle: "UI Collections Kit",

});

addons.setConfig({
  theme,
})
