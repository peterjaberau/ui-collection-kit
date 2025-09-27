"use client"
import * as React from "react"
import { StoryBook, useControls, useCreateStore } from "@lobehub/ui/storybook"
import { Container, SimpleGrid, GridItem } from "@chakra-ui/react"
import { CodeMirrorDemo } from "./code-mirror-demo"
import { useDataScope } from "./data/DataProvider"
import { useCallback } from "react"

export default function Page() {
  const globalData = useDataScope("editor", "withTempState")
  const [data, setData] = React.useState(globalData.button1.text)

  const handleChange = useCallback(
    (e: any) => {
      // console.log('----Storybook', e);
      setData(e.doc.toString())
    },
    [globalData],
  )

  const codeMirrorStore = useCreateStore()

  const {
    value,
    demoId,
    disabled,
    bordered,
    codeType,
    language,
    cardTitle,
    cardContent,
    placement,
    styleName,
    label,
    enableClickCompName,
    enableExposingDataAutoCompletion,
    placeholder
  } = useControls(
    {
      value: "",
      demoId: {
        options: [
          "pageStateDemo",
          "gloablStateDemo",
          "calcContext",
          "compStateDemo",
          "tmpCalcContext",
          "compPropsDemo",
          "compExposingDemo",
        ],
        value: "pageStateDemo",
      },
      disabled: false,
      bordered: true,
      codeType: {
        options: ["JSON", "Function", "PureJSON", "TEXT"],
        value: "JSON",
      },
      language: {
        options: ["json", "javascript", "html", "css", "sql"],
        value: "json",
      },
      cardTitle: "",
      cardContent: "",
      placement: "bottom",
      styleName: "medium",
      label: "label for the draggable popup",
      enableClickCompName: true,
      enableExposingDataAutoCompletion: true,
      placeholder: 'static or {{dynamic expressions}}',
    },
    {
      store: codeMirrorStore,
    },
  )

  return (
    <>
      <Container>
        <StoryBook levaStore={codeMirrorStore} style={{ backgroundColor: "#fafafa", width: "100%" }}>
          <SimpleGrid columns={3}>
            <GridItem>
              the autocompletion is from: data in ./data/code-editor, based on the selected demoId from the story.
              however the data loading into the context to feed the globalData through useController, in useless as it
              is getting from a different file.
            </GridItem>
            <GridItem>
              {/*<CodeMirrorDemo*/}
              {/*  value={value}*/}
              {/*  demoId={demoId}*/}
              {/*  disabled={disabled}*/}
              {/*  bordered={bordered}*/}
              {/*  codeType={codeType}*/}
              {/*  language={language}*/}
              {/*  cardTitle={cardTitle}*/}
              {/*  cardContent={cardContent}*/}
              {/*  placement={placement}*/}
              {/*  styleName={styleName}*/}
              {/*  label={label}*/}
              {/*  enableClickCompName={enableClickCompName}*/}
              {/*  enableExposingDataAutoCompletion={enableExposingDataAutoCompletion}*/}
              {/*  placeholder={placeholder}*/}

              {/*  // onChange={handleChange}*/}
              {/*/>*/}
            </GridItem>
            <GridItem></GridItem>
          </SimpleGrid>
        </StoryBook>
      </Container>
    </>
  )
}

/*


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
 */
