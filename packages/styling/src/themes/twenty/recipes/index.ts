import { badgeRecipe } from './badge.recipe'
import { buttonRecipe } from './button.recipe'
import { checkmarkRecipe } from './checkmark.recipe'
import { codeRecipe } from './code.recipe'
import { commandRecipe } from './command.recipe'
import { containerRecipe } from './container.recipe'
import { headingRecipe } from './heading.recipe'
import { iconBadgeRecipe } from './icon-badge.recipe'
import { iconRecipe } from './icon.recipe'
import { inputAddonRecipe } from './input-addon.recipe'
import { inputRecipe } from './input.recipe'
import { kbdRecipe } from './kbd.recipe'
import { linkRecipe } from './link.recipe'
import { markRecipe } from './mark.recipe'
import { radiomarkRecipe } from './radiomark.recipe'
import { separatorRecipe } from './separator.recipe'
import { skeletonRecipe } from './skeleton.recipe'
import { skipNavLinkRecipe } from './skip-nav-link.recipe'
import { spinnerRecipe } from './spinner.recipe'
import { textareaRecipe } from './textarea.recipe'
import { accordionSlotRecipe } from './accordion.recipe'
import { actionBarSlotRecipe } from './action-bar.recipe'
import { alertSlotRecipe } from './alert.recipe'
import { appShellSlotRecipe } from './app-shell.recipe'
import { avatarSlotRecipe } from './avatar.recipe'
import { blockquoteSlotRecipe } from './blockquote.recipe'
import { breadcrumbSlotRecipe } from './breadcrumb.recipe'
import { cardSlotRecipe } from './card.recipe'
import { checkboxCardSlotRecipe } from './checkbox-card.recipe'
import { checkboxSlotRecipe } from './checkbox.recipe'
import { collapsibleSlotRecipe } from './collapsible.recipe'
import { dataListSlotRecipe } from './data-list.recipe'
import { dialogSlotRecipe } from './dialog.recipe'
import { drawerSlotRecipe } from './drawer.recipe'
import { editableSlotRecipe } from './editable.recipe'
import { emptyStateSlotRecipe } from './empty-state.recipe'
import { fieldSlotRecipe } from './field.recipe'
import { fileUploadSlotRecipe } from './file-upload.recipe'
import { gridListSlotRecipe } from './grid-list.recipe'
import { hoverCardSlotRecipe } from './hover-card.recipe'
import { listSlotRecipe } from './list.recipe'
import { loadingOverlaySlotRecipe } from './loading-overlay.recipe'
import { menuSlotRecipe } from './menu.recipe'
import { nativeSelectSlotRecipe } from './native-select.recipe'
import { navbarSlotRecipe } from './navbar.recipe'
import { numberInputSlotRecipe } from './number-input.recipe'
import { pageSlotRecipe } from './page.recipe'
import { personaSlotRecipe } from './persona.recipe'
import { pinInputSlotRecipe } from './pin-input.recipe'
import { popoverSlotRecipe } from './popover.recipe'
import { progressCircleSlotRecipe } from './progress-circle.recipe'
import { progressSlotRecipe } from './progress.recipe'
import { radioCardSlotRecipe } from './radio-card.recipe'
import { radioGroupSlotRecipe } from './radio-group.recipe'
import { ratingGroupSlotRecipe } from './rating-group.recipe'
import { sectionSlotRecipe } from './section.recipe'
import { segmentGroupSlotRecipe } from './segment-group.recipe'
import { selectSlotRecipe } from './select.recipe'
import { sidebarNavItemSlotRecipe } from './sidebar-nav-item.recipe'
import { sidebarSlotRecipe } from './sidebar.recipe'
import { sliderSlotRecipe } from './slider.recipe'
import { statSlotRecipe } from './stat.recipe'
import { statusSlotRecipe } from './status.recipe'
import { stepsSlotRecipe } from './steps.recipe'
import { switchSlotRecipe } from './switch.recipe'
import { tableSlotRecipe } from './table.recipe'
import { tabsSlotRecipe } from './tabs.recipe'
import { tagSlotRecipe } from './tag.recipe'
import { timelineSlotRecipe } from './timeline.recipe'
import { toastSlotRecipe } from './toast.recipe'
import { tooltipSlotRecipe } from './tooltip.recipe'

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

export const slotRecipes = {
  // Chakra UI Recipes
  accordion: accordionSlotRecipe,
  actionBar: actionBarSlotRecipe,
  alert: alertSlotRecipe,
  avatar: avatarSlotRecipe,
  blockquote: blockquoteSlotRecipe,
  breadcrumb: breadcrumbSlotRecipe,
  card: cardSlotRecipe,
  checkbox: checkboxSlotRecipe,
  checkboxCard: checkboxCardSlotRecipe,
  collapsible: collapsibleSlotRecipe,
  dataList: dataListSlotRecipe,
  dialog: dialogSlotRecipe,
  drawer: drawerSlotRecipe,
  editable: editableSlotRecipe,
  emptyState: emptyStateSlotRecipe,
  field: fieldSlotRecipe,
  fileUpload: fileUploadSlotRecipe,
  hoverCard: hoverCardSlotRecipe,
  list: listSlotRecipe,
  menu: menuSlotRecipe,
  nativeSelect: nativeSelectSlotRecipe,
  numberInput: numberInputSlotRecipe,
  pinInput: pinInputSlotRecipe,
  popover: popoverSlotRecipe,
  progress: progressSlotRecipe,
  progressCircle: progressCircleSlotRecipe,
  radioCard: radioCardSlotRecipe,
  radioGroup: radioGroupSlotRecipe,
  ratingGroup: ratingGroupSlotRecipe,
  segmentGroup: segmentGroupSlotRecipe,
  select: selectSlotRecipe,
  slider: sliderSlotRecipe,
  stat: statSlotRecipe,
  steps: stepsSlotRecipe,
  switch: switchSlotRecipe,
  table: tableSlotRecipe,
  tabs: tabsSlotRecipe,
  tag: tagSlotRecipe,
  toast: toastSlotRecipe,
  tooltip: tooltipSlotRecipe,
  status: statusSlotRecipe,
  timeline: timelineSlotRecipe,
  // Saas UI Recipes
  suiAppShell: appShellSlotRecipe,
  suiLoadingOverlay: loadingOverlaySlotRecipe,
  suiPersona: personaSlotRecipe,
  suiGridList: gridListSlotRecipe,
  suiNavbar: navbarSlotRecipe,
  suiSidebar: sidebarSlotRecipe,
  suiSidebarNavItem: sidebarNavItemSlotRecipe,
  suiPage: pageSlotRecipe,
  suiSection: sectionSlotRecipe,
}
