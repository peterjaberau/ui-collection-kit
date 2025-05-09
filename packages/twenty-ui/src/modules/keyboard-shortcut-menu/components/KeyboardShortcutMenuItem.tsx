import {
  StyledItem,
  StyledShortcutKey,
  StyledShortcutKeyContainer,
} from '@twenty-modules/keyboard-shortcut-menu/components/KeyboardShortcutMenuStyles';
import { Shortcut } from '@twenty-modules/keyboard-shortcut-menu/types/Shortcut';

type KeyboardMenuItemProps = {
  shortcut: Shortcut;
};

export const KeyboardMenuItem = ({ shortcut }: KeyboardMenuItemProps) => {
  return (
    <StyledItem>
      {shortcut.label}
      {shortcut.secondHotKey ? (
        shortcut.areSimultaneous ? (
          <StyledShortcutKeyContainer>
            <StyledShortcutKey>{shortcut.firstHotKey}</StyledShortcutKey>
            <StyledShortcutKey>{shortcut.secondHotKey}</StyledShortcutKey>
          </StyledShortcutKeyContainer>
        ) : (
          <StyledShortcutKeyContainer>
            <StyledShortcutKey>{shortcut.firstHotKey}</StyledShortcutKey>
            then
            <StyledShortcutKey>{shortcut.secondHotKey}</StyledShortcutKey>
          </StyledShortcutKeyContainer>
        )
      ) : (
        <StyledShortcutKey>{shortcut.firstHotKey}</StyledShortcutKey>
      )}
    </StyledItem>
  );
};
