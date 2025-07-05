import React, { useState } from 'react';

import { TopNavStartAttachRef, TopNavStartElement } from './top-nav-start-context';

export const TopNavStartProvider = ({ children }: { children: React.ReactNode }) => {
	const [element, setElement] = useState<HTMLDivElement | null>(null);

	return (
		<TopNavStartElement.Provider value={element}>
			<TopNavStartAttachRef.Provider value={setElement}>{children}</TopNavStartAttachRef.Provider>
		</TopNavStartElement.Provider>
	);
};
