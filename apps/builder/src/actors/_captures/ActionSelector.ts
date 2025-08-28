export default {
  "props": {
    "action": {
      "code": "storeValue('localCalculatedVar', calculatedTxt.setText(Input1.text));",
      "actionType": "storeValue",
      "success": {
        "params": [],
        "blocks": []
      },
      "error": {
        "params": [],
        "blocks": []
      }
    },
    "dataTreePath": "btnCalculate.onClick",
    "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/viewComponents/Action/ActionSelector.tsx:50:9:ActionSelectorForm"
  },
  "integrationOptions": [
    {
      "label": "Execute a query",
      "value": "integration",
      "children": [
        {
          "label": "New query",
          "value": "datasources",
          "id": "create",
          "icon": "plus",
          "className": "t--create-datasources-query-btn"
        }
      ],
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "query-main",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Execute a JS function",
      "value": "jsFunction",
      "children": [
        {
          "label": "New JS Object",
          "value": "jsFunction",
          "id": "create",
          "icon": "plus",
          "className": "t--create-js-object-btn"
        }
      ],
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "js",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Navigate to",
      "value": "navigateTo",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "page-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Show alert",
      "value": "showAlert",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "message-2-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Show modal",
      "value": "showModal",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "show-modal",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Close modal",
      "value": "closeModal",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "show-modal",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Store value",
      "value": "storeValue",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "folder-download-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Remove value",
      "value": "removeValue",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "folder-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Clear store",
      "value": "clearStore",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "folder-reduce-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Download",
      "value": "download",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "download-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Copy to clipboard",
      "value": "copyToClipboard",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "copy-control",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Reset widget",
      "value": "resetWidget",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "restart-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Set interval",
      "value": "setInterval",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "timer-flash-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Clear interval",
      "value": "clearInterval",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "timer-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Get geolocation",
      "value": "appsmith.geolocation.getCurrentPosition",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "map-2-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Watch geolocation",
      "value": "appsmith.geolocation.watchPosition",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "map-pin-user-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Stop watching geolocation",
      "value": "appsmith.geolocation.clearWatch",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "map-pin-5-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Post message",
      "value": "postWindowMessage",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "chat-upload-line",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    },
    {
      "label": "Logout user",
      "value": "logoutUser",
      "icon": {
        "key": null,
        "ref": null,
        "props": {
          "name": "logout",
          "size": "md",
          "data-insp-path": "app/client/src/components/editorComponents/ActionCreator/helpers.tsx:92:11:Icon"
        },
        "_owner": null,
        "_store": {}
      }
    }
  ],
  "widgetOptionTree": [
    {
      "label": "Input1",
      "id": "Input1",
      "value": "\"Input1\"",
      "type": "INPUT_WIDGET_V2"
    },
    {
      "label": "Text1",
      "id": "Text1",
      "value": "\"Text1\"",
      "type": "TEXT_WIDGET"
    },
    {
      "label": "containerPlayground",
      "id": "containerPlayground",
      "value": "\"containerPlayground\"",
      "type": "CONTAINER_WIDGET"
    },
    {
      "label": "calculatedTxt",
      "id": "calculatedTxt",
      "value": "\"calculatedTxt\"",
      "type": "TEXT_WIDGET"
    },
    {
      "label": "containerActions",
      "id": "containerActions",
      "value": "\"containerActions\"",
      "type": "CONTAINER_WIDGET"
    },
    {
      "label": "containerRoot",
      "id": "containerRoot",
      "value": "\"containerRoot\"",
      "type": "CONTAINER_WIDGET"
    }
  ],
  "modalDropdownList": [
    {
      "label": "New Modal",
      "value": "Modal",
      "id": "create",
      "icon": "plus",
      "className": "t--create-modal-btn"
    }
  ],
  "pageDropdownOptions": [
    {
      "label": "Page1",
      "id": "68ad34afd8deff53ee072777",
      "value": "'Page1'"
    }
  ],
  "ActionCreatorContext": {
    "label": "onClick",
    "selectedBlockId": "11l0doltbg"
  }
}
