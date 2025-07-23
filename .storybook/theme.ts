import { create } from "storybook/theming/create"

export const themeLight: any = create({
  base: "light",
  brandTitle: "UI Kit",
});

export const themeDark: any = create({
  base: "dark",
  brandTitle: "UI Kit",
});

export const themes = {
  light: themeLight,
  dark: themeDark,
};
