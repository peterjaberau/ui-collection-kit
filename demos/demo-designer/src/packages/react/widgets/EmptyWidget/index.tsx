import React from 'react';
import { useTree, usePrefix } from '../../hooks';
import { observer } from '@formily/reactive-react';
import { IconWidget } from '../IconWidget';
import { chakra } from '@chakra-ui/react';

export interface IEmptyWidgetProps {
  dragTipsDirection?: 'left' | 'right';
}

export const EmptyWidget: React.FC<IEmptyWidgetProps> | any = observer((props: any) => {
  const tree = useTree();
  const prefix = usePrefix('empty');
  const renderEmpty = () => {
    return (
      <chakra.div css={{ display: 'flex', flexDirection: 'column' }}>
        <chakra.div className='animations'>
          <IconWidget
            infer={
              props.dragTipsDirection === 'left'
                ? 'DragLeftSourceAnimation'
                : 'DragRightSourceAnimation'
            }
            size={240}
          />
          <IconWidget infer='BatchDragAnimation' size={240} />
        </chakra.div>
        <chakra.div className='hotkeys-list'>
          <chakra.div>
            Selection <IconWidget infer='Command' /> + Click /{' '}
            <IconWidget infer='Shift' /> + Click /{' '}
            <IconWidget infer='Command' /> + A
          </chakra.div>
          <chakra.div>
            Copy <IconWidget infer='Command' /> + C / Paste{' '}
            <IconWidget infer='Command' /> + V
          </chakra.div>
          <chakra.div>
            Delete <IconWidget infer='Delete' />
          </chakra.div>
        </chakra.div>
      </chakra.div>
    );
  };
  if (!tree?.children?.length) {
    return (
      <chakra.div className={prefix}>
        {props.children ? props.children : renderEmpty()}
      </chakra.div>
    );
  }
  return null;
});

EmptyWidget.defaultProps = {
  dragTipsDirection: 'left',
};
