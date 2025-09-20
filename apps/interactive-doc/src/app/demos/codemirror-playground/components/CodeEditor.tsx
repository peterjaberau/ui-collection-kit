"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { PlaygroundConfig } from "./Playground"; // We'll create this type in the parent
import { Box } from "@chakra-ui/react";
interface CodeEditorProps {
  code: string;
  config?: PlaygroundConfig;
  setCode: (newCode: string) => void;
}

export function CodeEditor({ code, config, setCode }: CodeEditorProps) {
  return (
    <Box h={"full"} w={"full"} overflow={"auto"}>
      <CodeMirror
        value={code}
        onChange={setCode}
        height="100%"
        theme={config?.theme === "dark" ? githubDark : githubLight}
        extensions={[javascript({ jsx: true })]}
        basicSetup={{
          lineNumbers: config?.lineNumbers,
          foldGutter: config?.lineNumbers,
          autocompletion: true,
          indentOnInput: true,
        }}
        style={{ fontSize: "16px", height: "100%", maxHeight: "800px" }}
      />
    </Box>
  )
}
