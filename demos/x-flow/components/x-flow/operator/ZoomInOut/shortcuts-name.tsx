'use client';
import { memo } from 'react';
import { getKeyboardKeyNameBySystem } from '../../utils';
import cn from 'classnames';

type ShortcutsNameProps = {
  keys: string[];
  className?: string;
};
const ShortcutsName = ({ keys, className }: ShortcutsNameProps) => {
  return (
    <div className={cn('flex h-4 items-center gap-0.5 text-xs text-gray-400', className)}>
      {keys.map((key) => (
        <div key={key} className="capitalize">
          {getKeyboardKeyNameBySystem(key)}
        </div>
      ))}
    </div>
  );
};

export default memo(ShortcutsName);
