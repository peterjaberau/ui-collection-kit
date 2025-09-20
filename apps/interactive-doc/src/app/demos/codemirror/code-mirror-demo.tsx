'use client';
import { createContext, Suspense, useContext, useMemo, useState } from "react"
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { data } from './data/code-editor';
import { CodeEditor } from './components/codeEditor';

const ExposedContext = createContext(undefined as any);

const demoList = [
  'pageStateDemo',
  'gloablStateDemo',
  'calcContext',
  'compStateDemo',
  'tmpCalcContext',
  'compPropsDemo',
  'compExposingDemo',
];


export const CodeMirrorDemo = (props: any) => {
  const {
    value,
    demoId,
    disabled,
    bordered,
    codeType,
    language = "json",
    cardTitle,
    cardContent,
    placement,
    styleName,
    label,
    enableClickCompName,
    enableExposingDataAutoCompletion,
    placeholder,
    ...rest
  }: any = props;



  const exposedAutoCompletionData = useMemo(() => {
    return enableExposingDataAutoCompletion ? data[demoId] : {};

  }, [demoId, enableExposingDataAutoCompletion]);

  function handleChange(state: any) {
    // console.log('handling change----', {
    //   event: state,
    //   content: state.doc.toString(),
    // });
    return state.doc.toString();
  }

  return (
    <CodeEditor
      disabled={disabled}
      value={value}
      bordered={bordered || true}
      codeType={codeType || 'JSON'}
      language={language || 'json'}
      // cardTitle={cardTitle || 'untitled'}
      // cardContent={cardContent}
      // placement={placeholder}
      styleName={styleName}
      // segments={[]}
      // label={label}
      enableClickCompName={enableClickCompName}
      exposingData={exposedAutoCompletionData}
      // placeholder={placeholder || '{\n  rating : {$gte : 9}\n}'}
      onChange={handleChange}
    />
  );
};
/*
<InputBasicComp>
  setPropertyViewFn
    InputBasicComp

<TextInputBasicSection name="Basic">
  <Section>
  </Section>
</TextInputBasicSection>


 */



/*

evalAndReduce
function getValueActionEvaluationResult(comp, value) {
   const newComp = evalAndReduce(comp.reduce(comp.changeValueAction(value)));
   return newComp.getView();
}


===============================
BoolControl

let comp = new BoolControl({});
- getValueActionEvaluationResult(comp) ----> false
- getValueActionEvaluationResult(comp, "true") ----> true
- getValueActionEvaluationResult(comp, "false") ----> false
- getValueActionEvaluationResult(comp, '{{"true"}}') ----> true
- getValueActionEvaluationResult(comp, "{{1-1}}") ----> false
- getValueActionEvaluationResult(comp, "{{1+3-4}}") ----> false
- getValueActionEvaluationResult(comp, "{{undefined}}") ----> false
- getValueActionEvaluationResult(comp, "{{null}}") ----> false

===============================
CodeControl ---> NumberControl + StringControl
// this toggle and untoggle the codeEditor to change '1' to 1 or "'x'" to "x"

===============================
codeStateControl

let exposingNodes = { s1: "s1Value" };
let exposingNodesAdded = { s1: "s1Value", s2: "s2Value" };
let exposingNodesChanged = { s1: "s1Value" };

let comp = new StringStateControl({ value: "3{{s1}}" });

// trigger change when modify value
comp = evalAndReduce(comp.reduce(comp.changeChildAction("value", "newx")), exposingNodes);
- comp.getView().value ----> "newx"

// get stable value from multi eval
comp = evalAndReduce(comp, exposingNodesAdded);
- comp.getView().value ----> "newx"

// value changes when depends change
comp = evalAndReduce(comp, exposingNodesChanged);
- comp.getView().value ----> "3s1Value"

===============================
paramsStringControl

let content = "xx{{1+2+x}}sd{{-1}}";
let comp = new ParamsStringControl({ value: content });
comp = evalAndReduce(comp);

- comp.toJsonValue() ----> "xx{{1+2+x}}sd{{-1}}"
- _.mapValues(comp.getView(), (v) => v({ x: 4 })) ----> { "-1": -1, "1+2+x": 7 }

let content2 = "{{3+2}}";
comp = comp.reduce(comp.changeChildAction("text", "{{3+2}}"));
comp = evalAndReduce(comp);

- comp.toJsonValue() ----> "{{3+2}}"
- _.mapValues(comp.getView(), (v) => v()) ----> { "3+2": 5 }

===============================
executeCompAction

let comp = new ExecuteCompAction({value: { name: "progressCircle1", methodName: "setValue", params: ["20"]}});

comp = evalAndReduce(comp);
- comp.children.params.getView().forEach((p) => { p.children.compType.getView() }) ----> "string"
- comp.children.params.getView().forEach((p) => { p.children.comp.getView() }) ----> "20"

comp = new ExecuteCompAction({value: { name: "progressCircle1", methodName: "setValue", params: [{ comp: 20, name: "value", compType: "number" }]}});
comp = evalAndReduce(comp);
- comp.children.params.getView().forEach((p) => { p.children.compType.getView() }) ----> "number"
- comp.children.params.getView().forEach((p) => { p.children.comp.getView() }) ----> 20
- comp.children.params.getView().forEach((p) => { p.children.name.getView() }) ----> "value"

===============================




- evalAndReduce(comp, exposingNodes).getView().value ----> "3s1Value"
- evalAndReduce(comp.reduce(comp.changeChildAction("value", "newx")), exposingNodes).getView().value ----> "newx"
- evalAndReduce(comp, exposingNodesAdded).getView().value ----> "newx"
- evalAndReduce(comp, exposingNodesChanged).getView().value ----> "3s1Value"




const content = "xx{{1+2+x}}sd{{-1}}";
let comp = new ParamsStringControl({ value: content });
comp = evalAndReduce(comp);

- comp.toJsonValue() ----> "xx{{1+2+x}}sd{{-1}}"
- _.mapValues(comp.getView(), (v) => v({ x: 4 })) ----> { "-1": -1, "1+2+x": 7 }

===============================

const content2 = "{{3+2}}";
comp = comp.reduce(comp.changeChildAction("text", "{{3+2}}"));
comp = evalAndReduce(comp);

- comp.toJsonValue() ----> "{{3+2}}"
- _.mapValues(comp.getView(), (v) => v()) ----> { "3+2": 5 }

===============================




===============================

let comp = new (millisecondsControl({}))({});

- getValueActionEvaluationResult() ------> 0
- getValueActionEvaluationResult("5") ------> 5
- getValueActionEvaluationResult("5ms") ------> 5
- getValueActionEvaluationResult("5s") ------> 5000
- getValueActionEvaluationResult("0.5s") ------> 500
- getValueActionEvaluationResult("-1") ------> 0
- getValueActionEvaluationResult("{{-1}}") ------> 0


let comp = new (millisecondsControl({}))({});
- getValueActionEvaluationResult() ------> 0
- getValueActionEvaluationResult("5") ------> 5
- getValueActionEvaluationResult("5ms") ------> 5
- getValueActionEvaluationResult("5s") ------> 1000
- getValueActionEvaluationResult("-1") ------> 0
- getValueActionEvaluationResult("0.5s") ------> 500
- getValueActionEvaluationResult("2000") ------> 1000




comp.toJsonValue()




 <CodeEditor
        {...params}
        bordered
        disableCard
        value={codeText}
        exposingData={expsoingData}
        boostExposingData={compExposingData}
        onChange={(state) => onChange(state.doc.toString())}
        enableClickCompName={editorState.forceShowGrid}
      />
 */
