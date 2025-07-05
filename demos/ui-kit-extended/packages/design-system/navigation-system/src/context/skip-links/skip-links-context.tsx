import { createContext, useContext, useEffect } from 'react';

import noop from "#design-system/ds-lib/utils"

import { type SkipLinkData } from './types';

export type SkipLinksContextData = {
	registerSkipLink: (skipLinkData: SkipLinkData) => void;
	unregisterSkipLink: (id: string | undefined) => void;
};

export const SkipLinksContext = createContext<SkipLinksContextData>({
  registerSkipLink: noop,
  unregisterSkipLink: noop,
})

const useSkipLinks = () => useContext(SkipLinksContext);

export const useSkipLinkInternal = ({
	id,
	label,
	listIndex,
	onBeforeNavigate,
	isHidden,
}: SkipLinkData) => {
	const { registerSkipLink, unregisterSkipLink } = useSkipLinks();
	useEffect(() => {
		if (isHidden) {
			return;
		}

		registerSkipLink({ id, label, listIndex, onBeforeNavigate, isHidden });
		return () => {
			unregisterSkipLink(id);
		};
	}, [id, isHidden, label, listIndex, onBeforeNavigate, registerSkipLink, unregisterSkipLink]);
};

export const useSkipLink = (
	id: string,
	label: string,
	listIndex?: number,
) => {
	useSkipLinkInternal({ id, label, listIndex });
};
