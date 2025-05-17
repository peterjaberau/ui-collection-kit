// import { Button, Card, Tooltip, Typography } from 'antd';
import classNames from 'classnames';

import { Button, IconButton, Card, Tooltip, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
// import { ReactComponent as SidebarCollapsedIcon } from '../../../assets/svg/ic-sidebar-collapsed.svg';
// import DocumentTitle from '../DocumentTitle/DocumentTitle';
import './resizable-panels.css';
import { ResizablePanelsLeftProps } from './ResizablePanels.interface';

const ResizableLeftPanels: React.FC<ResizablePanelsLeftProps> = ({
  className,
  orientation = 'vertical',
  firstPanel,
  secondPanel,
  pageTitle,
  hideFirstPanel = false,
}) => {
  const [isLeftPanelCollapsed, setIsLeftPanelCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsLeftPanelCollapsed((prev) => !prev);
  };

  return (
    <>
      {pageTitle && <Text textStyle='lg'>{pageTitle}</Text>}
      <ReflexContainer
        className={classNames(className, 'resizable-panels-layout')}
        orientation={orientation}
      >
        <ReflexElement
          className={classNames(firstPanel.className, 'resizable-left-panel', {
            hidden: hideFirstPanel,
            'left-panel-collapsed': isLeftPanelCollapsed,
          })}
          data-testid={firstPanel.className}
          flex={isLeftPanelCollapsed ? 0 : firstPanel.flex}
          minSize={isLeftPanelCollapsed ? 0 : firstPanel.minWidth}
          onStopResize={(args) => {
            firstPanel.onStopResize?.(args.component.props.flex);
          }}
        >
          {!hideFirstPanel && (
            <Card.Root>
              <Card.Header>
                <Card.Title>
                  <>{firstPanel.title && firstPanel.title}</>
                </Card.Title>
              </Card.Header>
              <Card.Body>{firstPanel.children}</Card.Body>
            </Card.Root>
          )}
        </ReflexElement>

        <ReflexSplitter
          className={classNames('splitter left-panel-splitter', {
            hidden: hideFirstPanel,
          })}
        >
          {isLeftPanelCollapsed && (
            <>
              <Card.Root className='reflex-card card-padding-0'>
                <Button size={'2xs'} onClick={handleCollapse}>
                  Collapse
                </Button>
              </Card.Root>
            </>
          )}
          {!isLeftPanelCollapsed && (
            <div
              className={classNames({
                'panel-grabber-vertical': orientation === 'vertical',
                'panel-grabber-horizontal': orientation === 'horizontal',
              })}
            >
              <div
                className={classNames('handle-icon', {
                  'handle-icon-vertical': orientation === 'vertical',
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
              'full-width': hideFirstPanel || isLeftPanelCollapsed,
            },
          )}
          flex={secondPanel.flex}
          minSize={secondPanel.minWidth}
          onStopResize={(args) => {
            secondPanel.onStopResize?.(args.component.props.flex);
          }}
        >
          {secondPanel.children}
        </ReflexElement>
      </ReflexContainer>
    </>
  );
};

export default ResizableLeftPanels;
