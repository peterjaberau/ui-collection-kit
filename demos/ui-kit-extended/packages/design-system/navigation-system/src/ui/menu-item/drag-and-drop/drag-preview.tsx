import { chakra, Text, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"

import { type ReactNode } from 'react';

import { ExpandableMenuItemLevelContext } from '../expandable-menu-item/expandable-menu-item-level-context';
import { MenuItemBase } from '../menu-item';
import { COLLAPSE_ELEM_BEFORE } from '../menu-item-signals';

function isSafari(): boolean {
	if (process.env.NODE_ENV === 'test') {
		return false;
	}

	if (typeof window === 'undefined') {
		return false;
	}

	const { userAgent } = navigator;
	return userAgent.includes('AppleWebKit') && !userAgent.includes('Chrome');
}

const dragPreviewStyles = defineSlotRecipe({
  slots: ['root', 'safariFix'],
  base: {
    root: {
      borderWidth: 'medium',
      borderColor: 'border',
      borderStyle: 'solid',
      backgroundColor: 'bg.subtle',
      borderRadius: 'md',

      paddingInlineEnd: '0.5',
      maxWidth: 260,
    },

    safariFix: {
      minWidth: 200,
    },
  }

});


export function DragPreview({
	elemBefore,
	children,
}: {
	elemBefore?: ReactNode;
	children: ReactNode;
}) {
  const recipe = useSlotRecipe({ recipe: dragPreviewStyles })
  const styles = recipe()


  return (
		<ExpandableMenuItemLevelContext.Provider value={0}>
			<chakra.div css={{
       ...styles.root,
        ...(isSafari() && styles.safariFix)
      }}
      >
				<MenuItemBase elemBefore={elemBefore ?? COLLAPSE_ELEM_BEFORE}>{children}</MenuItemBase>
			</chakra.div>
		</ExpandableMenuItemLevelContext.Provider>
	);
}
