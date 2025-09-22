"use client";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { json } from '@codemirror/lang-json'
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { Box } from "@chakra-ui/react";

interface CodeEditorProps {
  id: string;
  code: string;
  setCode: (newCode: string) => void;
  // value: string;
  // onChange?: (value: string) => void;
  [key: string]: any
}


const WidgetCodeMirrorApp = (props: CodeEditorProps | any) => {

  const {
    code,
    id,
    setCode = () => {},
    ...rest
  } = props

  return (
    <Box h={"full"} w={"full"} overflow={"auto"} {...rest}>
      <CodeMirror
        id={id}
        value={JSON.stringify(code, null, 2)}
        onChange={setCode}
        height="100%"
        theme={githubLight}
        extensions={[javascript({ jsx: true }), json()]}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          autocompletion: true,
          indentOnInput: true,
        }}
        style={{ height: "100%" }}
      />
    </Box>
  )
}

export default WidgetCodeMirrorApp
