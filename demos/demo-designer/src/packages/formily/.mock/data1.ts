const data = {
  "name": "Form",
  "path": "",
  "toggled": true,
  "data": {
    "displayName": "Form",
    "id": "iqmjklh6khq",
    "initialized": true,
    "submitting": false,
    "validating": false,
    "loading": false,
    "modified": false,
    "mounted": true,
    "unmounted": false,
    "display": "visible",
    "pattern": "editable",
    "values": {
      "type": "string",
      "title": "Input",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-validator": [],
      "x-component-props": {},
      "x-decorator-props": {}
    },
    "initialValues": {},
    "valid": true,
    "invalid": false,
    "errors": [],
    "warnings": [],
    "successes": [],
    "hidden": false,
    "visible": true,
    "editable": true,
    "readOnly": false,
    "readPretty": false,
    "disabled": false
  },
  "active": true,
  "children": [
    {
      "name": "field-group",
      "path": "field-group",
      "toggled": true,
      "data": {
        "actions": {},
        "displayName": "VoidField",
        "address": "field-group",
        "path": "field-group",
        "mounted": true,
        "unmounted": false,
        "initialized": true,
        "title": "Field Properties",
        "display": "visible",
        "pattern": "editable",
        "hidden": false,
        "visible": true,
        "disabled": false,
        "readOnly": false,
        "readPretty": false,
        "editable": true,
        "component": [
          "CollapseItem",
          {}
        ],
        "decorator": [
          null,
          {}
        ]
      },
      "children": [
        {
          "name": "name",
          "path": "field-group.name",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.name",
            "path": "name",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Name",
            "component": [
              "Input",
              {}
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        },
        {
          "name": "title",
          "path": "field-group.title",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.title",
            "path": "title",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Title",
            "component": [
              "Input",
              {}
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "value": "Input",
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        },
        {
          "name": "description",
          "path": "field-group.description",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.description",
            "path": "description",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Description",
            "component": [
              "Input.TextArea",
              {}
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        },
        {
          "name": "x-display",
          "path": "field-group.x-display",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.x-display",
            "path": "x-display",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Display State",
            "dataSource": [
              {
                "label": "Visible",
                "value": "visible"
              },
              {
                "label": "Hidden",
                "value": "hidden"
              },
              {
                "label": "None",
                "value": "none"
              },
              {
                "label": "Inherit",
                "value": ""
              }
            ],
            "component": [
              "Select",
              {
                "defaultValue": "visible"
              }
            ],
            "decorator": [
              "FormItem",
              {
                "tooltip": "When the display value is \"None\", the data will be \"Hidden\" and deleted. When the display value is hidden, only the UI will be hidden"
              }
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        },
        {
          "name": "x-pattern",
          "path": "field-group.x-pattern",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.x-pattern",
            "path": "x-pattern",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "UI Pattern",
            "dataSource": [
              {
                "label": "Editable",
                "value": "editable"
              },
              {
                "label": "Disabled",
                "value": "disabled"
              },
              {
                "label": "ReadOnly",
                "value": "readOnly"
              },
              {
                "label": "ReadPretty",
                "value": "readPretty"
              },
              {
                "label": "Inherit",
                "value": ""
              }
            ],
            "component": [
              "Select",
              {
                "defaultValue": "editable"
              }
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        },
        {
          "name": "default",
          "path": "field-group.default",
          "toggled": false,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.default",
            "path": "default",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Default",
            "component": [
              "ValueInput",
              {}
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          },
          "active": false
        },
        {
          "name": "enum",
          "path": "field-group.enum",
          "toggled": false,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.enum",
            "path": "enum",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Options",
            "component": [
              {
                "$$typeof": "Symbol(react.memo)",
                "type": "f (){ }",
                "compare": null
              },
              {}
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          },
          "active": false
        },
        {
          "name": "x-reactions",
          "path": "field-group.x-reactions",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.x-reactions",
            "path": "x-reactions",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Reactions",
            "component": [
              "f ReactionsSetter(){ }",
              {}
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        },
        {
          "name": "x-validator",
          "path": "field-group.x-validator",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "ArrayField",
            "address": "field-group.x-validator",
            "path": "x-validator",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Validator",
            "component": [
              {
                "$$typeof": "Symbol(react.memo)",
                "type": "f (){ }",
                "compare": null
              },
              {}
            ],
            "decorator": [
              null,
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "value": [],
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        },
        {
          "name": "required",
          "path": "field-group.required",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "Field",
            "address": "field-group.required",
            "path": "required",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": "Required",
            "component": [
              "Switch",
              {}
            ],
            "decorator": [
              "FormItem",
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true
          }
        }
      ],
      "active": false
    },
    {
      "name": "component-group",
      "path": "component-group",
      "toggled": true,
      "data": {
        "actions": {},
        "displayName": "VoidField",
        "address": "component-group",
        "path": "component-group",
        "mounted": true,
        "unmounted": false,
        "initialized": true,
        "title": "Component Properties",
        "selfDisplay": "visible",
        "display": "visible",
        "pattern": "editable",
        "hidden": false,
        "visible": true,
        "disabled": false,
        "readOnly": false,
        "readPretty": false,
        "editable": true,
        "component": [
          "CollapseItem",
          {}
        ],
        "decorator": [
          null,
          {}
        ]
      },
      "children": [
        {
          "name": "x-component-props",
          "path": "component-group.x-component-props",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "ObjectField",
            "address": "component-group.x-component-props",
            "path": "x-component-props",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": {
              "size": {
                "title": "Size",
                "datasource": [
                  "Large",
                  "Small",
                  "Default",
                  "Inherit"
                ]
              },
              "allowclear": "Allow Clear",
              "autofocus": "Auto Focus",
              "showsearch": "Show Search",
              "notfoundcontent": "Not Found Content",
              "bordered": "Bordered",
              "placeholder": "Placeholder",
              "style": {
                "width": "Width",
                "height": "Height",
                "display": "Display",
                "background": "Background",
                "boxshadow": "Box Shadow",
                "font": "Font",
                "margin": "Margin",
                "padding": "Padding",
                "borderradius": "Radius",
                "border": "Border",
                "opacity": "Opacity"
              },
              "addonafter": "Addon After",
              "addonbefore": "Addon Before",
              "maxlength": "Max Length",
              "prefix": "Prefix",
              "suffix": "Suffix",
              "autosize": "Auto Size",
              "showcount": "Show Count",
              "checkstrength": "Check Strength"
            },
            "component": [
              null,
              {
                "placeholder": "Placeholder"
              }
            ],
            "decorator": [
              null,
              {}
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "value": {},
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true,
            "additionalProperties": []
          },
          "children": [
            {
              "name": "addonBefore",
              "path": "component-group.x-component-props.addonBefore",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.addonBefore",
                "path": "x-component-props.addonBefore",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Addon Before",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "addonAfter",
              "path": "component-group.x-component-props.addonAfter",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.addonAfter",
                "path": "x-component-props.addonAfter",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Addon After",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "prefix",
              "path": "component-group.x-component-props.prefix",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.prefix",
                "path": "x-component-props.prefix",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Prefix",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "suffix",
              "path": "component-group.x-component-props.suffix",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.suffix",
                "path": "x-component-props.suffix",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Suffix",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "allowClear",
              "path": "component-group.x-component-props.allowClear",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.allowClear",
                "path": "x-component-props.allowClear",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Allow Clear",
                "component": [
                  "Switch",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "bordered",
              "path": "component-group.x-component-props.bordered",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.bordered",
                "path": "x-component-props.bordered",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Bordered",
                "component": [
                  "Switch",
                  {
                    "defaultChecked": true
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "maxLength",
              "path": "component-group.x-component-props.maxLength",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.maxLength",
                "path": "x-component-props.maxLength",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Max Length",
                "component": [
                  "NumberPicker",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "placeholder",
              "path": "component-group.x-component-props.placeholder",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.placeholder",
                "path": "x-component-props.placeholder",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Placeholder",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "size",
              "path": "component-group.x-component-props.size",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-group.x-component-props.size",
                "path": "x-component-props.size",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Size",
                "dataSource": [
                  {
                    "label": "Large",
                    "value": "large"
                  },
                  {
                    "label": "Small",
                    "value": "small"
                  },
                  {
                    "label": "Default",
                    "value": "middle"
                  },
                  {
                    "value": null,
                    "label": "Inherit"
                  }
                ],
                "component": [
                  "Select",
                  {
                    "defaultValue": "middle"
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            }
          ],
          "active": false
        }
      ],
      "active": false
    },
    {
      "name": "decorator-group",
      "path": "decorator-group",
      "toggled": true,
      "data": {
        "actions": {},
        "displayName": "VoidField",
        "address": "decorator-group",
        "path": "decorator-group",
        "mounted": true,
        "unmounted": false,
        "initialized": true,
        "title": "Decorator Properties",
        "selfDisplay": "visible",
        "display": "visible",
        "pattern": "editable",
        "hidden": false,
        "visible": true,
        "disabled": false,
        "readOnly": false,
        "readPretty": false,
        "editable": true,
        "component": [
          "CollapseItem",
          {
            "defaultExpand": false
          }
        ],
        "decorator": [
          null,
          {}
        ]
      },
      "children": [
        {
          "name": "x-decorator-props",
          "path": "decorator-group.x-decorator-props",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "ObjectField",
            "address": "decorator-group.x-decorator-props",
            "path": "x-decorator-props",
            "initialized": true,
            "loading": false,
            "validating": false,
            "submitting": false,
            "selfModified": false,
            "active": false,
            "visited": false,
            "mounted": true,
            "unmounted": false,
            "inputValues": [],
            "inputValue": null,
            "feedbacks": [],
            "title": {
              "addonafter": "Addon After",
              "addonbefore": "Addon Before",
              "tooltip": "Tooltip",
              "asterisk": "Asterisk",
              "gridspan": "Grid Span",
              "labelcol": "Label Col",
              "wrappercol": "Wrapper Col",
              "colon": "Colon",
              "labelalign": {
                "title": "Label Align",
                "datasource": [
                  "Left",
                  "Right",
                  "Inherit"
                ]
              },
              "wrapperalign": {
                "title": "Wrapper Align",
                "datasource": [
                  "Left",
                  "Right",
                  "Inherit"
                ]
              },
              "labelwrap": "Label Wrap",
              "wrapperwrap": "Wrapper Wrap",
              "labelwidth": "Label Width",
              "wrapperwidth": "Wrapper Width",
              "fullness": "Fullness",
              "inset": "Inset",
              "shallow": "Shallow",
              "bordered": "Bordered",
              "size": {
                "title": "Size",
                "datasource": [
                  "Large",
                  "Small",
                  "Default",
                  "Inherit"
                ]
              },
              "layout": {
                "title": "Layout",
                "datasource": [
                  "Vertical",
                  "Horizontal",
                  "Inline",
                  "Inherit"
                ]
              },
              "feedbacklayout": {
                "title": "Feedback Layout",
                "datasource": [
                  "Loose",
                  "Terse",
                  "Popup",
                  "None",
                  "Inherit"
                ]
              },
              "tooltiplayout": {
                "title": "Tooltip Layout",
                "datasource": [
                  "Icon",
                  "Text",
                  "Inherit"
                ]
              },
              "style": {
                "width": "Width",
                "height": "Height",
                "display": "Display",
                "background": "Background",
                "boxshadow": "Box Shadow",
                "font": "Font",
                "margin": "Margin",
                "padding": "Padding",
                "borderradius": "Radius",
                "border": "Border",
                "opacity": "Opacity"
              }
            },
            "component": [
              null,
              {}
            ],
            "decorator": [
              null,
              {
                "tooltip": "Tooltip"
              }
            ],
            "errors": [],
            "warnings": [],
            "successes": [],
            "valid": true,
            "invalid": false,
            "selfErrors": [],
            "selfWarnings": [],
            "selfSuccesses": [],
            "selfValid": true,
            "selfInvalid": false,
            "value": {},
            "display": "visible",
            "pattern": "editable",
            "required": false,
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true,
            "additionalProperties": []
          },
          "children": [
            {
              "name": "tooltip",
              "path": "decorator-group.x-decorator-props.tooltip",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.tooltip",
                "path": "x-decorator-props.tooltip",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Tooltip",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "addonBefore",
              "path": "decorator-group.x-decorator-props.addonBefore",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.addonBefore",
                "path": "x-decorator-props.addonBefore",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Addon Before",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "addonAfter",
              "path": "decorator-group.x-decorator-props.addonAfter",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.addonAfter",
                "path": "x-decorator-props.addonAfter",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Addon After",
                "component": [
                  "Input",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "labelCol",
              "path": "decorator-group.x-decorator-props.labelCol",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.labelCol",
                "path": "x-decorator-props.labelCol",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Label Col",
                "component": [
                  "NumberPicker",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "wrapperCol",
              "path": "decorator-group.x-decorator-props.wrapperCol",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.wrapperCol",
                "path": "x-decorator-props.wrapperCol",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Wrapper Col",
                "component": [
                  "NumberPicker",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "labelWidth",
              "path": "decorator-group.x-decorator-props.labelWidth",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.labelWidth",
                "path": "x-decorator-props.labelWidth",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Label Width",
                "component": [
                  "SizeInput",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "wrapperWidth",
              "path": "decorator-group.x-decorator-props.wrapperWidth",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.wrapperWidth",
                "path": "x-decorator-props.wrapperWidth",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Wrapper Width",
                "component": [
                  "SizeInput",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "colon",
              "path": "decorator-group.x-decorator-props.colon",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.colon",
                "path": "x-decorator-props.colon",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Colon",
                "component": [
                  "Switch",
                  {
                    "defaultChecked": true
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "asterisk",
              "path": "decorator-group.x-decorator-props.asterisk",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.asterisk",
                "path": "x-decorator-props.asterisk",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Asterisk",
                "component": [
                  "Switch",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "gridSpan",
              "path": "decorator-group.x-decorator-props.gridSpan",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.gridSpan",
                "path": "x-decorator-props.gridSpan",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Grid Span",
                "component": [
                  "NumberPicker",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "feedbackLayout",
              "path": "decorator-group.x-decorator-props.feedbackLayout",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.feedbackLayout",
                "path": "x-decorator-props.feedbackLayout",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Feedback Layout",
                "dataSource": [
                  {
                    "label": "Loose",
                    "value": "loose"
                  },
                  {
                    "label": "Terse",
                    "value": "terse"
                  },
                  {
                    "label": "Popup",
                    "value": "popover"
                  },
                  {
                    "label": "None",
                    "value": "none"
                  },
                  {
                    "value": null,
                    "label": "Inherit"
                  }
                ],
                "component": [
                  "Select",
                  {
                    "defaultValue": "loose"
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "size",
              "path": "decorator-group.x-decorator-props.size",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.size",
                "path": "x-decorator-props.size",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Size",
                "dataSource": [
                  {
                    "label": "Large",
                    "value": "large"
                  },
                  {
                    "label": "Small",
                    "value": "small"
                  },
                  {
                    "label": "Default",
                    "value": "default"
                  },
                  {
                    "value": null,
                    "label": "Inherit"
                  }
                ],
                "component": [
                  "Select",
                  {
                    "defaultValue": "default"
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "layout",
              "path": "decorator-group.x-decorator-props.layout",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.layout",
                "path": "x-decorator-props.layout",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Layout",
                "dataSource": [
                  {
                    "label": "Vertical",
                    "value": "vertical"
                  },
                  {
                    "label": "Horizontal",
                    "value": "horizontal"
                  },
                  {
                    "label": "Inline",
                    "value": "inline"
                  },
                  {
                    "value": null,
                    "label": "Inherit"
                  }
                ],
                "component": [
                  "Select",
                  {
                    "defaultValue": "horizontal"
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "tooltipLayout",
              "path": "decorator-group.x-decorator-props.tooltipLayout",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.tooltipLayout",
                "path": "x-decorator-props.tooltipLayout",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Tooltip Layout",
                "dataSource": [
                  {
                    "label": "Icon",
                    "value": "icon"
                  },
                  {
                    "label": "Text",
                    "value": "text"
                  },
                  {
                    "value": null,
                    "label": "Inherit"
                  }
                ],
                "component": [
                  "Select",
                  {
                    "defaultValue": "icon"
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "labelAlign",
              "path": "decorator-group.x-decorator-props.labelAlign",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.labelAlign",
                "path": "x-decorator-props.labelAlign",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Label Align",
                "dataSource": [
                  {
                    "label": "Left",
                    "value": "left"
                  },
                  {
                    "label": "Right",
                    "value": "right"
                  },
                  {
                    "value": null,
                    "label": "Inherit"
                  }
                ],
                "component": [
                  "Select",
                  {
                    "defaultValue": "right"
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "wrapperAlign",
              "path": "decorator-group.x-decorator-props.wrapperAlign",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.wrapperAlign",
                "path": "x-decorator-props.wrapperAlign",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Wrapper Align",
                "dataSource": [
                  {
                    "label": "Left",
                    "value": "left"
                  },
                  {
                    "label": "Right",
                    "value": "right"
                  },
                  {
                    "value": null,
                    "label": "Inherit"
                  }
                ],
                "component": [
                  "Select",
                  {
                    "defaultValue": "left"
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "labelWrap",
              "path": "decorator-group.x-decorator-props.labelWrap",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.labelWrap",
                "path": "x-decorator-props.labelWrap",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Label Wrap",
                "component": [
                  "Switch",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "wrapperWrap",
              "path": "decorator-group.x-decorator-props.wrapperWrap",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.wrapperWrap",
                "path": "x-decorator-props.wrapperWrap",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Wrapper Wrap",
                "component": [
                  "Switch",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "fullness",
              "path": "decorator-group.x-decorator-props.fullness",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.fullness",
                "path": "x-decorator-props.fullness",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Fullness",
                "component": [
                  "Switch",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "inset",
              "path": "decorator-group.x-decorator-props.inset",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.inset",
                "path": "x-decorator-props.inset",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Inset",
                "component": [
                  "Switch",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "bordered",
              "path": "decorator-group.x-decorator-props.bordered",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-group.x-decorator-props.bordered",
                "path": "x-decorator-props.bordered",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Bordered",
                "component": [
                  "Switch",
                  {
                    "defaultChecked": true
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "component-style-group",
      "path": "component-style-group",
      "toggled": true,
      "data": {
        "actions": {},
        "displayName": "VoidField",
        "address": "component-style-group",
        "path": "component-style-group",
        "mounted": true,
        "unmounted": false,
        "initialized": true,
        "title": "Component Style",
        "selfDisplay": "visible",
        "display": "visible",
        "pattern": "editable",
        "hidden": false,
        "visible": true,
        "disabled": false,
        "readOnly": false,
        "readPretty": false,
        "editable": true,
        "component": [
          "CollapseItem",
          {
            "defaultExpand": false
          }
        ],
        "decorator": [
          null,
          {}
        ]
      },
      "children": [
        {
          "name": "x-component-props.style",
          "path": "component-style-group.x-component-props.style",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "VoidField",
            "address": "component-style-group.x-component-props.style",
            "path": "x-component-props.style",
            "mounted": true,
            "unmounted": false,
            "initialized": true,
            "title": {
              "width": "Width",
              "height": "Height",
              "display": "Display",
              "background": "Background",
              "boxshadow": "Box Shadow",
              "font": "Font",
              "margin": "Margin",
              "padding": "Padding",
              "borderradius": "Radius",
              "border": "Border",
              "opacity": "Opacity"
            },
            "display": "visible",
            "pattern": "editable",
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true,
            "component": [
              null,
              {}
            ],
            "decorator": [
              null,
              {}
            ]
          },
          "children": [
            {
              "name": "style.width",
              "path": "component-style-group.x-component-props.style.style.width",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.width",
                "path": "x-component-props.style.width",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Width",
                "component": [
                  "SizeInput",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.height",
              "path": "component-style-group.x-component-props.style.style.height",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.height",
                "path": "x-component-props.style.height",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Height",
                "component": [
                  "SizeInput",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.display",
              "path": "component-style-group.x-component-props.style.style.display",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.display",
                "path": "x-component-props.style.display",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Display",
                "component": [
                  "DisplayStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.flex",
              "path": "component-style-group.x-component-props.style.style.flex",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.flex",
                "path": "x-component-props.style.flex",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "selfDisplay": "none",
                "component": [
                  {
                    "$$typeof": "Symbol(react.memo)",
                    "type": "f (){ }",
                    "compare": null
                  },
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "none",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": false,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.background",
              "path": "component-style-group.x-component-props.style.style.background",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.background",
                "path": "x-component-props.style.background",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Background",
                "component": [
                  "BackgroundStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.backgroundColor",
              "path": "component-style-group.x-component-props.style.style.backgroundColor",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.backgroundColor",
                "path": "x-component-props.style.backgroundColor",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "component": [
                  "f ColorInput(){ }",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.boxShadow",
              "path": "component-style-group.x-component-props.style.style.boxShadow",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.boxShadow",
                "path": "x-component-props.style.boxShadow",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Box Shadow",
                "component": [
                  "BoxShadowStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.font",
              "path": "component-style-group.x-component-props.style.style.font",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.font",
                "path": "x-component-props.style.font",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Font",
                "component": [
                  "FontStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.fontFamily",
              "path": "component-style-group.x-component-props.style.style.fontFamily",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.fontFamily",
                "path": "x-component-props.style.fontFamily",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "dataSource": [
                  {
                    "label": "#ReactNode",
                    "value": "SimSun"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "Microsoft Yahei"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "PingFang SC"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "andale mono,monospace"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "arial,helvetica,sans-serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "arial black,sans-serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "book antiqua,palatino,serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "comic sans ms,sans-serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "courier new,courier,monospace"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "georgia,palatino,serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "Helvetica Neue"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "helvetica,arial,sans-serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "impact,sans-serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "symbol"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "tahoma,arial,helvetica,sans-serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "terminal,monaco,monospace"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "times new roman,times,serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "trebuchet ms,geneva,sans-serif"
                  },
                  {
                    "label": "#ReactNode",
                    "value": "verdana,geneva,sans-serif"
                  }
                ],
                "component": [
                  {
                    "$$typeof": "Symbol(react.forward_ref)",
                    "render": "f (){ }",
                    "SECRET_COMBOBOX_MODE_DO_NOT_USE": "SECRET_COMBOBOX_MODE_DO_NOT_USE",
                    "Option": "f Option(){ }",
                    "OptGroup": "f OptGroup(){ }",
                    "_InternalPanelDoNotUseOrYouWillBeFired": "f (){ }",
                    "Behavior": [
                      {
                        "name": "Select",
                        "extends": [
                          "Field"
                        ],
                        "selector": "f selector(){ }",
                        "designerProps": {
                          "propsSchema": {
                            "type": "object",
                            "properties": {
                              "field-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "properties": {
                                  "name": {
                                    "type": "string",
                                    "x-decorator": "FormItem",
                                    "x-component": "Input"
                                  },
                                  "title": {
                                    "type": "string",
                                    "x-decorator": "FormItem",
                                    "x-component": "Input"
                                  },
                                  "description": {
                                    "type": "string",
                                    "x-decorator": "FormItem",
                                    "x-component": "Input.TextArea"
                                  },
                                  "x-display": {
                                    "type": "string",
                                    "enum": [
                                      "visible",
                                      "hidden",
                                      "none",
                                      ""
                                    ],
                                    "x-decorator": "FormItem",
                                    "x-component": "Select",
                                    "x-component-props": {
                                      "defaultValue": "visible"
                                    }
                                  },
                                  "x-pattern": {
                                    "type": "string",
                                    "enum": [
                                      "editable",
                                      "disabled",
                                      "readOnly",
                                      "readPretty",
                                      ""
                                    ],
                                    "x-decorator": "FormItem",
                                    "x-component": "Select",
                                    "x-component-props": {
                                      "defaultValue": "editable"
                                    }
                                  },
                                  "default": {
                                    "x-decorator": "FormItem",
                                    "x-component": "ValueInput"
                                  },
                                  "enum": {
                                    "x-decorator": "FormItem",
                                    "x-component": {
                                      "$$typeof": "Symbol(react.memo)",
                                      "type": "f (){ }",
                                      "compare": null
                                    }
                                  },
                                  "x-reactions": {
                                    "x-decorator": "FormItem",
                                    "x-component": "f ReactionsSetter(){ }"
                                  },
                                  "x-validator": {
                                    "type": "array",
                                    "x-component": {
                                      "$$typeof": "Symbol(react.memo)",
                                      "type": "f (){ }",
                                      "compare": null
                                    }
                                  },
                                  "required": {
                                    "type": "boolean",
                                    "x-decorator": "FormItem",
                                    "x-component": "Switch"
                                  }
                                }
                              },
                              "component-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-component\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-component-props": {
                                    "type": "object",
                                    "properties": {
                                      "mode": {
                                        "type": "string",
                                        "enum": [
                                          "multiple",
                                          "tags",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Radio.Group",
                                        "x-component-props": {
                                          "defaultValue": null,
                                          "optionType": "button"
                                        }
                                      },
                                      "allowClear": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "autoClearSearchValue": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "dropdownMatchSelectWidth": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "autoFocus": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "bordered": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "defaultActiveFirstOption": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "defaultOpen": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "labelInValue": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "showArrow": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "showSearch": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "virtual": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultValue": true
                                        }
                                      },
                                      "filterOption": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "ValueInput",
                                        "x-component-props": {
                                          "include": [
                                            "BOOLEAN",
                                            "EXPRESSION"
                                          ]
                                        }
                                      },
                                      "filterSort": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "ValueInput",
                                        "x-component-props": {
                                          "include": [
                                            "EXPRESSION"
                                          ]
                                        }
                                      },
                                      "listHeight": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker",
                                        "x-component-props": {
                                          "defaultValue": 256
                                        }
                                      },
                                      "maxTagCount": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "maxTagPlaceholder": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "maxTagTextLength": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "notFoundContent": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input",
                                        "x-component-props": {
                                          "defaultValue": "Not Found"
                                        }
                                      },
                                      "placeholder": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "size": {
                                        "type": "string",
                                        "enum": [
                                          "large",
                                          "small",
                                          "middle",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "middle"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "decorator-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-component-props": {
                                  "defaultExpand": false
                                },
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-decorator-props": {
                                    "type": "object",
                                    "properties": {
                                      "tooltip": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "addonBefore": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "addonAfter": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "labelCol": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "wrapperCol": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "labelWidth": {
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "wrapperWidth": {
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "colon": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "asterisk": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "gridSpan": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "feedbackLayout": {
                                        "type": "string",
                                        "enum": [
                                          "loose",
                                          "terse",
                                          "popover",
                                          "none",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "loose"
                                        }
                                      },
                                      "size": {
                                        "type": "string",
                                        "enum": [
                                          "large",
                                          "small",
                                          "default",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "default"
                                        }
                                      },
                                      "layout": {
                                        "type": "string",
                                        "enum": [
                                          "vertical",
                                          "horizontal",
                                          "inline",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "horizontal"
                                        }
                                      },
                                      "tooltipLayout": {
                                        "type": "string",
                                        "enum": [
                                          "icon",
                                          "text",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "icon"
                                        }
                                      },
                                      "labelAlign": {
                                        "type": "string",
                                        "enum": [
                                          "left",
                                          "right",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "right"
                                        }
                                      },
                                      "wrapperAlign": {
                                        "type": "string",
                                        "enum": [
                                          "left",
                                          "right",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "left"
                                        }
                                      },
                                      "labelWrap": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "wrapperWrap": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "fullness": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "inset": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "bordered": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "component-style-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-component-props": {
                                  "defaultExpand": false
                                },
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-component\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-component-props.style": {
                                    "type": "void",
                                    "properties": {
                                      "style.width": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.height": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.display": {
                                        "x-component": "DisplayStyleSetter"
                                      },
                                      "style.background": {
                                        "x-component": "BackgroundStyleSetter"
                                      },
                                      "style.boxShadow": {
                                        "x-component": "BoxShadowStyleSetter"
                                      },
                                      "style.font": {
                                        "x-component": "FontStyleSetter"
                                      },
                                      "style.margin": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.padding": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.borderRadius": {
                                        "x-component": "BorderRadiusStyleSetter"
                                      },
                                      "style.border": {
                                        "x-component": "BorderStyleSetter"
                                      },
                                      "style.opacity": {
                                        "x-decorator": "FormItem",
                                        "x-component": "Slider",
                                        "x-component-props": {
                                          "defaultValue": 1,
                                          "min": 0,
                                          "max": 1,
                                          "step": 0.01
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "decorator-style-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-component-props": {
                                  "defaultExpand": false
                                },
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-decorator-props.style": {
                                    "type": "void",
                                    "properties": {
                                      "style.width": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.height": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.display": {
                                        "x-component": "DisplayStyleSetter"
                                      },
                                      "style.background": {
                                        "x-component": "BackgroundStyleSetter"
                                      },
                                      "style.boxShadow": {
                                        "x-component": "BoxShadowStyleSetter"
                                      },
                                      "style.font": {
                                        "x-component": "FontStyleSetter"
                                      },
                                      "style.margin": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.padding": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.borderRadius": {
                                        "x-component": "BorderRadiusStyleSetter"
                                      },
                                      "style.border": {
                                        "x-component": "BorderStyleSetter"
                                      },
                                      "style.opacity": {
                                        "x-decorator": "FormItem",
                                        "x-component": "Slider",
                                        "x-component-props": {
                                          "defaultValue": 1,
                                          "min": 0,
                                          "max": 1,
                                          "step": 0.01
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "designerLocales": {
                          "zh-CN": {
                            "title": "Select",
                            "settings": {
                              "x-component-props": {
                                "mode": {
                                  "title": "Mode",
                                  "dataSource": [
                                    "Multiple",
                                    "Tags",
                                    "Single"
                                  ]
                                },
                                "autoClearSearchValue": {
                                  "title": "Auto Clear Search Value",
                                  "tooltip": "Only used to multiple and tags mode"
                                },
                                "defaultActiveFirstOption": "Default Active First Option",
                                "dropdownMatchSelectWidth": "Dropdown Match Select Width",
                                "defaultOpen": "Default Open",
                                "filterOption": "Filter Option",
                                "filterSort": "Filter Sort",
                                "labelInValue": "label InValue",
                                "listHeight": "List Height",
                                "maxTagCount": "Max Tag Count",
                                "maxTagPlaceholder": {
                                  "title": "Max Tag Placeholder",
                                  "tooltip": "Content displayed when tag is hidden"
                                },
                                "maxTagTextLength": "Max Tag Text Length",
                                "showArrow": "Show Arrow",
                                "virtual": "Use Virtual Scroll"
                              }
                            }
                          },
                          "en-US": {
                            "title": "Select",
                            "settings": {
                              "x-component-props": {
                                "mode": {
                                  "title": "Mode",
                                  "dataSource": [
                                    "Multiple",
                                    "Tags",
                                    "Single"
                                  ]
                                },
                                "autoClearSearchValue": {
                                  "title": "Auto Clear Search Value",
                                  "tooltip": "Only used to multiple and tags mode"
                                },
                                "defaultActiveFirstOption": "Default Active First Option",
                                "dropdownMatchSelectWidth": "Dropdown Match Select Width",
                                "defaultOpen": "Default Open",
                                "filterOption": "Filter Option",
                                "filterSort": "Filter Sort",
                                "labelInValue": "label InValue",
                                "listHeight": "List Height",
                                "maxTagCount": "Max Tag Count",
                                "maxTagPlaceholder": {
                                  "title": "Max Tag Placeholder",
                                  "tooltip": "Content displayed when tag is hidden"
                                },
                                "maxTagTextLength": "Max Tag Text Length",
                                "showArrow": "Show Arrow",
                                "virtual": "Use Virtual Scroll"
                              }
                            }
                          },
                          "ko-KR": {
                            "title": "Select",
                            "settings": {
                              "x-component-props": {
                                "mode": {
                                  "title": "Mode",
                                  "dataSource": [
                                    "Multiple",
                                    "Tags",
                                    "Single"
                                  ]
                                },
                                "autoClearSearchValue": {
                                  "title": "Auto Clear Search Value",
                                  "tooltip": "Only used to multiple and tags mode"
                                },
                                "defaultActiveFirstOption": "Default Active First Option",
                                "dropdownMatchSelectWidth": "Dropdown Match Select Width",
                                "defaultOpen": "Default Open",
                                "filterOption": "Filter Option",
                                "filterSort": "Filter Sort",
                                "labelInValue": "label InValue",
                                "listHeight": "List Height",
                                "maxTagCount": "Max Tag Count",
                                "maxTagPlaceholder": {
                                  "title": "Max Tag Placeholder",
                                  "tooltip": "Content displayed when tag is hidden"
                                },
                                "maxTagTextLength": "Max Tag Text Length",
                                "showArrow": "Show Arrow",
                                "virtual": "Use Virtual Scroll"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "Resource": [
                      {
                        "icon": "SelectSource",
                        "elements": [
                          {
                            "componentName": "Field",
                            "props": {
                              "title": "Select",
                              "x-decorator": "FormItem",
                              "x-component": "Select"
                            }
                          }
                        ],
                        "node": {
                          "depth": 0,
                          "hidden": false,
                          "componentName": "$$ResourceNode$$",
                          "sourceName": "",
                          "props": {},
                          "children": [
                            {
                              "depth": 1,
                              "hidden": false,
                              "componentName": "Field",
                              "sourceName": "",
                              "props": {
                                "title": "Select",
                                "x-decorator": "FormItem",
                                "x-component": "Select"
                              },
                              "children": [],
                              "id": "8ouxxqe6urg",
                              "parent": "#CircularReference",
                              "root": "#CircularReference",
                              "designerProps": {
                                "propsSchema": {
                                  "type": "object",
                                  "properties": {
                                    "field-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "properties": {
                                        "name": {
                                          "type": "string",
                                          "x-decorator": "FormItem",
                                          "x-component": "Input"
                                        },
                                        "title": {
                                          "type": "string",
                                          "x-decorator": "FormItem",
                                          "x-component": "Input"
                                        },
                                        "description": {
                                          "type": "string",
                                          "x-decorator": "FormItem",
                                          "x-component": "Input.TextArea"
                                        },
                                        "x-display": {
                                          "type": "string",
                                          "enum": [
                                            "visible",
                                            "hidden",
                                            "none",
                                            ""
                                          ],
                                          "x-decorator": "FormItem",
                                          "x-component": "Select",
                                          "x-component-props": {
                                            "defaultValue": "visible"
                                          }
                                        },
                                        "x-pattern": {
                                          "type": "string",
                                          "enum": [
                                            "editable",
                                            "disabled",
                                            "readOnly",
                                            "readPretty",
                                            ""
                                          ],
                                          "x-decorator": "FormItem",
                                          "x-component": "Select",
                                          "x-component-props": {
                                            "defaultValue": "editable"
                                          }
                                        },
                                        "default": {
                                          "x-decorator": "FormItem",
                                          "x-component": "ValueInput"
                                        },
                                        "enum": {
                                          "x-decorator": "FormItem",
                                          "x-component": {
                                            "$$typeof": "Symbol(react.memo)",
                                            "type": "f (){ }",
                                            "compare": null
                                          }
                                        },
                                        "x-reactions": {
                                          "x-decorator": "FormItem",
                                          "x-component": "f ReactionsSetter(){ }"
                                        },
                                        "x-validator": {
                                          "type": "array",
                                          "x-component": {
                                            "$$typeof": "Symbol(react.memo)",
                                            "type": "f (){ }",
                                            "compare": null
                                          }
                                        },
                                        "required": {
                                          "type": "boolean",
                                          "x-decorator": "FormItem",
                                          "x-component": "Switch"
                                        }
                                      }
                                    },
                                    "component-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-component\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-component-props": {
                                          "type": "object",
                                          "properties": {
                                            "mode": {
                                              "type": "string",
                                              "enum": [
                                                "multiple",
                                                "tags",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Radio.Group",
                                              "x-component-props": {
                                                "defaultValue": null,
                                                "optionType": "button"
                                              }
                                            },
                                            "allowClear": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "autoClearSearchValue": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "dropdownMatchSelectWidth": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "autoFocus": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "bordered": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "defaultActiveFirstOption": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "defaultOpen": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "labelInValue": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "showArrow": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "showSearch": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "virtual": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultValue": true
                                              }
                                            },
                                            "filterOption": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "ValueInput",
                                              "x-component-props": {
                                                "include": [
                                                  "BOOLEAN",
                                                  "EXPRESSION"
                                                ]
                                              }
                                            },
                                            "filterSort": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "ValueInput",
                                              "x-component-props": {
                                                "include": [
                                                  "EXPRESSION"
                                                ]
                                              }
                                            },
                                            "listHeight": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker",
                                              "x-component-props": {
                                                "defaultValue": 256
                                              }
                                            },
                                            "maxTagCount": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "maxTagPlaceholder": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "maxTagTextLength": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "notFoundContent": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input",
                                              "x-component-props": {
                                                "defaultValue": "Not Found"
                                              }
                                            },
                                            "placeholder": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "size": {
                                              "type": "string",
                                              "enum": [
                                                "large",
                                                "small",
                                                "middle",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "middle"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "decorator-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-component-props": {
                                        "defaultExpand": false
                                      },
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-decorator-props": {
                                          "type": "object",
                                          "properties": {
                                            "tooltip": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "addonBefore": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "addonAfter": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "labelCol": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "wrapperCol": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "labelWidth": {
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "wrapperWidth": {
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "colon": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "asterisk": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "gridSpan": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "feedbackLayout": {
                                              "type": "string",
                                              "enum": [
                                                "loose",
                                                "terse",
                                                "popover",
                                                "none",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "loose"
                                              }
                                            },
                                            "size": {
                                              "type": "string",
                                              "enum": [
                                                "large",
                                                "small",
                                                "default",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "default"
                                              }
                                            },
                                            "layout": {
                                              "type": "string",
                                              "enum": [
                                                "vertical",
                                                "horizontal",
                                                "inline",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "horizontal"
                                              }
                                            },
                                            "tooltipLayout": {
                                              "type": "string",
                                              "enum": [
                                                "icon",
                                                "text",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "icon"
                                              }
                                            },
                                            "labelAlign": {
                                              "type": "string",
                                              "enum": [
                                                "left",
                                                "right",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "right"
                                              }
                                            },
                                            "wrapperAlign": {
                                              "type": "string",
                                              "enum": [
                                                "left",
                                                "right",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "left"
                                              }
                                            },
                                            "labelWrap": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "wrapperWrap": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "fullness": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "inset": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "bordered": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "component-style-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-component-props": {
                                        "defaultExpand": false
                                      },
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-component\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-component-props.style": {
                                          "type": "void",
                                          "properties": {
                                            "style.width": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.height": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.display": {
                                              "x-component": "DisplayStyleSetter"
                                            },
                                            "style.background": {
                                              "x-component": "BackgroundStyleSetter"
                                            },
                                            "style.boxShadow": {
                                              "x-component": "BoxShadowStyleSetter"
                                            },
                                            "style.font": {
                                              "x-component": "FontStyleSetter"
                                            },
                                            "style.margin": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.padding": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.borderRadius": {
                                              "x-component": "BorderRadiusStyleSetter"
                                            },
                                            "style.border": {
                                              "x-component": "BorderStyleSetter"
                                            },
                                            "style.opacity": {
                                              "x-decorator": "FormItem",
                                              "x-component": "Slider",
                                              "x-component-props": {
                                                "defaultValue": 1,
                                                "min": 0,
                                                "max": 1,
                                                "step": 0.01
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "decorator-style-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-component-props": {
                                        "defaultExpand": false
                                      },
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-decorator-props.style": {
                                          "type": "void",
                                          "properties": {
                                            "style.width": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.height": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.display": {
                                              "x-component": "DisplayStyleSetter"
                                            },
                                            "style.background": {
                                              "x-component": "BackgroundStyleSetter"
                                            },
                                            "style.boxShadow": {
                                              "x-component": "BoxShadowStyleSetter"
                                            },
                                            "style.font": {
                                              "x-component": "FontStyleSetter"
                                            },
                                            "style.margin": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.padding": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.borderRadius": {
                                              "x-component": "BorderRadiusStyleSetter"
                                            },
                                            "style.border": {
                                              "x-component": "BorderStyleSetter"
                                            },
                                            "style.opacity": {
                                              "x-decorator": "FormItem",
                                              "x-component": "Slider",
                                              "x-component-props": {
                                                "defaultValue": 1,
                                                "min": 0,
                                                "max": 1,
                                                "step": 0.01
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "designerLocales": {
                                "zh-cn": {
                                  "settings": {
                                    "name": "Name",
                                    "title": "Title",
                                    "required": "Required",
                                    "description": "Description",
                                    "default": "Default",
                                    "enum": "Options",
                                    "x-display": {
                                      "title": "Display State",
                                      "tooltip": "When the display value is \"None\", the data will be \"Hidden\" and deleted. When the display value is hidden, only the UI will be hidden",
                                      "datasource": [
                                        "Visible",
                                        "Hidden",
                                        "None",
                                        "Inherit"
                                      ]
                                    },
                                    "x-pattern": {
                                      "title": "UI Pattern",
                                      "datasource": [
                                        "Editable",
                                        "Disabled",
                                        "ReadOnly",
                                        "ReadPretty",
                                        "Inherit"
                                      ]
                                    },
                                    "x-validator": "Validator",
                                    "x-decorator": "Decorator",
                                    "x-reactions": "Reactions",
                                    "field-group": "Field Properties",
                                    "component-group": "Component Properties",
                                    "decorator-group": "Decorator Properties",
                                    "component-style-group": "Component Style",
                                    "decorator-style-group": "Decorator Style",
                                    "x-component-props": {
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "allowclear": "Allow Clear",
                                      "autofocus": "Auto Focus",
                                      "showsearch": "Show Search",
                                      "notfoundcontent": "Not Found Content",
                                      "bordered": "Bordered",
                                      "placeholder": "Placeholder",
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      },
                                      "mode": {
                                        "title": "Mode",
                                        "datasource": [
                                          "Multiple",
                                          "Tags",
                                          "Single"
                                        ]
                                      },
                                      "autoclearsearchvalue": {
                                        "title": "Auto Clear Search Value",
                                        "tooltip": "Only used to multiple and tags mode"
                                      },
                                      "defaultactivefirstoption": "Default Active First Option",
                                      "dropdownmatchselectwidth": "Dropdown Match Select Width",
                                      "defaultopen": "Default Open",
                                      "filteroption": "Filter Option",
                                      "filtersort": "Filter Sort",
                                      "labelinvalue": "label InValue",
                                      "listheight": "List Height",
                                      "maxtagcount": "Max Tag Count",
                                      "maxtagplaceholder": {
                                        "title": "Max Tag Placeholder",
                                        "tooltip": "Content displayed when tag is hidden"
                                      },
                                      "maxtagtextlength": "Max Tag Text Length",
                                      "showarrow": "Show Arrow",
                                      "virtual": "Use Virtual Scroll"
                                    },
                                    "x-decorator-props": {
                                      "addonafter": "Addon After",
                                      "addonbefore": "Addon Before",
                                      "tooltip": "Tooltip",
                                      "asterisk": "Asterisk",
                                      "gridspan": "Grid Span",
                                      "labelcol": "Label Col",
                                      "wrappercol": "Wrapper Col",
                                      "colon": "Colon",
                                      "labelalign": {
                                        "title": "Label Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "wrapperalign": {
                                        "title": "Wrapper Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "labelwrap": "Label Wrap",
                                      "wrapperwrap": "Wrapper Wrap",
                                      "labelwidth": "Label Width",
                                      "wrapperwidth": "Wrapper Width",
                                      "fullness": "Fullness",
                                      "inset": "Inset",
                                      "shallow": "Shallow",
                                      "bordered": "Bordered",
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "layout": {
                                        "title": "Layout",
                                        "datasource": [
                                          "Vertical",
                                          "Horizontal",
                                          "Inline",
                                          "Inherit"
                                        ]
                                      },
                                      "feedbacklayout": {
                                        "title": "Feedback Layout",
                                        "datasource": [
                                          "Loose",
                                          "Terse",
                                          "Popup",
                                          "None",
                                          "Inherit"
                                        ]
                                      },
                                      "tooltiplayout": {
                                        "title": "Tooltip Layout",
                                        "datasource": [
                                          "Icon",
                                          "Text",
                                          "Inherit"
                                        ]
                                      },
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      }
                                    }
                                  },
                                  "title": "Select"
                                },
                                "en-us": {
                                  "settings": {
                                    "name": "Name",
                                    "title": "Title",
                                    "required": "Required",
                                    "description": "Description",
                                    "default": "Default",
                                    "enum": "Options",
                                    "x-display": {
                                      "title": "Display State",
                                      "tooltip": "When the display value is \"None\", the data will be \"Hidden\" and deleted. When the display value is hidden, only the UI will be hidden",
                                      "datasource": [
                                        "Visible",
                                        "Hidden",
                                        "None",
                                        "Inherit"
                                      ]
                                    },
                                    "x-pattern": {
                                      "title": "UI Pattern",
                                      "datasource": [
                                        "Editable",
                                        "Disabled",
                                        "ReadOnly",
                                        "ReadPretty",
                                        "Inherit"
                                      ]
                                    },
                                    "x-validator": "Validator",
                                    "x-decorator": "Decorator",
                                    "x-reactions": "Reactions",
                                    "field-group": "Field Properties",
                                    "component-group": "Component Properties",
                                    "decorator-group": "Decorator Properties",
                                    "component-style-group": "Component Style",
                                    "decorator-style-group": "Decorator Style",
                                    "x-component-props": {
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "allowclear": "Allow Clear",
                                      "autofocus": "Auto Focus",
                                      "showsearch": "Show Search",
                                      "notfoundcontent": "Not Found Content",
                                      "bordered": "Bordered",
                                      "placeholder": "Placeholder",
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      },
                                      "mode": {
                                        "title": "Mode",
                                        "datasource": [
                                          "Multiple",
                                          "Tags",
                                          "Single"
                                        ]
                                      },
                                      "autoclearsearchvalue": {
                                        "title": "Auto Clear Search Value",
                                        "tooltip": "Only used to multiple and tags mode"
                                      },
                                      "defaultactivefirstoption": "Default Active First Option",
                                      "dropdownmatchselectwidth": "Dropdown Match Select Width",
                                      "defaultopen": "Default Open",
                                      "filteroption": "Filter Option",
                                      "filtersort": "Filter Sort",
                                      "labelinvalue": "label InValue",
                                      "listheight": "List Height",
                                      "maxtagcount": "Max Tag Count",
                                      "maxtagplaceholder": {
                                        "title": "Max Tag Placeholder",
                                        "tooltip": "Content displayed when tag is hidden"
                                      },
                                      "maxtagtextlength": "Max Tag Text Length",
                                      "showarrow": "Show Arrow",
                                      "virtual": "Use Virtual Scroll"
                                    },
                                    "x-decorator-props": {
                                      "addonafter": "Addon After",
                                      "addonbefore": "Addon Before",
                                      "tooltip": "Tooltip",
                                      "asterisk": "Asterisk",
                                      "gridspan": "Grid Span",
                                      "labelcol": "Label Col",
                                      "wrappercol": "Wrapper Col",
                                      "colon": "Colon",
                                      "labelalign": {
                                        "title": "Label Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "wrapperalign": {
                                        "title": "Wrapper Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "labelwrap": "Label Wrap",
                                      "wrapperwrap": "Wrapper Wrap",
                                      "labelwidth": "Label Width",
                                      "wrapperwidth": "Wrapper Width",
                                      "fullness": "Fullness",
                                      "inset": "Inset",
                                      "shallow": "Shallow",
                                      "bordered": "Bordered",
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "layout": {
                                        "title": "Layout",
                                        "datasource": [
                                          "Vertical",
                                          "Horizontal",
                                          "Inline",
                                          "Inherit"
                                        ]
                                      },
                                      "feedbacklayout": {
                                        "title": "Feedback Layout",
                                        "datasource": [
                                          "Loose",
                                          "Terse",
                                          "Popup",
                                          "None",
                                          "Inherit"
                                        ]
                                      },
                                      "tooltiplayout": {
                                        "title": "Tooltip Layout",
                                        "datasource": [
                                          "Icon",
                                          "Text",
                                          "Inherit"
                                        ]
                                      },
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      }
                                    }
                                  },
                                  "title": "Select"
                                },
                                "ko-kr": {
                                  "settings": {
                                    "name": "Name",
                                    "title": "Title",
                                    "required": "Required",
                                    "description": "Description",
                                    "default": "Default",
                                    "enum": "Options",
                                    "x-display": {
                                      "title": "Display State",
                                      "tooltip": "When the display value is \"None\", the data will be \"Hidden\" and deleted. When the display value is hidden, only the UI will be hidden",
                                      "datasource": [
                                        "Visible",
                                        "Hidden",
                                        "None",
                                        "Inherit"
                                      ]
                                    },
                                    "x-pattern": {
                                      "title": "UI Pattern",
                                      "datasource": [
                                        "Editable",
                                        "Disabled",
                                        "ReadOnly",
                                        "ReadPretty",
                                        "Inherit"
                                      ]
                                    },
                                    "x-validator": "Validator",
                                    "x-decorator": "Decorator",
                                    "x-reactions": "Reactions",
                                    "field-group": "Field Properties",
                                    "component-group": "Component Properties",
                                    "decorator-group": "Decorator Properties",
                                    "component-style-group": "Component Style",
                                    "decorator-style-group": "Decorator Style",
                                    "x-component-props": {
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "allowclear": "Allow Clear",
                                      "autofocus": "Auto Focus",
                                      "showsearch": "Show Search",
                                      "notfoundcontent": "Not Found Content",
                                      "bordered": "Bordered",
                                      "placeholder": "Placeholder",
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      },
                                      "mode": {
                                        "title": "Mode",
                                        "datasource": [
                                          "Multiple",
                                          "Tags",
                                          "Single"
                                        ]
                                      },
                                      "autoclearsearchvalue": {
                                        "title": "Auto Clear Search Value",
                                        "tooltip": "Only used to multiple and tags mode"
                                      },
                                      "defaultactivefirstoption": "Default Active First Option",
                                      "dropdownmatchselectwidth": "Dropdown Match Select Width",
                                      "defaultopen": "Default Open",
                                      "filteroption": "Filter Option",
                                      "filtersort": "Filter Sort",
                                      "labelinvalue": "label InValue",
                                      "listheight": "List Height",
                                      "maxtagcount": "Max Tag Count",
                                      "maxtagplaceholder": {
                                        "title": "Max Tag Placeholder",
                                        "tooltip": "Content displayed when tag is hidden"
                                      },
                                      "maxtagtextlength": "Max Tag Text Length",
                                      "showarrow": "Show Arrow",
                                      "virtual": "Use Virtual Scroll"
                                    },
                                    "x-decorator-props": {
                                      "addonafter": "Addon After",
                                      "addonbefore": "Addon Before",
                                      "tooltip": "Tooltip",
                                      "asterisk": "Asterisk",
                                      "gridspan": "Grid Span",
                                      "labelcol": "Label Col",
                                      "wrappercol": "Wrapper Col",
                                      "colon": "Colon",
                                      "labelalign": {
                                        "title": "Label Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "wrapperalign": {
                                        "title": "Wrapper Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "labelwrap": "Label Wrap",
                                      "wrapperwrap": "Wrapper Wrap",
                                      "labelwidth": "Label Width",
                                      "wrapperwidth": "Wrapper Width",
                                      "fullness": "Fullness",
                                      "inset": "Inset",
                                      "shallow": "Shallow",
                                      "bordered": "Bordered",
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "layout": {
                                        "title": "Layout",
                                        "datasource": [
                                          "Vertical",
                                          "Horizontal",
                                          "Inline",
                                          "Inherit"
                                        ]
                                      },
                                      "feedbacklayout": {
                                        "title": "Feedback Layout",
                                        "datasource": [
                                          "Loose",
                                          "Terse",
                                          "Popup",
                                          "None",
                                          "Inherit"
                                        ]
                                      },
                                      "tooltiplayout": {
                                        "title": "Tooltip Layout",
                                        "datasource": [
                                          "Icon",
                                          "Text",
                                          "Inherit"
                                        ]
                                      },
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      }
                                    }
                                  },
                                  "title": "Select"
                                }
                              },
                              "wrap": "f (){ }",
                              "prepend": "f (){ }",
                              "append": "f (){ }",
                              "insertAfter": "f (){ }",
                              "insertBefore": "f (){ }",
                              "remove": "f (){ }",
                              "setProps": "f (){ }",
                              "setChildren": "f (){ }",
                              "setComponentName": "f (){ }"
                            }
                          ],
                          "id": "0ge1wniw5rh",
                          "root": "#CircularReference",
                          "isSelfSourceNode": true,
                          "designerProps": {},
                          "designerLocales": {},
                          "wrap": "f (){ }",
                          "prepend": "f (){ }",
                          "append": "f (){ }",
                          "insertAfter": "f (){ }",
                          "insertBefore": "f (){ }",
                          "remove": "f (){ }",
                          "setProps": "f (){ }",
                          "setChildren": "f (){ }",
                          "setComponentName": "f (){ }"
                        }
                      }
                    ]
                  },
                  {
                    "style": {
                      "width": "100%"
                    },
                    "placeholder": "Helvetica Neue"
                  }
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.margin",
              "path": "component-style-group.x-component-props.style.style.margin",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.margin",
                "path": "x-component-props.style.margin",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Margin",
                "component": [
                  "BoxStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.padding",
              "path": "component-style-group.x-component-props.style.style.padding",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.padding",
                "path": "x-component-props.style.padding",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Padding",
                "component": [
                  "BoxStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.borderRadius",
              "path": "component-style-group.x-component-props.style.style.borderRadius",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.borderRadius",
                "path": "x-component-props.style.borderRadius",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Radius",
                "component": [
                  "BorderRadiusStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.border",
              "path": "component-style-group.x-component-props.style.style.border",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.border",
                "path": "x-component-props.style.border",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Border",
                "component": [
                  "BorderStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.opacity",
              "path": "component-style-group.x-component-props.style.style.opacity",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "component-style-group.x-component-props.style.style.opacity",
                "path": "x-component-props.style.opacity",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Opacity",
                "component": [
                  "Slider",
                  {
                    "defaultValue": 1,
                    "min": 0,
                    "max": 1,
                    "step": 0.01
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            }
          ]
        }
      ]
    },
    {
      "name": "decorator-style-group",
      "path": "decorator-style-group",
      "toggled": true,
      "data": {
        "actions": {},
        "displayName": "VoidField",
        "address": "decorator-style-group",
        "path": "decorator-style-group",
        "mounted": true,
        "unmounted": false,
        "initialized": true,
        "title": "Decorator Style",
        "selfDisplay": "visible",
        "display": "visible",
        "pattern": "editable",
        "hidden": false,
        "visible": true,
        "disabled": false,
        "readOnly": false,
        "readPretty": false,
        "editable": true,
        "component": [
          "CollapseItem",
          {
            "defaultExpand": false
          }
        ],
        "decorator": [
          null,
          {}
        ]
      },
      "children": [
        {
          "name": "x-decorator-props.style",
          "path": "decorator-style-group.x-decorator-props.style",
          "toggled": true,
          "data": {
            "actions": {},
            "displayName": "VoidField",
            "address": "decorator-style-group.x-decorator-props.style",
            "path": "x-decorator-props.style",
            "mounted": true,
            "unmounted": false,
            "initialized": true,
            "title": {
              "width": "Width",
              "height": "Height",
              "display": "Display",
              "background": "Background",
              "boxshadow": "Box Shadow",
              "font": "Font",
              "margin": "Margin",
              "padding": "Padding",
              "borderradius": "Radius",
              "border": "Border",
              "opacity": "Opacity"
            },
            "display": "visible",
            "pattern": "editable",
            "hidden": false,
            "visible": true,
            "disabled": false,
            "readOnly": false,
            "readPretty": false,
            "editable": true,
            "component": [
              null,
              {}
            ],
            "decorator": [
              null,
              {}
            ]
          },
          "children": [
            {
              "name": "style.width",
              "path": "decorator-style-group.x-decorator-props.style.style.width",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.width",
                "path": "x-decorator-props.style.width",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Width",
                "component": [
                  "SizeInput",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.height",
              "path": "decorator-style-group.x-decorator-props.style.style.height",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.height",
                "path": "x-decorator-props.style.height",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Height",
                "component": [
                  "SizeInput",
                  {}
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.display",
              "path": "decorator-style-group.x-decorator-props.style.style.display",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.display",
                "path": "x-decorator-props.style.display",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Display",
                "component": [
                  "DisplayStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.flex",
              "path": "decorator-style-group.x-decorator-props.style.style.flex",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.flex",
                "path": "x-decorator-props.style.flex",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "selfDisplay": "none",
                "component": [
                  {
                    "$$typeof": "Symbol(react.memo)",
                    "type": "f (){ }",
                    "compare": null
                  },
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "none",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": false,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.background",
              "path": "decorator-style-group.x-decorator-props.style.style.background",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.background",
                "path": "x-decorator-props.style.background",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Background",
                "component": [
                  "BackgroundStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.backgroundColor",
              "path": "decorator-style-group.x-decorator-props.style.style.backgroundColor",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.backgroundColor",
                "path": "x-decorator-props.style.backgroundColor",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "component": [
                  "f ColorInput(){ }",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.boxShadow",
              "path": "decorator-style-group.x-decorator-props.style.style.boxShadow",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.boxShadow",
                "path": "x-decorator-props.style.boxShadow",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Box Shadow",
                "component": [
                  "BoxShadowStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.font",
              "path": "decorator-style-group.x-decorator-props.style.style.font",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.font",
                "path": "x-decorator-props.style.font",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Font",
                "component": [
                  "FontStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.fontFamily",
              "path": "decorator-style-group.x-decorator-props.style.style.fontFamily",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.fontFamily",
                "path": "x-decorator-props.style.fontFamily",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "dataSource": [
                  {
                    "label": "#CircularReference",
                    "value": "SimSun"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "Microsoft Yahei"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "PingFang SC"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "andale mono,monospace"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "arial,helvetica,sans-serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "arial black,sans-serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "book antiqua,palatino,serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "comic sans ms,sans-serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "courier new,courier,monospace"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "georgia,palatino,serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "Helvetica Neue"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "helvetica,arial,sans-serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "impact,sans-serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "symbol"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "tahoma,arial,helvetica,sans-serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "terminal,monaco,monospace"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "times new roman,times,serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "trebuchet ms,geneva,sans-serif"
                  },
                  {
                    "label": "#CircularReference",
                    "value": "verdana,geneva,sans-serif"
                  }
                ],
                "component": [
                  {
                    "$$typeof": "Symbol(react.forward_ref)",
                    "render": "f (){ }",
                    "SECRET_COMBOBOX_MODE_DO_NOT_USE": "SECRET_COMBOBOX_MODE_DO_NOT_USE",
                    "Option": "f Option(){ }",
                    "OptGroup": "f OptGroup(){ }",
                    "_InternalPanelDoNotUseOrYouWillBeFired": "f (){ }",
                    "Behavior": [
                      {
                        "name": "Select",
                        "extends": [
                          "Field"
                        ],
                        "selector": "f selector(){ }",
                        "designerProps": {
                          "propsSchema": {
                            "type": "object",
                            "properties": {
                              "field-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "properties": {
                                  "name": {
                                    "type": "string",
                                    "x-decorator": "FormItem",
                                    "x-component": "Input"
                                  },
                                  "title": {
                                    "type": "string",
                                    "x-decorator": "FormItem",
                                    "x-component": "Input"
                                  },
                                  "description": {
                                    "type": "string",
                                    "x-decorator": "FormItem",
                                    "x-component": "Input.TextArea"
                                  },
                                  "x-display": {
                                    "type": "string",
                                    "enum": [
                                      "visible",
                                      "hidden",
                                      "none",
                                      ""
                                    ],
                                    "x-decorator": "FormItem",
                                    "x-component": "Select",
                                    "x-component-props": {
                                      "defaultValue": "visible"
                                    }
                                  },
                                  "x-pattern": {
                                    "type": "string",
                                    "enum": [
                                      "editable",
                                      "disabled",
                                      "readOnly",
                                      "readPretty",
                                      ""
                                    ],
                                    "x-decorator": "FormItem",
                                    "x-component": "Select",
                                    "x-component-props": {
                                      "defaultValue": "editable"
                                    }
                                  },
                                  "default": {
                                    "x-decorator": "FormItem",
                                    "x-component": "ValueInput"
                                  },
                                  "enum": {
                                    "x-decorator": "FormItem",
                                    "x-component": {
                                      "$$typeof": "Symbol(react.memo)",
                                      "type": "f (){ }",
                                      "compare": null
                                    }
                                  },
                                  "x-reactions": {
                                    "x-decorator": "FormItem",
                                    "x-component": "f ReactionsSetter(){ }"
                                  },
                                  "x-validator": {
                                    "type": "array",
                                    "x-component": {
                                      "$$typeof": "Symbol(react.memo)",
                                      "type": "f (){ }",
                                      "compare": null
                                    }
                                  },
                                  "required": {
                                    "type": "boolean",
                                    "x-decorator": "FormItem",
                                    "x-component": "Switch"
                                  }
                                }
                              },
                              "component-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-component\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-component-props": {
                                    "type": "object",
                                    "properties": {
                                      "mode": {
                                        "type": "string",
                                        "enum": [
                                          "multiple",
                                          "tags",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Radio.Group",
                                        "x-component-props": {
                                          "defaultValue": null,
                                          "optionType": "button"
                                        }
                                      },
                                      "allowClear": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "autoClearSearchValue": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "dropdownMatchSelectWidth": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "autoFocus": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "bordered": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "defaultActiveFirstOption": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "defaultOpen": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "labelInValue": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "showArrow": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "showSearch": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "virtual": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultValue": true
                                        }
                                      },
                                      "filterOption": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "ValueInput",
                                        "x-component-props": {
                                          "include": [
                                            "BOOLEAN",
                                            "EXPRESSION"
                                          ]
                                        }
                                      },
                                      "filterSort": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "ValueInput",
                                        "x-component-props": {
                                          "include": [
                                            "EXPRESSION"
                                          ]
                                        }
                                      },
                                      "listHeight": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker",
                                        "x-component-props": {
                                          "defaultValue": 256
                                        }
                                      },
                                      "maxTagCount": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "maxTagPlaceholder": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "maxTagTextLength": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "notFoundContent": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input",
                                        "x-component-props": {
                                          "defaultValue": "Not Found"
                                        }
                                      },
                                      "placeholder": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "size": {
                                        "type": "string",
                                        "enum": [
                                          "large",
                                          "small",
                                          "middle",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "middle"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "decorator-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-component-props": {
                                  "defaultExpand": false
                                },
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-decorator-props": {
                                    "type": "object",
                                    "properties": {
                                      "tooltip": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "addonBefore": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "addonAfter": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "Input"
                                      },
                                      "labelCol": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "wrapperCol": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "labelWidth": {
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "wrapperWidth": {
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "colon": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      },
                                      "asterisk": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "gridSpan": {
                                        "type": "number",
                                        "x-decorator": "FormItem",
                                        "x-component": "NumberPicker"
                                      },
                                      "feedbackLayout": {
                                        "type": "string",
                                        "enum": [
                                          "loose",
                                          "terse",
                                          "popover",
                                          "none",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "loose"
                                        }
                                      },
                                      "size": {
                                        "type": "string",
                                        "enum": [
                                          "large",
                                          "small",
                                          "default",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "default"
                                        }
                                      },
                                      "layout": {
                                        "type": "string",
                                        "enum": [
                                          "vertical",
                                          "horizontal",
                                          "inline",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "horizontal"
                                        }
                                      },
                                      "tooltipLayout": {
                                        "type": "string",
                                        "enum": [
                                          "icon",
                                          "text",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "icon"
                                        }
                                      },
                                      "labelAlign": {
                                        "type": "string",
                                        "enum": [
                                          "left",
                                          "right",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "right"
                                        }
                                      },
                                      "wrapperAlign": {
                                        "type": "string",
                                        "enum": [
                                          "left",
                                          "right",
                                          null
                                        ],
                                        "x-decorator": "FormItem",
                                        "x-component": "Select",
                                        "x-component-props": {
                                          "defaultValue": "left"
                                        }
                                      },
                                      "labelWrap": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "wrapperWrap": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "fullness": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "inset": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch"
                                      },
                                      "bordered": {
                                        "type": "boolean",
                                        "x-decorator": "FormItem",
                                        "x-component": "Switch",
                                        "x-component-props": {
                                          "defaultChecked": true
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "component-style-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-component-props": {
                                  "defaultExpand": false
                                },
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-component\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-component-props.style": {
                                    "type": "void",
                                    "properties": {
                                      "style.width": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.height": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.display": {
                                        "x-component": "DisplayStyleSetter"
                                      },
                                      "style.background": {
                                        "x-component": "BackgroundStyleSetter"
                                      },
                                      "style.boxShadow": {
                                        "x-component": "BoxShadowStyleSetter"
                                      },
                                      "style.font": {
                                        "x-component": "FontStyleSetter"
                                      },
                                      "style.margin": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.padding": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.borderRadius": {
                                        "x-component": "BorderRadiusStyleSetter"
                                      },
                                      "style.border": {
                                        "x-component": "BorderStyleSetter"
                                      },
                                      "style.opacity": {
                                        "x-decorator": "FormItem",
                                        "x-component": "Slider",
                                        "x-component-props": {
                                          "defaultValue": 1,
                                          "min": 0,
                                          "max": 1,
                                          "step": 0.01
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "decorator-style-group": {
                                "type": "void",
                                "x-component": "CollapseItem",
                                "x-component-props": {
                                  "defaultExpand": false
                                },
                                "x-reactions": {
                                  "fulfill": {
                                    "state": {
                                      "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                    }
                                  }
                                },
                                "properties": {
                                  "x-decorator-props.style": {
                                    "type": "void",
                                    "properties": {
                                      "style.width": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.height": {
                                        "type": "string",
                                        "x-decorator": "FormItem",
                                        "x-component": "SizeInput"
                                      },
                                      "style.display": {
                                        "x-component": "DisplayStyleSetter"
                                      },
                                      "style.background": {
                                        "x-component": "BackgroundStyleSetter"
                                      },
                                      "style.boxShadow": {
                                        "x-component": "BoxShadowStyleSetter"
                                      },
                                      "style.font": {
                                        "x-component": "FontStyleSetter"
                                      },
                                      "style.margin": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.padding": {
                                        "x-component": "BoxStyleSetter"
                                      },
                                      "style.borderRadius": {
                                        "x-component": "BorderRadiusStyleSetter"
                                      },
                                      "style.border": {
                                        "x-component": "BorderStyleSetter"
                                      },
                                      "style.opacity": {
                                        "x-decorator": "FormItem",
                                        "x-component": "Slider",
                                        "x-component-props": {
                                          "defaultValue": 1,
                                          "min": 0,
                                          "max": 1,
                                          "step": 0.01
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "designerLocales": {
                          "zh-CN": {
                            "title": "Select",
                            "settings": {
                              "x-component-props": {
                                "mode": {
                                  "title": "Mode",
                                  "dataSource": [
                                    "Multiple",
                                    "Tags",
                                    "Single"
                                  ]
                                },
                                "autoClearSearchValue": {
                                  "title": "Auto Clear Search Value",
                                  "tooltip": "Only used to multiple and tags mode"
                                },
                                "defaultActiveFirstOption": "Default Active First Option",
                                "dropdownMatchSelectWidth": "Dropdown Match Select Width",
                                "defaultOpen": "Default Open",
                                "filterOption": "Filter Option",
                                "filterSort": "Filter Sort",
                                "labelInValue": "label InValue",
                                "listHeight": "List Height",
                                "maxTagCount": "Max Tag Count",
                                "maxTagPlaceholder": {
                                  "title": "Max Tag Placeholder",
                                  "tooltip": "Content displayed when tag is hidden"
                                },
                                "maxTagTextLength": "Max Tag Text Length",
                                "showArrow": "Show Arrow",
                                "virtual": "Use Virtual Scroll"
                              }
                            }
                          },
                          "en-US": {
                            "title": "Select",
                            "settings": {
                              "x-component-props": {
                                "mode": {
                                  "title": "Mode",
                                  "dataSource": [
                                    "Multiple",
                                    "Tags",
                                    "Single"
                                  ]
                                },
                                "autoClearSearchValue": {
                                  "title": "Auto Clear Search Value",
                                  "tooltip": "Only used to multiple and tags mode"
                                },
                                "defaultActiveFirstOption": "Default Active First Option",
                                "dropdownMatchSelectWidth": "Dropdown Match Select Width",
                                "defaultOpen": "Default Open",
                                "filterOption": "Filter Option",
                                "filterSort": "Filter Sort",
                                "labelInValue": "label InValue",
                                "listHeight": "List Height",
                                "maxTagCount": "Max Tag Count",
                                "maxTagPlaceholder": {
                                  "title": "Max Tag Placeholder",
                                  "tooltip": "Content displayed when tag is hidden"
                                },
                                "maxTagTextLength": "Max Tag Text Length",
                                "showArrow": "Show Arrow",
                                "virtual": "Use Virtual Scroll"
                              }
                            }
                          },
                          "ko-KR": {
                            "title": "Select",
                            "settings": {
                              "x-component-props": {
                                "mode": {
                                  "title": "Mode",
                                  "dataSource": [
                                    "Multiple",
                                    "Tags",
                                    "Single"
                                  ]
                                },
                                "autoClearSearchValue": {
                                  "title": "Auto Clear Search Value",
                                  "tooltip": "Only used to multiple and tags mode"
                                },
                                "defaultActiveFirstOption": "Default Active First Option",
                                "dropdownMatchSelectWidth": "Dropdown Match Select Width",
                                "defaultOpen": "Default Open",
                                "filterOption": "Filter Option",
                                "filterSort": "Filter Sort",
                                "labelInValue": "label InValue",
                                "listHeight": "List Height",
                                "maxTagCount": "Max Tag Count",
                                "maxTagPlaceholder": {
                                  "title": "Max Tag Placeholder",
                                  "tooltip": "Content displayed when tag is hidden"
                                },
                                "maxTagTextLength": "Max Tag Text Length",
                                "showArrow": "Show Arrow",
                                "virtual": "Use Virtual Scroll"
                              }
                            }
                          }
                        }
                      }
                    ],
                    "Resource": [
                      {
                        "icon": "SelectSource",
                        "elements": [
                          {
                            "componentName": "Field",
                            "props": {
                              "title": "Select",
                              "x-decorator": "FormItem",
                              "x-component": "Select"
                            }
                          }
                        ],
                        "node": {
                          "depth": 0,
                          "hidden": false,
                          "componentName": "$$ResourceNode$$",
                          "sourceName": "",
                          "props": {},
                          "children": [
                            {
                              "depth": 1,
                              "hidden": false,
                              "componentName": "Field",
                              "sourceName": "",
                              "props": {
                                "title": "Select",
                                "x-decorator": "FormItem",
                                "x-component": "Select"
                              },
                              "children": [],
                              "id": "8ouxxqe6urg",
                              "parent": "#CircularReference",
                              "root": "#CircularReference",
                              "designerProps": {
                                "propsSchema": {
                                  "type": "object",
                                  "properties": {
                                    "field-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "properties": {
                                        "name": {
                                          "type": "string",
                                          "x-decorator": "FormItem",
                                          "x-component": "Input"
                                        },
                                        "title": {
                                          "type": "string",
                                          "x-decorator": "FormItem",
                                          "x-component": "Input"
                                        },
                                        "description": {
                                          "type": "string",
                                          "x-decorator": "FormItem",
                                          "x-component": "Input.TextArea"
                                        },
                                        "x-display": {
                                          "type": "string",
                                          "enum": [
                                            "visible",
                                            "hidden",
                                            "none",
                                            ""
                                          ],
                                          "x-decorator": "FormItem",
                                          "x-component": "Select",
                                          "x-component-props": {
                                            "defaultValue": "visible"
                                          }
                                        },
                                        "x-pattern": {
                                          "type": "string",
                                          "enum": [
                                            "editable",
                                            "disabled",
                                            "readOnly",
                                            "readPretty",
                                            ""
                                          ],
                                          "x-decorator": "FormItem",
                                          "x-component": "Select",
                                          "x-component-props": {
                                            "defaultValue": "editable"
                                          }
                                        },
                                        "default": {
                                          "x-decorator": "FormItem",
                                          "x-component": "ValueInput"
                                        },
                                        "enum": {
                                          "x-decorator": "FormItem",
                                          "x-component": {
                                            "$$typeof": "Symbol(react.memo)",
                                            "type": "f (){ }",
                                            "compare": null
                                          }
                                        },
                                        "x-reactions": {
                                          "x-decorator": "FormItem",
                                          "x-component": "f ReactionsSetter(){ }"
                                        },
                                        "x-validator": {
                                          "type": "array",
                                          "x-component": {
                                            "$$typeof": "Symbol(react.memo)",
                                            "type": "f (){ }",
                                            "compare": null
                                          }
                                        },
                                        "required": {
                                          "type": "boolean",
                                          "x-decorator": "FormItem",
                                          "x-component": "Switch"
                                        }
                                      }
                                    },
                                    "component-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-component\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-component-props": {
                                          "type": "object",
                                          "properties": {
                                            "mode": {
                                              "type": "string",
                                              "enum": [
                                                "multiple",
                                                "tags",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Radio.Group",
                                              "x-component-props": {
                                                "defaultValue": null,
                                                "optionType": "button"
                                              }
                                            },
                                            "allowClear": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "autoClearSearchValue": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "dropdownMatchSelectWidth": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "autoFocus": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "bordered": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "defaultActiveFirstOption": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "defaultOpen": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "labelInValue": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "showArrow": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "showSearch": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "virtual": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultValue": true
                                              }
                                            },
                                            "filterOption": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "ValueInput",
                                              "x-component-props": {
                                                "include": [
                                                  "BOOLEAN",
                                                  "EXPRESSION"
                                                ]
                                              }
                                            },
                                            "filterSort": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "ValueInput",
                                              "x-component-props": {
                                                "include": [
                                                  "EXPRESSION"
                                                ]
                                              }
                                            },
                                            "listHeight": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker",
                                              "x-component-props": {
                                                "defaultValue": 256
                                              }
                                            },
                                            "maxTagCount": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "maxTagPlaceholder": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "maxTagTextLength": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "notFoundContent": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input",
                                              "x-component-props": {
                                                "defaultValue": "Not Found"
                                              }
                                            },
                                            "placeholder": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "size": {
                                              "type": "string",
                                              "enum": [
                                                "large",
                                                "small",
                                                "middle",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "middle"
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "decorator-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-component-props": {
                                        "defaultExpand": false
                                      },
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-decorator-props": {
                                          "type": "object",
                                          "properties": {
                                            "tooltip": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "addonBefore": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "addonAfter": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "Input"
                                            },
                                            "labelCol": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "wrapperCol": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "labelWidth": {
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "wrapperWidth": {
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "colon": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            },
                                            "asterisk": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "gridSpan": {
                                              "type": "number",
                                              "x-decorator": "FormItem",
                                              "x-component": "NumberPicker"
                                            },
                                            "feedbackLayout": {
                                              "type": "string",
                                              "enum": [
                                                "loose",
                                                "terse",
                                                "popover",
                                                "none",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "loose"
                                              }
                                            },
                                            "size": {
                                              "type": "string",
                                              "enum": [
                                                "large",
                                                "small",
                                                "default",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "default"
                                              }
                                            },
                                            "layout": {
                                              "type": "string",
                                              "enum": [
                                                "vertical",
                                                "horizontal",
                                                "inline",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "horizontal"
                                              }
                                            },
                                            "tooltipLayout": {
                                              "type": "string",
                                              "enum": [
                                                "icon",
                                                "text",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "icon"
                                              }
                                            },
                                            "labelAlign": {
                                              "type": "string",
                                              "enum": [
                                                "left",
                                                "right",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "right"
                                              }
                                            },
                                            "wrapperAlign": {
                                              "type": "string",
                                              "enum": [
                                                "left",
                                                "right",
                                                null
                                              ],
                                              "x-decorator": "FormItem",
                                              "x-component": "Select",
                                              "x-component-props": {
                                                "defaultValue": "left"
                                              }
                                            },
                                            "labelWrap": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "wrapperWrap": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "fullness": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "inset": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch"
                                            },
                                            "bordered": {
                                              "type": "boolean",
                                              "x-decorator": "FormItem",
                                              "x-component": "Switch",
                                              "x-component-props": {
                                                "defaultChecked": true
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "component-style-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-component-props": {
                                        "defaultExpand": false
                                      },
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-component\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-component-props.style": {
                                          "type": "void",
                                          "properties": {
                                            "style.width": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.height": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.display": {
                                              "x-component": "DisplayStyleSetter"
                                            },
                                            "style.background": {
                                              "x-component": "BackgroundStyleSetter"
                                            },
                                            "style.boxShadow": {
                                              "x-component": "BoxShadowStyleSetter"
                                            },
                                            "style.font": {
                                              "x-component": "FontStyleSetter"
                                            },
                                            "style.margin": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.padding": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.borderRadius": {
                                              "x-component": "BorderRadiusStyleSetter"
                                            },
                                            "style.border": {
                                              "x-component": "BorderStyleSetter"
                                            },
                                            "style.opacity": {
                                              "x-decorator": "FormItem",
                                              "x-component": "Slider",
                                              "x-component-props": {
                                                "defaultValue": 1,
                                                "min": 0,
                                                "max": 1,
                                                "step": 0.01
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "decorator-style-group": {
                                      "type": "void",
                                      "x-component": "CollapseItem",
                                      "x-component-props": {
                                        "defaultExpand": false
                                      },
                                      "x-reactions": {
                                        "fulfill": {
                                          "state": {
                                            "visible": "{{!!$form.values[\"x-decorator\"]}}"
                                          }
                                        }
                                      },
                                      "properties": {
                                        "x-decorator-props.style": {
                                          "type": "void",
                                          "properties": {
                                            "style.width": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.height": {
                                              "type": "string",
                                              "x-decorator": "FormItem",
                                              "x-component": "SizeInput"
                                            },
                                            "style.display": {
                                              "x-component": "DisplayStyleSetter"
                                            },
                                            "style.background": {
                                              "x-component": "BackgroundStyleSetter"
                                            },
                                            "style.boxShadow": {
                                              "x-component": "BoxShadowStyleSetter"
                                            },
                                            "style.font": {
                                              "x-component": "FontStyleSetter"
                                            },
                                            "style.margin": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.padding": {
                                              "x-component": "BoxStyleSetter"
                                            },
                                            "style.borderRadius": {
                                              "x-component": "BorderRadiusStyleSetter"
                                            },
                                            "style.border": {
                                              "x-component": "BorderStyleSetter"
                                            },
                                            "style.opacity": {
                                              "x-decorator": "FormItem",
                                              "x-component": "Slider",
                                              "x-component-props": {
                                                "defaultValue": 1,
                                                "min": 0,
                                                "max": 1,
                                                "step": 0.01
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "designerLocales": {
                                "zh-cn": {
                                  "settings": {
                                    "name": "Name",
                                    "title": "Title",
                                    "required": "Required",
                                    "description": "Description",
                                    "default": "Default",
                                    "enum": "Options",
                                    "x-display": {
                                      "title": "Display State",
                                      "tooltip": "When the display value is \"None\", the data will be \"Hidden\" and deleted. When the display value is hidden, only the UI will be hidden",
                                      "datasource": [
                                        "Visible",
                                        "Hidden",
                                        "None",
                                        "Inherit"
                                      ]
                                    },
                                    "x-pattern": {
                                      "title": "UI Pattern",
                                      "datasource": [
                                        "Editable",
                                        "Disabled",
                                        "ReadOnly",
                                        "ReadPretty",
                                        "Inherit"
                                      ]
                                    },
                                    "x-validator": "Validator",
                                    "x-decorator": "Decorator",
                                    "x-reactions": "Reactions",
                                    "field-group": "Field Properties",
                                    "component-group": "Component Properties",
                                    "decorator-group": "Decorator Properties",
                                    "component-style-group": "Component Style",
                                    "decorator-style-group": "Decorator Style",
                                    "x-component-props": {
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "allowclear": "Allow Clear",
                                      "autofocus": "Auto Focus",
                                      "showsearch": "Show Search",
                                      "notfoundcontent": "Not Found Content",
                                      "bordered": "Bordered",
                                      "placeholder": "Placeholder",
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      },
                                      "mode": {
                                        "title": "Mode",
                                        "datasource": [
                                          "Multiple",
                                          "Tags",
                                          "Single"
                                        ]
                                      },
                                      "autoclearsearchvalue": {
                                        "title": "Auto Clear Search Value",
                                        "tooltip": "Only used to multiple and tags mode"
                                      },
                                      "defaultactivefirstoption": "Default Active First Option",
                                      "dropdownmatchselectwidth": "Dropdown Match Select Width",
                                      "defaultopen": "Default Open",
                                      "filteroption": "Filter Option",
                                      "filtersort": "Filter Sort",
                                      "labelinvalue": "label InValue",
                                      "listheight": "List Height",
                                      "maxtagcount": "Max Tag Count",
                                      "maxtagplaceholder": {
                                        "title": "Max Tag Placeholder",
                                        "tooltip": "Content displayed when tag is hidden"
                                      },
                                      "maxtagtextlength": "Max Tag Text Length",
                                      "showarrow": "Show Arrow",
                                      "virtual": "Use Virtual Scroll"
                                    },
                                    "x-decorator-props": {
                                      "addonafter": "Addon After",
                                      "addonbefore": "Addon Before",
                                      "tooltip": "Tooltip",
                                      "asterisk": "Asterisk",
                                      "gridspan": "Grid Span",
                                      "labelcol": "Label Col",
                                      "wrappercol": "Wrapper Col",
                                      "colon": "Colon",
                                      "labelalign": {
                                        "title": "Label Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "wrapperalign": {
                                        "title": "Wrapper Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "labelwrap": "Label Wrap",
                                      "wrapperwrap": "Wrapper Wrap",
                                      "labelwidth": "Label Width",
                                      "wrapperwidth": "Wrapper Width",
                                      "fullness": "Fullness",
                                      "inset": "Inset",
                                      "shallow": "Shallow",
                                      "bordered": "Bordered",
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "layout": {
                                        "title": "Layout",
                                        "datasource": [
                                          "Vertical",
                                          "Horizontal",
                                          "Inline",
                                          "Inherit"
                                        ]
                                      },
                                      "feedbacklayout": {
                                        "title": "Feedback Layout",
                                        "datasource": [
                                          "Loose",
                                          "Terse",
                                          "Popup",
                                          "None",
                                          "Inherit"
                                        ]
                                      },
                                      "tooltiplayout": {
                                        "title": "Tooltip Layout",
                                        "datasource": [
                                          "Icon",
                                          "Text",
                                          "Inherit"
                                        ]
                                      },
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      }
                                    }
                                  },
                                  "title": "Select"
                                },
                                "en-us": {
                                  "settings": {
                                    "name": "Name",
                                    "title": "Title",
                                    "required": "Required",
                                    "description": "Description",
                                    "default": "Default",
                                    "enum": "Options",
                                    "x-display": {
                                      "title": "Display State",
                                      "tooltip": "When the display value is \"None\", the data will be \"Hidden\" and deleted. When the display value is hidden, only the UI will be hidden",
                                      "datasource": [
                                        "Visible",
                                        "Hidden",
                                        "None",
                                        "Inherit"
                                      ]
                                    },
                                    "x-pattern": {
                                      "title": "UI Pattern",
                                      "datasource": [
                                        "Editable",
                                        "Disabled",
                                        "ReadOnly",
                                        "ReadPretty",
                                        "Inherit"
                                      ]
                                    },
                                    "x-validator": "Validator",
                                    "x-decorator": "Decorator",
                                    "x-reactions": "Reactions",
                                    "field-group": "Field Properties",
                                    "component-group": "Component Properties",
                                    "decorator-group": "Decorator Properties",
                                    "component-style-group": "Component Style",
                                    "decorator-style-group": "Decorator Style",
                                    "x-component-props": {
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "allowclear": "Allow Clear",
                                      "autofocus": "Auto Focus",
                                      "showsearch": "Show Search",
                                      "notfoundcontent": "Not Found Content",
                                      "bordered": "Bordered",
                                      "placeholder": "Placeholder",
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      },
                                      "mode": {
                                        "title": "Mode",
                                        "datasource": [
                                          "Multiple",
                                          "Tags",
                                          "Single"
                                        ]
                                      },
                                      "autoclearsearchvalue": {
                                        "title": "Auto Clear Search Value",
                                        "tooltip": "Only used to multiple and tags mode"
                                      },
                                      "defaultactivefirstoption": "Default Active First Option",
                                      "dropdownmatchselectwidth": "Dropdown Match Select Width",
                                      "defaultopen": "Default Open",
                                      "filteroption": "Filter Option",
                                      "filtersort": "Filter Sort",
                                      "labelinvalue": "label InValue",
                                      "listheight": "List Height",
                                      "maxtagcount": "Max Tag Count",
                                      "maxtagplaceholder": {
                                        "title": "Max Tag Placeholder",
                                        "tooltip": "Content displayed when tag is hidden"
                                      },
                                      "maxtagtextlength": "Max Tag Text Length",
                                      "showarrow": "Show Arrow",
                                      "virtual": "Use Virtual Scroll"
                                    },
                                    "x-decorator-props": {
                                      "addonafter": "Addon After",
                                      "addonbefore": "Addon Before",
                                      "tooltip": "Tooltip",
                                      "asterisk": "Asterisk",
                                      "gridspan": "Grid Span",
                                      "labelcol": "Label Col",
                                      "wrappercol": "Wrapper Col",
                                      "colon": "Colon",
                                      "labelalign": {
                                        "title": "Label Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "wrapperalign": {
                                        "title": "Wrapper Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "labelwrap": "Label Wrap",
                                      "wrapperwrap": "Wrapper Wrap",
                                      "labelwidth": "Label Width",
                                      "wrapperwidth": "Wrapper Width",
                                      "fullness": "Fullness",
                                      "inset": "Inset",
                                      "shallow": "Shallow",
                                      "bordered": "Bordered",
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "layout": {
                                        "title": "Layout",
                                        "datasource": [
                                          "Vertical",
                                          "Horizontal",
                                          "Inline",
                                          "Inherit"
                                        ]
                                      },
                                      "feedbacklayout": {
                                        "title": "Feedback Layout",
                                        "datasource": [
                                          "Loose",
                                          "Terse",
                                          "Popup",
                                          "None",
                                          "Inherit"
                                        ]
                                      },
                                      "tooltiplayout": {
                                        "title": "Tooltip Layout",
                                        "datasource": [
                                          "Icon",
                                          "Text",
                                          "Inherit"
                                        ]
                                      },
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      }
                                    }
                                  },
                                  "title": "Select"
                                },
                                "ko-kr": {
                                  "settings": {
                                    "name": "Name",
                                    "title": "Title",
                                    "required": "Required",
                                    "description": "Description",
                                    "default": "Default",
                                    "enum": "Options",
                                    "x-display": {
                                      "title": "Display State",
                                      "tooltip": "When the display value is \"None\", the data will be \"Hidden\" and deleted. When the display value is hidden, only the UI will be hidden",
                                      "datasource": [
                                        "Visible",
                                        "Hidden",
                                        "None",
                                        "Inherit"
                                      ]
                                    },
                                    "x-pattern": {
                                      "title": "UI Pattern",
                                      "datasource": [
                                        "Editable",
                                        "Disabled",
                                        "ReadOnly",
                                        "ReadPretty",
                                        "Inherit"
                                      ]
                                    },
                                    "x-validator": "Validator",
                                    "x-decorator": "Decorator",
                                    "x-reactions": "Reactions",
                                    "field-group": "Field Properties",
                                    "component-group": "Component Properties",
                                    "decorator-group": "Decorator Properties",
                                    "component-style-group": "Component Style",
                                    "decorator-style-group": "Decorator Style",
                                    "x-component-props": {
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "allowclear": "Allow Clear",
                                      "autofocus": "Auto Focus",
                                      "showsearch": "Show Search",
                                      "notfoundcontent": "Not Found Content",
                                      "bordered": "Bordered",
                                      "placeholder": "Placeholder",
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      },
                                      "mode": {
                                        "title": "Mode",
                                        "datasource": [
                                          "Multiple",
                                          "Tags",
                                          "Single"
                                        ]
                                      },
                                      "autoclearsearchvalue": {
                                        "title": "Auto Clear Search Value",
                                        "tooltip": "Only used to multiple and tags mode"
                                      },
                                      "defaultactivefirstoption": "Default Active First Option",
                                      "dropdownmatchselectwidth": "Dropdown Match Select Width",
                                      "defaultopen": "Default Open",
                                      "filteroption": "Filter Option",
                                      "filtersort": "Filter Sort",
                                      "labelinvalue": "label InValue",
                                      "listheight": "List Height",
                                      "maxtagcount": "Max Tag Count",
                                      "maxtagplaceholder": {
                                        "title": "Max Tag Placeholder",
                                        "tooltip": "Content displayed when tag is hidden"
                                      },
                                      "maxtagtextlength": "Max Tag Text Length",
                                      "showarrow": "Show Arrow",
                                      "virtual": "Use Virtual Scroll"
                                    },
                                    "x-decorator-props": {
                                      "addonafter": "Addon After",
                                      "addonbefore": "Addon Before",
                                      "tooltip": "Tooltip",
                                      "asterisk": "Asterisk",
                                      "gridspan": "Grid Span",
                                      "labelcol": "Label Col",
                                      "wrappercol": "Wrapper Col",
                                      "colon": "Colon",
                                      "labelalign": {
                                        "title": "Label Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "wrapperalign": {
                                        "title": "Wrapper Align",
                                        "datasource": [
                                          "Left",
                                          "Right",
                                          "Inherit"
                                        ]
                                      },
                                      "labelwrap": "Label Wrap",
                                      "wrapperwrap": "Wrapper Wrap",
                                      "labelwidth": "Label Width",
                                      "wrapperwidth": "Wrapper Width",
                                      "fullness": "Fullness",
                                      "inset": "Inset",
                                      "shallow": "Shallow",
                                      "bordered": "Bordered",
                                      "size": {
                                        "title": "Size",
                                        "datasource": [
                                          "Large",
                                          "Small",
                                          "Default",
                                          "Inherit"
                                        ]
                                      },
                                      "layout": {
                                        "title": "Layout",
                                        "datasource": [
                                          "Vertical",
                                          "Horizontal",
                                          "Inline",
                                          "Inherit"
                                        ]
                                      },
                                      "feedbacklayout": {
                                        "title": "Feedback Layout",
                                        "datasource": [
                                          "Loose",
                                          "Terse",
                                          "Popup",
                                          "None",
                                          "Inherit"
                                        ]
                                      },
                                      "tooltiplayout": {
                                        "title": "Tooltip Layout",
                                        "datasource": [
                                          "Icon",
                                          "Text",
                                          "Inherit"
                                        ]
                                      },
                                      "style": {
                                        "width": "Width",
                                        "height": "Height",
                                        "display": "Display",
                                        "background": "Background",
                                        "boxshadow": "Box Shadow",
                                        "font": "Font",
                                        "margin": "Margin",
                                        "padding": "Padding",
                                        "borderradius": "Radius",
                                        "border": "Border",
                                        "opacity": "Opacity"
                                      }
                                    }
                                  },
                                  "title": "Select"
                                }
                              },
                              "wrap": "f (){ }",
                              "prepend": "f (){ }",
                              "append": "f (){ }",
                              "insertAfter": "f (){ }",
                              "insertBefore": "f (){ }",
                              "remove": "f (){ }",
                              "setProps": "f (){ }",
                              "setChildren": "f (){ }",
                              "setComponentName": "f (){ }"
                            }
                          ],
                          "id": "0ge1wniw5rh",
                          "root": "#CircularReference",
                          "isSelfSourceNode": true,
                          "designerProps": {},
                          "designerLocales": {},
                          "wrap": "f (){ }",
                          "prepend": "f (){ }",
                          "append": "f (){ }",
                          "insertAfter": "f (){ }",
                          "insertBefore": "f (){ }",
                          "remove": "f (){ }",
                          "setProps": "f (){ }",
                          "setChildren": "f (){ }",
                          "setComponentName": "f (){ }"
                        }
                      }
                    ]
                  },
                  {
                    "style": {
                      "width": "100%"
                    },
                    "placeholder": "Helvetica Neue"
                  }
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.margin",
              "path": "decorator-style-group.x-decorator-props.style.style.margin",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.margin",
                "path": "x-decorator-props.style.margin",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Margin",
                "component": [
                  "BoxStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.padding",
              "path": "decorator-style-group.x-decorator-props.style.style.padding",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.padding",
                "path": "x-decorator-props.style.padding",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Padding",
                "component": [
                  "BoxStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.borderRadius",
              "path": "decorator-style-group.x-decorator-props.style.style.borderRadius",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.borderRadius",
                "path": "x-decorator-props.style.borderRadius",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Radius",
                "component": [
                  "BorderRadiusStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.border",
              "path": "decorator-style-group.x-decorator-props.style.style.border",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.border",
                "path": "x-decorator-props.style.border",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Border",
                "component": [
                  "BorderStyleSetter",
                  {}
                ],
                "decorator": [
                  null,
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            },
            {
              "name": "style.opacity",
              "path": "decorator-style-group.x-decorator-props.style.style.opacity",
              "toggled": true,
              "data": {
                "actions": {},
                "displayName": "Field",
                "address": "decorator-style-group.x-decorator-props.style.style.opacity",
                "path": "x-decorator-props.style.opacity",
                "initialized": true,
                "loading": false,
                "validating": false,
                "submitting": false,
                "selfModified": false,
                "active": false,
                "visited": false,
                "mounted": true,
                "unmounted": false,
                "inputValues": [],
                "inputValue": null,
                "feedbacks": [],
                "title": "Opacity",
                "component": [
                  "Slider",
                  {
                    "defaultValue": 1,
                    "min": 0,
                    "max": 1,
                    "step": 0.01
                  }
                ],
                "decorator": [
                  "FormItem",
                  {}
                ],
                "errors": [],
                "warnings": [],
                "successes": [],
                "valid": true,
                "invalid": false,
                "selfErrors": [],
                "selfWarnings": [],
                "selfSuccesses": [],
                "selfValid": true,
                "selfInvalid": false,
                "display": "visible",
                "pattern": "editable",
                "required": false,
                "hidden": false,
                "visible": true,
                "disabled": false,
                "readOnly": false,
                "readPretty": false,
                "editable": true
              }
            }
          ]
        }
      ]
    }
  ]
}
