'use client';
import { createContext, Suspense, useContext, useMemo } from 'react';
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
    demoId,
    disabled,
    enableClickCompName,
    codeType,
    codeText,
    onChange,
    enableExposingDataAutoCompletion = false,
    cardContent,
    cardTitle,
    bordered,
    label,
    placeholder,
    ...rest
  } = props;

  const ExposedContextState = useContext(ExposedContext);

  const exposedContextData = useMemo(() => {
    if (enableExposingDataAutoCompletion) {
      if (demoId === null) return null;
      console.log(data[demoId]);

      return {
        ...data[demoId],
        ...ExposedContextState,
      };
    }
  }, [ExposedContextState, enableExposingDataAutoCompletion, demoId]);

  function handleChange(state: any) {
    console.log('handling change----', {
      event: state,
      content: state.doc.toString(),
    });
    return state.doc.toString();
  }

  return (
    <CodeEditor
      {...rest}
      disabled={disabled}
      value={codeText}
      bordered={bordered || true}
      codeType={codeType || 'javascript'}
      cardContent={cardContent}
      cardTitle={cardTitle || 'string card title'}
      placement="bottom"
      styleName="medium"
      segments={[]}
      label={label || 'label for the draggable popup'}
      enableClickCompName={enableClickCompName}
      exposingData={exposedContextData}
      placeholder={placeholder || '{\n  rating : {$gte : 9}\n}'}
      onChange={handleChange}
    />
  );
};
