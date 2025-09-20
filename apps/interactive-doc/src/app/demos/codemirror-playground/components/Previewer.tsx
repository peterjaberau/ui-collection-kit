"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { PlaygroundConfig } from "./Playground"; // We'll create this type in the parent
import { Box } from "@chakra-ui/react";

interface PreviewerProps {
  code: string;
  config?: PlaygroundConfig;
}

export function Previewer({ code, config }: PreviewerProps) {
  return (
    <Box h={"full"} w={"full"} overflow={"auto"}>
      <CodeMirror
        value={code}
        height="100%"
        readOnly={true}
        theme={config?.theme === 'dark' ? githubDark : githubLight}
        extensions={[javascript({ jsx: true })]}
        basicSetup={{
          lineNumbers: config?.lineNumbers,
          foldGutter: config?.lineNumbers,
        }}
        style={{ fontSize: '16px', height: '100%' }}
      />
    </Box>
  );
}
