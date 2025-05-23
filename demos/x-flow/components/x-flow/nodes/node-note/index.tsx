import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { debounce } from 'lodash';
import React, { memo, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useStore } from '../../hooks/useStore';
import './index.css';

export default memo((props: any) => {
  const { onClick, type, data, id } = props;
  const { nodes, setNodes }: any = useStore(
    (s) => ({
      nodes: s.nodes,
      setNodes: s.setNodes,
    }),
    shallow,
  );

  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(data?.value));

  // Triggered when the editor content changes
  const handleEditorChange = (newEditorState: any) => {
    setEditorState(newEditorState);
    handleNodeValueChange({ value: newEditorState.toHTML() });
  };

  const handleNodeValueChange = debounce((data: any) => {
    for (let node of nodes as any) {
      if (node.id === id) {
        node.data = {
          ...node?.data,
          ...data,
        };
        break;
      }
    }
    setNodes([...nodes], false);
  }, 200);

  return (
    <div className="node-note-wrap" onMouseDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
      <BraftEditor
        ref={editorRef}
        value={editorState}
        onChange={handleEditorChange}
        placeholder="Please enter content..."
        className="nodrag nopan nowheel node-note-braft"
        language="zh"
        style={{
          width: '240px',
          height: '160px',
          backgroundColor: 'rgb(239, 248, 255)',
          border: '1px solid rgb(132, 202, 255)',
          borderRadius: '8px',
          cursor: 'text',
          userSelect: 'text',
        }}
        controls={[
          // 'headings',
          // 'font-size',
          'bold',
          'italic',
          'underline',
          'text-color',
          // 'link',
          // 'media',
          'strike-through',
          'list-ol',
        ]}
        contentStyle={{ height: '100px', overflowY: 'auto' }}
        contentClassName="node-note-braft-content"
        controlBarClassName="node-note-braft-control"
      />
    </div>
  );
});
