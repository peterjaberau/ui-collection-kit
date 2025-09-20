import {useEffect, useMemo} from 'react';
import Editor, {useMonaco} from '@monaco-editor/react';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { parse } from '@babel/parser';
import * as jsonc from 'jsonc-parser';
import type * as monacoEditor from 'monaco-editor';

interface TextViewProps {
    value: string;
    onChange: (value: string | undefined) => void;
    schemaText: string;
}

const modelUri = 'json://editor/data.json';
const schemaUri = 'json://editor/schema.json';

function TextView({value, onChange, schemaText}: TextViewProps) {
    const monaco = useMonaco();

    const expressionValidator = useMemo(() => {
        const validator = (data: string): boolean => {
            validator.error = null; // Reset error from previous run
            try {
                // Use Babel parser for superior error messages and modern syntax support
                parse(data, { sourceType: 'script' });
                return true;
            } catch (e) {
                // Babel's error objects are rich with information
                if (e instanceof Error) {
                    validator.error = e;
                }
                return false;
            }
        };
        validator.error = null as Error | null;
        return validator;
    }, []);

    const ajv = useMemo(() => {
        const ajvInstance = new Ajv({ allErrors: true, strict: "log" });
        addFormats(ajvInstance);
        ajvInstance.addFormat('expression', {
            type: 'string',
            validate: expressionValidator
        });
        return ajvInstance;
    }, [expressionValidator]);

    // Effect for configuring Monaco's language service (hovers, autocompletion)
    useEffect(() => {
        if (!monaco) return;
        const timer = setTimeout(() => {
            try {
                const schema = JSON.parse(schemaText);
                monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                    // Enable Monaco's syntax validation but ignore its schema validation
                    validate: true,
                    schemaValidation: 'ignore',
                    schemas: [{ uri: schemaUri, fileMatch: [modelUri], schema }],
                });
            } catch {
                // If schema is invalid, clear the config
                monaco.languages.json.jsonDefaults.setDiagnosticsOptions({ validate: true, schemaValidation: 'ignore', schemas: [] });
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [monaco, schemaText]);


    // Effect for performing AJV validation and setting markers
    useEffect(() => {
        if (!monaco) return;

        const timer = setTimeout(() => {
            const model = monaco.editor.getModel(monaco.Uri.parse(modelUri));
            if (!model || model.isDisposed()) return;

            let schema, data;
            try {
                schema = JSON.parse(schemaText);
                data = JSON.parse(value);
            } catch {
                // If JSON or schema is invalid, clear markers and let syntax highlighter handle it.
                monaco.editor.setModelMarkers(model, 'ajv-validation', []);
                return;
            }

            const validate = ajv.compile(schema);
            if (validate(data)) {
                monaco.editor.setModelMarkers(model, 'ajv-validation', []);
                return;
            }

            const markers: monacoEditor.editor.IMarkerData[] = (validate.errors ?? []).map((error) => {
                const path = error.instancePath.split('/').slice(1);
                const node = jsonc.findNodeAtLocation(jsonc.parseTree(value)!, path);

                if (node) {
                    let message = `${error.message} (${error.keyword})`;
                    if (error.keyword === 'format' && error.params.format === 'expression' && expressionValidator.error) {
                        message = `Invalid expression: ${expressionValidator.error.message}`;
                    }
                    const start = model.getPositionAt(node.offset);
                    const end = model.getPositionAt(node.offset + node.length);
                    return {
                        message,
                        severity: monaco.MarkerSeverity.Error,
                        startLineNumber: start.lineNumber,
                        startColumn: start.column,
                        endLineNumber: end.lineNumber,
                        endColumn: end.column,
                    };
                }
                return null;
            }).filter((m): m is monacoEditor.editor.IMarkerData => m !== null);
            
            if (!model.isDisposed()) {
                 monaco.editor.setModelMarkers(model, 'ajv-validation', markers);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [value, schemaText, monaco, ajv, expressionValidator]);

    return (
        <Editor
            height="100%"
            language="json"
            theme="vs-dark"
            path={modelUri}
            value={value}
            onChange={onChange}
            options={{
                minimap: {enabled: false},
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                fixedOverflowWidgets: true,
                padding: {
                    top: 16
                }
            }}
        />
    );
}

export default TextView;