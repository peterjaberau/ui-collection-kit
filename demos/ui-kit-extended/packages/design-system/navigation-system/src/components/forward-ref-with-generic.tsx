import { forwardRef } from 'react';


export const forwardRefWithGeneric = forwardRef as <ElementType, Props = {}>(
	render: (props: Props, ref: React.Ref<ElementType>) => React.ReactElement | null,
) => (props: Props & React.RefAttributes<ElementType>) => React.ReactElement | null;
