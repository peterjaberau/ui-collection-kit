"use client"
import * as React from 'react';
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { Container, SimpleGrid, GridItem } from "@chakra-ui/react"
import { CodeMirrorDemo } from "./code-mirror-demo"
import { useDataScope } from './data/DataProvider';
import { useCallback } from "react"


export default function Page() {

  const globalData = useDataScope('editor', 'withTempState');
  const [data, setData] = React.useState(globalData.button1.text);

  const handleChange = useCallback(
    (e: any) => {
      // console.log('----Storybook', e);
      setData(e.doc.toString());
    },
    [globalData],
  );

  const store = useCreateStore();
  const {
    panelPlaceholder,
    panelLabel,
    cardTitle,
    cardContent,
    text,
    color,
    fontSize,
    fontWeight,
    upperCase,
    bordered,
    enableClickCompName,
    disableCard,
    enableExposingDataAutoCompletion,
    contentKey,
    demoId,
    codeText,
  } = useControls(
    {
      color: '#ff005b',
      fontSize: {
        max: 100,
        min: 4,
        step: 2,
        value: 14,
      },
      fontWeight: {
        options: ['normal', 'bold'],
        value: 'normal',
      },
      text: 'StoryBook',
      upperCase: false,
      bordered: true,
      enableClickCompName: true,
      disableCard: false,
      enableExposingDataAutoCompletion: true,
      codeText: '',
      cardTitle: '',
      contentKey: {
        options: [
          'withPageState',
          'withTempState',
          'withLogicState',
          'withGlobalState',
          'autoCompletionScenario',
          'stringSnippetsScenario',
        ],
        value: 'withTempState',
      },
      demoId: {
        options: [
          'pageStateDemo',
          'gloablStateDemo',
          'calcContext',
          'compStateDemo',
          'tmpCalcContext',
          'compPropsDemo',
          'compExposingDemo',
        ],
        value: 'pageStateDemo',
      },
      cardContent: '',
      panelPlaceholder: 'static or {{dynamic expressions}}',
      panelLabel: 'draggable panel label',
    },
    { store },
  );


  return (
    <>

      <Container>
        <StoryBook levaStore={store} style={{ backgroundColor: '#fafafa', width: '100%' }}>
          <SimpleGrid columns={3}>
            <GridItem>
              the autocompletion is from: data in ./data/code-editor, based on the selected demoId from the story.

              however the data loading into the context to feed the globalData through useController, in useless as it is getting from a different file.

            </GridItem>
            <GridItem>

              <CodeMirrorDemo
                cardContent={cardContent}
                placeholder={panelPlaceholder}
                label={panelLabel}
                cardTitle={cardTitle}
                demoId={demoId !== null ? demoId : null}
                bordered={bordered}
                enableClickCompName={enableClickCompName}
                enableExposingDataAutoCompletion={enableExposingDataAutoCompletion}
                codeText={codeText}
              />
            </GridItem>
            <GridItem></GridItem>



          </SimpleGrid>

        </StoryBook>

      </Container>

    </>
  )
}
