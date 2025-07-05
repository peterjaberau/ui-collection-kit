import { chakra, Text, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"

import { forwardRef, type ReactNode, useRef } from 'react';

import { List } from '../../../components/list';
import { expandableMenuItemIndentation } from '../constants';

import {
	AreAllAncestorsExpandedContext,
	LevelContext,
	useAreAllAncestorsExpanded,
	useIsExpanded,
	useLevel,
} from './expandable-menu-item-context';

const stylesRecipe = defineSlotRecipe({
	slots: ['content', 'collapsedContent'],
	base: {
    content: {
      paddingInlineStart: expandableMenuItemIndentation,
    },
    collapsedContent: {
      display: 'none',
    },
  }
});

export type ExpandableMenuItemContentProps = {
	children: ReactNode;
};

export const ExpandableMenuItemContent = forwardRef<HTMLDivElement, ExpandableMenuItemContentProps>(
	({ children }, forwardedRef) => {

    const recipe = useSlotRecipe({ recipe: stylesRecipe })
    const styles = recipe()


    const isExpanded = useIsExpanded();
		const level = useLevel();
		const hasExpanded = useRef(false);
		const areAllAncestorsExpanded = useAreAllAncestorsExpanded();

		if (!isExpanded && !hasExpanded.current) {
			return null;
		}

		hasExpanded.current = true;

		return (
			<LevelContext.Provider value={level + 1}>
				<AreAllAncestorsExpandedContext.Provider
					value={
						areAllAncestorsExpanded && isExpanded
					}
				>
					<List
						ref={forwardedRef}
            css={{
              ...styles.content,
            ...(!isExpanded && styles.collapsedContent)
            }}
					>
						{children}
					</List>
				</AreAllAncestorsExpandedContext.Provider>
			</LevelContext.Provider>
		);
	},
);
