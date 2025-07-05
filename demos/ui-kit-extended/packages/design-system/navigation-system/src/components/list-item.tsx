import { forwardRef, type ReactNode, type Ref } from 'react';
import { chakra } from "@chakra-ui/react"


type ListItemProps = {
	children: ReactNode;
	css?: any;
};

function _ListItem({ children, css }: ListItemProps, ref: Ref<HTMLDivElement>) {
	return (
		<chakra.div role="listitem" ref={ref} css={css}>
			{children}
		</chakra.div>
	);
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(_ListItem);
