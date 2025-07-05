
import { forwardRef, type ReactNode } from 'react';
import { chakra, Text, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"

import useControlled from '#design-system/ds-lib/hooks/use-controlled';

import { MenuListItem } from '../menu-list-item';

import {
	IsExpandedContext,
	OnExpansionToggleContext,
	SetIsExpandedContext,
} from './expandable-menu-item-context';

export type ExpandableMenuItemProps = {
	isExpanded?: boolean;
	isDefaultExpanded?: boolean;
	onExpansionToggle?: (isExpanded: boolean) => void;
	children: ReactNode;
	dropIndicator?: ReactNode;
};

const relativeStyles = defineSlotRecipe({
  slots: ['root'],
  base: {
    root: {
      position: 'relative',
    },
  }
});

export const ExpandableMenuItem = forwardRef<HTMLDivElement, ExpandableMenuItemProps>(
	(
		{
			isExpanded: isExpandedControlled,
			isDefaultExpanded = false,
			onExpansionToggle,
			children,
			dropIndicator,
		},
		forwardedRef,
	) => {

    const recipe = useSlotRecipe({ recipe: relativeStyles })
    const styles = recipe()



    const [isExpanded, setIsExpanded] = useControlled(
			isExpandedControlled,
			() => isDefaultExpanded,
		);

		return (
			<IsExpandedContext.Provider value={isExpanded}>
				<SetIsExpandedContext.Provider value={setIsExpanded}>
					<OnExpansionToggleContext.Provider value={onExpansionToggle ?? null}>
						{/* Wrapping in a `li` to group all the composable elements together, as part of the disclosure pattern */}
						<MenuListItem ref={forwardedRef}>
							{/* Adding `position:relative` only when it's needed by the drop indicator */}
							<chakra.div css={{...(dropIndicator && styles.root)}}>
								{children}
								{dropIndicator}
							</chakra.div>
						</MenuListItem>
					</OnExpansionToggleContext.Provider>
				</SetIsExpandedContext.Provider>
			</IsExpandedContext.Provider>
		);
	},
);
