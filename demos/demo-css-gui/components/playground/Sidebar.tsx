import { HTMLAttributes } from 'react';
import { Editor } from '@ui-collection-kit/css-gui';
import { ElementEditor } from './ElementEditor';
import { Element } from './types';
import { chakra } from '@chakra-ui/react';
type SidebarProps = {
  styles: any;
  onChange: (newStyles: any) => void;
  element: Element;
  onElementChange: (newElement: any) => void;
};
export const Sidebar = ({
  styles,
  onChange,
  element,
  onElementChange,
}: SidebarProps) => {
  return (
    <chakra.section
      css={{
        minHeight: '100vh',
        height: '100%',
        borderLeftWidth: '1px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'border',
        pt: [2, 3],
        pb: 4,
        overflowY: 'auto',
        top: 0,
        right: 0,
        bottom: 0,
        order: [2, 1, 1],
      }}
    >
      <chakra.div css={{ px: 2, pb: 1 }}>
        <ElementEditor element={element} onChange={onElementChange} />
      </chakra.div>
      <chakra.div
        css={{
          mt: 3,
          px: 2,
          borderTopStyle: 'solid',
          borderTopColor: 'border',
          borderTopWidth: 'thin',
        }}
      >
        <SectionTitle>Styling</SectionTitle>
        <Editor styles={styles} onChange={onChange} showAddProperties />
      </chakra.div>
    </chakra.section>
  );
};

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <chakra.h3
      css={{
        lineHeight: '1.25',
        fontWeight: 500,
        fontSize: 2,
        pt: [2, 3],
        pb: 1,
        m: 0,
      }}
      {...props}
    />
  );
};
