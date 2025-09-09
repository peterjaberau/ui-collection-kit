// Map proptotype:
// clear, has, delete, entries, forEach, get, has, keys, set, values

export interface WidgetConfig {
  type: string;
  [key: string]: any;
}

const WidgetFactory = {
  widgetTypes: {
    "WDS_BUTTON_WIDGET": "WDS_BUTTON_WIDGET",
    "WDS_INPUT_WIDGET": "WDS_INPUT_WIDGET",
    "WDS_CHECKBOX_WIDGET": "WDS_CHECKBOX_WIDGET",
    "WDS_ICON_BUTTON_WIDGET": "WDS_ICON_BUTTON_WIDGET",
    "WDS_TABLE_WIDGET": "WDS_TABLE_WIDGET",
    "WDS_CURRENCY_INPUT_WIDGET": "WDS_CURRENCY_INPUT_WIDGET",
    "WDS_TOOLBAR_BUTTONS_WIDGET": "WDS_TOOLBAR_BUTTONS_WIDGET",
    "WDS_PHONE_INPUT_WIDGET": "WDS_PHONE_INPUT_WIDGET",
    "WDS_CHECKBOX_GROUP_WIDGET": "WDS_CHECKBOX_GROUP_WIDGET",
    "WDS_COMBOBOX_WIDGET": "WDS_COMBOBOX_WIDGET",
    "WDS_SWITCH_WIDGET": "WDS_SWITCH_WIDGET",
    "WDS_SWITCH_GROUP_WIDGET": "WDS_SWITCH_GROUP_WIDGET",
    "WDS_RADIO_GROUP_WIDGET": "WDS_RADIO_GROUP_WIDGET",
    "WDS_MENU_BUTTON_WIDGET": "WDS_MENU_BUTTON_WIDGET",
    "CUSTOM_WIDGET": "CUSTOM_WIDGET",
    "SECTION_WIDGET": "SECTION_WIDGET",
    "ZONE_WIDGET": "ZONE_WIDGET",
    "WDS_PARAGRAPH_WIDGET": "WDS_PARAGRAPH_WIDGET",
    "WDS_HEADING_WIDGET": "WDS_HEADING_WIDGET",
    "WDS_MODAL_WIDGET": "WDS_MODAL_WIDGET",
    "WDS_STATS_WIDGET": "WDS_STATS_WIDGET",
    "WDS_KEY_VALUE_WIDGET": "WDS_KEY_VALUE_WIDGET",
    "WDS_INLINE_BUTTONS_WIDGET": "WDS_INLINE_BUTTONS_WIDGET",
    "WDS_EMAIL_INPUT_WIDGET": "WDS_EMAIL_INPUT_WIDGET",
    "WDS_PASSWORD_INPUT_WIDGET": "WDS_PASSWORD_INPUT_WIDGET",
    "WDS_NUMBER_INPUT_WIDGET": "WDS_NUMBER_INPUT_WIDGET",
    "WDS_MULTILINE_INPUT_WIDGET": "WDS_MULTILINE_INPUT_WIDGET",
    "WDS_SELECT_WIDGET": "WDS_SELECT_WIDGET",
    "WDS_DATEPICKER_WIDGET": "WDS_DATEPICKER_WIDGET",
    "WDS_MULTI_SELECT_WIDGET": "WDS_MULTI_SELECT_WIDGET",
    "CANVAS_WIDGET": "CANVAS_WIDGET",
    "SKELETON_WIDGET": "SKELETON_WIDGET",
    "CONTAINER_WIDGET": "CONTAINER_WIDGET",
    "TEXT_WIDGET": "TEXT_WIDGET",
    "TABLE_WIDGET": "TABLE_WIDGET",
    "CHECKBOX_WIDGET": "CHECKBOX_WIDGET",
    "RADIO_GROUP_WIDGET": "RADIO_GROUP_WIDGET",
    "BUTTON_WIDGET": "BUTTON_WIDGET",
    "IMAGE_WIDGET": "IMAGE_WIDGET",
    "VIDEO_WIDGET": "VIDEO_WIDGET",
    "TABS_WIDGET": "TABS_WIDGET",
    "MODAL_WIDGET": "MODAL_WIDGET",
    "CHART_WIDGET": "CHART_WIDGET",
    "MAP_WIDGET": "MAP_WIDGET",
    "RICH_TEXT_EDITOR_WIDGET": "RICH_TEXT_EDITOR_WIDGET",
    "DATE_PICKER_WIDGET2": "DATE_PICKER_WIDGET2",
    "SWITCH_WIDGET": "SWITCH_WIDGET",
    "FORM_WIDGET": "FORM_WIDGET",
    "RATE_WIDGET": "RATE_WIDGET",
    "IFRAME_WIDGET": "IFRAME_WIDGET",
    "TABS_MIGRATOR_WIDGET": "TABS_MIGRATOR_WIDGET",
    "DIVIDER_WIDGET": "DIVIDER_WIDGET",
    "MENU_BUTTON_WIDGET": "MENU_BUTTON_WIDGET",
    "ICON_BUTTON_WIDGET": "ICON_BUTTON_WIDGET",
    "CHECKBOX_GROUP_WIDGET": "CHECKBOX_GROUP_WIDGET",
    "FILE_PICKER_WIDGET_V2": "FILE_PICKER_WIDGET_V2",
    "STATBOX_WIDGET": "STATBOX_WIDGET",
    "AUDIO_RECORDER_WIDGET": "AUDIO_RECORDER_WIDGET",
    "DOCUMENT_VIEWER_WIDGET": "DOCUMENT_VIEWER_WIDGET",
    "BUTTON_GROUP_WIDGET": "BUTTON_GROUP_WIDGET",
    "WDS_CUSTOM_WIDGET": "WDS_CUSTOM_WIDGET",
    "MULTI_SELECT_TREE_WIDGET": "MULTI_SELECT_TREE_WIDGET",
    "SINGLE_SELECT_TREE_WIDGET": "SINGLE_SELECT_TREE_WIDGET",
    "SWITCH_GROUP_WIDGET": "SWITCH_GROUP_WIDGET",
    "AUDIO_WIDGET": "AUDIO_WIDGET",
    "PROGRESSBAR_WIDGET": "PROGRESSBAR_WIDGET",
    "CAMERA_WIDGET": "CAMERA_WIDGET",
    "MAP_CHART_WIDGET": "MAP_CHART_WIDGET",
    "SELECT_WIDGET": "SELECT_WIDGET",
    "MULTI_SELECT_WIDGET_V2": "MULTI_SELECT_WIDGET_V2",
    "MULTI_SELECT_WIDGET": "MULTI_SELECT_WIDGET",
    "INPUT_WIDGET_V2": "INPUT_WIDGET_V2",
    "PHONE_INPUT_WIDGET": "PHONE_INPUT_WIDGET",
    "CURRENCY_INPUT_WIDGET": "CURRENCY_INPUT_WIDGET",
    "JSON_FORM_WIDGET": "JSON_FORM_WIDGET",
    "TABLE_WIDGET_V2": "TABLE_WIDGET_V2",
    "NUMBER_SLIDER_WIDGET": "NUMBER_SLIDER_WIDGET",
    "RANGE_SLIDER_WIDGET": "RANGE_SLIDER_WIDGET",
    "CATEGORY_SLIDER_WIDGET": "CATEGORY_SLIDER_WIDGET",
    "CODE_SCANNER_WIDGET": "CODE_SCANNER_WIDGET",
    "LIST_WIDGET_V2": "LIST_WIDGET_V2",
    "EXTERNAL_WIDGET": "EXTERNAL_WIDGET",
    "DROP_DOWN_WIDGET": "DROP_DOWN_WIDGET",
    "ICON_WIDGET": "ICON_WIDGET",
    "FILE_PICKER_WIDGET": "FILE_PICKER_WIDGET",
    "FORM_BUTTON_WIDGET": "FORM_BUTTON_WIDGET",
    "PROGRESS_WIDGET": "PROGRESS_WIDGET",
    "CIRCULAR_PROGRESS_WIDGET": "CIRCULAR_PROGRESS_WIDGET",
    "LIST_WIDGET": "LIST_WIDGET",
    "DATE_PICKER_WIDGET": "DATE_PICKER_WIDGET",
    "INPUT_WIDGET": "INPUT_WIDGET"
  },
  widgetConfigMap: [
    [
      "WDS_BUTTON_WIDGET",
      {
        "type": "WDS_BUTTON_WIDGET",
        "animateLoading": true,
        "text": "Do something",
        "buttonVariant": "filled",
        "buttonColor": "accent",
        "widgetName": "Button",
        "isDisabled": false,
        "isVisible": true,
        "disableOnInvalidForm": false,
        "resetFormOnClick": false,
        "recaptchaType": "V3",
        "version": 1,
        "responsiveBehavior": "hug",
        "searchTags": [
          "click",
          "submit",
          "button",
          "action",
          "run"
        ],
        "tags": [
          "Suggested",
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Button",
        "key": "xyczvfnywf",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_INPUT_WIDGET",
      {
        "type": "WDS_INPUT_WIDGET",
        "label": "Label",
        "widgetName": "Input",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "TEXT",
        "version": 1,
        "showStepArrows": false,
        "searchTags": [
          "form",
          "text input",
          "number",
          "textarea",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter"
        ],
        "tags": [
          "Suggested",
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Input",
        "displayOrder": 1,
        "key": "efiyzi3sl4",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_CHECKBOX_WIDGET",
      {
        "type": "WDS_CHECKBOX_WIDGET",
        "label": "Label",
        "defaultCheckedState": true,
        "widgetName": "Checkbox",
        "version": 1,
        "isDisabled": false,
        "isRequired": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "checkbox",
          "check",
          "toggle",
          "option",
          "switch",
          "boolean",
          "choose",
          "choice",
          "pick",
          "tick",
          "set"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Checkbox",
        "key": "vxsu5rqce5",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_ICON_BUTTON_WIDGET",
      {
        "type": "WDS_ICON_BUTTON_WIDGET",
        "iconName": "plus",
        "buttonVariant": "filled",
        "buttonColor": "accent",
        "isDisabled": false,
        "isVisible": true,
        "widgetName": "IconButton",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "hug",
        "searchTags": [
          "click",
          "submit",
          "button",
          "action",
          "run",
          "icon",
          "pic"
        ],
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Icon Button",
        "key": "epzv7jeyj7",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_TABLE_WIDGET",
      {
        "type": "WDS_TABLE_WIDGET",
        "responsiveBehavior": "fill",
        "canFreezeColumn": true,
        "columnUpdatedAt": 1757008322510,
        "animateLoading": true,
        "defaultSelectedRowIndex": 0,
        "defaultSelectedRowIndices": [
          0
        ],
        "label": "Data",
        "widgetName": "Table",
        "searchKey": "",
        "horizontalAlignment": "start",
        "verticalAlignment": "center",
        "totalRecordsCount": 0,
        "defaultPageSize": 0,
        "dynamicPropertyPathList": [],
        "dynamicBindingPathList": [],
        "primaryColumns": {},
        "tableData": [
          {
            "Name": "John Doe",
            "Company": "TechCorp",
            "Title": "Software Engineer",
            "Phone number": "(555) 123-4567",
            "Email": "john.doe@techcorp.com",
            "Registration date": "2023-01-15"
          },
          {
            "Name": "Jane Smith",
            "Company": "Innovate Ltd",
            "Title": "Project Manager",
            "Phone number": "(555) 234-5678",
            "Email": "jane.smith@innovatelt.com",
            "Registration date": "2023-02-20"
          },
          {
            "Name": "Alice Johnson",
            "Company": "Web Solutions",
            "Title": "UX Designer",
            "Phone number": "(555) 345-6789",
            "Email": "alice.johnson@websolutions.com",
            "Registration date": "2023-03-10"
          },
          {
            "Name": "Bob Brown",
            "Company": "BuildIt",
            "Title": "Construction Manager",
            "Phone number": "(555) 456-7890",
            "Email": "bob.brown@buildit.com",
            "Registration date": "2023-04-05"
          },
          {
            "Name": "Charlie Davis",
            "Company": "FinTech Inc",
            "Title": "Financial Analyst",
            "Phone number": "(555) 567-8901",
            "Email": "charlie.davis@fintechinc.com",
            "Registration date": "2023-05-12"
          },
          {
            "Name": "Dana Lee",
            "Company": "HealthFirst",
            "Title": "Nurse Practitioner",
            "Phone number": "(555) 678-9012",
            "Email": "dana.lee@healthfirst.com",
            "Registration date": "2023-06-01"
          },
          {
            "Name": "Evan Martinez",
            "Company": "AutoPro",
            "Title": "Mechanical Engineer",
            "Phone number": "(555) 789-0123",
            "Email": "evan.martinez@autopro.com",
            "Registration date": "2023-07-19"
          },
          {
            "Name": "Fiona Green",
            "Company": "EduFuture",
            "Title": "Curriculum Developer",
            "Phone number": "(555) 890-1234",
            "Email": "fiona.green@edufuture.com",
            "Registration date": "2023-08-23"
          },
          {
            "Name": "George Harris",
            "Company": "MarketMasters",
            "Title": "Marketing Director",
            "Phone number": "(555) 901-2345",
            "Email": "george.harris@marketmasters.com",
            "Registration date": "2023-09-07"
          },
          {
            "Name": "Hannah Wright",
            "Company": "LegalEagle",
            "Title": "Attorney",
            "Phone number": "(555) 012-3456",
            "Email": "hannah.wright@legaleagle.com",
            "Registration date": "2023-10-15"
          },
          {
            "Name": "Ian Walker",
            "Company": "HomeGoods",
            "Title": "Retail Manager",
            "Phone number": "(555) 123-4567",
            "Email": "ian.walker@homegoods.com",
            "Registration date": "2023-11-22"
          },
          {
            "Name": "Julia King",
            "Company": "TravelWise",
            "Title": "Travel Agent",
            "Phone number": "(555) 234-5678",
            "Email": "julia.king@travelwise.com",
            "Registration date": "2023-12-30"
          },
          {
            "Name": "Kevin Scott",
            "Company": "CleanEnergy",
            "Title": "Environmental Scientist",
            "Phone number": "(555) 345-6789",
            "Email": "kevin.scott@cleanenergy.com",
            "Registration date": "2024-01-08"
          },
          {
            "Name": "Laura Baker",
            "Company": "MediaMinds",
            "Title": "Content Strategist",
            "Phone number": "(555) 456-7890",
            "Email": "laura.baker@mediaminds.com",
            "Registration date": "2024-02-18"
          },
          {
            "Name": "Michael Young",
            "Company": "CyberSecure",
            "Title": "Cybersecurity Specialist",
            "Phone number": "(555) 567-8901",
            "Email": "michael.young@cybersecure.com",
            "Registration date": "2024-03-29"
          },
          {
            "Name": "Nina Patel",
            "Company": "AgriTech",
            "Title": "Agricultural Engineer",
            "Phone number": "(555) 678-9012",
            "Email": "nina.patel@agritech.com",
            "Registration date": "2024-04-10"
          }
        ],
        "columnWidthMap": {},
        "columnOrder": [],
        "enableClientSideSearch": true,
        "isVisibleSearch": true,
        "isVisibleFilters": true,
        "isVisibleDownload": true,
        "isVisiblePagination": true,
        "isSortable": true,
        "delimiter": ",",
        "version": 1,
        "inlineEditingSaveOption": "ROW_LEVEL",
        "pageSize": 8,
        "buttonLabel": "Action",
        "buttonColor": "accent",
        "buttonVariant": "filled",
        "isVisible": true,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "searchTags": [
          "table",
          "data",
          "display",
          "spreadsheet"
        ],
        "tags": [
          "Suggested",
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Table",
        "key": "vpyx8qabxb",
        "needsHeightForContent": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_CURRENCY_INPUT_WIDGET",
      {
        "type": "WDS_CURRENCY_INPUT_WIDGET",
        "label": "Current Price",
        "widgetName": "CurrencyInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "version": 1,
        "allowCurrencyChange": false,
        "defaultCurrencyCode": "USD",
        "decimals": 0,
        "showStepArrows": false,
        "inputType": "CURRENCY",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "amount",
          "total",
          "money",
          "currency",
          "form",
          "number",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter",
          "cash",
          "expense",
          "cost",
          "price"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Currency Input",
        "key": "84z56qvb4y",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_TOOLBAR_BUTTONS_WIDGET",
      {
        "type": "WDS_TOOLBAR_BUTTONS_WIDGET",
        "widgetName": "ToolbarButtons",
        "orientation": "horizontal",
        "variant": "ghost",
        "color": "accent",
        "isDisabled": false,
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "buttonsList": {
          "button1": {
            "label": "Add",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button1",
            "index": 0,
            "icon": "plus",
            "iconPosition": "start"
          },
          "button2": {
            "label": "Edit",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button2",
            "index": 1,
            "icon": "pencil",
            "iconPosition": "start"
          },
          "button3": {
            "label": "Copy",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button3",
            "index": 2,
            "icon": "copy",
            "iconPosition": "start"
          },
          "separator": {
            "isVisible": true,
            "isDisabled": false,
            "isSeparator": true,
            "widgetId": "",
            "id": "separator",
            "index": 2,
            "label": "Separator",
            "itemType": "SEPARATOR"
          },
          "button4": {
            "label": "Delete",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button4",
            "index": 2,
            "icon": "trash",
            "iconPosition": "start"
          }
        },
        "searchTags": [
          "click",
          "submit",
          "button",
          "action",
          "toolbar",
          "menu",
          "panel"
        ],
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Toolbar Buttons",
        "key": "66no63fpju",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_PHONE_INPUT_WIDGET",
      {
        "type": "WDS_PHONE_INPUT_WIDGET",
        "label": "Phone number",
        "widgetName": "PhoneInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "version": 1,
        "defaultDialCode": "+1",
        "allowDialCodeChange": false,
        "allowFormatting": true,
        "inputType": "PHONE_NUMBER",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "form",
          "call",
          "number",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter",
          "phone",
          "contact"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Phone Input",
        "key": "ewzv0uu2p2",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_CHECKBOX_GROUP_WIDGET",
      {
        "type": "WDS_CHECKBOX_GROUP_WIDGET",
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE",
          "RED"
        ],
        "isDisabled": false,
        "isRequired": false,
        "isVisible": true,
        "label": "Color",
        "orientation": "vertical",
        "version": 1,
        "widgetName": "CheckboxGroup",
        "responsiveBehavior": "fill",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "checkbox",
          "check",
          "toggle",
          "option",
          "switch",
          "boolean",
          "choose",
          "choice",
          "pick",
          "group",
          "tick",
          "set"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Checkbox Group",
        "key": "uak8d2xxc4",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_COMBOBOX_WIDGET",
      {
        "type": "WDS_COMBOBOX_WIDGET",
        "animateLoading": true,
        "label": "Label",
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "defaultOptionValue": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "ComboBox",
        "widgetType": "SELECT",
        "version": 1,
        "responsiveBehavior": "fill",
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ],
        "placeholderText": "Select an item",
        "searchTags": [
          "choice",
          "option",
          "choose",
          "pick",
          "select",
          "dropdown"
        ],
        "tags": [
          "Select"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "ComboBox",
        "key": "441ipuj2tu",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_SWITCH_WIDGET",
      {
        "type": "WDS_SWITCH_WIDGET",
        "label": "Label",
        "defaultSwitchState": true,
        "widgetName": "Switch",
        "labelPosition": "start",
        "version": 1,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "checkbox",
          "check",
          "toggle",
          "option",
          "switch",
          "boolean",
          "choose",
          "choice",
          "pick",
          "tick",
          "set"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Switch",
        "key": "qgn8t5bdll",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_SWITCH_GROUP_WIDGET",
      {
        "type": "WDS_SWITCH_GROUP_WIDGET",
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE",
          "RED"
        ],
        "isDisabled": false,
        "isVisible": true,
        "labelPosition": "end",
        "label": "Label",
        "orientation": "vertical",
        "version": 1,
        "widgetName": "SwitchGroup",
        "responsiveBehavior": "fill",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "checkbox",
          "check",
          "toggle",
          "option",
          "switch",
          "boolean",
          "choose",
          "choice",
          "pick",
          "group",
          "tick",
          "set"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Switch Group",
        "key": "ei27iraysy",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_RADIO_GROUP_WIDGET",
      {
        "type": "WDS_RADIO_GROUP_WIDGET",
        "animateLoading": true,
        "label": "Size",
        "options": [
          {
            "label": "Small",
            "value": "S"
          },
          {
            "label": "Medium",
            "value": "M"
          },
          {
            "label": "Large",
            "value": "L"
          }
        ],
        "defaultOptionValue": "L",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": true,
        "widgetName": "RadioGroup",
        "orientation": "vertical",
        "version": 1,
        "responsiveBehavior": "fill",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "choice",
          "option",
          "radio",
          "variant",
          "choose",
          "pick",
          "group",
          "select"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Radio Group",
        "key": "vktaqmioz3",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_MENU_BUTTON_WIDGET",
      {
        "type": "WDS_MENU_BUTTON_WIDGET",
        "label": "Open The Menu…",
        "triggerButtonVariant": "filled",
        "triggerButtonColor": "accent",
        "isCompact": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "menuItemsSource": "static",
        "menuItems": {
          "menuItem1": {
            "label": "Bake",
            "id": "menuItem1",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 0
          },
          "menuItem2": {
            "label": "Fry",
            "id": "menuItem2",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 1
          },
          "menuItem3": {
            "label": "Boil",
            "id": "menuItem3",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 2
          }
        },
        "widgetName": "MenuButton",
        "version": 1,
        "searchTags": [
          "click",
          "submit",
          "button",
          "menu",
          "option",
          "burger",
          "hamburger",
          "dropdown",
          "select",
          "action",
          "choose"
        ],
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Menu Button",
        "key": "wyib1uyx86",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CUSTOM_WIDGET",
      {
        "type": "CUSTOM_WIDGET",
        "widgetName": "Custom",
        "rows": 30,
        "columns": 23,
        "version": 1,
        "onResetClick": "{{showAlert('Successfully reset!!', '');}}",
        "events": [
          "onResetClick"
        ],
        "isVisible": true,
        "defaultModel": "{\n  \"tips\": [\n    \"Pass data to this widget in the default model field\",\n    \"Access data in the javascript file using the appsmith.model variable\",\n    \"Create events in the widget and trigger them in the javascript file using appsmith.triggerEvent('eventName')\",\n    \"Access data in CSS as var(--appsmith-model-{property-name})\"\n  ]\n}",
        "srcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-borderRadius);\n  box-shadow: var(--appsmith-theme-boxShadow);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-borderRadius);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-primaryColor) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-primaryColor) !important;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-primaryColor);\n  border-color: var(--appsmith-theme-primaryColor);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "import React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\n\nconst Button = ({\n  children,\n  className,\n  ...props\n}) => /*#__PURE__*/React.createElement(\"button\", {\n  className: className,\n  ...props\n}, children);\n\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n  const handleNext = () => {\n    setCurrentIndex(prevIndex => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-header\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Custom Widget\"), /*#__PURE__*/React.createElement(\"div\", null, currentIndex + 1, \" / \", appsmith.model.tips.length)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"content\"\n  }, appsmith.model.tips[currentIndex])), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"button-container\"\n  }, /*#__PURE__*/React.createElement(Button, {\n    className: \"primary\",\n    onClick: handleNext\n  }, \"Next Tip\"), /*#__PURE__*/React.createElement(Button, {\n    className: \"reset\",\n    disabled: currentIndex === 0,\n    onClick: handleReset\n  }, \"Reset\")));\n}\n\nappsmith.onReady(() => {\n    ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById(\"root\"));\n});"
        },
        "uncompiledSrcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-borderRadius);\n  box-shadow: var(--appsmith-theme-boxShadow);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-borderRadius);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-primaryColor) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-primaryColor) !important;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-primaryColor);\n  border-color: var(--appsmith-theme-primaryColor);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "import React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\n\nconst Button = ({ children, className, ...props }) => (\n  <button className={className} {...props}>\n    {children}\n  </button>\n);\n\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n\n  const handleNext = () => {\n    setCurrentIndex((prevIndex) => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n\n  return (\n    <div className=\"app\">\n      <div className=\"tip-container\">\n        <div className=\"tip-header\">\n          <h2>Custom Widget</h2>\n          <div>{currentIndex + 1} / {appsmith.model.tips.length}</div>\n        </div>\n        <div className=\"content\">{appsmith.model.tips[currentIndex]}</div>\n      </div>\n      <div className=\"button-container\">\n        <Button className=\"primary\" onClick={handleNext}>Next Tip</Button>\n        <Button className=\"reset\" disabled={currentIndex === 0} onClick={handleReset}>Reset</Button>\n      </div>\n    </div>\n  );\n}\n\nappsmith.onReady(() => {\n/*\n\t * This handler function will get called when parent application is ready.\n\t * Initialize your component here\n\t * more info - https://docs.appsmith.com/reference/widgets/custom#onready\n\t */\n    ReactDOM.render(<App />, document.getElementById(\"root\"));\n});"
        },
        "theme": "{{appsmith.theme}}",
        "dynamicBindingPathList": [
          {
            "key": "theme"
          }
        ],
        "dynamicTriggerPathList": [
          {
            "key": "onResetClick"
          }
        ],
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "backgroundColor": "#FFFFFF",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "external"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Custom",
        "key": "wtwyzsec9a",
        "iconSVG": "/static/media/icon.9b1065660dedd39cf997e3faa42244bc.svg",
        "thumbnailSVG": "/static/media/thumbnail.a7d7cde44fad9a0d4d490def43560a78.svg",
        "isCanvas": false,
        "isSearchWildcard": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "SECTION_WIDGET",
      {
        "type": "SECTION_WIDGET",
        "elevatedBackground": false,
        "children": [],
        "columns": 0,
        "responsiveBehavior": "fill",
        "rows": 0,
        "version": 1,
        "widgetName": "Section",
        "zoneCount": 1,
        "isVisible": true,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "searchTags": [
          "div",
          "parent",
          "group"
        ],
        "tags": [
          "Layout"
        ],
        "hideCard": true,
        "isDeprecated": false,
        "displayName": "Section",
        "key": "3oryyrjxex",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-section-selection",
          "focusBGCSSVar": "--on-canvas-ui-section-focus",
          "selectionColorCSSVar": "--on-canvas-ui-section-focus",
          "focusColorCSSVar": "--on-canvas-ui-section-selection",
          "disableParentSelection": true
        }
      }
    ],
    [
      "ZONE_WIDGET",
      {
        "type": "ZONE_WIDGET",
        "elevatedBackground": true,
        "children": [],
        "columns": 0,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "stretch",
        "rows": 0,
        "version": 1,
        "widgetName": "Zone",
        "isVisible": true,
        "useAsForm": false,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "searchTags": [
          "div",
          "parent",
          "group"
        ],
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Zone",
        "key": "9pp6cgbyei",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-zone-selection",
          "focusBGCSSVar": "--on-canvas-ui-zone-focus",
          "selectionColorCSSVar": "--on-canvas-ui-zone-focus",
          "focusColorCSSVar": "--on-canvas-ui-zone-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_PARAGRAPH_WIDGET",
      {
        "type": "WDS_PARAGRAPH_WIDGET",
        "text": "The important thing is not to stop questioning. Curiosity has its reason for existence. One cannot help but be in awe when one contemplates the mysteries of eternity, life, and the marvelous structure of reality. It is enough if one merely tries to comprehend a little of this mystery each day.",
        "fontSize": "body",
        "textAlign": "left",
        "textColor": "neutral",
        "widgetName": "Paragraph",
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "isVisible": true,
        "responsiveBehavior": "fill",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "type",
          "paragraph",
          "text",
          "content",
          "prose",
          "description",
          "multiline",
          "multi-line"
        ],
        "tags": [
          "Content"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Paragraph",
        "key": "4dlzyfxhq0",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_HEADING_WIDGET",
      {
        "type": "WDS_HEADING_WIDGET",
        "text": "Header",
        "fontSize": "heading",
        "textAlign": "left",
        "textColor": "neutral",
        "widgetName": "Heading",
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "isVisible": true,
        "responsiveBehavior": "fill",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "type",
          "paragraph",
          "text",
          "content",
          "prose",
          "description",
          "multiline",
          "multi-line"
        ],
        "tags": [
          "Suggested",
          "Content"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Heading",
        "key": "y7rvc4l3zw",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_MODAL_WIDGET",
      {
        "type": "WDS_MODAL_WIDGET",
        "detachFromLayout": true,
        "children": [],
        "widgetName": "Modal",
        "version": 1,
        "isVisible": false,
        "showFooter": true,
        "showHeader": true,
        "size": "medium",
        "title": "Modal Title",
        "showSubmitButton": true,
        "closeOnSubmit": true,
        "submitButtonText": "Save Changes",
        "cancelButtonText": "Cancel",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "searchTags": [
          "dialog",
          "popup",
          "modal",
          "window"
        ],
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Modal",
        "key": "u5hsjhwmdq",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": true
        }
      }
    ],
    [
      "WDS_STATS_WIDGET",
      {
        "type": "WDS_STATS_WIDGET",
        "isVisible": true,
        "widgetName": "StatsWidget",
        "version": 1,
        "animateLoading": true,
        "valueColor": "neutral",
        "valueChange": "+50%",
        "valueChangeColor": "positive",
        "value": "42",
        "label": "Active Users",
        "caption": "This week",
        "iconName": "shopping-bag",
        "responsiveBehavior": "fill",
        "elevatedBackground": false,
        "searchTags": [
          "statbox",
          "stats",
          "data",
          "indicator",
          "number",
          "value",
          "monitor",
          "dashboard",
          "signal"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Stats",
        "key": "6k3dsvt6bv",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_KEY_VALUE_WIDGET",
      {
        "type": "WDS_KEY_VALUE_WIDGET",
        "label": "Label",
        "widgetName": "KeyValue",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": true,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "TEXT",
        "version": 1,
        "showStepArrows": false,
        "searchTags": [
          "form",
          "text input",
          "number",
          "textarea",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "KeyValue",
        "key": "5fyya3zhhf",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_INLINE_BUTTONS_WIDGET",
      {
        "type": "WDS_INLINE_BUTTONS_WIDGET",
        "widgetName": "InlineButtons",
        "isDisabled": false,
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "buttonsList": {
          "button1": {
            "label": "Delete",
            "isVisible": true,
            "isDisabled": false,
            "id": "button1",
            "index": 0,
            "variant": "outlined",
            "color": "negative"
          },
          "button2": {
            "label": "Separator",
            "isVisible": true,
            "isDisabled": false,
            "id": "button2",
            "isSeparator": true,
            "index": 1,
            "itemType": "SEPARATOR"
          },
          "button3": {
            "label": "Cancel",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button3",
            "index": 2,
            "variant": "outlined",
            "color": "accent"
          },
          "button4": {
            "label": "Save Changes",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button4",
            "index": 3,
            "variant": "filled",
            "color": "accent"
          }
        },
        "searchTags": [
          "click",
          "submit",
          "button",
          "action",
          "toolbar",
          "menu",
          "panel",
          "delete",
          "save",
          "cancel",
          "group",
          "bar",
          "footer",
          "form"
        ],
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Inline Buttons",
        "key": "yfykg88wzn",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_EMAIL_INPUT_WIDGET",
      {
        "type": "WDS_EMAIL_INPUT_WIDGET",
        "label": "Label",
        "widgetName": "EmailInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "EMAIL",
        "version": 1,
        "showStepArrows": false,
        "searchTags": [
          "form",
          "text input",
          "number",
          "textarea",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Email Input",
        "key": "q85hmom98e",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_PASSWORD_INPUT_WIDGET",
      {
        "type": "WDS_PASSWORD_INPUT_WIDGET",
        "label": "Label",
        "widgetName": "PasswordInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "PASSWORD",
        "version": 1,
        "showStepArrows": false,
        "searchTags": [
          "form",
          "text input",
          "number",
          "textarea",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Password Input",
        "key": "zzwl3itbiw",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_NUMBER_INPUT_WIDGET",
      {
        "type": "WDS_NUMBER_INPUT_WIDGET",
        "label": "Label",
        "widgetName": "NumberInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "NUMBER",
        "version": 1,
        "showStepArrows": false,
        "searchTags": [
          "form",
          "text input",
          "number",
          "textarea",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Number Input",
        "key": "qhre53pvus",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_MULTILINE_INPUT_WIDGET",
      {
        "type": "WDS_MULTILINE_INPUT_WIDGET",
        "label": "Label",
        "widgetName": "MultilineInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "MULTI_LINE_TEXT",
        "version": 1,
        "showStepArrows": false,
        "searchTags": [
          "form",
          "text input",
          "number",
          "textarea",
          "input",
          "entry",
          "capture",
          "prompt",
          "field",
          "textfield",
          "text field",
          "enter"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Multiline Input",
        "key": "ivkuim7895",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_SELECT_WIDGET",
      {
        "type": "WDS_SELECT_WIDGET",
        "animateLoading": true,
        "label": "Label",
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "defaultOptionValue": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "Select",
        "widgetType": "SELECT",
        "version": 1,
        "responsiveBehavior": "fill",
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ],
        "placeholderText": "Select an item",
        "searchTags": [
          "choice",
          "option",
          "choose",
          "pick",
          "select",
          "dropdown"
        ],
        "tags": [
          "Select"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Select",
        "key": "h58tbggq3i",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_DATEPICKER_WIDGET",
      {
        "type": "WDS_DATEPICKER_WIDGET",
        "animateLoading": true,
        "label": "Label",
        "dateFormat": "YYYY-MM-DD HH:mm",
        "defaultOptionValue": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "DatePicker",
        "widgetType": "WDS_DATE_PICKER",
        "version": 1,
        "timePrecision": "day",
        "responsiveBehavior": "fill",
        "inputType": "DATE",
        "searchTags": [
          "datepicker",
          "appointment",
          "calendar",
          "date",
          "day",
          "hour",
          "meeting",
          "moment",
          "schedule",
          "time",
          "week",
          "year"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "DatePicker",
        "key": "xdpip5aacy",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_MULTI_SELECT_WIDGET",
      {
        "type": "WDS_MULTI_SELECT_WIDGET",
        "animateLoading": true,
        "label": "Label",
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "defaultOptionValues": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "MultiSelect",
        "version": 1,
        "responsiveBehavior": "fill",
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ],
        "placeholderText": "Select an item",
        "searchTags": [
          "choice",
          "option",
          "choose",
          "pick",
          "select",
          "dropdown"
        ],
        "tags": [
          "Select"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "MultiSelect",
        "key": "e5pes4qdro",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CANVAS_WIDGET",
      {
        "type": "CANVAS_WIDGET",
        "rows": 0,
        "columns": 0,
        "widgetName": "Canvas",
        "version": 1,
        "detachFromLayout": true,
        "flexLayers": [],
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "hideCard": true,
        "isDeprecated": false,
        "displayName": "Canvas",
        "key": "d9pgsk4s6b",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": true
        }
      }
    ],
    [
      "SKELETON_WIDGET",
      {
        "type": "SKELETON_WIDGET",
        "isLoading": true,
        "rows": 4,
        "columns": 4,
        "widgetName": "Skeleton",
        "version": 1,
        "hideCard": true,
        "isDeprecated": false,
        "displayName": "Skeleton",
        "key": "e1d7bmuq16",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CONTAINER_WIDGET",
      {
        "type": "CONTAINER_WIDGET",
        "backgroundColor": "#FFFFFF",
        "rows": 10,
        "columns": 24,
        "widgetName": "Container",
        "containerStyle": "card",
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "boxShadow": "NONE",
        "animateLoading": true,
        "children": [],
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "children": []
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "version": 1,
        "flexVerticalAlignment": "stretch",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "minDynamicHeight": 10,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "shouldScrollContents": true,
        "searchTags": [
          "div",
          "parent",
          "group"
        ],
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Container",
        "key": "2el8qbykbx",
        "iconSVG": "/static/media/icon.b4f5f9eb27fc2bb537b53187836aea6c.svg",
        "thumbnailSVG": "/static/media/thumbnail.6cb355b93146b5347bbb048a568ed446.svg",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "TEXT_WIDGET",
      {
        "type": "TEXT_WIDGET",
        "text": "Hello {{appsmith.user.name || appsmith.user.email}}",
        "fontSize": "1rem",
        "fontStyle": "BOLD",
        "textAlign": "LEFT",
        "textColor": "#231F20",
        "rows": 4,
        "columns": 16,
        "widgetName": "Text",
        "shouldTruncate": false,
        "overflow": "NONE",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "typography",
          "paragraph",
          "label"
        ],
        "tags": [
          "Suggested",
          "Content"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Text",
        "key": "mtlwipyhh6",
        "iconSVG": "/static/media/icon.301748e14b0306a7b94ece2d9e2c11cc.svg",
        "thumbnailSVG": "/static/media/thumbnail.0c129b82c9b3e4cd4920563b289659ab.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "TABLE_WIDGET",
      {
        "type": "TABLE_WIDGET",
        "responsiveBehavior": "fill",
        "rows": 28,
        "columns": 34,
        "animateLoading": true,
        "defaultSelectedRow": "0",
        "label": "Data",
        "widgetName": "Table",
        "searchKey": "",
        "textSize": "0.875rem",
        "horizontalAlignment": "LEFT",
        "verticalAlignment": "CENTER",
        "totalRecordsCount": 0,
        "defaultPageSize": 0,
        "dynamicBindingPathList": [
          {
            "key": "primaryColumns.step.computedValue"
          },
          {
            "key": "primaryColumns.task.computedValue"
          },
          {
            "key": "primaryColumns.status.computedValue"
          },
          {
            "key": "primaryColumns.action.computedValue"
          },
          {
            "key": "primaryColumns.action.buttonColor"
          },
          {
            "key": "primaryColumns.action.borderRadius"
          },
          {
            "key": "primaryColumns.action.boxShadow"
          }
        ],
        "primaryColumns": {
          "step": {
            "index": 0,
            "width": 150,
            "id": "step",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "text",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDerived": false,
            "label": "step",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.step))}}"
          },
          "task": {
            "index": 1,
            "width": 150,
            "id": "task",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "text",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDerived": false,
            "label": "task",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.task))}}"
          },
          "status": {
            "index": 2,
            "width": 150,
            "id": "status",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "text",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDerived": false,
            "label": "status",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.status))}}"
          },
          "action": {
            "index": 3,
            "width": 150,
            "id": "action",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "button",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDisabled": false,
            "isDerived": false,
            "label": "action",
            "onClick": "{{currentRow.step === '#1' ? showAlert('Done', 'success') : currentRow.step === '#2' ? navigateTo('https://docs.appsmith.com/core-concepts/connecting-to-data-sources/querying-a-database',undefined,'NEW_WINDOW') : navigateTo('https://docs.appsmith.com/core-concepts/displaying-data-read/display-data-tables',undefined,'NEW_WINDOW')}}",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.action))}}"
          }
        },
        "derivedColumns": {},
        "tableData": [
          {
            "step": "#1",
            "task": "Drop a table",
            "status": "✅",
            "action": ""
          },
          {
            "step": "#2",
            "task": "Create a query fetch_users with the Mock DB",
            "status": "--",
            "action": ""
          },
          {
            "step": "#3",
            "task": "Bind the query using => fetch_users.data",
            "status": "--",
            "action": ""
          }
        ],
        "columnSizeMap": {
          "task": 245,
          "step": 62,
          "status": 75
        },
        "columnOrder": [
          "step",
          "task",
          "status",
          "action"
        ],
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "enableClientSideSearch": true,
        "isVisibleSearch": true,
        "isVisibleFilters": true,
        "isVisibleDownload": true,
        "isVisiblePagination": true,
        "isSortable": true,
        "delimiter": ",",
        "version": 3,
        "searchTags": [
          "datagrid"
        ],
        "hideCard": true,
        "isDeprecated": false,
        "displayName": "Table",
        "key": "jd6tgekb6t",
        "iconSVG": "/static/media/icon.24905525921dd6f5ff46d0dd843b9e12.svg",
        "needsHeightForContent": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CHECKBOX_WIDGET",
      {
        "type": "CHECKBOX_WIDGET",
        "rows": 4,
        "columns": 12,
        "label": "Label",
        "defaultCheckedState": true,
        "widgetName": "Checkbox",
        "version": 1,
        "alignWidget": "LEFT",
        "labelPosition": "Left",
        "isDisabled": false,
        "isRequired": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "boolean"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Checkbox",
        "key": "s8mno6invd",
        "iconSVG": "/static/media/icon.57df02ed5f94295f286d31eb27a0bb9f.svg",
        "thumbnailSVG": "/static/media/thumbnail.aa4d27836e27bb6c4c45db14dee8f2b2.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "RADIO_GROUP_WIDGET",
      {
        "type": "RADIO_GROUP_WIDGET",
        "rows": 6,
        "columns": 20,
        "animateLoading": true,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "options": [
          {
            "label": "Yes",
            "value": "Y"
          },
          {
            "label": "No",
            "value": "N"
          }
        ],
        "defaultOptionValue": "Y",
        "isRequired": false,
        "isDisabled": false,
        "isInline": true,
        "alignment": "left",
        "widgetName": "RadioGroup",
        "version": 1,
        "flexVerticalAlignment": "start",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "choice"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Radio Group",
        "key": "zwc7kjpnxl",
        "iconSVG": "/static/media/icon.f75d6119a27d024bcadffee55460cf52.svg",
        "thumbnailSVG": "/static/media/thumbnail.f1ed00d0b9588bed20e6359d9d03a790.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "BUTTON_WIDGET",
      {
        "type": "BUTTON_WIDGET",
        "animateLoading": true,
        "text": "Submit",
        "buttonVariant": "PRIMARY",
        "placement": "CENTER",
        "rows": 4,
        "columns": 16,
        "widgetName": "Button",
        "isDisabled": false,
        "isVisible": true,
        "isDefaultClickDisabled": true,
        "disabledWhenInvalid": false,
        "resetFormOnClick": false,
        "recaptchaType": "V3",
        "version": 1,
        "responsiveBehavior": "hug",
        "minWidth": 120,
        "searchTags": [
          "click",
          "submit"
        ],
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Button",
        "key": "3poxdwwgxc",
        "iconSVG": "/static/media/icon.7a418b9e1899a550d7e8f33b48cbde12.svg",
        "thumbnailSVG": "/static/media/thumbnail.a348658e996feaad96cadc30d99374ff.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "IMAGE_WIDGET",
      {
        "type": "IMAGE_WIDGET",
        "defaultImage": "https://assets.appsmith.com/widgets/default.png",
        "imageShape": "RECTANGLE",
        "maxZoomLevel": 1,
        "enableRotation": false,
        "enableDownload": false,
        "objectFit": "cover",
        "image": "",
        "rows": 12,
        "columns": 12,
        "widgetName": "Image",
        "version": 1,
        "animateLoading": true,
        "flexVerticalAlignment": "start",
        "tags": [
          "Media"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Image",
        "key": "5wn1ig02yz",
        "iconSVG": "/static/media/icon.fdb987a7ceacf7001426460138f7cd09.svg",
        "thumbnailSVG": "/static/media/thumbnail.74089bb21dfcb5890f6b106f93c3b9c8.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "VIDEO_WIDGET",
      {
        "type": "VIDEO_WIDGET",
        "rows": 28,
        "columns": 24,
        "widgetName": "Video",
        "url": "https://assets.appsmith.com/widgets/bird.mp4",
        "autoPlay": false,
        "version": 1,
        "animateLoading": true,
        "backgroundColor": "#000",
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "searchTags": [
          "youtube"
        ],
        "tags": [
          "Media"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Video",
        "key": "dqw4hhsede",
        "iconSVG": "/static/media/icon.fe5ef3670936349968c4e23591a873e1.svg",
        "thumbnailSVG": "/static/media/thumbnail.92f170b89cd60e633eb4db597d822682.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "TABS_WIDGET",
      {
        "type": "TABS_WIDGET",
        "flexVerticalAlignment": "stretch",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "rows": 15,
        "columns": 24,
        "shouldScrollContents": true,
        "widgetName": "Tabs",
        "animateLoading": true,
        "borderWidth": 1,
        "borderColor": "#E0DEDE",
        "backgroundColor": "#FFFFFF",
        "minDynamicHeight": 15,
        "tabsObj": {
          "tab1": {
            "label": "Tab 1",
            "id": "tab1",
            "widgetId": "",
            "isVisible": true,
            "index": 0,
            "positioning": "vertical"
          },
          "tab2": {
            "label": "Tab 2",
            "id": "tab2",
            "widgetId": "",
            "isVisible": true,
            "index": 1,
            "positioning": "vertical"
          }
        },
        "shouldShowTabs": true,
        "defaultTab": "Tab 1",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "left": 0,
                "top": 0
              },
              "props": {
                "detachFromLayout": true,
                "canExtend": true,
                "isVisible": true,
                "isDisabled": false,
                "shouldScrollContents": false,
                "tabId": "tab1",
                "tabName": "Tab 1",
                "children": [],
                "version": 1,
                "bottomRow": 10
              }
            },
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "left": 0,
                "top": 0
              },
              "props": {
                "detachFromLayout": true,
                "canExtend": true,
                "isVisible": true,
                "isDisabled": false,
                "shouldScrollContents": false,
                "tabId": "tab2",
                "tabName": "Tab 2",
                "children": [],
                "version": 1,
                "bottomRow": 10
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "version": 3,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Tabs",
        "key": "r6t9h1f7qx",
        "iconSVG": "/static/media/icon.fc8ea4eabc0a574a49d5ab3cbabdeec7.svg",
        "thumbnailSVG": "/static/media/thumbnail.902d280515fd575657e8ccf99545112b.svg",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "MODAL_WIDGET",
      {
        "type": "MODAL_WIDGET",
        "rows": 24,
        "columns": 24,
        "width": 456,
        "height": 240,
        "minDynamicHeight": 24,
        "canEscapeKeyClose": true,
        "animateLoading": true,
        "detachFromLayout": true,
        "canOutsideClickClose": true,
        "shouldScrollContents": true,
        "widgetName": "Modal",
        "children": [],
        "version": 2,
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "left": 0,
                "top": 0
              },
              "props": {
                "detachFromLayout": true,
                "canExtend": true,
                "isVisible": true,
                "isDisabled": false,
                "shouldScrollContents": false,
                "children": [],
                "version": 1,
                "blueprint": {
                  "view": [
                    {
                      "type": "ICON_BUTTON_WIDGET",
                      "position": {
                        "left": 58,
                        "top": 0
                      },
                      "size": {
                        "rows": 4,
                        "cols": 6
                      },
                      "props": {
                        "buttonColor": "#858282",
                        "buttonVariant": "TERTIARY",
                        "borderRadius": "SHARP",
                        "iconName": "cross",
                        "iconSize": 24,
                        "version": 1
                      }
                    },
                    {
                      "type": "TEXT_WIDGET",
                      "position": {
                        "left": 1,
                        "top": 1
                      },
                      "size": {
                        "rows": 4,
                        "cols": 40
                      },
                      "props": {
                        "text": "Modal Title",
                        "fontSize": "1.25rem",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "position": {
                        "left": 31,
                        "top": 18
                      },
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "props": {
                        "text": "Close",
                        "buttonStyle": "PRIMARY",
                        "buttonVariant": "SECONDARY",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "position": {
                        "left": 47,
                        "top": 18
                      },
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "props": {
                        "text": "Confirm",
                        "buttonStyle": "PRIMARY_BUTTON",
                        "version": 1
                      }
                    }
                  ],
                  "operations": [
                    {
                      "type": "MODIFY_PROPS"
                    },
                    {
                      "type": "MODIFY_PROPS"
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "dialog",
          "popup",
          "notification"
        ],
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Modal",
        "key": "h1uup4tdi4",
        "iconSVG": "/static/media/icon.47fe8500526372db96cb58a82187ffeb.svg",
        "thumbnailSVG": "/static/media/thumbnail.c20e144182d9af35cde59e39d9afe632.svg",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": true
        }
      }
    ],
    [
      "CHART_WIDGET",
      {
        "type": "CHART_WIDGET",
        "rows": 32,
        "columns": 24,
        "widgetName": "Chart",
        "chartType": "COLUMN_CHART",
        "chartName": "Sales Report",
        "allowScroll": false,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "minWidth": 450,
        "showDataPointLabel": false,
        "customEChartConfig": "{{\n{\n  \"dataset\": {\n    \"source\": [\n      [\n        \"Day\",\n        \"Baidu\",\n        \"Google\",\n        \"Bing\"\n      ],\n      [\n        \"Mon\",\n        620,\n        120,\n        60\n      ],\n      [\n        \"Tue\",\n        732,\n        132,\n        72\n      ],\n      [\n        \"Wed\",\n        701,\n        101,\n        71\n      ],\n      [\n        \"Thu\",\n        734,\n        134,\n        74\n      ],\n      [\n        \"Fri\",\n        1090,\n        290,\n        190\n      ],\n      [\n        \"Sat\",\n        1130,\n        230,\n        130\n      ],\n      [\n        \"Sun\",\n        1120,\n        220,\n        110\n      ]\n    ]\n  },\n  \"tooltip\": {\n    \"trigger\": \"axis\",\n    \"axisPointer\": {\n      \"type\": \"shadow\"\n    }\n  },\n  \"title\": {\n    \"text\": \"Search Engine Usage\",\n    \"left\": \"center\",\n    \"textStyle\": {\n      \"width\": 200,\n      \"overflow\": \"truncate\"\n    }\n  },\n  \"legend\": {\n    \"top\": 40,\n    \"type\": \"scroll\"\n  },\n  \"grid\": {\n    \"left\": 15,\n    \"right\": 15,\n    \"bottom\": 30,\n    \"top\": 100,\n    \"containLabel\": true\n  },\n  \"xAxis\": [\n    {\n      \"type\": \"category\"\n    }\n  ],\n  \"yAxis\": [\n    {\n      \"type\": \"value\"\n    }\n  ],\n  \"series\": [\n    {\n      \"type\": \"bar\",\n      \"stack\": \"Search Engine\"\n    },\n    {\n      \"type\": \"bar\",\n      \"stack\": \"Search Engine\"\n    },\n    {\n      \"type\": \"bar\",\n      \"stack\": \"Search Engine\"\n    }\n  ]\n}\n}}",
        "chartData": {
          "ql9b001jqp": {
            "seriesName": "2023",
            "data": [
              {
                "x": "Product1",
                "y": 20000
              },
              {
                "x": "Product2",
                "y": 22000
              },
              {
                "x": "Product3",
                "y": 32000
              }
            ]
          }
        },
        "xAxisName": "Product Line",
        "yAxisName": "Revenue($)",
        "labelOrientation": "auto",
        "customFusionChartConfig": {
          "type": "column2d",
          "dataSource": {
            "data": [
              {
                "label": "Product1",
                "value": 20000
              },
              {
                "label": "Product2",
                "value": 22000
              },
              {
                "label": "Product3",
                "value": 32000
              }
            ],
            "chart": {
              "caption": "Sales Report",
              "xAxisName": "Product Line",
              "yAxisName": "Revenue($)",
              "theme": "fusion",
              "alignCaptionWithCanvas": 1,
              "captionFontSize": "24",
              "captionAlignment": "center",
              "captionPadding": "20",
              "captionFontColor": "#231F20",
              "legendIconSides": "4",
              "legendIconBgAlpha": "100",
              "legendIconAlpha": "100",
              "legendPosition": "top",
              "canvasPadding": "0",
              "chartLeftMargin": "20",
              "chartTopMargin": "10",
              "chartRightMargin": "40",
              "chartBottomMargin": "10",
              "xAxisNameFontSize": "14",
              "labelFontSize": "12",
              "labelFontColor": "#716e6e",
              "xAxisNameFontColor": "#716e6e",
              "yAxisNameFontSize": "14",
              "yAxisValueFontSize": "12",
              "yAxisValueFontColor": "#716e6e",
              "yAxisNameFontColor": "#716e6e"
            }
          }
        },
        "dynamicBindingPathList": [
          {
            "key": "customEChartConfig"
          }
        ],
        "searchTags": [
          "graph",
          "visuals",
          "visualisations"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Chart",
        "key": "69yli0dj07",
        "iconSVG": "/static/media/icon.dfffacd2f1d58b018712b35563ae6a31.svg",
        "thumbnailSVG": "/static/media/thumbnail.98fb19b2c4f99671c0888284cf939f3a.svg",
        "needsErrorInfo": true,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "MAP_WIDGET",
      {
        "type": "MAP_WIDGET",
        "rows": 40,
        "columns": 24,
        "isDisabled": false,
        "isVisible": true,
        "widgetName": "Map",
        "enableSearch": true,
        "zoomLevel": 50,
        "enablePickLocation": true,
        "allowZoom": true,
        "mapCenter": {
          "lat": 40.7128,
          "long": -74.006
        },
        "defaultMarkers": [
          {
            "lat": 40.7128,
            "long": -74.006,
            "title": "New York"
          }
        ],
        "isClickedMarkerCentered": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "flexVerticalAlignment": "start",
        "enableMapTypeControl": false,
        "tags": [
          "Content"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Map",
        "key": "v3bb0c3fst",
        "iconSVG": "/static/media/icon.d035b501543caf500462efd6598aac4f.svg",
        "thumbnailSVG": "/static/media/thumbnail.a67ea5d45fc8fa84754d11a409af1f33.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "RICH_TEXT_EDITOR_WIDGET",
      {
        "type": "RICH_TEXT_EDITOR_WIDGET",
        "defaultText": "This is the initial <b>content</b> of the editor",
        "rows": 20,
        "columns": 24,
        "animateLoading": true,
        "isDisabled": false,
        "isVisible": true,
        "isRequired": false,
        "widgetName": "RichTextEditor",
        "isDefaultClickDisabled": true,
        "inputType": "html",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "version": 1,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "flexVerticalAlignment": "start",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "input",
          "rte"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Rich Text Editor",
        "key": "jk14lfb2cq",
        "iconSVG": "/static/media/icon.757d7d5aeba566dd0ed4fbdfa932c80a.svg",
        "thumbnailSVG": "/static/media/thumbnail.b19d2640527b6f3fd53fe51eb20774d0.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "DATE_PICKER_WIDGET2",
      {
        "type": "DATE_PICKER_WIDGET2",
        "isDisabled": false,
        "datePickerType": "DATE_PICKER",
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "dateFormat": "YYYY-MM-DD HH:mm",
        "columns": 20,
        "widgetName": "DatePicker",
        "defaultDate": "2025-09-04T17:52:02.916Z",
        "minDate": "1920-12-31T18:30:00.000Z",
        "maxDate": "2121-12-31T18:29:00.000Z",
        "version": 2,
        "isRequired": false,
        "closeOnSelection": true,
        "shortcuts": false,
        "firstDayOfWeek": 0,
        "timePrecision": "minute",
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "calendar"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "DatePicker",
        "key": "9squsrl46c",
        "iconSVG": "/static/media/icon.4c94d9b859c11557d7a5d801df99e8d5.svg",
        "thumbnailSVG": "/static/media/thumbnail.6f2ddea04e74f31810326bef3bc239b8.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "SWITCH_WIDGET",
      {
        "type": "SWITCH_WIDGET",
        "label": "Label",
        "rows": 4,
        "columns": 12,
        "defaultSwitchState": true,
        "widgetName": "Switch",
        "alignWidget": "LEFT",
        "labelPosition": "Left",
        "version": 1,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "boolean"
        ],
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Switch",
        "key": "l39mbr260j",
        "iconSVG": "/static/media/icon.2d4319f7c985f3f078acf48f608eb8bf.svg",
        "thumbnailSVG": "/static/media/thumbnail.cd04c6d6a11266a806cebe39829607cb.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "FORM_WIDGET",
      {
        "type": "FORM_WIDGET",
        "rows": 40,
        "columns": 24,
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "animateLoading": true,
        "widgetName": "Form",
        "backgroundColor": "#FFFFFF",
        "children": [],
        "positioning": "fixed",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "children": [],
                "version": 1,
                "blueprint": {
                  "view": [
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 24
                      },
                      "position": {
                        "top": 1,
                        "left": 1.5
                      },
                      "props": {
                        "text": "Form",
                        "fontSize": "1.25rem",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "position": {
                        "top": 33,
                        "left": 46
                      },
                      "props": {
                        "text": "Submit",
                        "buttonVariant": "PRIMARY",
                        "disabledWhenInvalid": true,
                        "resetFormOnClick": true,
                        "recaptchaType": "V3",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "position": {
                        "top": 33,
                        "left": 30
                      },
                      "props": {
                        "text": "Reset",
                        "buttonVariant": "SECONDARY",
                        "disabledWhenInvalid": false,
                        "resetFormOnClick": true,
                        "recaptchaType": "V3",
                        "version": 1
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "UPDATE_CREATE_PARAMS_BEFORE_ADD"
            },
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "flexVerticalAlignment": "stretch",
        "minDynamicHeight": 10,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "shouldScrollContents": true,
        "searchTags": [
          "group"
        ],
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Form",
        "key": "hfya0wlsey",
        "iconSVG": "/static/media/icon.24f5d58301a6354d1b3dc139aaede7c7.svg",
        "thumbnailSVG": "/static/media/thumbnail.3e92e6e159c53c6046da08eae3732a97.svg",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "RATE_WIDGET",
      {
        "type": "RATE_WIDGET",
        "rows": 4,
        "columns": 20,
        "animateLoading": true,
        "maxCount": 5,
        "defaultRate": 3,
        "activeColor": "#FFCB45",
        "inactiveColor": "#E0DEDE",
        "size": "LARGE",
        "isRequired": false,
        "isAllowHalf": false,
        "isDisabled": false,
        "isReadOnly": false,
        "tooltips": [
          "Terrible",
          "Bad",
          "Neutral",
          "Good",
          "Great"
        ],
        "widgetName": "Rating",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "searchTags": [
          "stars",
          "rate"
        ],
        "tags": [
          "Content"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Rating",
        "key": "9gyzfmbww1",
        "iconSVG": "/static/media/icon.20ef371cafeaba80f2e84730c7414c52.svg",
        "thumbnailSVG": "/static/media/thumbnail.49bc434e5d61fee59efddf43533e90cf.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "IFRAME_WIDGET",
      {
        "type": "IFRAME_WIDGET",
        "source": "https://www.example.com",
        "borderOpacity": 100,
        "borderWidth": 1,
        "rows": 32,
        "columns": 24,
        "widgetName": "Iframe",
        "version": 1,
        "animateLoading": true,
        "isVisible": true,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "searchTags": [
          "embed"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Iframe",
        "key": "m121ipbyup",
        "iconSVG": "/static/media/icon.5ed210e31889ad556e4ca851edd0dd70.svg",
        "thumbnailSVG": "/static/media/thumbnail.542dc4e979f061c70c19af83e2460c35.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "TABS_MIGRATOR_WIDGET",
      {
        "type": "TABS_MIGRATOR_WIDGET",
        "isLoading": true,
        "rows": 1,
        "columns": 1,
        "widgetName": "Skeleton",
        "version": 1,
        "animateLoading": true,
        "hideCard": true,
        "isDeprecated": false,
        "displayName": "TabsMigrator",
        "key": "zgxj5o3fel",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "DIVIDER_WIDGET",
      {
        "type": "DIVIDER_WIDGET",
        "rows": 4,
        "columns": 20,
        "widgetName": "Divider",
        "orientation": "horizontal",
        "capType": "nc",
        "capSide": 0,
        "strokeStyle": "solid",
        "dividerColor": "#858282",
        "thickness": 2,
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "searchTags": [
          "line"
        ],
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Divider",
        "key": "huzxuy2kod",
        "iconSVG": "/static/media/icon.2903cd917d4a4a08afe7e1377c2adc93.svg",
        "thumbnailSVG": "/static/media/thumbnail.85250b0a5e6d690bf6499c965e769b14.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "MENU_BUTTON_WIDGET",
      {
        "type": "MENU_BUTTON_WIDGET",
        "label": "Open Menu",
        "menuVariant": "PRIMARY",
        "placement": "CENTER",
        "isCompact": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "menuItemsSource": "STATIC",
        "menuItems": {
          "menuItem1": {
            "label": "First Menu Item",
            "id": "menuItem1",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 0
          },
          "menuItem2": {
            "label": "Second Menu Item",
            "id": "menuItem2",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 1
          },
          "menuItem3": {
            "label": "Third Menu Item",
            "id": "menuItem3",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 2
          }
        },
        "rows": 4,
        "columns": 16,
        "widgetName": "MenuButton",
        "version": 1,
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Menu button",
        "key": "vna591uxea",
        "iconSVG": "/static/media/icon.5e66a9029af45161f7a3fbfb4262e5ee.svg",
        "thumbnailSVG": "/static/media/thumbnail.57aa4a1b6aaab3ade6ce3bc3a1177531.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "ICON_BUTTON_WIDGET",
      {
        "type": "ICON_BUTTON_WIDGET",
        "iconName": "plus",
        "buttonVariant": "PRIMARY",
        "isDisabled": false,
        "isVisible": true,
        "rows": 4,
        "columns": 4,
        "widgetName": "IconButton",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "hug",
        "minWidth": 50,
        "searchTags": [
          "click",
          "submit"
        ],
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Icon button",
        "key": "1as6u4gxts",
        "iconSVG": "/static/media/icon.e5045469a82b76384d0c537fc9545012.svg",
        "thumbnailSVG": "/static/media/thumbnail.b02b764a52db45d332efa723178a50a4.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CHECKBOX_GROUP_WIDGET",
      {
        "type": "CHECKBOX_GROUP_WIDGET",
        "rows": 6,
        "columns": 23,
        "animateLoading": true,
        "labelTextSize": "0.875rem",
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE"
        ],
        "isDisabled": false,
        "isInline": true,
        "isRequired": false,
        "isVisible": true,
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "widgetName": "CheckboxGroup",
        "version": 2,
        "flexVerticalAlignment": "start",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Checkbox Group",
        "key": "avzurj2nzz",
        "iconSVG": "/static/media/icon.29bb31b64d6d6e72357b05d0df87e626.svg",
        "thumbnailSVG": "/static/media/thumbnail.2dc0ec495bdfde499e9ce54c2dd91015.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "FILE_PICKER_WIDGET_V2",
      {
        "type": "FILE_PICKER_WIDGET_V2",
        "rows": 4,
        "files": [],
        "selectedFiles": [],
        "allowedFileTypes": [],
        "label": "Select Files",
        "columns": 16,
        "maxNumFiles": 1,
        "maxFileSize": 5,
        "fileDataType": "Base64",
        "dynamicTyping": true,
        "widgetName": "FilePicker",
        "isDefaultClickDisabled": true,
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "hug",
        "minWidth": 120,
        "searchTags": [
          "upload"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "FilePicker",
        "key": "4r59of2d8k",
        "iconSVG": "/static/media/icon.b08ce7590c570fc5b7ffa528c70d35bf.svg",
        "thumbnailSVG": "/static/media/thumbnail.164363adea04c44e54b1fd47657a579e.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "STATBOX_WIDGET",
      {
        "type": "STATBOX_WIDGET",
        "rows": 14,
        "columns": 22,
        "animateLoading": true,
        "widgetName": "Statbox",
        "backgroundColor": "white",
        "borderWidth": "1",
        "borderColor": "#E0DEDE",
        "children": [],
        "positioning": "fixed",
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "stretch",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "children": [],
                "version": 1,
                "blueprint": {
                  "view": [
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 36
                      },
                      "position": {
                        "top": 0,
                        "left": 1
                      },
                      "props": {
                        "text": "Page Views",
                        "fontSize": "0.875rem",
                        "textColor": "#999999",
                        "version": 1
                      }
                    },
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 36
                      },
                      "position": {
                        "top": 4,
                        "left": 1
                      },
                      "props": {
                        "text": "2.6 M",
                        "fontSize": "1.25rem",
                        "fontStyle": "BOLD",
                        "version": 1
                      }
                    },
                    {
                      "type": "ICON_BUTTON_WIDGET",
                      "size": {
                        "rows": 8,
                        "cols": 16
                      },
                      "position": {
                        "top": 2,
                        "left": 46
                      },
                      "props": {
                        "iconName": "arrow-top-right",
                        "buttonStyle": "PRIMARY",
                        "buttonVariant": "PRIMARY",
                        "version": 1
                      }
                    },
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 36
                      },
                      "position": {
                        "top": 8,
                        "left": 1
                      },
                      "props": {
                        "text": "21% more than last month",
                        "fontSize": "0.875rem",
                        "textColor": "#03B365",
                        "version": 1
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "minDynamicHeight": 10,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "shouldScrollContents": true,
        "searchTags": [
          "statbox"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Stats Box",
        "key": "fdchlccen1",
        "iconSVG": "/static/media/icon.d814b14b73560d3b5e8d66df5749bff5.svg",
        "thumbnailSVG": "/static/media/thumbnail.8acd8070c8c88f657e7fd6c650aecc0c.svg",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "AUDIO_RECORDER_WIDGET",
      {
        "type": "AUDIO_RECORDER_WIDGET",
        "iconColor": "white",
        "isDisabled": false,
        "isVisible": true,
        "rows": 7,
        "columns": 16,
        "widgetName": "AudioRecorder",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "searchTags": [
          "sound recorder",
          "voice recorder"
        ],
        "tags": [
          "External"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Audio Recorder",
        "key": "lnq993zo9u",
        "iconSVG": "/static/media/icon.dedfcdc0330ddacb5c0398af2acd10ae.svg",
        "thumbnailSVG": "/static/media/thumbnail.4513fbf2818c6a93ab8300818615fcec.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "DOCUMENT_VIEWER_WIDGET",
      {
        "type": "DOCUMENT_VIEWER_WIDGET",
        "widgetName": "DocumentViewer",
        "docUrl": "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
        "rows": 40,
        "columns": 24,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "searchTags": [
          "pdf"
        ],
        "tags": [
          "Media"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Document Viewer",
        "key": "ntpj7wxleh",
        "iconSVG": "/static/media/icon.c7d572f66b477de57fcec8776c95154f.svg",
        "thumbnailSVG": "/static/media/thumbnail.90b68df6fa9cdb12189336cd5c4ed121.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "BUTTON_GROUP_WIDGET",
      {
        "type": "BUTTON_GROUP_WIDGET",
        "rows": 4,
        "columns": 24,
        "widgetName": "ButtonGroup",
        "orientation": "horizontal",
        "buttonVariant": "PRIMARY",
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "groupButtons": {
          "groupButton1": {
            "label": "Favorite",
            "iconName": "heart",
            "id": "groupButton1",
            "widgetId": "",
            "buttonType": "SIMPLE",
            "placement": "CENTER",
            "isVisible": true,
            "isDisabled": false,
            "disabledWhenInvalid": false,
            "index": 0,
            "menuItems": {}
          },
          "groupButton2": {
            "label": "Add",
            "iconName": "add",
            "id": "groupButton2",
            "buttonType": "SIMPLE",
            "placement": "CENTER",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "disabledWhenInvalid": false,
            "index": 1,
            "menuItems": {}
          },
          "groupButton3": {
            "label": "More",
            "iconName": "more",
            "id": "groupButton3",
            "buttonType": "MENU",
            "placement": "CENTER",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "disabledWhenInvalid": false,
            "index": 2,
            "menuItems": {
              "menuItem1": {
                "label": "First Option",
                "backgroundColor": "#FFFFFF",
                "id": "menuItem1",
                "widgetId": "",
                "onClick": "",
                "isVisible": true,
                "isDisabled": false,
                "disabledWhenInvalid": false,
                "index": 0
              },
              "menuItem2": {
                "label": "Second Option",
                "backgroundColor": "#FFFFFF",
                "id": "menuItem2",
                "widgetId": "",
                "onClick": "",
                "isVisible": true,
                "isDisabled": false,
                "disabledWhenInvalid": false,
                "index": 1
              },
              "menuItem3": {
                "label": "Delete",
                "iconName": "trash",
                "iconColor": "#FFFFFF",
                "iconAlign": "right",
                "textColor": "#FFFFFF",
                "backgroundColor": "#DD4B34",
                "id": "menuItem3",
                "widgetId": "",
                "onClick": "",
                "isVisible": true,
                "isDisabled": false,
                "disabledWhenInvalid": false,
                "index": 2
              }
            }
          }
        },
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "searchTags": [
          "click",
          "submit"
        ],
        "tags": [
          "Buttons"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Button Group",
        "key": "ge9dfats0x",
        "iconSVG": "/static/media/icon.96e5c7d01c5e1eb6ceaaaa3934b3f655.svg",
        "thumbnailSVG": "/static/media/thumbnail.eaa22f923be763e8779a46432554f1ed.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "WDS_CUSTOM_WIDGET",
      {
        "type": "WDS_CUSTOM_WIDGET",
        "widgetName": "Custom",
        "version": 1,
        "onResetClick": "{{showAlert('Successfully reset!!', '');}}",
        "events": [
          "onResetClick"
        ],
        "elevatedBackground": false,
        "size": "AUTO",
        "isVisible": true,
        "defaultModel": "{\n  \"tips\": [\n    \"Pass data to this widget in the default model field\",\n    \"Access data in the javascript file using the appsmith.model variable\",\n    \"Create events in the widget and trigger them in the javascript file using appsmith.triggerEvent('eventName')\",\n    \"Access data in CSS as var(--appsmith-model-{property-name})\"\n  ]\n}",
        "srcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-color-bg-accent) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-color-bg-accent) !important;\n}\n\n.button-container button.primary:hover {\n  opacity: 0.8;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-color-bg-accent);\n  border-color: var(--appsmith-theme-color-bg-accent);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nimport React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\nconst Button = ({\n  children,\n  className,\n  ...props\n}) => /*#__PURE__*/React.createElement(\"button\", _extends({\n  className: className\n}, props), children);\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n  const handleNext = () => {\n    setCurrentIndex(prevIndex => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-header\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Custom Widget\"), /*#__PURE__*/React.createElement(\"div\", null, currentIndex + 1, \" / \", appsmith.model.tips.length)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"content\"\n  }, appsmith.model.tips[currentIndex])), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"button-container\"\n  }, /*#__PURE__*/React.createElement(Button, {\n    className: \"primary\",\n    onClick: handleNext\n  }, \"Next Tip\"), /*#__PURE__*/React.createElement(Button, {\n    className: \"reset\",\n    disabled: currentIndex === 0,\n    onClick: handleReset\n  }, \"Reset\")));\n}\nappsmith.onReady(() => {\n  /*\n   * This handler function will get called when parent application is ready.\n   * Initialize your component here\n   * more info - https://docs.appsmith.com/reference/widgets/custom#onready\n   */\n  ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById(\"root\"));\n});"
        },
        "uncompiledSrcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-color-bg-accent) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-color-bg-accent) !important;\n}\n\n.button-container button.primary:hover {\n  opacity: 0.8;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-color-bg-accent);\n  border-color: var(--appsmith-theme-color-bg-accent);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "import React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\n\nconst Button = ({ children, className, ...props }) => (\n  <button className={className} {...props}>\n    {children}\n  </button>\n);\n\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n\n  const handleNext = () => {\n    setCurrentIndex((prevIndex) => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n\n  return (\n    <div className=\"app\">\n      <div className=\"tip-container\">\n        <div className=\"tip-header\">\n          <h2>Custom Widget</h2>\n          <div>{currentIndex + 1} / {appsmith.model.tips.length}</div>\n        </div>\n        <div className=\"content\">{appsmith.model.tips[currentIndex]}</div>\n      </div>\n      <div className=\"button-container\">\n        <Button className=\"primary\" onClick={handleNext}>Next Tip</Button>\n        <Button className=\"reset\" disabled={currentIndex === 0} onClick={handleReset}>Reset</Button>\n      </div>\n    </div>\n  );\n}\n\nappsmith.onReady(() => {\n  /*\n   * This handler function will get called when parent application is ready.\n   * Initialize your component here\n   * more info - https://docs.appsmith.com/reference/widgets/custom#onready\n   */\n  ReactDOM.render(<App />, document.getElementById(\"root\"));\n});"
        },
        "dynamicTriggerPathList": [
          {
            "key": "onResetClick"
          }
        ],
        "responsiveBehavior": "fill",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "searchTags": [
          "external"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Custom",
        "key": "tbqntbo7pp",
        "iconSVG": "/static/media/icon.9b1065660dedd39cf997e3faa42244bc.svg",
        "thumbnailSVG": "/static/media/thumbnail.a7d7cde44fad9a0d4d490def43560a78.svg",
        "isCanvas": false,
        "isSearchWildcard": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "MULTI_SELECT_TREE_WIDGET",
      {
        "type": "MULTI_SELECT_TREE_WIDGET",
        "rows": 7,
        "columns": 20,
        "mode": "SHOW_ALL",
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE",
            "children": [
              {
                "label": "Dark Blue",
                "value": "DARK BLUE"
              },
              {
                "label": "Light Blue",
                "value": "LIGHT BLUE"
              }
            ]
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "widgetName": "MultiTreeSelect",
        "defaultOptionValue": [
          "GREEN"
        ],
        "version": 1,
        "isVisible": true,
        "isRequired": false,
        "isDisabled": false,
        "allowClear": false,
        "expandAll": false,
        "placeholderText": "Select option(s)",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "dropdown",
          "multiselecttree"
        ],
        "tags": [
          "Select"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Multi TreeSelect",
        "key": "kvu0noqkza",
        "iconSVG": "/static/media/icon.b0d26e822c49c805f107be2fed689d5d.svg",
        "thumbnailSVG": "/static/media/thumbnail.d1dd4f1ce55fa3e93b8a4de404e481cc.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "SINGLE_SELECT_TREE_WIDGET",
      {
        "type": "SINGLE_SELECT_TREE_WIDGET",
        "rows": 7,
        "columns": 20,
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE",
            "children": [
              {
                "label": "Dark Blue",
                "value": "DARK BLUE"
              },
              {
                "label": "Light Blue",
                "value": "LIGHT BLUE"
              }
            ]
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "widgetName": "TreeSelect",
        "defaultOptionValue": "BLUE",
        "version": 1,
        "isVisible": true,
        "isRequired": false,
        "isDisabled": false,
        "allowClear": false,
        "expandAll": false,
        "placeholderText": "Select option",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "dropdown",
          "singleselecttree"
        ],
        "tags": [
          "Select"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "TreeSelect",
        "key": "4bh82gcm4j",
        "iconSVG": "/static/media/icon.cacc1e6ede0643cd41f8cb09ef2a9dbd.svg",
        "thumbnailSVG": "/static/media/thumbnail.bc59917a102b6adb6de852484370cc41.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "SWITCH_GROUP_WIDGET",
      {
        "type": "SWITCH_GROUP_WIDGET",
        "widgetName": "SwitchGroup",
        "rows": 6,
        "columns": 26,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE"
        ],
        "isDisabled": false,
        "isRequired": false,
        "isInline": true,
        "isVisible": true,
        "animateLoading": true,
        "alignment": "left",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "version": 1,
        "labelTextSize": "0.875rem",
        "flexVerticalAlignment": "start",
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "tags": [
          "Toggles"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Switch Group",
        "key": "7vhqsklmsg",
        "iconSVG": "/static/media/icon.8f0179c1d72f93abcfc8b07e982d01ef.svg",
        "thumbnailSVG": "/static/media/thumbnail.a24508dfef3d45bdae750aa0d2e016c9.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "AUDIO_WIDGET",
      {
        "type": "AUDIO_WIDGET",
        "rows": 4,
        "columns": 28,
        "widgetName": "Audio",
        "url": "https://assets.appsmith.com/widgets/birds_chirping.mp3",
        "autoPlay": false,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "searchTags": [
          "mp3",
          "sound",
          "wave",
          "player"
        ],
        "tags": [
          "Media"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Audio",
        "key": "h0ekacdd9i",
        "iconSVG": "/static/media/icon.928a120c9ea90eecc2d7b37ba85c6a16.svg",
        "thumbnailSVG": "/static/media/thumbnail.6be15396ae96265e42ee0b4f0ea47b84.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "PROGRESSBAR_WIDGET",
      {
        "type": "PROGRESSBAR_WIDGET",
        "widgetName": "ProgressBar",
        "rows": 4,
        "columns": 28,
        "isVisible": true,
        "showResult": false,
        "barType": "indeterminate",
        "progress": 50,
        "steps": 1,
        "version": 1,
        "responsiveBehavior": "fill",
        "tags": [
          "Content"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "PROGRESS_WIDGET",
        "displayName": "Progress Bar",
        "key": "93ykgw5awc",
        "iconSVG": "/static/media/icon.63065ff64699dbf6b2267d42d3713b98.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CAMERA_WIDGET",
      {
        "type": "CAMERA_WIDGET",
        "widgetName": "Camera",
        "rows": 33,
        "columns": 25,
        "mode": "CAMERA",
        "isDisabled": false,
        "isVisible": true,
        "isMirrored": true,
        "version": 1,
        "responsiveBehavior": "hug",
        "flexVerticalAlignment": "start",
        "searchTags": [
          "photo",
          "video recorder"
        ],
        "tags": [
          "External"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Camera",
        "key": "h8ijer1khs",
        "iconSVG": "/static/media/icon.e2ff2fb95333469429164034949f4442.svg",
        "thumbnailSVG": "/static/media/thumbnail.8cd95033bb6345b71ab6da5c06462725.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "MAP_CHART_WIDGET",
      {
        "type": "MAP_CHART_WIDGET",
        "rows": 32,
        "columns": 24,
        "widgetName": "MapChart",
        "version": 1,
        "mapType": "WORLD",
        "mapTitle": "Global Population",
        "showLabels": true,
        "data": [
          {
            "id": "NA",
            "value": ".82"
          },
          {
            "id": "SA",
            "value": "2.04"
          },
          {
            "id": "AS",
            "value": "1.78"
          },
          {
            "id": "EU",
            "value": ".40"
          },
          {
            "id": "AF",
            "value": "2.58"
          },
          {
            "id": "AU",
            "value": "1.30"
          }
        ],
        "colorRange": [
          {
            "minValue": 0.5,
            "maxValue": 1,
            "code": "#FFD74D"
          },
          {
            "minValue": 1,
            "maxValue": 2,
            "code": "#FB8C00"
          },
          {
            "minValue": 2,
            "maxValue": 3,
            "code": "#E65100"
          }
        ],
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "minWidth": 450,
        "searchTags": [
          "graph",
          "visuals",
          "visualisations"
        ],
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Map Chart",
        "key": "zykt5mtktz",
        "iconSVG": "/static/media/icon.b1d511ef5f5ccead9820e3f4bf393381.svg",
        "thumbnailSVG": "/static/media/thumbnail.ce80e3c5d01fe182e07c4e48df5bb6d8.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "SELECT_WIDGET",
      {
        "type": "SELECT_WIDGET",
        "rows": 7,
        "columns": 20,
        "placeholderText": "Select option",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "serverSideFiltering": false,
        "widgetName": "Select",
        "defaultOptionValue": "GREEN",
        "version": 1,
        "isFilterable": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "labelTextSize": "0.875rem",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ],
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "dropdown"
        ],
        "tags": [
          "Suggested",
          "Select"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Select",
        "key": "68x4yyhsnm",
        "iconSVG": "/static/media/icon.c94480439adb48de6883bb496aa5ef7d.svg",
        "thumbnailSVG": "/static/media/thumbnail.9aef24cb159e9c6e4d0f1d7ca4fb0c79.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "MULTI_SELECT_WIDGET_V2",
      {
        "type": "MULTI_SELECT_WIDGET_V2",
        "rows": 7,
        "columns": 20,
        "animateLoading": true,
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "sourceData": [
          {
            "name": "Blue",
            "code": "BLUE"
          },
          {
            "name": "Green",
            "code": "GREEN"
          },
          {
            "name": "Red",
            "code": "RED"
          }
        ],
        "optionLabel": "name",
        "optionValue": "code",
        "widgetName": "MultiSelect",
        "isFilterable": true,
        "serverSideFiltering": false,
        "defaultOptionValue": [
          "GREEN",
          "RED"
        ],
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "placeholderText": "Select option(s)",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "dropdown",
          "tags"
        ],
        "tags": [
          "Select"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "MultiSelect",
        "key": "xekorvcgmo",
        "iconSVG": "/static/media/icon.4a4d6bd163e2ef0f2abf68c4ab5b7706.svg",
        "thumbnailSVG": "/static/media/thumbnail.9770668f6ae1bf4d3b439b1d90948e94.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "MULTI_SELECT_WIDGET",
      {
        "type": "MULTI_SELECT_WIDGET",
        "rows": 7,
        "columns": 20,
        "animateLoading": true,
        "labelText": "Label",
        "labelPosition": "Left",
        "labelAlignment": "left",
        "labelWidth": 5,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "widgetName": "MultiSelect",
        "serverSideFiltering": false,
        "defaultOptionValue": [
          "GREEN"
        ],
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "placeholderText": "Select option(s)",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "tags": [
          "Select"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "MULTI_SELECT_WIDGET_V2",
        "displayName": "MultiSelect",
        "key": "tlmkeo06zb",
        "iconSVG": "/static/media/icon.16c864f46228416bf937ce5e688bf1eb.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "INPUT_WIDGET_V2",
      {
        "type": "INPUT_WIDGET_V2",
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "Input",
        "version": 2,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "inputType": "TEXT",
        "showStepArrows": false,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "form",
          "text input",
          "number",
          "textarea"
        ],
        "tags": [
          "Suggested",
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Input",
        "key": "0tn59tnkg7",
        "iconSVG": "/static/media/icon.e082ea210dbe0f5ca1bf7bfd67abdbec.svg",
        "thumbnailSVG": "/static/media/thumbnail.a4eac1a16753ea7fc54cac7731f9ea6a.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "PHONE_INPUT_WIDGET",
      {
        "type": "PHONE_INPUT_WIDGET",
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "PhoneInput",
        "version": 1,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "defaultDialCode": "+1",
        "allowDialCodeChange": false,
        "allowFormatting": true,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "call"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Phone Input",
        "key": "ath928ecj6",
        "iconSVG": "/static/media/icon.0faf6f3736f266ca636291ecabb14ddf.svg",
        "thumbnailSVG": "/static/media/thumbnail.56a649533a64f5ed11640a74c51360fc.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CURRENCY_INPUT_WIDGET",
      {
        "type": "CURRENCY_INPUT_WIDGET",
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "CurrencyInput",
        "version": 1,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "allowCurrencyChange": false,
        "defaultCurrencyCode": "INR",
        "decimals": 0,
        "showStepArrows": false,
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "FIXED",
        "searchTags": [
          "amount",
          "total"
        ],
        "tags": [
          "Inputs"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Currency Input",
        "key": "mcw4vyn9ma",
        "iconSVG": "/static/media/icon.c434e04aaa78b8f4337c28b627b7cc81.svg",
        "thumbnailSVG": "/static/media/thumbnail.b14e0307b1b312b9e9ca9580d118af39.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "JSON_FORM_WIDGET",
      {
        "type": "JSON_FORM_WIDGET",
        "flexVerticalAlignment": "start",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "useSourceData": false,
        "animateLoading": true,
        "backgroundColor": "#fff",
        "columns": 25,
        "disabledWhenInvalid": true,
        "fixedFooter": true,
        "rows": 41,
        "schema": {},
        "scrollContents": true,
        "showReset": true,
        "title": "Form",
        "version": 1,
        "borderWidth": "1",
        "borderColor": "#E0DEDE",
        "widgetName": "JSONForm",
        "autoGenerateForm": true,
        "fieldLimitExceeded": false,
        "sourceData": "",
        "submitButtonLabel": "Submit",
        "resetButtonLabel": "Reset",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "minDynamicHeight": 4,
        "maxDynamicHeight": 9000,
        "dynamicHeight": "AUTO_HEIGHT",
        "tags": [
          "Layout"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "JSON Form",
        "key": "b7dwmtnsle",
        "iconSVG": "/static/media/icon.34c54aae7fdde5e91750190831917417.svg",
        "thumbnailSVG": "/static/media/thumbnail.1092bbfe332a9ea2da2aa7e3efd01db2.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "TABLE_WIDGET_V2",
      {
        "type": "TABLE_WIDGET_V2",
        "flexVerticalAlignment": "start",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "rows": 28,
        "canFreezeColumn": true,
        "columnUpdatedAt": 1757008322919,
        "columns": 34,
        "animateLoading": true,
        "defaultSelectedRowIndex": 0,
        "defaultSelectedRowIndices": [
          0
        ],
        "label": "Data",
        "widgetName": "Table",
        "searchKey": "",
        "textSize": "0.875rem",
        "horizontalAlignment": "LEFT",
        "verticalAlignment": "CENTER",
        "totalRecordsCount": 0,
        "defaultPageSize": 0,
        "dynamicPropertyPathList": [],
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "dynamicBindingPathList": [],
        "primaryColumns": {},
        "tableData": "",
        "columnWidthMap": {},
        "columnOrder": [],
        "enableClientSideSearch": true,
        "isVisibleSearch": true,
        "isVisibleFilters": false,
        "isVisibleDownload": true,
        "isVisiblePagination": true,
        "isSortable": true,
        "delimiter": ",",
        "version": 2,
        "inlineEditingSaveOption": "ROW_LEVEL",
        "customIsLoading": false,
        "customIsLoadingValue": "",
        "cachedTableData": {},
        "endOfData": false,
        "tags": [
          "Suggested",
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Table",
        "key": "ov03206cwo",
        "iconSVG": "/static/media/icon.cf625df24d42d0de4d06cba559b3c327.svg",
        "thumbnailSVG": "/static/media/thumbnail.d0492f06681daa69baf92b07d3829dfc.svg",
        "needsHeightForContent": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "NUMBER_SLIDER_WIDGET",
      {
        "type": "NUMBER_SLIDER_WIDGET",
        "min": 0,
        "max": 100,
        "step": 1,
        "defaultValue": 10,
        "showMarksLabel": true,
        "marks": [
          {
            "value": 25,
            "label": "25%"
          },
          {
            "value": 50,
            "label": "50%"
          },
          {
            "value": 75,
            "label": "75%"
          }
        ],
        "isVisible": true,
        "isDisabled": false,
        "tooltipAlwaysOn": false,
        "rows": 8,
        "columns": 40,
        "widgetName": "NumberSlider",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "labelText": "Percentage",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 8,
        "labelTextSize": "0.875rem",
        "sliderSize": "m",
        "responsiveBehavior": "fill",
        "searchTags": [
          "range"
        ],
        "tags": [
          "Sliders"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Number Slider",
        "key": "luqwxu5g5q",
        "iconSVG": "/static/media/icon.092bf708b751ae564558222a15e3f34c.svg",
        "thumbnailSVG": "/static/media/thumbnail.493d650547eaef7533c2c9deda058338.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "RANGE_SLIDER_WIDGET",
      {
        "type": "RANGE_SLIDER_WIDGET",
        "min": 0,
        "max": 100,
        "minRange": 5,
        "step": 1,
        "showMarksLabel": true,
        "defaultStartValue": 10,
        "defaultEndValue": 100,
        "marks": [
          {
            "value": 25,
            "label": "25%"
          },
          {
            "value": 50,
            "label": "50%"
          },
          {
            "value": 75,
            "label": "75%"
          }
        ],
        "isVisible": true,
        "isDisabled": false,
        "tooltipAlwaysOn": false,
        "labelText": "Percentage",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 8,
        "labelTextSize": "0.875rem",
        "rows": 8,
        "columns": 40,
        "widgetName": "RangeSlider",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "sliderSize": "m",
        "responsiveBehavior": "fill",
        "tags": [
          "Sliders"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Range Slider",
        "key": "9wk9x5nig3",
        "iconSVG": "/static/media/icon.93213ac853cb0bccdd8ded2a65d7af28.svg",
        "thumbnailSVG": "/static/media/thumbnail.dba83a44257e147ae015c36470b046a4.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CATEGORY_SLIDER_WIDGET",
      {
        "type": "CATEGORY_SLIDER_WIDGET",
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ],
        "defaultOptionValue": "md",
        "isVisible": true,
        "isDisabled": false,
        "showMarksLabel": true,
        "rows": 8,
        "columns": 40,
        "widgetName": "CategorySlider",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "labelText": "Size",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "sliderSize": "m",
        "responsiveBehavior": "fill",
        "searchTags": [
          "range"
        ],
        "tags": [
          "Sliders"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Category Slider",
        "key": "y6vtq113mv",
        "iconSVG": "/static/media/icon.25523f57d90b1423ede18a53df0618b4.svg",
        "thumbnailSVG": "/static/media/thumbnail.06a850cb6ec6946f666e3f6cdce9f5da.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CODE_SCANNER_WIDGET",
      {
        "type": "CODE_SCANNER_WIDGET",
        "rows": 33,
        "label": "Scan a QR/Barcode",
        "columns": 25,
        "widgetName": "CodeScanner",
        "isDefaultClickDisabled": true,
        "scannerLayout": "ALWAYS_ON",
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "placement": "CENTER",
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "searchTags": [
          "barcode scanner",
          "qr scanner",
          "code detector",
          "barcode reader"
        ],
        "tags": [
          "External"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Code Scanner",
        "key": "bjculbp6tf",
        "iconSVG": "/static/media/icon.e02d0a1d76b2ef677e479c26e60be956.svg",
        "thumbnailSVG": "/static/media/thumbnail.40d4041f63e94b1dd8bca195bf98b596.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "LIST_WIDGET_V2",
      {
        "type": "LIST_WIDGET_V2",
        "backgroundColor": "transparent",
        "itemBackgroundColor": "#FFFFFF",
        "requiresFlatWidgetChildren": true,
        "hasMetaWidgets": true,
        "rows": 40,
        "columns": 24,
        "animateLoading": true,
        "gridType": "vertical",
        "minWidth": 450,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "dynamicBindingPathList": [
          {
            "key": "currentItemsView"
          },
          {
            "key": "selectedItemView"
          },
          {
            "key": "triggeredItemView"
          },
          {
            "key": "primaryKeys"
          }
        ],
        "currentItemsView": "{{[]}}",
        "selectedItemView": "{{{}}}",
        "triggeredItemView": "{{{}}}",
        "enhancements": {
          "child": {}
        },
        "itemSpacing": 8,
        "templateHeight": 160,
        "listData": [
          {
            "id": "001",
            "name": "Blue",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "002",
            "name": "Green",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "003",
            "name": "Red",
            "img": "https://assets.appsmith.com/widgets/default.png"
          }
        ],
        "pageSize": 3,
        "widgetName": "List",
        "children": [],
        "additionalStaticProps": [
          "level",
          "levelData",
          "prefixMetaWidgetId",
          "metaWidgetId"
        ],
        "primaryKeys": "{{List1.listData.map((currentItem, currentIndex) => currentItem[\"id\"] )}}",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "dropDisabled": true,
                "openParentPropertyPane": true,
                "noPad": true,
                "children": [],
                "blueprint": {
                  "view": [
                    {
                      "type": "CONTAINER_WIDGET",
                      "size": {
                        "rows": 12,
                        "cols": 64
                      },
                      "position": {
                        "top": 0,
                        "left": 0
                      },
                      "props": {
                        "backgroundColor": "white",
                        "containerStyle": "card",
                        "dragDisabled": true,
                        "isDeletable": false,
                        "isListItemContainer": true,
                        "disallowCopy": true,
                        "noContainerOffset": true,
                        "positioning": "fixed",
                        "disabledWidgetFeatures": [
                          "dynamicHeight"
                        ],
                        "shouldScrollContents": false,
                        "dynamicHeight": "FIXED",
                        "children": [],
                        "blueprint": {
                          "view": [
                            {
                              "type": "CANVAS_WIDGET",
                              "position": {
                                "top": 0,
                                "left": 0
                              },
                              "props": {
                                "containerStyle": "none",
                                "canExtend": false,
                                "detachFromLayout": true,
                                "children": [],
                                "version": 1,
                                "useAutoLayout": false,
                                "blueprint": {
                                  "view": [
                                    {
                                      "type": "IMAGE_WIDGET",
                                      "size": {
                                        "rows": 8,
                                        "cols": 16
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 0
                                      },
                                      "props": {
                                        "defaultImage": "https://assets.appsmith.com/widgets/default.png",
                                        "imageShape": "RECTANGLE",
                                        "maxZoomLevel": 1,
                                        "image": "{{currentItem.img}}",
                                        "boxShadow": "none",
                                        "objectFit": "cover",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "image"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 12
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.name}}",
                                        "textStyle": "HEADING",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": [],
                                        "dynamicHeight": "FIXED"
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 8
                                      },
                                      "position": {
                                        "top": 4,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.id}}",
                                        "textStyle": "BODY",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": [],
                                        "dynamicHeight": "FIXED"
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            },
            {
              "type": "MODIFY_PROPS"
            },
            {
              "type": "CHILD_OPERATIONS"
            },
            {
              "type": "BEFORE_ADD"
            },
            {
              "type": "BEFORE_PASTE"
            },
            {
              "type": "BEFORE_DROP"
            }
          ]
        },
        "tags": [
          "Display"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "List",
        "key": "w37mu7hjs7",
        "iconSVG": "/static/media/icon.03ffd4284fea6902cc6bed8251f39ea8.svg",
        "thumbnailSVG": "/static/media/thumbnail.469b7e8d3a04de93014af9a7bc9ebe56.svg",
        "isCanvas": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "EXTERNAL_WIDGET",
      {
        "type": "EXTERNAL_WIDGET",
        "widgetName": "CustomWidget",
        "rows": 50,
        "columns": 50,
        "version": 1,
        "events": [],
        "srcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->",
          "js": "// no need to write window onLoad, it is handled by the widget",
          "css": "/* you can access your string properties of your model using `var(--appsmith-model-<property-name>)`*/"
        },
        "tags": [
          "Display"
        ],
        "hideCard": true,
        "isDeprecated": false,
        "displayName": "Custom Widget [alpha]",
        "key": "rd6nlo295d",
        "iconSVG": "/static/media/icon.40a2473c10fb05e12d26d6bbd4b891fa.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "DROP_DOWN_WIDGET",
      {
        "type": "DROP_DOWN_WIDGET",
        "rows": 7,
        "columns": 20,
        "placeholderText": "Select option",
        "labelText": "Label",
        "labelPosition": "Left",
        "labelAlignment": "left",
        "labelWidth": 5,
        "selectionType": "SINGLE_SELECT",
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "serverSideFiltering": false,
        "widgetName": "Select",
        "defaultOptionValue": "GREEN",
        "version": 1,
        "isFilterable": false,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "tags": [
          "Select"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "SELECT_WIDGET",
        "displayName": "Select",
        "key": "yz08mgbmo0",
        "iconSVG": "/static/media/icon.1a5defb3c19b4cac4a27829d1f979e4c.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "ICON_WIDGET",
      {
        "type": "ICON_WIDGET",
        "widgetName": "Icon",
        "rows": 4,
        "columns": 4,
        "version": 1,
        "tags": [
          "Buttons"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "ICON_BUTTON_WIDGET",
        "displayName": "Icon",
        "key": "8gxhwlamwt",
        "iconSVG": "/static/media/icon.80fc7466c0d7181ec0271de7fda795ec.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "FILE_PICKER_WIDGET",
      {
        "type": "FILE_PICKER_WIDGET",
        "rows": 4,
        "files": [],
        "selectedFiles": [],
        "allowedFileTypes": [],
        "label": "Select Files",
        "columns": 16,
        "maxNumFiles": 1,
        "maxFileSize": 5,
        "fileDataType": "Base64",
        "widgetName": "FilePicker",
        "isDefaultClickDisabled": true,
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "tags": [
          "Inputs"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "FILE_PICKER_WIDGET_V2",
        "displayName": "FilePicker",
        "key": "ruo994ximn",
        "iconSVG": "/static/media/icon.2c8bfbc118a7a5f7b61b10540a4a8881.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "FORM_BUTTON_WIDGET",
      {
        "type": "FORM_BUTTON_WIDGET",
        "rows": 4,
        "columns": 12,
        "widgetName": "FormButton",
        "text": "Submit",
        "isDefaultClickDisabled": true,
        "recaptchaType": "V3",
        "version": 1,
        "animateLoading": true,
        "tags": [
          "Buttons"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "BUTTON_WIDGET",
        "displayName": "FormButton",
        "key": "n88gr7by0m",
        "iconSVG": "/static/media/icon.7beb9123fb53027d9d6b778cdfe4caed.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "PROGRESS_WIDGET",
      {
        "type": "PROGRESS_WIDGET",
        "widgetName": "Progress",
        "rows": 4,
        "columns": 28,
        "fillColor": "#03B365",
        "isIndeterminate": false,
        "showResult": false,
        "counterClosewise": false,
        "isVisible": true,
        "steps": 1,
        "progressType": "linear",
        "progress": 50,
        "version": 1,
        "responsiveBehavior": "fill",
        "searchTags": [
          "percent"
        ],
        "tags": [
          "Content"
        ],
        "hideCard": false,
        "isDeprecated": false,
        "displayName": "Progress",
        "key": "kiur33jcqp",
        "iconSVG": "/static/media/icon.0e756c9f1cc78a1fb4b62bc6997e23eb.svg",
        "thumbnailSVG": "/static/media/thumbnail.b99132f26b7fae778b21ebedf9748338.svg",
        "isCanvas": false,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "CIRCULAR_PROGRESS_WIDGET",
      {
        "type": "CIRCULAR_PROGRESS_WIDGET",
        "counterClockWise": false,
        "fillColor": "#03B365",
        "isVisible": true,
        "progress": 65,
        "showResult": true,
        "rows": 17,
        "columns": 16,
        "widgetName": "CircularProgress",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "tags": [
          "Content"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "PROGRESS_WIDGET",
        "displayName": "Circular Progress",
        "key": "ioqqgjqflu",
        "iconSVG": "/static/media/icon.d5418f48362bb71bbf186f9b4dd913bf.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "LIST_WIDGET",
      {
        "type": "LIST_WIDGET",
        "backgroundColor": "transparent",
        "itemBackgroundColor": "#FFFFFF",
        "rows": 40,
        "columns": 24,
        "animateLoading": true,
        "gridType": "vertical",
        "template": {},
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "positioning": "fixed",
        "enhancements": {
          "child": {}
        },
        "gridGap": 0,
        "listData": [
          {
            "id": "001",
            "name": "Blue",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "002",
            "name": "Green",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "003",
            "name": "Red",
            "img": "https://assets.appsmith.com/widgets/default.png"
          }
        ],
        "widgetName": "List",
        "children": [],
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "dropDisabled": true,
                "openParentPropertyPane": true,
                "noPad": true,
                "children": [],
                "blueprint": {
                  "view": [
                    {
                      "type": "CONTAINER_WIDGET",
                      "size": {
                        "rows": 12,
                        "cols": 64
                      },
                      "position": {
                        "top": 0,
                        "left": 0
                      },
                      "props": {
                        "backgroundColor": "white",
                        "containerStyle": "card",
                        "dragDisabled": true,
                        "isDeletable": false,
                        "disallowCopy": true,
                        "disablePropertyPane": true,
                        "openParentPropertyPane": true,
                        "children": [],
                        "positioning": "fixed",
                        "blueprint": {
                          "view": [
                            {
                              "type": "CANVAS_WIDGET",
                              "position": {
                                "top": 0,
                                "left": 0
                              },
                              "props": {
                                "containerStyle": "none",
                                "canExtend": false,
                                "detachFromLayout": true,
                                "children": [],
                                "version": 1,
                                "blueprint": {
                                  "view": [
                                    {
                                      "type": "IMAGE_WIDGET",
                                      "size": {
                                        "rows": 8,
                                        "cols": 16
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 0
                                      },
                                      "props": {
                                        "defaultImage": "https://assets.appsmith.com/widgets/default.png",
                                        "imageShape": "RECTANGLE",
                                        "maxZoomLevel": 1,
                                        "image": "{{currentItem.img}}",
                                        "boxShadow": "none",
                                        "objectFit": "cover",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "image"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 12
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.name}}",
                                        "textStyle": "HEADING",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicHeight": "FIXED",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 8
                                      },
                                      "position": {
                                        "top": 4,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.id}}",
                                        "textStyle": "BODY",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicHeight": "FIXED",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            },
            {
              "type": "CHILD_OPERATIONS"
            }
          ]
        },
        "tags": [
          "Display"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "LIST_WIDGET_V2",
        "displayName": "List",
        "key": "8dv1bu9ao4",
        "iconSVG": "/static/media/icon.35f3ec19dbc201b2b26e900b1eeb08a0.svg",
        "isCanvas": true,
        "needsHeightForContent": true,
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "DATE_PICKER_WIDGET",
      {
        "type": "DATE_PICKER_WIDGET",
        "isDisabled": false,
        "datePickerType": "DATE_PICKER",
        "rows": 4,
        "label": "",
        "dateFormat": "YYYY-MM-DD HH:mm",
        "columns": 20,
        "widgetName": "DatePicker",
        "defaultDate": "2025-09-05 03:52",
        "version": 1,
        "animateLoading": true,
        "tags": [
          "Inputs"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "DATE_PICKER_WIDGET2",
        "displayName": "DatePicker",
        "key": "o426vp9g1d",
        "iconSVG": "/static/media/icon.c8ac755fdc7a44c32deab2390f007005.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ],
    [
      "INPUT_WIDGET",
      {
        "type": "INPUT_WIDGET",
        "inputType": "TEXT",
        "rows": 4,
        "label": "",
        "labelPosition": "Left",
        "labelAlignment": "left",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "Input",
        "version": 1,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "allowCurrencyChange": false,
        "animateLoading": true,
        "tags": [
          "Suggested",
          "Inputs"
        ],
        "hideCard": true,
        "isDeprecated": true,
        "replacement": "INPUT_WIDGET_V2",
        "displayName": "Input",
        "key": "usc4r70f0x",
        "iconSVG": "/static/media/icon.d0ce957b6c4640f8a7418ce846ee200e.svg",
        "needsErrorInfo": false,
        "onCanvasUI": {
          "selectionBGCSSVar": "--on-canvas-ui-widget-selection",
          "focusBGCSSVar": "--on-canvas-ui-widget-focus",
          "selectionColorCSSVar": "--on-canvas-ui-widget-focus",
          "focusColorCSSVar": "--on-canvas-ui-widget-selection",
          "disableParentSelection": false
        }
      }
    ]
  ],
  widgetDefaultPropertiesMap: [
    [
      "WDS_BUTTON_WIDGET",
      {
        "animateLoading": true,
        "text": "Do something",
        "buttonVariant": "filled",
        "buttonColor": "accent",
        "widgetName": "Button",
        "isDisabled": false,
        "isVisible": true,
        "disableOnInvalidForm": false,
        "resetFormOnClick": false,
        "recaptchaType": "V3",
        "version": 1,
        "responsiveBehavior": "hug"
      }
    ],
    [
      "WDS_INPUT_WIDGET",
      {
        "label": "Label",
        "widgetName": "Input",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "TEXT",
        "version": 1,
        "showStepArrows": false
      }
    ],
    [
      "WDS_CHECKBOX_WIDGET",
      {
        "label": "Label",
        "defaultCheckedState": true,
        "widgetName": "Checkbox",
        "version": 1,
        "isDisabled": false,
        "isRequired": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill"
      }
    ],
    [
      "WDS_ICON_BUTTON_WIDGET",
      {
        "iconName": "plus",
        "buttonVariant": "filled",
        "buttonColor": "accent",
        "isDisabled": false,
        "isVisible": true,
        "widgetName": "IconButton",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "hug"
      }
    ],
    [
      "WDS_TABLE_WIDGET",
      {
        "responsiveBehavior": "fill",
        "canFreezeColumn": true,
        "columnUpdatedAt": 1757008322510,
        "animateLoading": true,
        "defaultSelectedRowIndex": 0,
        "defaultSelectedRowIndices": [
          0
        ],
        "label": "Data",
        "widgetName": "Table",
        "searchKey": "",
        "horizontalAlignment": "start",
        "verticalAlignment": "center",
        "totalRecordsCount": 0,
        "defaultPageSize": 0,
        "dynamicPropertyPathList": [],
        "dynamicBindingPathList": [],
        "primaryColumns": {},
        "tableData": [
          {
            "Name": "John Doe",
            "Company": "TechCorp",
            "Title": "Software Engineer",
            "Phone number": "(555) 123-4567",
            "Email": "john.doe@techcorp.com",
            "Registration date": "2023-01-15"
          },
          {
            "Name": "Jane Smith",
            "Company": "Innovate Ltd",
            "Title": "Project Manager",
            "Phone number": "(555) 234-5678",
            "Email": "jane.smith@innovatelt.com",
            "Registration date": "2023-02-20"
          },
          {
            "Name": "Alice Johnson",
            "Company": "Web Solutions",
            "Title": "UX Designer",
            "Phone number": "(555) 345-6789",
            "Email": "alice.johnson@websolutions.com",
            "Registration date": "2023-03-10"
          },
          {
            "Name": "Bob Brown",
            "Company": "BuildIt",
            "Title": "Construction Manager",
            "Phone number": "(555) 456-7890",
            "Email": "bob.brown@buildit.com",
            "Registration date": "2023-04-05"
          },
          {
            "Name": "Charlie Davis",
            "Company": "FinTech Inc",
            "Title": "Financial Analyst",
            "Phone number": "(555) 567-8901",
            "Email": "charlie.davis@fintechinc.com",
            "Registration date": "2023-05-12"
          },
          {
            "Name": "Dana Lee",
            "Company": "HealthFirst",
            "Title": "Nurse Practitioner",
            "Phone number": "(555) 678-9012",
            "Email": "dana.lee@healthfirst.com",
            "Registration date": "2023-06-01"
          },
          {
            "Name": "Evan Martinez",
            "Company": "AutoPro",
            "Title": "Mechanical Engineer",
            "Phone number": "(555) 789-0123",
            "Email": "evan.martinez@autopro.com",
            "Registration date": "2023-07-19"
          },
          {
            "Name": "Fiona Green",
            "Company": "EduFuture",
            "Title": "Curriculum Developer",
            "Phone number": "(555) 890-1234",
            "Email": "fiona.green@edufuture.com",
            "Registration date": "2023-08-23"
          },
          {
            "Name": "George Harris",
            "Company": "MarketMasters",
            "Title": "Marketing Director",
            "Phone number": "(555) 901-2345",
            "Email": "george.harris@marketmasters.com",
            "Registration date": "2023-09-07"
          },
          {
            "Name": "Hannah Wright",
            "Company": "LegalEagle",
            "Title": "Attorney",
            "Phone number": "(555) 012-3456",
            "Email": "hannah.wright@legaleagle.com",
            "Registration date": "2023-10-15"
          },
          {
            "Name": "Ian Walker",
            "Company": "HomeGoods",
            "Title": "Retail Manager",
            "Phone number": "(555) 123-4567",
            "Email": "ian.walker@homegoods.com",
            "Registration date": "2023-11-22"
          },
          {
            "Name": "Julia King",
            "Company": "TravelWise",
            "Title": "Travel Agent",
            "Phone number": "(555) 234-5678",
            "Email": "julia.king@travelwise.com",
            "Registration date": "2023-12-30"
          },
          {
            "Name": "Kevin Scott",
            "Company": "CleanEnergy",
            "Title": "Environmental Scientist",
            "Phone number": "(555) 345-6789",
            "Email": "kevin.scott@cleanenergy.com",
            "Registration date": "2024-01-08"
          },
          {
            "Name": "Laura Baker",
            "Company": "MediaMinds",
            "Title": "Content Strategist",
            "Phone number": "(555) 456-7890",
            "Email": "laura.baker@mediaminds.com",
            "Registration date": "2024-02-18"
          },
          {
            "Name": "Michael Young",
            "Company": "CyberSecure",
            "Title": "Cybersecurity Specialist",
            "Phone number": "(555) 567-8901",
            "Email": "michael.young@cybersecure.com",
            "Registration date": "2024-03-29"
          },
          {
            "Name": "Nina Patel",
            "Company": "AgriTech",
            "Title": "Agricultural Engineer",
            "Phone number": "(555) 678-9012",
            "Email": "nina.patel@agritech.com",
            "Registration date": "2024-04-10"
          }
        ],
        "columnWidthMap": {},
        "columnOrder": [],
        "enableClientSideSearch": true,
        "isVisibleSearch": true,
        "isVisibleFilters": true,
        "isVisibleDownload": true,
        "isVisiblePagination": true,
        "isSortable": true,
        "delimiter": ",",
        "version": 1,
        "inlineEditingSaveOption": "ROW_LEVEL",
        "pageSize": 8,
        "buttonLabel": "Action",
        "buttonColor": "accent",
        "buttonVariant": "filled",
        "isVisible": true,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "WDS_CURRENCY_INPUT_WIDGET",
      {
        "label": "Current Price",
        "widgetName": "CurrencyInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "version": 1,
        "allowCurrencyChange": false,
        "defaultCurrencyCode": "USD",
        "decimals": 0,
        "showStepArrows": false,
        "inputType": "CURRENCY"
      }
    ],
    [
      "WDS_TOOLBAR_BUTTONS_WIDGET",
      {
        "widgetName": "ToolbarButtons",
        "orientation": "horizontal",
        "variant": "ghost",
        "color": "accent",
        "isDisabled": false,
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "buttonsList": {
          "button1": {
            "label": "Add",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button1",
            "index": 0,
            "icon": "plus",
            "iconPosition": "start"
          },
          "button2": {
            "label": "Edit",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button2",
            "index": 1,
            "icon": "pencil",
            "iconPosition": "start"
          },
          "button3": {
            "label": "Copy",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button3",
            "index": 2,
            "icon": "copy",
            "iconPosition": "start"
          },
          "separator": {
            "isVisible": true,
            "isDisabled": false,
            "isSeparator": true,
            "widgetId": "",
            "id": "separator",
            "index": 2,
            "label": "Separator",
            "itemType": "SEPARATOR"
          },
          "button4": {
            "label": "Delete",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button4",
            "index": 2,
            "icon": "trash",
            "iconPosition": "start"
          }
        }
      }
    ],
    [
      "WDS_PHONE_INPUT_WIDGET",
      {
        "label": "Phone number",
        "widgetName": "PhoneInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "version": 1,
        "defaultDialCode": "+1",
        "allowDialCodeChange": false,
        "allowFormatting": true,
        "inputType": "PHONE_NUMBER"
      }
    ],
    [
      "WDS_CHECKBOX_GROUP_WIDGET",
      {
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE",
          "RED"
        ],
        "isDisabled": false,
        "isRequired": false,
        "isVisible": true,
        "label": "Color",
        "orientation": "vertical",
        "version": 1,
        "widgetName": "CheckboxGroup",
        "responsiveBehavior": "fill"
      }
    ],
    [
      "WDS_COMBOBOX_WIDGET",
      {
        "animateLoading": true,
        "label": "Label",
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "defaultOptionValue": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "ComboBox",
        "widgetType": "SELECT",
        "version": 1,
        "responsiveBehavior": "fill",
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ],
        "placeholderText": "Select an item"
      }
    ],
    [
      "WDS_SWITCH_WIDGET",
      {
        "label": "Label",
        "defaultSwitchState": true,
        "widgetName": "Switch",
        "labelPosition": "start",
        "version": 1,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill"
      }
    ],
    [
      "WDS_SWITCH_GROUP_WIDGET",
      {
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE",
          "RED"
        ],
        "isDisabled": false,
        "isVisible": true,
        "labelPosition": "end",
        "label": "Label",
        "orientation": "vertical",
        "version": 1,
        "widgetName": "SwitchGroup",
        "responsiveBehavior": "fill"
      }
    ],
    [
      "WDS_RADIO_GROUP_WIDGET",
      {
        "animateLoading": true,
        "label": "Size",
        "options": [
          {
            "label": "Small",
            "value": "S"
          },
          {
            "label": "Medium",
            "value": "M"
          },
          {
            "label": "Large",
            "value": "L"
          }
        ],
        "defaultOptionValue": "L",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": true,
        "widgetName": "RadioGroup",
        "orientation": "vertical",
        "version": 1,
        "responsiveBehavior": "fill"
      }
    ],
    [
      "WDS_MENU_BUTTON_WIDGET",
      {
        "label": "Open The Menu…",
        "triggerButtonVariant": "filled",
        "triggerButtonColor": "accent",
        "isCompact": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "menuItemsSource": "static",
        "menuItems": {
          "menuItem1": {
            "label": "Bake",
            "id": "menuItem1",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 0
          },
          "menuItem2": {
            "label": "Fry",
            "id": "menuItem2",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 1
          },
          "menuItem3": {
            "label": "Boil",
            "id": "menuItem3",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 2
          }
        },
        "widgetName": "MenuButton",
        "version": 1
      }
    ],
    [
      "CUSTOM_WIDGET",
      {
        "widgetName": "Custom",
        "rows": 30,
        "columns": 23,
        "version": 1,
        "onResetClick": "{{showAlert('Successfully reset!!', '');}}",
        "events": [
          "onResetClick"
        ],
        "isVisible": true,
        "defaultModel": "{\n  \"tips\": [\n    \"Pass data to this widget in the default model field\",\n    \"Access data in the javascript file using the appsmith.model variable\",\n    \"Create events in the widget and trigger them in the javascript file using appsmith.triggerEvent('eventName')\",\n    \"Access data in CSS as var(--appsmith-model-{property-name})\"\n  ]\n}",
        "srcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-borderRadius);\n  box-shadow: var(--appsmith-theme-boxShadow);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-borderRadius);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-primaryColor) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-primaryColor) !important;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-primaryColor);\n  border-color: var(--appsmith-theme-primaryColor);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "import React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\n\nconst Button = ({\n  children,\n  className,\n  ...props\n}) => /*#__PURE__*/React.createElement(\"button\", {\n  className: className,\n  ...props\n}, children);\n\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n  const handleNext = () => {\n    setCurrentIndex(prevIndex => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-header\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Custom Widget\"), /*#__PURE__*/React.createElement(\"div\", null, currentIndex + 1, \" / \", appsmith.model.tips.length)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"content\"\n  }, appsmith.model.tips[currentIndex])), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"button-container\"\n  }, /*#__PURE__*/React.createElement(Button, {\n    className: \"primary\",\n    onClick: handleNext\n  }, \"Next Tip\"), /*#__PURE__*/React.createElement(Button, {\n    className: \"reset\",\n    disabled: currentIndex === 0,\n    onClick: handleReset\n  }, \"Reset\")));\n}\n\nappsmith.onReady(() => {\n    ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById(\"root\"));\n});"
        },
        "uncompiledSrcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-borderRadius);\n  box-shadow: var(--appsmith-theme-boxShadow);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-borderRadius);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-primaryColor) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-primaryColor) !important;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-primaryColor);\n  border-color: var(--appsmith-theme-primaryColor);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "import React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\n\nconst Button = ({ children, className, ...props }) => (\n  <button className={className} {...props}>\n    {children}\n  </button>\n);\n\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n\n  const handleNext = () => {\n    setCurrentIndex((prevIndex) => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n\n  return (\n    <div className=\"app\">\n      <div className=\"tip-container\">\n        <div className=\"tip-header\">\n          <h2>Custom Widget</h2>\n          <div>{currentIndex + 1} / {appsmith.model.tips.length}</div>\n        </div>\n        <div className=\"content\">{appsmith.model.tips[currentIndex]}</div>\n      </div>\n      <div className=\"button-container\">\n        <Button className=\"primary\" onClick={handleNext}>Next Tip</Button>\n        <Button className=\"reset\" disabled={currentIndex === 0} onClick={handleReset}>Reset</Button>\n      </div>\n    </div>\n  );\n}\n\nappsmith.onReady(() => {\n/*\n\t * This handler function will get called when parent application is ready.\n\t * Initialize your component here\n\t * more info - https://docs.appsmith.com/reference/widgets/custom#onready\n\t */\n    ReactDOM.render(<App />, document.getElementById(\"root\"));\n});"
        },
        "theme": "{{appsmith.theme}}",
        "dynamicBindingPathList": [
          {
            "key": "theme"
          }
        ],
        "dynamicTriggerPathList": [
          {
            "key": "onResetClick"
          }
        ],
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "backgroundColor": "#FFFFFF"
      }
    ],
    [
      "SECTION_WIDGET",
      {
        "elevatedBackground": false,
        "children": [],
        "columns": 0,
        "responsiveBehavior": "fill",
        "rows": 0,
        "version": 1,
        "widgetName": "Section",
        "zoneCount": 1,
        "isVisible": true,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "ZONE_WIDGET",
      {
        "elevatedBackground": true,
        "children": [],
        "columns": 0,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "stretch",
        "rows": 0,
        "version": 1,
        "widgetName": "Zone",
        "isVisible": true,
        "useAsForm": false,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "WDS_PARAGRAPH_WIDGET",
      {
        "text": "The important thing is not to stop questioning. Curiosity has its reason for existence. One cannot help but be in awe when one contemplates the mysteries of eternity, life, and the marvelous structure of reality. It is enough if one merely tries to comprehend a little of this mystery each day.",
        "fontSize": "body",
        "textAlign": "left",
        "textColor": "neutral",
        "widgetName": "Paragraph",
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "isVisible": true,
        "responsiveBehavior": "fill",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "WDS_HEADING_WIDGET",
      {
        "text": "Header",
        "fontSize": "heading",
        "textAlign": "left",
        "textColor": "neutral",
        "widgetName": "Heading",
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "isVisible": true,
        "responsiveBehavior": "fill",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "WDS_MODAL_WIDGET",
      {
        "detachFromLayout": true,
        "children": [],
        "widgetName": "Modal",
        "version": 1,
        "isVisible": false,
        "showFooter": true,
        "showHeader": true,
        "size": "medium",
        "title": "Modal Title",
        "showSubmitButton": true,
        "closeOnSubmit": true,
        "submitButtonText": "Save Changes",
        "cancelButtonText": "Cancel",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "WDS_STATS_WIDGET",
      {
        "isVisible": true,
        "widgetName": "StatsWidget",
        "version": 1,
        "animateLoading": true,
        "valueColor": "neutral",
        "valueChange": "+50%",
        "valueChangeColor": "positive",
        "value": "42",
        "label": "Active Users",
        "caption": "This week",
        "iconName": "shopping-bag",
        "responsiveBehavior": "fill",
        "elevatedBackground": false
      }
    ],
    [
      "WDS_KEY_VALUE_WIDGET",
      {
        "label": "Label",
        "widgetName": "KeyValue",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": true,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "TEXT",
        "version": 1,
        "showStepArrows": false
      }
    ],
    [
      "WDS_INLINE_BUTTONS_WIDGET",
      {
        "widgetName": "InlineButtons",
        "isDisabled": false,
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "buttonsList": {
          "button1": {
            "label": "Delete",
            "isVisible": true,
            "isDisabled": false,
            "id": "button1",
            "index": 0,
            "variant": "outlined",
            "color": "negative"
          },
          "button2": {
            "label": "Separator",
            "isVisible": true,
            "isDisabled": false,
            "id": "button2",
            "isSeparator": true,
            "index": 1,
            "itemType": "SEPARATOR"
          },
          "button3": {
            "label": "Cancel",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button3",
            "index": 2,
            "variant": "outlined",
            "color": "accent"
          },
          "button4": {
            "label": "Save Changes",
            "isVisible": true,
            "isDisabled": false,
            "widgetId": "",
            "id": "button4",
            "index": 3,
            "variant": "filled",
            "color": "accent"
          }
        }
      }
    ],
    [
      "WDS_EMAIL_INPUT_WIDGET",
      {
        "label": "Label",
        "widgetName": "EmailInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "EMAIL",
        "version": 1,
        "showStepArrows": false
      }
    ],
    [
      "WDS_PASSWORD_INPUT_WIDGET",
      {
        "label": "Label",
        "widgetName": "PasswordInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "PASSWORD",
        "version": 1,
        "showStepArrows": false
      }
    ],
    [
      "WDS_NUMBER_INPUT_WIDGET",
      {
        "label": "Label",
        "widgetName": "NumberInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "NUMBER",
        "version": 1,
        "showStepArrows": false
      }
    ],
    [
      "WDS_MULTILINE_INPUT_WIDGET",
      {
        "label": "Label",
        "widgetName": "MultilineInput",
        "iconAlign": "left",
        "defaultText": "",
        "autoFocus": false,
        "resetOnSubmit": true,
        "isRequired": false,
        "isReadOnly": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "labelPosition": "top",
        "inputType": "MULTI_LINE_TEXT",
        "version": 1,
        "showStepArrows": false
      }
    ],
    [
      "WDS_SELECT_WIDGET",
      {
        "animateLoading": true,
        "label": "Label",
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "defaultOptionValue": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "Select",
        "widgetType": "SELECT",
        "version": 1,
        "responsiveBehavior": "fill",
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ],
        "placeholderText": "Select an item"
      }
    ],
    [
      "WDS_DATEPICKER_WIDGET",
      {
        "animateLoading": true,
        "label": "Label",
        "dateFormat": "YYYY-MM-DD HH:mm",
        "defaultOptionValue": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "DatePicker",
        "widgetType": "WDS_DATE_PICKER",
        "version": 1,
        "timePrecision": "day",
        "responsiveBehavior": "fill",
        "inputType": "DATE"
      }
    ],
    [
      "WDS_MULTI_SELECT_WIDGET",
      {
        "animateLoading": true,
        "label": "Label",
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "defaultOptionValues": "",
        "isRequired": false,
        "isDisabled": false,
        "isVisible": true,
        "isInline": false,
        "widgetName": "MultiSelect",
        "version": 1,
        "responsiveBehavior": "fill",
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ],
        "placeholderText": "Select an item"
      }
    ],
    [
      "CANVAS_WIDGET",
      {
        "rows": 0,
        "columns": 0,
        "widgetName": "Canvas",
        "version": 1,
        "detachFromLayout": true,
        "flexLayers": [],
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "SKELETON_WIDGET",
      {
        "isLoading": true,
        "rows": 4,
        "columns": 4,
        "widgetName": "Skeleton",
        "version": 1
      }
    ],
    [
      "CONTAINER_WIDGET",
      {
        "backgroundColor": "#FFFFFF",
        "rows": 10,
        "columns": 24,
        "widgetName": "Container",
        "containerStyle": "card",
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "boxShadow": "NONE",
        "animateLoading": true,
        "children": [],
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "children": []
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "version": 1,
        "flexVerticalAlignment": "stretch",
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "TEXT_WIDGET",
      {
        "text": "Hello {{appsmith.user.name || appsmith.user.email}}",
        "fontSize": "1rem",
        "fontStyle": "BOLD",
        "textAlign": "LEFT",
        "textColor": "#231F20",
        "rows": 4,
        "columns": 16,
        "widgetName": "Text",
        "shouldTruncate": false,
        "overflow": "NONE",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "TABLE_WIDGET",
      {
        "responsiveBehavior": "fill",
        "rows": 28,
        "columns": 34,
        "animateLoading": true,
        "defaultSelectedRow": "0",
        "label": "Data",
        "widgetName": "Table",
        "searchKey": "",
        "textSize": "0.875rem",
        "horizontalAlignment": "LEFT",
        "verticalAlignment": "CENTER",
        "totalRecordsCount": 0,
        "defaultPageSize": 0,
        "dynamicBindingPathList": [
          {
            "key": "primaryColumns.step.computedValue"
          },
          {
            "key": "primaryColumns.task.computedValue"
          },
          {
            "key": "primaryColumns.status.computedValue"
          },
          {
            "key": "primaryColumns.action.computedValue"
          },
          {
            "key": "primaryColumns.action.buttonColor"
          },
          {
            "key": "primaryColumns.action.borderRadius"
          },
          {
            "key": "primaryColumns.action.boxShadow"
          }
        ],
        "primaryColumns": {
          "step": {
            "index": 0,
            "width": 150,
            "id": "step",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "text",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDerived": false,
            "label": "step",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.step))}}"
          },
          "task": {
            "index": 1,
            "width": 150,
            "id": "task",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "text",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDerived": false,
            "label": "task",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.task))}}"
          },
          "status": {
            "index": 2,
            "width": 150,
            "id": "status",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "text",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDerived": false,
            "label": "status",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.status))}}"
          },
          "action": {
            "index": 3,
            "width": 150,
            "id": "action",
            "horizontalAlignment": "LEFT",
            "verticalAlignment": "CENTER",
            "columnType": "button",
            "textSize": "0.875rem",
            "enableFilter": true,
            "enableSort": true,
            "isVisible": true,
            "isCellVisible": true,
            "isDisabled": false,
            "isDerived": false,
            "label": "action",
            "onClick": "{{currentRow.step === '#1' ? showAlert('Done', 'success') : currentRow.step === '#2' ? navigateTo('https://docs.appsmith.com/core-concepts/connecting-to-data-sources/querying-a-database',undefined,'NEW_WINDOW') : navigateTo('https://docs.appsmith.com/core-concepts/displaying-data-read/display-data-tables',undefined,'NEW_WINDOW')}}",
            "computedValue": "{{Table1.sanitizedTableData.map((currentRow) => ( currentRow.action))}}"
          }
        },
        "derivedColumns": {},
        "tableData": [
          {
            "step": "#1",
            "task": "Drop a table",
            "status": "✅",
            "action": ""
          },
          {
            "step": "#2",
            "task": "Create a query fetch_users with the Mock DB",
            "status": "--",
            "action": ""
          },
          {
            "step": "#3",
            "task": "Bind the query using => fetch_users.data",
            "status": "--",
            "action": ""
          }
        ],
        "columnSizeMap": {
          "task": 245,
          "step": 62,
          "status": 75
        },
        "columnOrder": [
          "step",
          "task",
          "status",
          "action"
        ],
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "enableClientSideSearch": true,
        "isVisibleSearch": true,
        "isVisibleFilters": true,
        "isVisibleDownload": true,
        "isVisiblePagination": true,
        "isSortable": true,
        "delimiter": ",",
        "version": 3
      }
    ],
    [
      "CHECKBOX_WIDGET",
      {
        "rows": 4,
        "columns": 12,
        "label": "Label",
        "defaultCheckedState": true,
        "widgetName": "Checkbox",
        "version": 1,
        "alignWidget": "LEFT",
        "labelPosition": "Left",
        "isDisabled": false,
        "isRequired": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "RADIO_GROUP_WIDGET",
      {
        "rows": 6,
        "columns": 20,
        "animateLoading": true,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "options": [
          {
            "label": "Yes",
            "value": "Y"
          },
          {
            "label": "No",
            "value": "N"
          }
        ],
        "defaultOptionValue": "Y",
        "isRequired": false,
        "isDisabled": false,
        "isInline": true,
        "alignment": "left",
        "widgetName": "RadioGroup",
        "version": 1,
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "BUTTON_WIDGET",
      {
        "animateLoading": true,
        "text": "Submit",
        "buttonVariant": "PRIMARY",
        "placement": "CENTER",
        "rows": 4,
        "columns": 16,
        "widgetName": "Button",
        "isDisabled": false,
        "isVisible": true,
        "isDefaultClickDisabled": true,
        "disabledWhenInvalid": false,
        "resetFormOnClick": false,
        "recaptchaType": "V3",
        "version": 1,
        "responsiveBehavior": "hug",
        "minWidth": 120
      }
    ],
    [
      "IMAGE_WIDGET",
      {
        "defaultImage": "https://assets.appsmith.com/widgets/default.png",
        "imageShape": "RECTANGLE",
        "maxZoomLevel": 1,
        "enableRotation": false,
        "enableDownload": false,
        "objectFit": "cover",
        "image": "",
        "rows": 12,
        "columns": 12,
        "widgetName": "Image",
        "version": 1,
        "animateLoading": true,
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "VIDEO_WIDGET",
      {
        "rows": 28,
        "columns": 24,
        "widgetName": "Video",
        "url": "https://assets.appsmith.com/widgets/bird.mp4",
        "autoPlay": false,
        "version": 1,
        "animateLoading": true,
        "backgroundColor": "#000",
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "TABS_WIDGET",
      {
        "flexVerticalAlignment": "stretch",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "rows": 15,
        "columns": 24,
        "shouldScrollContents": false,
        "widgetName": "Tabs",
        "animateLoading": true,
        "borderWidth": 1,
        "borderColor": "#E0DEDE",
        "backgroundColor": "#FFFFFF",
        "minDynamicHeight": 15,
        "tabsObj": {
          "tab1": {
            "label": "Tab 1",
            "id": "tab1",
            "widgetId": "",
            "isVisible": true,
            "index": 0,
            "positioning": "vertical"
          },
          "tab2": {
            "label": "Tab 2",
            "id": "tab2",
            "widgetId": "",
            "isVisible": true,
            "index": 1,
            "positioning": "vertical"
          }
        },
        "shouldShowTabs": true,
        "defaultTab": "Tab 1",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "left": 0,
                "top": 0
              },
              "props": {
                "detachFromLayout": true,
                "canExtend": true,
                "isVisible": true,
                "isDisabled": false,
                "shouldScrollContents": false,
                "tabId": "tab1",
                "tabName": "Tab 1",
                "children": [],
                "version": 1,
                "bottomRow": 10
              }
            },
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "left": 0,
                "top": 0
              },
              "props": {
                "detachFromLayout": true,
                "canExtend": true,
                "isVisible": true,
                "isDisabled": false,
                "shouldScrollContents": false,
                "tabId": "tab2",
                "tabName": "Tab 2",
                "children": [],
                "version": 1,
                "bottomRow": 10
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "version": 3
      }
    ],
    [
      "MODAL_WIDGET",
      {
        "rows": 24,
        "columns": 24,
        "width": 456,
        "height": 240,
        "minDynamicHeight": 24,
        "canEscapeKeyClose": true,
        "animateLoading": true,
        "detachFromLayout": true,
        "canOutsideClickClose": true,
        "shouldScrollContents": true,
        "widgetName": "Modal",
        "children": [],
        "version": 2,
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "left": 0,
                "top": 0
              },
              "props": {
                "detachFromLayout": true,
                "canExtend": true,
                "isVisible": true,
                "isDisabled": false,
                "shouldScrollContents": false,
                "children": [],
                "version": 1,
                "blueprint": {
                  "view": [
                    {
                      "type": "ICON_BUTTON_WIDGET",
                      "position": {
                        "left": 58,
                        "top": 0
                      },
                      "size": {
                        "rows": 4,
                        "cols": 6
                      },
                      "props": {
                        "buttonColor": "#858282",
                        "buttonVariant": "TERTIARY",
                        "borderRadius": "SHARP",
                        "iconName": "cross",
                        "iconSize": 24,
                        "version": 1
                      }
                    },
                    {
                      "type": "TEXT_WIDGET",
                      "position": {
                        "left": 1,
                        "top": 1
                      },
                      "size": {
                        "rows": 4,
                        "cols": 40
                      },
                      "props": {
                        "text": "Modal Title",
                        "fontSize": "1.25rem",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "position": {
                        "left": 31,
                        "top": 18
                      },
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "props": {
                        "text": "Close",
                        "buttonStyle": "PRIMARY",
                        "buttonVariant": "SECONDARY",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "position": {
                        "left": 47,
                        "top": 18
                      },
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "props": {
                        "text": "Confirm",
                        "buttonStyle": "PRIMARY_BUTTON",
                        "version": 1
                      }
                    }
                  ],
                  "operations": [
                    {
                      "type": "MODIFY_PROPS"
                    },
                    {
                      "type": "MODIFY_PROPS"
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "CHART_WIDGET",
      {
        "rows": 32,
        "columns": 24,
        "widgetName": "Chart",
        "chartType": "COLUMN_CHART",
        "chartName": "Sales Report",
        "allowScroll": false,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "minWidth": 450,
        "showDataPointLabel": false,
        "customEChartConfig": "{{\n{\n  \"dataset\": {\n    \"source\": [\n      [\n        \"Day\",\n        \"Baidu\",\n        \"Google\",\n        \"Bing\"\n      ],\n      [\n        \"Mon\",\n        620,\n        120,\n        60\n      ],\n      [\n        \"Tue\",\n        732,\n        132,\n        72\n      ],\n      [\n        \"Wed\",\n        701,\n        101,\n        71\n      ],\n      [\n        \"Thu\",\n        734,\n        134,\n        74\n      ],\n      [\n        \"Fri\",\n        1090,\n        290,\n        190\n      ],\n      [\n        \"Sat\",\n        1130,\n        230,\n        130\n      ],\n      [\n        \"Sun\",\n        1120,\n        220,\n        110\n      ]\n    ]\n  },\n  \"tooltip\": {\n    \"trigger\": \"axis\",\n    \"axisPointer\": {\n      \"type\": \"shadow\"\n    }\n  },\n  \"title\": {\n    \"text\": \"Search Engine Usage\",\n    \"left\": \"center\",\n    \"textStyle\": {\n      \"width\": 200,\n      \"overflow\": \"truncate\"\n    }\n  },\n  \"legend\": {\n    \"top\": 40,\n    \"type\": \"scroll\"\n  },\n  \"grid\": {\n    \"left\": 15,\n    \"right\": 15,\n    \"bottom\": 30,\n    \"top\": 100,\n    \"containLabel\": true\n  },\n  \"xAxis\": [\n    {\n      \"type\": \"category\"\n    }\n  ],\n  \"yAxis\": [\n    {\n      \"type\": \"value\"\n    }\n  ],\n  \"series\": [\n    {\n      \"type\": \"bar\",\n      \"stack\": \"Search Engine\"\n    },\n    {\n      \"type\": \"bar\",\n      \"stack\": \"Search Engine\"\n    },\n    {\n      \"type\": \"bar\",\n      \"stack\": \"Search Engine\"\n    }\n  ]\n}\n}}",
        "chartData": {
          "w8o4hbjhr8": {
            "seriesName": "2023",
            "data": [
              {
                "x": "Product1",
                "y": 20000
              },
              {
                "x": "Product2",
                "y": 22000
              },
              {
                "x": "Product3",
                "y": 32000
              }
            ]
          }
        },
        "xAxisName": "Product Line",
        "yAxisName": "Revenue($)",
        "labelOrientation": "auto",
        "customFusionChartConfig": {
          "type": "column2d",
          "dataSource": {
            "data": [
              {
                "label": "Product1",
                "value": 20000
              },
              {
                "label": "Product2",
                "value": 22000
              },
              {
                "label": "Product3",
                "value": 32000
              }
            ],
            "chart": {
              "caption": "Sales Report",
              "xAxisName": "Product Line",
              "yAxisName": "Revenue($)",
              "theme": "fusion",
              "alignCaptionWithCanvas": 1,
              "captionFontSize": "24",
              "captionAlignment": "center",
              "captionPadding": "20",
              "captionFontColor": "#231F20",
              "legendIconSides": "4",
              "legendIconBgAlpha": "100",
              "legendIconAlpha": "100",
              "legendPosition": "top",
              "canvasPadding": "0",
              "chartLeftMargin": "20",
              "chartTopMargin": "10",
              "chartRightMargin": "40",
              "chartBottomMargin": "10",
              "xAxisNameFontSize": "14",
              "labelFontSize": "12",
              "labelFontColor": "#716e6e",
              "xAxisNameFontColor": "#716e6e",
              "yAxisNameFontSize": "14",
              "yAxisValueFontSize": "12",
              "yAxisValueFontColor": "#716e6e",
              "yAxisNameFontColor": "#716e6e"
            }
          }
        },
        "dynamicBindingPathList": [
          {
            "key": "customEChartConfig"
          }
        ]
      }
    ],
    [
      "MAP_WIDGET",
      {
        "rows": 40,
        "columns": 24,
        "isDisabled": false,
        "isVisible": true,
        "widgetName": "Map",
        "enableSearch": true,
        "zoomLevel": 50,
        "enablePickLocation": true,
        "allowZoom": true,
        "mapCenter": {
          "lat": 40.7128,
          "long": -74.006
        },
        "defaultMarkers": [
          {
            "lat": 40.7128,
            "long": -74.006,
            "title": "New York"
          }
        ],
        "isClickedMarkerCentered": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "flexVerticalAlignment": "start",
        "enableMapTypeControl": false
      }
    ],
    [
      "RICH_TEXT_EDITOR_WIDGET",
      {
        "defaultText": "This is the initial <b>content</b> of the editor",
        "rows": 20,
        "columns": 24,
        "animateLoading": true,
        "isDisabled": false,
        "isVisible": true,
        "isRequired": false,
        "widgetName": "RichTextEditor",
        "isDefaultClickDisabled": true,
        "inputType": "html",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "version": 1,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "DATE_PICKER_WIDGET2",
      {
        "isDisabled": false,
        "datePickerType": "DATE_PICKER",
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "dateFormat": "YYYY-MM-DD HH:mm",
        "columns": 20,
        "widgetName": "DatePicker",
        "defaultDate": "2025-09-04T17:52:02.915Z",
        "minDate": "1920-12-31T18:30:00.000Z",
        "maxDate": "2121-12-31T18:29:00.000Z",
        "version": 2,
        "isRequired": false,
        "closeOnSelection": true,
        "shortcuts": false,
        "firstDayOfWeek": 0,
        "timePrecision": "minute",
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "SWITCH_WIDGET",
      {
        "label": "Label",
        "rows": 4,
        "columns": 12,
        "defaultSwitchState": true,
        "widgetName": "Switch",
        "alignWidget": "LEFT",
        "labelPosition": "Left",
        "version": 1,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill"
      }
    ],
    [
      "FORM_WIDGET",
      {
        "rows": 40,
        "columns": 24,
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "animateLoading": true,
        "widgetName": "Form",
        "backgroundColor": "#FFFFFF",
        "children": [],
        "positioning": "fixed",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "children": [],
                "version": 1,
                "blueprint": {
                  "view": [
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 24
                      },
                      "position": {
                        "top": 1,
                        "left": 1.5
                      },
                      "props": {
                        "text": "Form",
                        "fontSize": "1.25rem",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "position": {
                        "top": 33,
                        "left": 46
                      },
                      "props": {
                        "text": "Submit",
                        "buttonVariant": "PRIMARY",
                        "disabledWhenInvalid": true,
                        "resetFormOnClick": true,
                        "recaptchaType": "V3",
                        "version": 1
                      }
                    },
                    {
                      "type": "BUTTON_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 16
                      },
                      "position": {
                        "top": 33,
                        "left": 30
                      },
                      "props": {
                        "text": "Reset",
                        "buttonVariant": "SECONDARY",
                        "disabledWhenInvalid": false,
                        "resetFormOnClick": true,
                        "recaptchaType": "V3",
                        "version": 1
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "UPDATE_CREATE_PARAMS_BEFORE_ADD"
            },
            {
              "type": "MODIFY_PROPS"
            }
          ]
        },
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "flexVerticalAlignment": "stretch"
      }
    ],
    [
      "RATE_WIDGET",
      {
        "rows": 4,
        "columns": 20,
        "animateLoading": true,
        "maxCount": 5,
        "defaultRate": 3,
        "activeColor": "#FFCB45",
        "inactiveColor": "#E0DEDE",
        "size": "LARGE",
        "isRequired": false,
        "isAllowHalf": false,
        "isDisabled": false,
        "isReadOnly": false,
        "tooltips": [
          "Terrible",
          "Bad",
          "Neutral",
          "Good",
          "Great"
        ],
        "widgetName": "Rating"
      }
    ],
    [
      "IFRAME_WIDGET",
      {
        "source": "https://www.example.com",
        "borderOpacity": 100,
        "borderWidth": 1,
        "rows": 32,
        "columns": 24,
        "widgetName": "Iframe",
        "version": 1,
        "animateLoading": true,
        "isVisible": true,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "TABS_MIGRATOR_WIDGET",
      {
        "isLoading": true,
        "rows": 1,
        "columns": 1,
        "widgetName": "Skeleton",
        "version": 1,
        "animateLoading": true
      }
    ],
    [
      "DIVIDER_WIDGET",
      {
        "rows": 4,
        "columns": 20,
        "widgetName": "Divider",
        "orientation": "horizontal",
        "capType": "nc",
        "capSide": 0,
        "strokeStyle": "solid",
        "dividerColor": "#858282",
        "thickness": 2,
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "MENU_BUTTON_WIDGET",
      {
        "label": "Open Menu",
        "menuVariant": "PRIMARY",
        "placement": "CENTER",
        "isCompact": false,
        "isDisabled": false,
        "isVisible": true,
        "animateLoading": true,
        "menuItemsSource": "STATIC",
        "menuItems": {
          "menuItem1": {
            "label": "First Menu Item",
            "id": "menuItem1",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 0
          },
          "menuItem2": {
            "label": "Second Menu Item",
            "id": "menuItem2",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 1
          },
          "menuItem3": {
            "label": "Third Menu Item",
            "id": "menuItem3",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "index": 2
          }
        },
        "rows": 4,
        "columns": 16,
        "widgetName": "MenuButton",
        "version": 1
      }
    ],
    [
      "ICON_BUTTON_WIDGET",
      {
        "iconName": "plus",
        "buttonVariant": "PRIMARY",
        "isDisabled": false,
        "isVisible": true,
        "rows": 4,
        "columns": 4,
        "widgetName": "IconButton",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "hug",
        "minWidth": 50
      }
    ],
    [
      "CHECKBOX_GROUP_WIDGET",
      {
        "rows": 6,
        "columns": 23,
        "animateLoading": true,
        "labelTextSize": "0.875rem",
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE"
        ],
        "isDisabled": false,
        "isInline": true,
        "isRequired": false,
        "isVisible": true,
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "widgetName": "CheckboxGroup",
        "version": 2,
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "FILE_PICKER_WIDGET_V2",
      {
        "rows": 4,
        "files": [],
        "selectedFiles": [],
        "allowedFileTypes": [],
        "label": "Select Files",
        "columns": 16,
        "maxNumFiles": 1,
        "maxFileSize": 5,
        "fileDataType": "Base64",
        "dynamicTyping": true,
        "widgetName": "FilePicker",
        "isDefaultClickDisabled": true,
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "hug",
        "minWidth": 120
      }
    ],
    [
      "STATBOX_WIDGET",
      {
        "rows": 14,
        "columns": 22,
        "animateLoading": true,
        "widgetName": "Statbox",
        "backgroundColor": "white",
        "borderWidth": "1",
        "borderColor": "#E0DEDE",
        "children": [],
        "positioning": "fixed",
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "stretch",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "children": [],
                "version": 1,
                "blueprint": {
                  "view": [
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 36
                      },
                      "position": {
                        "top": 0,
                        "left": 1
                      },
                      "props": {
                        "text": "Page Views",
                        "fontSize": "0.875rem",
                        "textColor": "#999999",
                        "version": 1
                      }
                    },
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 36
                      },
                      "position": {
                        "top": 4,
                        "left": 1
                      },
                      "props": {
                        "text": "2.6 M",
                        "fontSize": "1.25rem",
                        "fontStyle": "BOLD",
                        "version": 1
                      }
                    },
                    {
                      "type": "ICON_BUTTON_WIDGET",
                      "size": {
                        "rows": 8,
                        "cols": 16
                      },
                      "position": {
                        "top": 2,
                        "left": 46
                      },
                      "props": {
                        "iconName": "arrow-top-right",
                        "buttonStyle": "PRIMARY",
                        "buttonVariant": "PRIMARY",
                        "version": 1
                      }
                    },
                    {
                      "type": "TEXT_WIDGET",
                      "size": {
                        "rows": 4,
                        "cols": 36
                      },
                      "position": {
                        "top": 8,
                        "left": 1
                      },
                      "props": {
                        "text": "21% more than last month",
                        "fontSize": "0.875rem",
                        "textColor": "#03B365",
                        "version": 1
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "AUDIO_RECORDER_WIDGET",
      {
        "iconColor": "white",
        "isDisabled": false,
        "isVisible": true,
        "rows": 7,
        "columns": 16,
        "widgetName": "AudioRecorder",
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "DOCUMENT_VIEWER_WIDGET",
      {
        "widgetName": "DocumentViewer",
        "docUrl": "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
        "rows": 40,
        "columns": 24,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "BUTTON_GROUP_WIDGET",
      {
        "rows": 4,
        "columns": 24,
        "widgetName": "ButtonGroup",
        "orientation": "horizontal",
        "buttonVariant": "PRIMARY",
        "isVisible": true,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "groupButtons": {
          "groupButton1": {
            "label": "Favorite",
            "iconName": "heart",
            "id": "groupButton1",
            "widgetId": "",
            "buttonType": "SIMPLE",
            "placement": "CENTER",
            "isVisible": true,
            "isDisabled": false,
            "disabledWhenInvalid": false,
            "index": 0,
            "menuItems": {}
          },
          "groupButton2": {
            "label": "Add",
            "iconName": "add",
            "id": "groupButton2",
            "buttonType": "SIMPLE",
            "placement": "CENTER",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "disabledWhenInvalid": false,
            "index": 1,
            "menuItems": {}
          },
          "groupButton3": {
            "label": "More",
            "iconName": "more",
            "id": "groupButton3",
            "buttonType": "MENU",
            "placement": "CENTER",
            "widgetId": "",
            "isVisible": true,
            "isDisabled": false,
            "disabledWhenInvalid": false,
            "index": 2,
            "menuItems": {
              "menuItem1": {
                "label": "First Option",
                "backgroundColor": "#FFFFFF",
                "id": "menuItem1",
                "widgetId": "",
                "onClick": "",
                "isVisible": true,
                "isDisabled": false,
                "disabledWhenInvalid": false,
                "index": 0
              },
              "menuItem2": {
                "label": "Second Option",
                "backgroundColor": "#FFFFFF",
                "id": "menuItem2",
                "widgetId": "",
                "onClick": "",
                "isVisible": true,
                "isDisabled": false,
                "disabledWhenInvalid": false,
                "index": 1
              },
              "menuItem3": {
                "label": "Delete",
                "iconName": "trash",
                "iconColor": "#FFFFFF",
                "iconAlign": "right",
                "textColor": "#FFFFFF",
                "backgroundColor": "#DD4B34",
                "id": "menuItem3",
                "widgetId": "",
                "onClick": "",
                "isVisible": true,
                "isDisabled": false,
                "disabledWhenInvalid": false,
                "index": 2
              }
            }
          }
        },
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "WDS_CUSTOM_WIDGET",
      {
        "widgetName": "Custom",
        "version": 1,
        "onResetClick": "{{showAlert('Successfully reset!!', '');}}",
        "events": [
          "onResetClick"
        ],
        "elevatedBackground": false,
        "size": "AUTO",
        "isVisible": true,
        "defaultModel": "{\n  \"tips\": [\n    \"Pass data to this widget in the default model field\",\n    \"Access data in the javascript file using the appsmith.model variable\",\n    \"Create events in the widget and trigger them in the javascript file using appsmith.triggerEvent('eventName')\",\n    \"Access data in CSS as var(--appsmith-model-{property-name})\"\n  ]\n}",
        "srcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-color-bg-accent) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-color-bg-accent) !important;\n}\n\n.button-container button.primary:hover {\n  opacity: 0.8;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-color-bg-accent);\n  border-color: var(--appsmith-theme-color-bg-accent);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\nimport React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\nconst Button = ({\n  children,\n  className,\n  ...props\n}) => /*#__PURE__*/React.createElement(\"button\", _extends({\n  className: className\n}, props), children);\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n  const handleNext = () => {\n    setCurrentIndex(prevIndex => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tip-header\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Custom Widget\"), /*#__PURE__*/React.createElement(\"div\", null, currentIndex + 1, \" / \", appsmith.model.tips.length)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"content\"\n  }, appsmith.model.tips[currentIndex])), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"button-container\"\n  }, /*#__PURE__*/React.createElement(Button, {\n    className: \"primary\",\n    onClick: handleNext\n  }, \"Next Tip\"), /*#__PURE__*/React.createElement(Button, {\n    className: \"reset\",\n    disabled: currentIndex === 0,\n    onClick: handleReset\n  }, \"Reset\")));\n}\nappsmith.onReady(() => {\n  /*\n   * This handler function will get called when parent application is ready.\n   * Initialize your component here\n   * more info - https://docs.appsmith.com/reference/widgets/custom#onready\n   */\n  ReactDOM.render(/*#__PURE__*/React.createElement(App, null), document.getElementById(\"root\"));\n});"
        },
        "uncompiledSrcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->\n<div id=\"root\"></div>\n",
          "css": ".app {\n  height: calc(var(--appsmith-ui-height) * 1px);\n  width: calc(var(--appsmith-ui-width) * 1px);\n  justify-content: center;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 29px 25px;\n  box-sizing: border-box;\n  font-family: system-ui;\n  background: #fff;\n}\n\n.tip-container {\n  margin-bottom: 20px;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.tip-container h2 {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.tip-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 9px;\n}\n\n.tip-header div {\n  color: #999;\n}\n\n.content {\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 14px;\n  line-height: 1.571429;\n}\n\n.button-container {\n  text-align: right;\n  padding-top: 4px;\n}\n\n.button-container button {\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: var(--appsmith-theme-border-radius-elevation-3);\n  padding: 6px 16px;\n  background: none;\n  height: auto;\n  transition: all 0.3s ease;\n}\n\n.button-container button.primary {\n  background: var(--appsmith-theme-color-bg-accent) !important;\n  color: #fff;\n  border: 1px solid var(--appsmith-theme-color-bg-accent) !important;\n}\n\n.button-container button.primary:hover {\n  opacity: 0.8;\n}\n\n.button-container button.reset {\n  border: 1px solid #999;\n  color: #999;\n  outline: none;\n  box-shadow: none;\n}\n\n.button-container button.reset:hover:not(:disabled) {\n  color: var(--appsmith-theme-color-bg-accent);\n  border-color: var(--appsmith-theme-color-bg-accent);\n}\n\n.button-container button.reset:disabled {\n  cursor: default;\n}",
          "js": "import React from \"https://esm.sh/react@18.2.0\";\nimport ReactDOM from \"https://esm.sh/react-dom@18.2.0\";\n\nconst Button = ({ children, className, ...props }) => (\n  <button className={className} {...props}>\n    {children}\n  </button>\n);\n\nfunction App() {\n  const [currentIndex, setCurrentIndex] = React.useState(0);\n\n  const handleNext = () => {\n    setCurrentIndex((prevIndex) => (prevIndex + 1) % appsmith.model.tips.length);\n  };\n\n  const handleReset = () => {\n    setCurrentIndex(0);\n    appsmith.triggerEvent(\"onResetClick\");\n  };\n\n  return (\n    <div className=\"app\">\n      <div className=\"tip-container\">\n        <div className=\"tip-header\">\n          <h2>Custom Widget</h2>\n          <div>{currentIndex + 1} / {appsmith.model.tips.length}</div>\n        </div>\n        <div className=\"content\">{appsmith.model.tips[currentIndex]}</div>\n      </div>\n      <div className=\"button-container\">\n        <Button className=\"primary\" onClick={handleNext}>Next Tip</Button>\n        <Button className=\"reset\" disabled={currentIndex === 0} onClick={handleReset}>Reset</Button>\n      </div>\n    </div>\n  );\n}\n\nappsmith.onReady(() => {\n  /*\n   * This handler function will get called when parent application is ready.\n   * Initialize your component here\n   * more info - https://docs.appsmith.com/reference/widgets/custom#onready\n   */\n  ReactDOM.render(<App />, document.getElementById(\"root\"));\n});"
        },
        "dynamicTriggerPathList": [
          {
            "key": "onResetClick"
          }
        ],
        "responsiveBehavior": "fill",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "MULTI_SELECT_TREE_WIDGET",
      {
        "rows": 7,
        "columns": 20,
        "mode": "SHOW_ALL",
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE",
            "children": [
              {
                "label": "Dark Blue",
                "value": "DARK BLUE"
              },
              {
                "label": "Light Blue",
                "value": "LIGHT BLUE"
              }
            ]
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "widgetName": "MultiTreeSelect",
        "defaultOptionValue": [
          "GREEN"
        ],
        "version": 1,
        "isVisible": true,
        "isRequired": false,
        "isDisabled": false,
        "allowClear": false,
        "expandAll": false,
        "placeholderText": "Select option(s)",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "SINGLE_SELECT_TREE_WIDGET",
      {
        "rows": 7,
        "columns": 20,
        "animateLoading": true,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE",
            "children": [
              {
                "label": "Dark Blue",
                "value": "DARK BLUE"
              },
              {
                "label": "Light Blue",
                "value": "LIGHT BLUE"
              }
            ]
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "widgetName": "TreeSelect",
        "defaultOptionValue": "BLUE",
        "version": 1,
        "isVisible": true,
        "isRequired": false,
        "isDisabled": false,
        "allowClear": false,
        "expandAll": false,
        "placeholderText": "Select option",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "SWITCH_GROUP_WIDGET",
      {
        "widgetName": "SwitchGroup",
        "rows": 6,
        "columns": 26,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "defaultSelectedValues": [
          "BLUE"
        ],
        "isDisabled": false,
        "isRequired": false,
        "isInline": true,
        "isVisible": true,
        "animateLoading": true,
        "alignment": "left",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "version": 1,
        "labelTextSize": "0.875rem",
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "AUDIO_WIDGET",
      {
        "rows": 4,
        "columns": 28,
        "widgetName": "Audio",
        "url": "https://assets.appsmith.com/widgets/birds_chirping.mp3",
        "autoPlay": false,
        "version": 1,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "PROGRESSBAR_WIDGET",
      {
        "widgetName": "ProgressBar",
        "rows": 4,
        "columns": 28,
        "isVisible": true,
        "showResult": false,
        "barType": "indeterminate",
        "progress": 50,
        "steps": 1,
        "version": 1,
        "responsiveBehavior": "fill"
      }
    ],
    [
      "CAMERA_WIDGET",
      {
        "widgetName": "Camera",
        "rows": 33,
        "columns": 25,
        "mode": "CAMERA",
        "isDisabled": false,
        "isVisible": true,
        "isMirrored": true,
        "version": 1,
        "responsiveBehavior": "hug",
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "MAP_CHART_WIDGET",
      {
        "rows": 32,
        "columns": 24,
        "widgetName": "MapChart",
        "version": 1,
        "mapType": "WORLD",
        "mapTitle": "Global Population",
        "showLabels": true,
        "data": [
          {
            "id": "NA",
            "value": ".82"
          },
          {
            "id": "SA",
            "value": "2.04"
          },
          {
            "id": "AS",
            "value": "1.78"
          },
          {
            "id": "EU",
            "value": ".40"
          },
          {
            "id": "AF",
            "value": "2.58"
          },
          {
            "id": "AU",
            "value": "1.30"
          }
        ],
        "colorRange": [
          {
            "minValue": 0.5,
            "maxValue": 1,
            "code": "#FFD74D"
          },
          {
            "minValue": 1,
            "maxValue": 2,
            "code": "#FB8C00"
          },
          {
            "minValue": 2,
            "maxValue": 3,
            "code": "#E65100"
          }
        ],
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "minWidth": 450
      }
    ],
    [
      "SELECT_WIDGET",
      {
        "rows": 7,
        "columns": 20,
        "placeholderText": "Select option",
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "sourceData": "[\n  {\n    \"name\": \"Blue\",\n    \"code\": \"BLUE\"\n  },\n  {\n    \"name\": \"Green\",\n    \"code\": \"GREEN\"\n  },\n  {\n    \"name\": \"Red\",\n    \"code\": \"RED\"\n  }\n]",
        "optionLabel": "name",
        "optionValue": "code",
        "serverSideFiltering": false,
        "widgetName": "Select",
        "defaultOptionValue": "GREEN",
        "version": 1,
        "isFilterable": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "labelTextSize": "0.875rem",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "dynamicPropertyPathList": [
          {
            "key": "sourceData"
          }
        ]
      }
    ],
    [
      "MULTI_SELECT_WIDGET_V2",
      {
        "rows": 7,
        "columns": 20,
        "animateLoading": true,
        "labelText": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "sourceData": [
          {
            "name": "Blue",
            "code": "BLUE"
          },
          {
            "name": "Green",
            "code": "GREEN"
          },
          {
            "name": "Red",
            "code": "RED"
          }
        ],
        "optionLabel": "name",
        "optionValue": "code",
        "widgetName": "MultiSelect",
        "isFilterable": true,
        "serverSideFiltering": false,
        "defaultOptionValue": [
          "GREEN",
          "RED"
        ],
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "placeholderText": "Select option(s)",
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "MULTI_SELECT_WIDGET",
      {
        "rows": 7,
        "columns": 20,
        "animateLoading": true,
        "labelText": "Label",
        "labelPosition": "Left",
        "labelAlignment": "left",
        "labelWidth": 5,
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "widgetName": "MultiSelect",
        "serverSideFiltering": false,
        "defaultOptionValue": [
          "GREEN"
        ],
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "placeholderText": "Select option(s)",
        "responsiveBehavior": "fill",
        "minWidth": 450
      }
    ],
    [
      "INPUT_WIDGET_V2",
      {
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "Input",
        "version": 2,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "inputType": "TEXT",
        "showStepArrows": false
      }
    ],
    [
      "PHONE_INPUT_WIDGET",
      {
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "PhoneInput",
        "version": 1,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "defaultDialCode": "+1",
        "allowDialCodeChange": false,
        "allowFormatting": true
      }
    ],
    [
      "CURRENCY_INPUT_WIDGET",
      {
        "rows": 7,
        "label": "Label",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelTextSize": "0.875rem",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "CurrencyInput",
        "version": 1,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "allowCurrencyChange": false,
        "defaultCurrencyCode": "INR",
        "decimals": 0,
        "showStepArrows": false
      }
    ],
    [
      "JSON_FORM_WIDGET",
      {
        "flexVerticalAlignment": "start",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "useSourceData": false,
        "animateLoading": true,
        "backgroundColor": "#fff",
        "columns": 25,
        "disabledWhenInvalid": true,
        "fixedFooter": true,
        "rows": 41,
        "schema": {},
        "scrollContents": true,
        "showReset": true,
        "title": "Form",
        "version": 1,
        "borderWidth": "1",
        "borderColor": "#E0DEDE",
        "widgetName": "JSONForm",
        "autoGenerateForm": true,
        "fieldLimitExceeded": false,
        "sourceData": "",
        "submitButtonLabel": "Submit",
        "resetButtonLabel": "Reset",
        "blueprint": {
          "operations": [
            {
              "type": "MODIFY_PROPS"
            }
          ]
        }
      }
    ],
    [
      "TABLE_WIDGET_V2",
      {
        "flexVerticalAlignment": "start",
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "rows": 28,
        "canFreezeColumn": true,
        "columnUpdatedAt": 1757008322919,
        "columns": 34,
        "animateLoading": true,
        "defaultSelectedRowIndex": 0,
        "defaultSelectedRowIndices": [
          0
        ],
        "label": "Data",
        "widgetName": "Table",
        "searchKey": "",
        "textSize": "0.875rem",
        "horizontalAlignment": "LEFT",
        "verticalAlignment": "CENTER",
        "totalRecordsCount": 0,
        "defaultPageSize": 0,
        "dynamicPropertyPathList": [],
        "borderColor": "#E0DEDE",
        "borderWidth": "1",
        "dynamicBindingPathList": [],
        "primaryColumns": {},
        "tableData": "",
        "columnWidthMap": {},
        "columnOrder": [],
        "enableClientSideSearch": true,
        "isVisibleSearch": true,
        "isVisibleFilters": false,
        "isVisibleDownload": true,
        "isVisiblePagination": true,
        "isSortable": true,
        "delimiter": ",",
        "version": 2,
        "inlineEditingSaveOption": "ROW_LEVEL",
        "customIsLoading": false,
        "customIsLoadingValue": "",
        "cachedTableData": {},
        "endOfData": false
      }
    ],
    [
      "NUMBER_SLIDER_WIDGET",
      {
        "min": 0,
        "max": 100,
        "step": 1,
        "defaultValue": 10,
        "showMarksLabel": true,
        "marks": [
          {
            "value": 25,
            "label": "25%"
          },
          {
            "value": 50,
            "label": "50%"
          },
          {
            "value": 75,
            "label": "75%"
          }
        ],
        "isVisible": true,
        "isDisabled": false,
        "tooltipAlwaysOn": false,
        "rows": 8,
        "columns": 40,
        "widgetName": "NumberSlider",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "labelText": "Percentage",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 8,
        "labelTextSize": "0.875rem",
        "sliderSize": "m",
        "responsiveBehavior": "fill"
      }
    ],
    [
      "RANGE_SLIDER_WIDGET",
      {
        "min": 0,
        "max": 100,
        "minRange": 5,
        "step": 1,
        "showMarksLabel": true,
        "defaultStartValue": 10,
        "defaultEndValue": 100,
        "marks": [
          {
            "value": 25,
            "label": "25%"
          },
          {
            "value": 50,
            "label": "50%"
          },
          {
            "value": 75,
            "label": "75%"
          }
        ],
        "isVisible": true,
        "isDisabled": false,
        "tooltipAlwaysOn": false,
        "labelText": "Percentage",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 8,
        "labelTextSize": "0.875rem",
        "rows": 8,
        "columns": 40,
        "widgetName": "RangeSlider",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "sliderSize": "m",
        "responsiveBehavior": "fill"
      }
    ],
    [
      "CATEGORY_SLIDER_WIDGET",
      {
        "options": [
          {
            "label": "xs",
            "value": "xs"
          },
          {
            "label": "sm",
            "value": "sm"
          },
          {
            "label": "md",
            "value": "md"
          },
          {
            "label": "lg",
            "value": "lg"
          },
          {
            "label": "xl",
            "value": "xl"
          }
        ],
        "defaultOptionValue": "md",
        "isVisible": true,
        "isDisabled": false,
        "showMarksLabel": true,
        "rows": 8,
        "columns": 40,
        "widgetName": "CategorySlider",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true,
        "labelText": "Size",
        "labelPosition": "Top",
        "labelAlignment": "left",
        "labelWidth": 5,
        "labelTextSize": "0.875rem",
        "sliderSize": "m",
        "responsiveBehavior": "fill"
      }
    ],
    [
      "CODE_SCANNER_WIDGET",
      {
        "rows": 33,
        "label": "Scan a QR/Barcode",
        "columns": 25,
        "widgetName": "CodeScanner",
        "isDefaultClickDisabled": true,
        "scannerLayout": "ALWAYS_ON",
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true,
        "placement": "CENTER",
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start"
      }
    ],
    [
      "LIST_WIDGET_V2",
      {
        "backgroundColor": "transparent",
        "itemBackgroundColor": "#FFFFFF",
        "requiresFlatWidgetChildren": true,
        "hasMetaWidgets": true,
        "rows": 40,
        "columns": 24,
        "animateLoading": true,
        "gridType": "vertical",
        "minWidth": 450,
        "responsiveBehavior": "fill",
        "flexVerticalAlignment": "start",
        "dynamicBindingPathList": [
          {
            "key": "currentItemsView"
          },
          {
            "key": "selectedItemView"
          },
          {
            "key": "triggeredItemView"
          },
          {
            "key": "primaryKeys"
          }
        ],
        "currentItemsView": "{{[]}}",
        "selectedItemView": "{{{}}}",
        "triggeredItemView": "{{{}}}",
        "enhancements": {
          "child": {}
        },
        "itemSpacing": 8,
        "templateHeight": 160,
        "listData": [
          {
            "id": "001",
            "name": "Blue",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "002",
            "name": "Green",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "003",
            "name": "Red",
            "img": "https://assets.appsmith.com/widgets/default.png"
          }
        ],
        "pageSize": 3,
        "widgetName": "List",
        "children": [],
        "additionalStaticProps": [
          "level",
          "levelData",
          "prefixMetaWidgetId",
          "metaWidgetId"
        ],
        "primaryKeys": "{{List1.listData.map((currentItem, currentIndex) => currentItem[\"id\"] )}}",
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "dropDisabled": true,
                "openParentPropertyPane": true,
                "noPad": true,
                "children": [],
                "blueprint": {
                  "view": [
                    {
                      "type": "CONTAINER_WIDGET",
                      "size": {
                        "rows": 12,
                        "cols": 64
                      },
                      "position": {
                        "top": 0,
                        "left": 0
                      },
                      "props": {
                        "backgroundColor": "white",
                        "containerStyle": "card",
                        "dragDisabled": true,
                        "isDeletable": false,
                        "isListItemContainer": true,
                        "disallowCopy": true,
                        "noContainerOffset": true,
                        "positioning": "fixed",
                        "disabledWidgetFeatures": [
                          "dynamicHeight"
                        ],
                        "shouldScrollContents": false,
                        "dynamicHeight": "FIXED",
                        "children": [],
                        "blueprint": {
                          "view": [
                            {
                              "type": "CANVAS_WIDGET",
                              "position": {
                                "top": 0,
                                "left": 0
                              },
                              "props": {
                                "containerStyle": "none",
                                "canExtend": false,
                                "detachFromLayout": true,
                                "children": [],
                                "version": 1,
                                "useAutoLayout": false,
                                "blueprint": {
                                  "view": [
                                    {
                                      "type": "IMAGE_WIDGET",
                                      "size": {
                                        "rows": 8,
                                        "cols": 16
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 0
                                      },
                                      "props": {
                                        "defaultImage": "https://assets.appsmith.com/widgets/default.png",
                                        "imageShape": "RECTANGLE",
                                        "maxZoomLevel": 1,
                                        "image": "{{currentItem.img}}",
                                        "boxShadow": "none",
                                        "objectFit": "cover",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "image"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 12
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.name}}",
                                        "textStyle": "HEADING",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": [],
                                        "dynamicHeight": "FIXED"
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 8
                                      },
                                      "position": {
                                        "top": 4,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.id}}",
                                        "textStyle": "BODY",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": [],
                                        "dynamicHeight": "FIXED"
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            },
            {
              "type": "MODIFY_PROPS"
            },
            {
              "type": "CHILD_OPERATIONS"
            },
            {
              "type": "BEFORE_ADD"
            },
            {
              "type": "BEFORE_PASTE"
            },
            {
              "type": "BEFORE_DROP"
            }
          ]
        }
      }
    ],
    [
      "EXTERNAL_WIDGET",
      {
        "widgetName": "CustomWidget",
        "rows": 50,
        "columns": 50,
        "version": 1,
        "events": [],
        "srcDoc": {
          "html": "<!-- no need to write html, head, body tags, it is handled by the widget -->",
          "js": "// no need to write window onLoad, it is handled by the widget",
          "css": "/* you can access your string properties of your model using `var(--appsmith-model-<property-name>)`*/"
        }
      }
    ],
    [
      "DROP_DOWN_WIDGET",
      {
        "rows": 7,
        "columns": 20,
        "placeholderText": "Select option",
        "labelText": "Label",
        "labelPosition": "Left",
        "labelAlignment": "left",
        "labelWidth": 5,
        "selectionType": "SINGLE_SELECT",
        "options": [
          {
            "label": "Blue",
            "value": "BLUE"
          },
          {
            "label": "Green",
            "value": "GREEN"
          },
          {
            "label": "Red",
            "value": "RED"
          }
        ],
        "serverSideFiltering": false,
        "widgetName": "Select",
        "defaultOptionValue": "GREEN",
        "version": 1,
        "isFilterable": false,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true
      }
    ],
    [
      "ICON_WIDGET",
      {
        "widgetName": "Icon",
        "rows": 4,
        "columns": 4,
        "version": 1
      }
    ],
    [
      "FILE_PICKER_WIDGET",
      {
        "rows": 4,
        "files": [],
        "selectedFiles": [],
        "allowedFileTypes": [],
        "label": "Select Files",
        "columns": 16,
        "maxNumFiles": 1,
        "maxFileSize": 5,
        "fileDataType": "Base64",
        "widgetName": "FilePicker",
        "isDefaultClickDisabled": true,
        "version": 1,
        "isRequired": false,
        "isDisabled": false,
        "animateLoading": true
      }
    ],
    [
      "FORM_BUTTON_WIDGET",
      {
        "rows": 4,
        "columns": 12,
        "widgetName": "FormButton",
        "text": "Submit",
        "isDefaultClickDisabled": true,
        "recaptchaType": "V3",
        "version": 1,
        "animateLoading": true
      }
    ],
    [
      "PROGRESS_WIDGET",
      {
        "widgetName": "Progress",
        "rows": 4,
        "columns": 28,
        "fillColor": "#03B365",
        "isIndeterminate": false,
        "showResult": false,
        "counterClosewise": false,
        "isVisible": true,
        "steps": 1,
        "progressType": "linear",
        "progress": 50,
        "version": 1,
        "responsiveBehavior": "fill"
      }
    ],
    [
      "CIRCULAR_PROGRESS_WIDGET",
      {
        "counterClockWise": false,
        "fillColor": "#03B365",
        "isVisible": true,
        "progress": 65,
        "showResult": true,
        "rows": 17,
        "columns": 16,
        "widgetName": "CircularProgress",
        "shouldScroll": false,
        "shouldTruncate": false,
        "version": 1,
        "animateLoading": true
      }
    ],
    [
      "LIST_WIDGET",
      {
        "backgroundColor": "transparent",
        "itemBackgroundColor": "#FFFFFF",
        "rows": 40,
        "columns": 24,
        "animateLoading": true,
        "gridType": "vertical",
        "template": {},
        "responsiveBehavior": "fill",
        "minWidth": 450,
        "positioning": "fixed",
        "enhancements": {
          "child": {}
        },
        "gridGap": 0,
        "listData": [
          {
            "id": "001",
            "name": "Blue",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "002",
            "name": "Green",
            "img": "https://assets.appsmith.com/widgets/default.png"
          },
          {
            "id": "003",
            "name": "Red",
            "img": "https://assets.appsmith.com/widgets/default.png"
          }
        ],
        "widgetName": "List",
        "children": [],
        "blueprint": {
          "view": [
            {
              "type": "CANVAS_WIDGET",
              "position": {
                "top": 0,
                "left": 0
              },
              "props": {
                "containerStyle": "none",
                "canExtend": false,
                "detachFromLayout": true,
                "dropDisabled": true,
                "openParentPropertyPane": true,
                "noPad": true,
                "children": [],
                "blueprint": {
                  "view": [
                    {
                      "type": "CONTAINER_WIDGET",
                      "size": {
                        "rows": 12,
                        "cols": 64
                      },
                      "position": {
                        "top": 0,
                        "left": 0
                      },
                      "props": {
                        "backgroundColor": "white",
                        "containerStyle": "card",
                        "dragDisabled": true,
                        "isDeletable": false,
                        "disallowCopy": true,
                        "disablePropertyPane": true,
                        "openParentPropertyPane": true,
                        "children": [],
                        "positioning": "fixed",
                        "blueprint": {
                          "view": [
                            {
                              "type": "CANVAS_WIDGET",
                              "position": {
                                "top": 0,
                                "left": 0
                              },
                              "props": {
                                "containerStyle": "none",
                                "canExtend": false,
                                "detachFromLayout": true,
                                "children": [],
                                "version": 1,
                                "blueprint": {
                                  "view": [
                                    {
                                      "type": "IMAGE_WIDGET",
                                      "size": {
                                        "rows": 8,
                                        "cols": 16
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 0
                                      },
                                      "props": {
                                        "defaultImage": "https://assets.appsmith.com/widgets/default.png",
                                        "imageShape": "RECTANGLE",
                                        "maxZoomLevel": 1,
                                        "image": "{{currentItem.img}}",
                                        "boxShadow": "none",
                                        "objectFit": "cover",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "image"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 12
                                      },
                                      "position": {
                                        "top": 0,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.name}}",
                                        "textStyle": "HEADING",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicHeight": "FIXED",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    },
                                    {
                                      "type": "TEXT_WIDGET",
                                      "size": {
                                        "rows": 4,
                                        "cols": 8
                                      },
                                      "position": {
                                        "top": 4,
                                        "left": 16
                                      },
                                      "props": {
                                        "text": "{{currentItem.id}}",
                                        "textStyle": "BODY",
                                        "textAlign": "LEFT",
                                        "boxShadow": "none",
                                        "dynamicHeight": "FIXED",
                                        "dynamicBindingPathList": [
                                          {
                                            "key": "text"
                                          }
                                        ],
                                        "dynamicTriggerPathList": []
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          ],
          "operations": [
            {
              "type": "MODIFY_PROPS"
            },
            {
              "type": "CHILD_OPERATIONS"
            }
          ]
        }
      }
    ],
    [
      "DATE_PICKER_WIDGET",
      {
        "isDisabled": false,
        "datePickerType": "DATE_PICKER",
        "rows": 4,
        "label": "",
        "dateFormat": "YYYY-MM-DD HH:mm",
        "columns": 20,
        "widgetName": "DatePicker",
        "defaultDate": "2025-09-05 03:52",
        "version": 1,
        "animateLoading": true
      }
    ],
    [
      "INPUT_WIDGET",
      {
        "inputType": "TEXT",
        "rows": 4,
        "label": "",
        "labelPosition": "Left",
        "labelAlignment": "left",
        "labelWidth": 5,
        "columns": 20,
        "widgetName": "Input",
        "version": 1,
        "defaultText": "",
        "iconAlign": "left",
        "autoFocus": false,
        "labelStyle": "",
        "resetOnSubmit": true,
        "isRequired": false,
        "isDisabled": false,
        "allowCurrencyChange": false,
        "animateLoading": true
      }
    ]
  ],
  widgetBuilderMap: [
    {
      "WDS_BUTTON_WIDGET": (widgetProps: any) => ({
        key: "WDS_BUTTON_WIDGET",
        value: (widgetProps: any) => ({
          name: ""
        })
      })
    }
  ],
  widgetsMap: [
    {
      "WDS_BUTTON_WIDGET": (Class_WDSButtonWidget: any) => ({
        key: "WDS_BUTTON_WIDGET",
        value: (Class_WDSButtonWidget: any) => ({
          type: "WDS_BUTTON_WIDGET",
          getAnvilConfig: "fn",
          getAutocompleteDefinitions: "fn",
          getConfig: "fn",
          getDefaultPropertiesMap: "fn",
          getDefaults: "fn",
          getDependencyMap: "fn",
          getDerivedPropertiesMap: "fn",
          getFeatures: "fn",
          getMetaPropertiesMap: "fn",
          getMethods: "fn",
          getPropertyPaneContentConfig: "fn",
          getPropertyPaneStyleConfig: "fn",
          getSetterConfig: "fn",
          getStylesheetConfig: "fn",
          getWidgetType: "fn",
          getWidgetFeatures: "fn",
        })
      })
    }
  ],
}
