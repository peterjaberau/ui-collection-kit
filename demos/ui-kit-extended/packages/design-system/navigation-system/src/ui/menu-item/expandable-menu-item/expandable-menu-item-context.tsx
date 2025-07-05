import { createContext, useContext } from 'react';

import invariant from 'ts-tiny-invariant';

import { ExpandableMenuItemLevelContext } from './expandable-menu-item-level-context';

type onExpansionToggle = (isExpanded: boolean) => void;

export const AreAllAncestorsExpandedContext = createContext<boolean | null>(null);

export const IsExpandedContext = createContext<boolean | null>(null);

export const SetIsExpandedContext = createContext<((value: boolean) => void) | null>(null);

export const OnExpansionToggleContext = createContext<onExpansionToggle | null>(null);

export const LevelContext = ExpandableMenuItemLevelContext;

export const useIsExpanded = (): boolean => {
	const context: any = useContext(IsExpandedContext);
	invariant(context !== null, 'useIsExpanded must be used within an ExpandableMenuItem');
	return context;
};

export const useSetIsExpanded = (): ((value: boolean) => void) => {
	const context: any = useContext(SetIsExpandedContext);
	invariant(context !== null, 'useSetIsExpanded must be used within an ExpandableMenuItem');
	return context;
};

export const useOnExpansionToggle = (): onExpansionToggle | null =>
	useContext(OnExpansionToggleContext);

export const useLevel = (): number => useContext(LevelContext);

export const useAreAllAncestorsExpanded = (): boolean =>
	useContext(AreAllAncestorsExpandedContext) ?? true;
