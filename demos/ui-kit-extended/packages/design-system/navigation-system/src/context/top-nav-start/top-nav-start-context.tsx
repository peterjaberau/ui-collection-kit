import { createContext } from 'react';

import __noop from '#design-system/ds-lib/utils';

export const TopNavStartElement = createContext<HTMLDivElement | null>(null);

export const TopNavStartAttachRef = createContext<(newVal: HTMLDivElement | null) => void>(__noop);
