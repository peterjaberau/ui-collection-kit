import { badgeRecipe } from '../components/badge/badge.recipe'
import { buttonRecipe } from '../components/button/button.recipe'
import { checkmarkRecipe } from '../components/checkmark/checkmark.recipe'
import { codeRecipe } from '../components/code/code.recipe'
import { commandRecipe } from '../components/command/command.recipe'
import { containerRecipe } from '../components/container/container.recipe'
import { headingRecipe } from '../components/heading/heading.recipe'
import { iconBadgeRecipe } from '../components/icon-badge/icon-badge.recipe'
import { iconRecipe } from '../components/icon/icon.recipe'
import { inputAddonRecipe } from '../components/input/input-addon.recipe'
import { inputRecipe } from '../components/input/input.recipe'
import { kbdRecipe } from '../components/kbd/kbd.recipe'
import { linkRecipe } from '../components/link/link.recipe'
import { markRecipe } from '../components/mark/mark.recipe'
import { radiomarkRecipe } from '../components/radio/radiomark.recipe'
import { separatorRecipe } from '../components/separator/separator.recipe'
import { skeletonRecipe } from '../components/skeleton/skeleton.recipe'
import { skipNavLinkRecipe } from '../components/skip-nav-link/skip-nav-link.recipe'
import { spinnerRecipe } from '../components/spinner/spinner.recipe'
import { textareaRecipe } from '../components/textarea/textarea.recipe'

export const recipes = {
  // Chakra UI Recipes
  badge: badgeRecipe,
  button: buttonRecipe,
  code: codeRecipe,
  container: containerRecipe,
  heading: headingRecipe,
  input: inputRecipe,
  inputAddon: inputAddonRecipe,
  kbd: kbdRecipe,
  link: linkRecipe,
  mark: markRecipe,
  separator: separatorRecipe,
  skeleton: skeletonRecipe,
  skipNavLink: skipNavLinkRecipe,
  spinner: spinnerRecipe,
  textarea: textareaRecipe,
  icon: iconRecipe,
  checkmark: checkmarkRecipe,
  radiomark: radiomarkRecipe,
  // Saas UI
  suiCommand: commandRecipe,
  suiIconBadge: iconBadgeRecipe,
}
