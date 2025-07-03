'use client'
import { type ReactNode } from 'react';
import { chakra } from '@chakra-ui/react';
import { token } from '@atlaskit/tokens';

// Pushing our example off the corner of the screen
const OutersStyles = chakra('div',{
  base: {
		paddingTop: token('space.200'),
		paddingRight: token('space.200'),
		paddingBottom: token('space.200'),
		paddingLeft: token('space.200'),
	},
});

const ContainerStyles = chakra('div', {
  base: {
    width: '320px', // default width of the sidebar
    backgroundColor: token('elevation.surface'),
    borderColor: token('color.border'),
    borderWidth: token('border.width'),
    borderRadius: token('border.radius'),
    borderStyle: 'solid',
  },
})



export function SidebarExampleContainer({ children }: { children: ReactNode }) {
	return (
		<OutersStyles>
			<ContainerStyles>{children}</ContainerStyles>
		</OutersStyles>
	);
}
