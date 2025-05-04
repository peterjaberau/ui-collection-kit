export const allSchemas = {


    simple:  {
        type: 'object',
        properties: {
            input: {
                title: 'Input box',
                type: 'string',
                widget: 'input'
            },
            select: {
                title: 'Drop-down box',
                type: 'string',
                widget: 'select',
                props: {
                    options: [
                        { label: 'Early', value: 'a' },
                        { label: 'Mid', value: 'b' },
                        { label: 'Late', value: 'c' }
                    ]
                }
            }
        }
    },
    span: {
        type: 'object',
        displayType: 'row',
        properties: {
            input1: {
                title: 'Field A',
                type: 'string',
                span: 8
            },
            input2: {
                title: 'Field B',
                type: 'string',
                span: 8
            },
            input3: {
                title: 'Field C',
                type: 'string',
                span: 8
            },
            input11: {
                title: 'Field A',
                type: 'string',
                span: 8
            },
            input12: {
                title: 'Field B',
                type: 'string',
                span: 8
            },
            input4: {
                title: 'Field D',
                type: 'string',
            },
            input5: {
                title: 'Field E',
                type: 'string'
            }
        }
    },
    cellSpan: {
        type: 'object',
        column: 3,
        displayType: 'row',
        properties: {
            input1: {
                title: 'Field A',
                type: 'string'
            },
            input2: {
                title: 'Field B',
                type: 'string'
            },
            input3: {
                title: 'Field C',
                type: 'string'
            },
            input4: {
                title: 'Field D',
                type: 'string',
                cellSpan: 2
            },
            input5: {
                title: 'Field E',
                type: 'string'
            }
        }
    },
    basic: {
        type: 'object',
        column: 3,
        displayType: 'row',
        properties: {
            input1: {
                title: 'Input A',
                type: 'string'
            },
            input2: {
                title: 'Input B',
                type: 'string'
            },
            input3: {
                title: 'Input C',
                type: 'string'
            },
            input4: {
                title: 'Input D',
                type: 'string'
            }
        }
    },
    baseControl: {
        type: 'object',
        displayType: 'row',
        properties: {
            void1: {
                title: 'Common Components',
                type: 'void',
                widget: 'voidTitle'
            },
            input1: {
                title: 'Input box',
                type: 'string',
                widget: 'input'
            },
            number1: {
                title: 'Number Input Box',
                type: 'number',
                widget: 'inputNumber'
            },
            select1: {
                title: 'Drop-down radio button',
                type: 'string',
                widget: 'select',
                props: {
                    options: [
                        { label: '早', value: 'a' },
                        { label: '中', value: 'b' },
                        { label: 'Late', value: 'c' }
                    ]
                }
            },
            multiSelect1: {
                title: 'Multiple Choice',
                type: 'array',
                widget: 'multiSelect',
                description: 'Drop-down multiple selection',
                props: {
                    options: [
                        { label: 'Hangzhou', value: 'a' },
                        { label: 'Wuhan', value: 'b' },
                        { label: 'Huzhou', value: 'c' },
                        { label: 'Guiyang', value: 'd' }
                    ]
                }
            },
            radio1: {
                title: 'Click single choice',
                type: 'string',
                widget: 'radio',
                props: {
                    options: [
                        { label: '早', value: 'a' },
                        { label: '中', value: 'b' },
                        { label: 'Late', value: 'c' }
                    ]
                }
            },
            checkboxes1: {
                title: 'Click to select multiple options',
                type: 'array',
                widget: 'checkboxes',
                props: {
                    options: [
                        { label: 'Hangzhou', value: 'a' },
                        { label: 'Wuhan', value: 'b' },
                        { label: 'Huzhou', value: 'c' },
                        { label: 'Guiyang', value: 'd' }
                    ]
                }
            },
            textarea1: {
                title: 'Long text',
                type: 'string',
                widget: 'textArea'
            },
            date1: {
                title: 'Date Selection',
                type: 'string',
                widget: 'datePicker'
            },
            dateRange1: {
                title: 'Date Range',
                type: 'range',
                widget: 'dateRange'
            },
            time1: {
                title: 'Time Selection',
                type: 'string',
                widget: 'timePicker'
            },
            timeRange1: {
                title: 'Time Range',
                type: 'range',
                widget: 'timeRange'
            },
            void2: {
                title: 'Other components',
                type: 'void',
                widget: 'voidTitle'
            },
            html1: {
                title: 'HTML',
                type: 'string',
                widget: 'html'
            },
            switch1: {
                title: 'Switch',
                type: 'boolean',
                widget: 'switch'
            },
            checkbox1: {
                title: 'Select',
                type: 'boolean',
                widget: 'checkbox'
            },
            slider1: {
                title: 'With slider',
                type: 'number',
                widget: 'slider'
            },
            image1: {
                title: 'Picture display',
                type: 'string',
                widget: 'imageInput'
            },
            color1: {
                title: 'Color selection',
                type: 'string',
                widget: 'color'
            },
            url1: {
                title: 'Link',
                type: 'string',
                widget: 'urlInput'
            }
        }
    },
    complete: {
        "type": "object",
        "properties": {
            "inputDemo": {
                "title": "complete",
                "type": "string",
                "default": "500",
                "rules": [
                    {
                        "pattern": "^[A-Za-z0-9]+$",
                        "message": "Please enter the correct format"
                    }
                ],
                "className": "input-with-px",
                "props": {
                    "addonAfter": "px"
                }
            },
            "numberDemo": {
                "title": "Number",
                "description": "Number input box",
                "type": "number",
                "min": 10,
                "max": 100,
                "step": 10
            },
            "textareaDemo": {
                "title": "Input Box",
                "type": "string",
                "widget": "textarea",
                "default": "FormRender\nHello World!",
                "required": true
            },
            "imgDemo": {
                "title": "Picture",
                "type": "string",
                "format": "image",
                "default": "https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png"
            },
            "uploadDemo": {
                "title": "File Upload",
                "type": "string",
                "default": "https://img.alicdn.com/tfs/TB1P8p2uQyWBuNjy0FpXXassXXa-750-1334.png",
                "widget": "upload",
                "props": {
                    "action": "https://www.mocky.io/v2/5cc8019d300000980a055e76"
                }
            },
            "disabledDemo": {
                "title": "Unavailable",
                "type": "string",
                "default": "I am a disabled value",
                "disabled": true
            },
            "enumDemo": {
                "title": "Enumeration",
                "type": "string",
                "enum": [
                    "A",
                    "B"
                ],
                "enumNames": [
                    "Cultivation",
                    "<span style='background-color: black;display: inline-block;vertical-align: text-top;width: 48px;height: 24px;margin-top:-2px;color:white; border: 1px solid #ddd;'>Try</span>"
                ],
                "width": "50%"
            },
            "dateDemo": {
                "title": "DateTime",
                "format": "dateTime",
                "type": "string",
                "widget": "date",
                "width": "50%",
                "default": "2018-11-22",
                "required": true
            },
            "objDemo": {
                "title": "Single Object",
                "description": "This is an object type",
                "type": "object",
                "properties": {
                    "isLike": {
                        "title": "Whether to display color selection",
                        "type": "boolean",
                        "default": true
                    },
                    "background": {
                        "title": "Color selection",
                        "description": "Special panel",
                        "format": "color",
                        "type": "string",
                        "hidden": "{{rootValue.isLike === false}}",
                        "default": "#ffff00"
                    },
                    "wayToTravel": {
                        "title": "Way of travel",
                        "type": "string",
                        "enum": ["self", "group"],
                        "enumNames": ["Self-driving", "Group travel"],
                        "widget": "radio"
                    },
                    "canDrive": {
                        "title": "Do you have a driver's license?",
                        "type": "boolean",
                        "default": false,
                        "hidden": "{{rootValue.wayToTravel !== 'self'}}"
                    }
                },
                "required": ["background"]
            },
            "multiSelectDemo": {
                "title": "Single Object",
                "tooltip": "This is an object type",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "enum": [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                "enumNames": ["Hangzhou", "Wuhan", "Huzhou", "Guiyang"],
                "widget": "multiSelect",
                "required": true
            },
            "custom": {
                "properties": {
                    "payType": {
                        "title": "Payment method",
                        "type": "array",
                        "items": { "type": "string" },
                        "enum": ["1", "5", "6"],
                        "enumNames": ["Prepayment", "Face-to-face payment", "Credit residence"]
                    }
                },
                "type": "object",
                "required": ["payType"],
                "title": "Hotel Industry Restrictions",
                "name": "custom"
            },
            "arrDemo": {
                "title": "Object Array",
                "description": "Object Array Nested Function",
                "type": "array",
                "min": 1,
                "max": 3,
                "items": {
                    "type": "object",
                    "properties": {
                        "num": {
                            "title": "Numeric Parameter",
                            "description": "number Type",
                            "type": "number"
                        },
                        "name": {
                            "title": "Character Name",
                            "description": "string Type",
                            "type": "string",
                            "rules": [{ "pattern": "^[A-Za-z0-9]+$" }],
                            "disabled": "{{rootValue.num === 3}}"
                        }
                    }
                },
                "props": {
                    "foldable": true,
                    "hideDelete": "{{rootValue.arrDemo.length === 1}}",
                    "buttons": [
                        {
                            "text": "Copy",
                            "icon": "CopyOutlined",
                            "callback": "copyLast"
                        }
                    ]
                }
            }
        }
    }

}
