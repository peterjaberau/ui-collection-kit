import { Divider, Flex, Input, Radio, Typography } from "antd";
import * as icons from "@ant-design/icons"
import { useMemo, useState } from "react";

const items = Object.keys(icons).reduce((acc: any[], val: string) => {
    if ((icons as any)[`${val}`]?.render) {
        const Icon = (icons as any)[`${val}`]
        acc.push({ label: val, icon: <Icon style={{ fontSize: 30 }} /> })
    }
    return acc;
}, [])

export default function IconPage() {
    const [type, setType] = useState("Outlined");
    const [keword, setKeyword] = useState("");

    const filtered = useMemo(() => {
        return items.filter(d => d.label.toLowerCase().includes(keword) && `${d.label}`.endsWith(type))
    }, [type, keword])

    return (
        <Flex vertical gap={20}>
            <Divider />
            <Flex align="center">
                <Flex style={{ width: 500 }}>
                    <Radio.Group
                        onChange={e => setType(e.target.value)}
                        value={type}
                        options={[
                            {
                                label: "Outline",
                                value: "Outlined"
                            },
                            {
                                label: "Filled",
                                value: "Filled"
                            },
                            {
                                label: "Two Tone",
                                value: "TwoTone"
                            },
                        ]}
                    />
                </Flex>
                <Input onInput={e => setKeyword(e.currentTarget.value)} placeholder="Search icon here, click icon to copy code" />
            </Flex>
            <Divider />
            <Flex wrap gap={30}>
                {filtered.map(d => {
                    return (
                        <Flex key={d.label} vertical align="center" justify="space-evenly" style={{ width: 160 }} gap={10}>
                            {d.icon}
                            <Input size="small" style={{ fontSize: 12, textAlign: "center" }} value={`<${d.label} />`} />
                        </Flex>
                    )
                })}
            </Flex>
        </Flex>
    )
}