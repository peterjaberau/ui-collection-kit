
import React, { forwardRef, useCallback, useContext } from 'react';
import { chakra, Portal, useChakraContext, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"

import { Popover as Popup } from '@chakra-ui/react';

import { SetIsOpenContext } from './flyout-menu-item-context';

const flyoutMenuItemContentStyles = defineSlotRecipe({
  slots: ['root'],
	base: {
    root: {
      paddingBlockStart: 'spacing.1',
      paddingBlockEnd:'spacing.1',
      paddingInlineStart: 'spacing.1',
      paddingInlineEnd: 'spacing.1',
      '@media (min-width: 48rem)': {
        width: '400px',
      },
    },
  }
});

export type FlyoutMenuItemContentProps = {
	children: React.ReactNode;
	containerTestId?: string;
	onClose?: () => void;
	autoFocus?: boolean;
};

export const FlyoutMenuItemContent = forwardRef<HTMLDivElement, FlyoutMenuItemContentProps>(
	({ children, containerTestId, onClose, autoFocus }, forwardedRef) => {
    const recipe = useSlotRecipe({ recipe: flyoutMenuItemContentStyles })
    const styles = recipe()


    const setIsOpen = useContext(SetIsOpenContext);

		const handleClose = useCallback(() => {
			onClose?.();
			setIsOpen(false);
		}, [setIsOpen, onClose]);

    const content = <chakra.div ref={forwardedRef}>{children}</chakra.div>;


    return (
			<Popup.Content
				appearance="UNSAFE_modal-below-sm"
				onOpenChange={handleClose}
				placement="right-start"
				shouldFitViewport
				testId={containerTestId}
				css={styles.root}
				autoFocus={autoFocus}
				shouldDisableGpuAcceleration
			>
        <Popup.CloseTrigger />
				{content}
			</Popup.Content>
		);
	},
);
