// import { Button, Card, Tooltip } from 'antd';
import { Button, Card, Text } from "@chakra-ui/react"
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
// import { ReactComponent as SidebarCollapsedIcon } from '../../../assets/svg/ic-sidebar-collapsed.svg';
import './resizable-panels.css';
import { ResizablePanelsProps } from './ResizablePanels.interface';

const ResizablePanels: React.FC<ResizablePanelsProps> = ({
  className,
  orientation = 'vertical',
  firstPanel,
  secondPanel,
  pageTitle,
  hideSecondPanel = false,
}) => {
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(false);
  const isFirstPanelWrapInCard = useMemo(() => {
    return firstPanel.wrapInCard ?? true;
  }, [firstPanel.wrapInCard]);

  const isSecondPanelWrapInCard = useMemo(() => {
    return secondPanel.wrapInCard ?? true;
  }, [secondPanel.wrapInCard]);

  const handleCollapse = () => {
    setIsRightPanelCollapsed((prev) => !prev);
  };

  return (
    <>
      {pageTitle && <Text textStyle='lg'>{pageTitle}</Text>}
      <ReflexContainer
        className={classNames(className, 'resizable-panels-layout bg-grey')}
        orientation={orientation}>
        <ReflexElement
          className={classNames(firstPanel.className, 'resizable-first-panel', {
            'full-width': hideSecondPanel || isRightPanelCollapsed,
            'h-full overflow-y-auto': firstPanel.allowScroll,
          })}
          flex={firstPanel.flex}
          minSize={firstPanel.minWidth}
          onStopResize={(args) => {
            firstPanel.onStopResize?.(args.component.props.flex);
          }}>
          {isFirstPanelWrapInCard ? (
              <Card.Root
                className={classNames(firstPanel.cardClassName, {
                  'h-full overflow-y-auto': !firstPanel.allowScroll,
                })}
              >
                <Card.Body>{firstPanel.children}</Card.Body>
              </Card.Root>
          ) : (
            firstPanel.children
          )}
        </ReflexElement>

        <ReflexSplitter
          className={classNames(
            'splitter right-panel-splitter',
            { hidden: hideSecondPanel },
            { collapsed: isRightPanelCollapsed }
          )}>
          {isRightPanelCollapsed && (
            <Card.Root className='reflex-card card-padding-0'>
              <Button size={'2xs'} onClick={handleCollapse}>
                Collapse
              </Button>
            </Card.Root>
          )}
          {!isRightPanelCollapsed && (
            <div
              className={classNames({
                'panel-grabber-vertical': orientation === 'vertical',
                'panel-grabber-horizontal': orientation === 'horizontal',
              })}>
              <div
                className={classNames('handle-icon', {
                  'handle-icon-vertical ': orientation === 'vertical',
                  'handle-icon-horizontal': orientation === 'horizontal',
                })}
              />
            </div>
          )}
        </ReflexSplitter>

        <ReflexElement
          className={classNames(
            secondPanel.className,
            'resizable-second-panel',
            {
              hidden: hideSecondPanel,
              'right-panel-collapsed': isRightPanelCollapsed,
            }
          )}
          data-testid={secondPanel.className}
          flex={isRightPanelCollapsed ? 0 : secondPanel.flex}
          minSize={isRightPanelCollapsed ? 0 : secondPanel.minWidth}
          onStopResize={(args) => {
            secondPanel.onStopResize?.(args.component.props.flex);
          }}>
          {!hideSecondPanel &&
            (isSecondPanelWrapInCard ? (
              <Card.Root className="reflex-card"><Card.Body>{secondPanel.children}</Card.Body></Card.Root>
            ) : (
              secondPanel.children
            ))}
        </ReflexElement>
      </ReflexContainer>
    </>
  );
};

export default ResizablePanels;
