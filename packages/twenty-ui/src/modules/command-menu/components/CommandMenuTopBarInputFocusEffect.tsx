import { useRecoilValue } from 'recoil';

import { commandMenuPageState } from '@twenty-modules/command-menu/states/commandMenuPageState';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { useEffect } from 'react';

type CommandMenuTopBarInputFocusEffectProps = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export const CommandMenuTopBarInputFocusEffect = ({
  inputRef,
}: CommandMenuTopBarInputFocusEffectProps) => {
  const commandMenuPage = useRecoilValue(commandMenuPageState);

  useEffect(() => {
    if (
      commandMenuPage === CommandMenuPages.Root ||
      commandMenuPage === CommandMenuPages.SearchRecords
    ) {
      inputRef.current?.focus();
    }
  }, [commandMenuPage, inputRef]);

  return null;
};
