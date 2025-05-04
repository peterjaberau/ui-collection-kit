import { useState } from "react";
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Button } from 'antd';
import { CodeOutlined } from '@ant-design/icons';

export default function WrapperPreview(props: any) {
    const [show, setShow] = useState(false);
    return (
        <>
            <div style={{ padding: "40px" }}>
                {!show ? props.children : (
                    <SyntaxHighlighter language="tsx" >
                        {props.code}
                    </SyntaxHighlighter>
                )}
            </div>
            <Button onClick={() => setShow(!show)} style={{ position: "fixed", zIndex: 999, bottom: 10, left: 10, padding: 5 }} htmlType="button" type="text"><CodeOutlined style={{ fontSize: 20 }} /></Button>
        </>
    )
}