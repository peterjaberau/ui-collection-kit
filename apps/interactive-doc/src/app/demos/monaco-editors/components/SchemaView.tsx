import Editor from '@monaco-editor/react';

interface SchemaViewProps {
    value: string;
    onChange: (value: string | undefined) => void;
}

function SchemaView({value, onChange}: SchemaViewProps) {
    return (
        <Editor
            height="100%"
            language="json"
            theme="vs-light"
            value={value}
            onChange={onChange}
            options={{
                minimap: {enabled: false},
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: {
                    top: 16
                }
            }}
        />
    );
}

export default SchemaView;
