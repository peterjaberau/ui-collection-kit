/*
 export const settingSchema = {
 properties: {
 type: 'array',
 widget: 'simpleList',
 props: {
 hideCopy: true,
 hideMove: true,
 },
 className: 'parallel-wrap',
 items: {
 type: 'object',
 properties: {
 name: {
 title: '名称',
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 value: {
 title: 'value',
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 },
 },
 },
 };

 export const activitySchema = {
 title: 'Knowledge Retrieval',
 type: '_group',
 items: [
 {
 title: 'KnowledgeSearch',
 type: 'serviceTask',
 description: 'Allows you to query text content related to user issues from the knowledge base',
 icon: {
 type: 'icon-knowledge',
 bgColor: '#fa541c',
 },
 hideDesc: true,
 nodePanel: {
 width: 510,
 },
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 ...settingSchema,
 },
 },
 },
 {
 title: 'Problem Classifier',
 type: 'receiveTask',
 description: 'Define the classification conditions for the problem',
 icon: {
 type: 'icon-prompt',
 bgColor: '#875BF7',
 },
 hideDesc: true,
 nodePanel: {
 width: 510,
 },
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 ...settingSchema,
 },
 },
 },
 {
 title: 'Code execution',
 type: 'userTask', // exclusiveGateway
 description: 'Execute a piece of code to implement custom logic',
 icon: {
 type: 'icon-code',
 bgColor: 'pink',
 },
 hideDesc: true,
 nodePanel: {
 width: 510,
 },
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 ...settingSchema,
 },
 },
 },
 {
 title: 'HTTP Request',
 type: 'callActivity',
 description: 'Allows sending server requests over HTTP protocol',
 icon: {
 type: 'icon-http',
 bgColor: '#2E90FA',
 },
 hideDesc: true,
 nodePanel: {
 width: 510,
 },
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 ...settingSchema,
 },
 },
 },
 ],
 };

 export const settings = [
 {
 title: 'Event',
 type: '_group',
 items: [
 {
 title: 'Start',
 type: 'startEvent',
 description: 'The node at which the process starts, only one starting node is allowed for a process.',
 icon: {
 type: 'icon-start',
 bgColor: '#17B26A',
 },
 targetHandleHidden: true,
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 string: {
 title: 'String',
 description: 'With clear x button',
 type: 'string',
 default: 'hello world',
 props: {
 allowClear: true,
 },
 },
 string2: {
 title: 'Complex Verification',
 description: 'Usage of pattern and message',
 type: 'string',
 rules: [
 {
 pattern: '^[A-Za-z0-9]+$',
 message: 'Please enter numbers or English letters',
 },
 ],
 placeholder: 'Please enter numbers or English',
 },
 string3: {
 title: 'Length control',
 description: 'Length is between 5-15 words',
 type: 'string',
 minLength: 5,
 maxLength: 15,
 },
 string4: {
 title: 'Pre-side/Post-side tag',
 type: 'string',
 props: {
 addonBefore: 'length',
 addonAfter: 'px',
 },
 },
 string5: {
 title: 'Previous and Suffix',
 type: 'string',
 rules: [
 {
 pattern: '^[0-9]+$',
 message: 'Please enter the number',
 },
 ],
 props: {
 prefix: '￥',
 suffix: 'RMB',
 },
 },
 string6: {
 title: 'Grayed input box',
 type: 'string',
 disabled: true,
 default: 'hello world',
 },
 string7: {
 title: 'Text box',
 description: 'Fixed height',
 type: 'string',
 format: 'textarea',
 props: {
 row: 4,
 },
 },
 },
 required: ['string4', 'string5'],
 },
 },
 {
 title: 'end',
 type: 'endEvent',
 description: 'Indicates the process end node, there can be multiple end nodes',
 icon: {
 type: 'icon-end',
 bgColor: '#F79009',
 },
 sourceHandleHidden: true,
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 nodeDesc: {
 title: 'End Description',
 type: 'string',
 format: 'textarea',
 placeholder: 'Scale according to content',
 props: {
 autoSize: {
 minRows: 3,
 maxRows: 5,
 },
 },
 readOnlyWidget: 'ReadOnlyPanel',
 },
 },
 },
 },
 ],
 },
 {
 title: 'logical',
 type: '_group',
 Items: [
 {
 title: 'conditional branch',
 type: 'Switch',
 description: 'Allows you to split workflow into two branches according to the if/else condition',
 icon: {
 type: 'icon-fenzhi',
 bgColor: '#6172F3',
 },
 nodePanel: {
 width: 550,
 },
 hideDesc: true,
 switchExtra: {
 hideElse: true,
 titleKey: 'name',
 },
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 list: {
 // title: '高级属性',
 type: 'array',
 widget: 'simpleList',
 props: {
 hideCopy: true,
 hideMove: true,
 },
 className: 'switch-list',
 items: {
 type: 'object',
 properties: {
 name: {
 title: 'condition name', // condition description
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 type: {
 title: 'condition type',
 type: 'string',
 widget: 'select',
 props: {
 allowClear: true,
 },
 enum: ['Type One'],
 enumNames: ['Type One'],
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 value: {
 title: 'conditional statement',
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 },
 },
 },
 },
 },
 nodeWidget: 'showSwitchNode',
 },
 {
 title: 'parallel event',
 type: 'Parallel',
 Description: 'Support multiple branches to execute simultaneously',
 icon: {
 type: 'icon-parallel',
 bgColor: '#06aed4',
 },
 hideDesc: true,
 nodePanel: {
 width: 510,
 },
 parallelExtra: {
 titleKey: 'name',
 },
 settingSchema: {
 type: 'object',
 className: 'settingSchemaStyle',
 properties: {
 properties: {
 title: 'Properties',
 type: 'array',
 widget: 'simpleList',
 props: {
 hideCopy: true,
 hideMove: true,
 },
 className: 'parallel-wrap',
 items: {
 type: 'object',
 properties: {
 name: {
 title: 'Property Name',
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 value: {
 title: 'value',
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 },
 },
 },
 list: {
 title: 'parallel event',
 type: 'array',
 widget: 'simpleList',
 props: {
 hideCopy: true,
 hideMove: true,
 },
 className: 'parallel-wrap',
 items: {
 type: 'object',
 properties: {
 name: {
 title: 'event name',
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 value: {
 title: 'event description',
 type: 'string',
 props: {
 allowClear: true,
 },
 className: 'child-title',
 readOnlyWidget: 'ReadOnlyPanel',
 },
 },
 },
 },
 },
 },
 },
 ],
 },
 { ...activitySchema },
 ];
 */
