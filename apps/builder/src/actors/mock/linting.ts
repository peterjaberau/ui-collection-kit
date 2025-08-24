export default {
  "errors": {
    "fetch_users.data": [],
    "fetch_users.isLoading": [],
    "fetch_users.datasourceUrl": [],
    "fetch_users.run": [],
    "fetch_users.config.body": [],
    "MainContainer.isVisible": [],
    "MainContainer.animateLoading": [],
    "MainContainer.backgroundColor": [],
    "MainContainer.borderColor": [],
    "MainContainer.borderWidth": [],
    "MainContainer.borderRadius": [],
    "MainContainer.boxShadow": [],
    "txt_title.value": [],
    "txt_title.truncateButtonColor": [],
    "txt_title.fontFamily": [],
    "txt_title.borderRadius": [],
    "txt_title.text": [],
    "txt_title.isVisible": [],
    "txt_title.animateLoading": [],
    "txt_title.disableLink": [],
    "txt_title.fontSize": [],
    "txt_title.textColor": [],
    "txt_title.backgroundColor": [],
    "txt_title.borderColor": [],
    "txt_title.textAlign": [],
    "txt_title.fontStyle": [],
    "txt_title.borderWidth": [],
    "div_header.isVisible": [],
    "div_header.animateLoading": [],
    "div_header.orientation": [],
    "div_header.dividerColor": [],
    "div_header.strokeStyle": [],
    "div_header.thickness": [],
    "div_header.capType": [],
    "sel_country.options": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (()=>{let labels = [],      values = [],      sourceData = sel_country.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    /**     * SourceData:     *  [{     *    \"name\": \"Blue\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Green\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Red\",     *    \"code\": \"name\"     *  }]     * The `Label key` in UI can take following values:     * 1. Normal string, without any quotes. e.g `name`     *    This can be assumed as a key in each item of sourceData. We search it in each item of sourceData.     * 2. Except sel_country.everything comes in `{{}}`. It can have 2 types of values:     *    a. Expressions that evaluate to a normal string. e.g `{{(() => `name`)()}}`     *        In sel_country.case evaluated value will be ['name', 'name', 'name'].     *        i. This can be assumed as a key in each item of sourceData. Handled by `allLabelsEqual` check.     *    b. Dynamic property accessed via `item` object. e.g `{{item.name}}`     *        In sel_country.case evaluated value will be actual values form sourceData ['Red', 'Green', 'Blue'].     *        Hence we can assume that sel_country.array is the labels array.     * */    if (typeof sel_country.optionLabel === \"string\") {      labels = sourceData.map((d) => d[sel_country.optionLabel]);    } else if (_.isArray(sel_country.optionLabel)) {      labels = processOptionArray(sel_country.optionLabel, sourceData);    }    if (typeof sel_country.optionValue === \"string\") {      values = sourceData.map((d) => d[sel_country.optionValue]);    } else if (_.isArray(sel_country.optionValue)) {      values = processOptionArray(sel_country.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'_' is defined but never used."
        },
        "errorSegment": "    const $$result = (()=>{let labels = [],      values = [],      sourceData = sel_country.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    /**     * SourceData:     *  [{     *    \"name\": \"Blue\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Green\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Red\",     *    \"code\": \"name\"     *  }]     * The `Label key` in UI can take following values:     * 1. Normal string, without any quotes. e.g `name`     *    This can be assumed as a key in each item of sourceData. We search it in each item of sourceData.     * 2. Except sel_country.everything comes in `{{}}`. It can have 2 types of values:     *    a. Expressions that evaluate to a normal string. e.g `{{(() => `name`)()}}`     *        In sel_country.case evaluated value will be ['name', 'name', 'name'].     *        i. This can be assumed as a key in each item of sourceData. Handled by `allLabelsEqual` check.     *    b. Dynamic property accessed via `item` object. e.g `{{item.name}}`     *        In sel_country.case evaluated value will be actual values form sourceData ['Red', 'Green', 'Blue'].     *        Hence we can assume that sel_country.array is the labels array.     * */    if (typeof sel_country.optionLabel === \"string\") {      labels = sourceData.map((d) => d[sel_country.optionLabel]);    } else if (_.isArray(sel_country.optionLabel)) {      labels = processOptionArray(sel_country.optionLabel, sourceData);    }    if (typeof sel_country.optionValue === \"string\") {      values = sourceData.map((d) => d[sel_country.optionValue]);    } else if (_.isArray(sel_country.optionValue)) {      values = processOptionArray(sel_country.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()",
        "originalBinding": "{{(()=>{let labels = [],      values = [],      sourceData = sel_country.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    /**     * SourceData:     *  [{     *    \"name\": \"Blue\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Green\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Red\",     *    \"code\": \"name\"     *  }]     * The `Label key` in UI can take following values:     * 1. Normal string, without any quotes. e.g `name`     *    This can be assumed as a key in each item of sourceData. We search it in each item of sourceData.     * 2. Except sel_country.everything comes in `{{}}`. It can have 2 types of values:     *    a. Expressions that evaluate to a normal string. e.g `{{(() => `name`)()}}`     *        In sel_country.case evaluated value will be ['name', 'name', 'name'].     *        i. This can be assumed as a key in each item of sourceData. Handled by `allLabelsEqual` check.     *    b. Dynamic property accessed via `item` object. e.g `{{item.name}}`     *        In sel_country.case evaluated value will be actual values form sourceData ['Red', 'Green', 'Blue'].     *        Hence we can assume that sel_country.array is the labels array.     * */    if (typeof sel_country.optionLabel === \"string\") {      labels = sourceData.map((d) => d[sel_country.optionLabel]);    } else if (_.isArray(sel_country.optionLabel)) {      labels = processOptionArray(sel_country.optionLabel, sourceData);    }    if (typeof sel_country.optionValue === \"string\") {      values = sourceData.map((d) => d[sel_country.optionValue]);    } else if (_.isArray(sel_country.optionValue)) {      values = processOptionArray(sel_country.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()}}",
        "variables": [
          "_",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 238
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (()=>{let labels = [],      values = [],      sourceData = sel_country.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    /**     * SourceData:     *  [{     *    \"name\": \"Blue\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Green\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Red\",     *    \"code\": \"name\"     *  }]     * The `Label key` in UI can take following values:     * 1. Normal string, without any quotes. e.g `name`     *    This can be assumed as a key in each item of sourceData. We search it in each item of sourceData.     * 2. Except sel_country.everything comes in `{{}}`. It can have 2 types of values:     *    a. Expressions that evaluate to a normal string. e.g `{{(() => `name`)()}}`     *        In sel_country.case evaluated value will be ['name', 'name', 'name'].     *        i. This can be assumed as a key in each item of sourceData. Handled by `allLabelsEqual` check.     *    b. Dynamic property accessed via `item` object. e.g `{{item.name}}`     *        In sel_country.case evaluated value will be actual values form sourceData ['Red', 'Green', 'Blue'].     *        Hence we can assume that sel_country.array is the labels array.     * */    if (typeof sel_country.optionLabel === \"string\") {      labels = sourceData.map((d) => d[sel_country.optionLabel]);    } else if (_.isArray(sel_country.optionLabel)) {      labels = processOptionArray(sel_country.optionLabel, sourceData);    }    if (typeof sel_country.optionValue === \"string\") {      values = sourceData.map((d) => d[sel_country.optionValue]);    } else if (_.isArray(sel_country.optionValue)) {      values = processOptionArray(sel_country.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'d' is defined but never used."
        },
        "errorSegment": "    const $$result = (()=>{let labels = [],      values = [],      sourceData = sel_country.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    /**     * SourceData:     *  [{     *    \"name\": \"Blue\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Green\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Red\",     *    \"code\": \"name\"     *  }]     * The `Label key` in UI can take following values:     * 1. Normal string, without any quotes. e.g `name`     *    This can be assumed as a key in each item of sourceData. We search it in each item of sourceData.     * 2. Except sel_country.everything comes in `{{}}`. It can have 2 types of values:     *    a. Expressions that evaluate to a normal string. e.g `{{(() => `name`)()}}`     *        In sel_country.case evaluated value will be ['name', 'name', 'name'].     *        i. This can be assumed as a key in each item of sourceData. Handled by `allLabelsEqual` check.     *    b. Dynamic property accessed via `item` object. e.g `{{item.name}}`     *        In sel_country.case evaluated value will be actual values form sourceData ['Red', 'Green', 'Blue'].     *        Hence we can assume that sel_country.array is the labels array.     * */    if (typeof sel_country.optionLabel === \"string\") {      labels = sourceData.map((d) => d[sel_country.optionLabel]);    } else if (_.isArray(sel_country.optionLabel)) {      labels = processOptionArray(sel_country.optionLabel, sourceData);    }    if (typeof sel_country.optionValue === \"string\") {      values = sourceData.map((d) => d[sel_country.optionValue]);    } else if (_.isArray(sel_country.optionValue)) {      values = processOptionArray(sel_country.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()",
        "originalBinding": "{{(()=>{let labels = [],      values = [],      sourceData = sel_country.sourceData || [];    const processOptionArray = (optionArray, sourceData) => {      if (!sourceData.length) return [];      const allEqual = optionArray.every((item, _, arr) => item === arr[0]);      const keyExistsInSource = optionArray[0] in sourceData[0];      return allEqual && keyExistsInSource        ? sourceData.map((d) => d[optionArray[0]])        : optionArray;    };    /**     * SourceData:     *  [{     *    \"name\": \"Blue\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Green\",     *    \"code\": \"name\"     *  },{     *    \"name\": \"Red\",     *    \"code\": \"name\"     *  }]     * The `Label key` in UI can take following values:     * 1. Normal string, without any quotes. e.g `name`     *    This can be assumed as a key in each item of sourceData. We search it in each item of sourceData.     * 2. Except sel_country.everything comes in `{{}}`. It can have 2 types of values:     *    a. Expressions that evaluate to a normal string. e.g `{{(() => `name`)()}}`     *        In sel_country.case evaluated value will be ['name', 'name', 'name'].     *        i. This can be assumed as a key in each item of sourceData. Handled by `allLabelsEqual` check.     *    b. Dynamic property accessed via `item` object. e.g `{{item.name}}`     *        In sel_country.case evaluated value will be actual values form sourceData ['Red', 'Green', 'Blue'].     *        Hence we can assume that sel_country.array is the labels array.     * */    if (typeof sel_country.optionLabel === \"string\") {      labels = sourceData.map((d) => d[sel_country.optionLabel]);    } else if (_.isArray(sel_country.optionLabel)) {      labels = processOptionArray(sel_country.optionLabel, sourceData);    }    if (typeof sel_country.optionValue === \"string\") {      values = sourceData.map((d) => d[sel_country.optionValue]);    } else if (_.isArray(sel_country.optionValue)) {      values = processOptionArray(sel_country.optionValue, sourceData);    }    return sourceData.map((d, i) => ({      label: labels[i],      value: values[i],    }));})()}}",
        "variables": [
          "d",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 2041
      }
    ],
    "sel_country.isValid": [],
    "sel_country.selectedOptionValue": [],
    "sel_country.selectedOptionLabel": [],
    "sel_country.value": [],
    "sel_country.label": [],
    "sel_country.filterText": [],
    "sel_country.isDirty": [],
    "sel_country.": [],
    "sel_country.accentColor": [],
    "sel_country.borderRadius": [],
    "sel_country.defaultOptionValue": [],
    "sel_country.meta.value": [],
    "sel_country.meta.label": [],
    "sel_country.meta.filterText": [],
    "sel_country.sourceData": [],
    "sel_country.optionLabel": [],
    "sel_country.optionValue": [],
    "sel_country.labelText": [],
    "sel_country.isFilterable": [],
    "sel_country.serverSideFiltering": [],
    "sel_country.isRequired": [],
    "sel_country.labelTooltip": [],
    "sel_country.placeholderText": [],
    "sel_country.isVisible": [],
    "sel_country.isDisabled": [],
    "sel_country.animateLoading": [],
    "sel_country.labelTextColor": [],
    "sel_country.labelTextSize": [],
    "sel_country.labelStyle": [],
    "sel_country.boxShadow": [],
    "sel_country.onDropdownOpen": [],
    "dat_bornAfter.isValid": [],
    "dat_bornAfter.selectedDate": [],
    "dat_bornAfter.formattedDate": [],
    "dat_bornAfter.value": [],
    "dat_bornAfter.isDirty": [],
    "dat_bornAfter.accentColor": [],
    "dat_bornAfter.borderRadius": [],
    "dat_bornAfter.defaultDate": [],
    "dat_bornAfter.meta.value": [],
    "dat_bornAfter.dateFormat": [],
    "dat_bornAfter.firstDayOfWeek": [],
    "dat_bornAfter.timePrecision": [],
    "dat_bornAfter.label": [],
    "dat_bornAfter.isRequired": [],
    "dat_bornAfter.minDate": [],
    "dat_bornAfter.maxDate": [],
    "dat_bornAfter.labelTooltip": [],
    "dat_bornAfter.isVisible": [],
    "dat_bornAfter.isDisabled": [],
    "dat_bornAfter.animateLoading": [],
    "dat_bornAfter.shortcuts": [],
    "dat_bornAfter.closeOnSelection": [],
    "dat_bornAfter.labelTextColor": [],
    "dat_bornAfter.labelTextSize": [],
    "dat_bornAfter.labelStyle": [],
    "dat_bornAfter.boxShadow": [],
    "dat_bornAfter.onFocus": [],
    "dat_bornAfter.onBlur": [],
    "icn_resetFilters.buttonColor": [],
    "icn_resetFilters.borderRadius": [],
    "icn_resetFilters.iconName": [],
    "icn_resetFilters.tooltip": [],
    "icn_resetFilters.isVisible": [],
    "icn_resetFilters.isDisabled": [],
    "icn_resetFilters.animateLoading": [],
    "icn_resetFilters.buttonVariant": [],
    "icn_resetFilters.boxShadow": [],
    "Image1.image": [],
    "Image1.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Image1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Image1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Image1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Image1.defaultImage": [],
    "Image1.objectFit": [],
    "Image1.maxZoomLevel": [],
    "Image1.isVisible": [],
    "Image1.animateLoading": [],
    "Image1.enableRotation": [],
    "Image1.enableDownload": [],
    "Image1.boxShadow": [],
    "Image1.onClick": [],
    "Text1.value": [],
    "Text1.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.name) )(Text1.currentItem)) )(Text1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.name) )(Text1.currentItem)) )(Text1.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.name) )(Text1.currentItem)) )(Text1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text1.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(Text1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text1.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text1.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text1.isVisible": [],
    "Text1.animateLoading": [],
    "Text1.disableLink": [],
    "Text1.fontSize": [],
    "Text1.textColor": [],
    "Text1.backgroundColor": [],
    "Text1.borderColor": [],
    "Text1.textAlign": [],
    "Text1.fontStyle": [],
    "Text1.borderWidth": [],
    "Text2.value": [],
    "Text2.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.email) )(Text2.currentItem)) )(Text2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.email) )(Text2.currentItem)) )(Text2.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.email) )(Text2.currentItem)) )(Text2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2.isVisible": [],
    "Text2.animateLoading": [],
    "Text2.disableLink": [],
    "Text2.fontSize": [],
    "Text2.textColor": [],
    "Text2.backgroundColor": [],
    "Text2.borderColor": [],
    "Text2.textAlign": [],
    "Text2.fontStyle": [],
    "Text2.borderWidth": [],
    "Text2Copy1.value": [],
    "Text2Copy1.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.phone) )(Text2Copy1.currentItem)) )(Text2Copy1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.phone) )(Text2Copy1.currentItem)) )(Text2Copy1.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.phone) )(Text2Copy1.currentItem)) )(Text2Copy1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy1.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2Copy1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2Copy1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2Copy1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy1.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2Copy1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2Copy1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2Copy1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy1.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2Copy1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2Copy1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2Copy1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy1.isVisible": [],
    "Text2Copy1.animateLoading": [],
    "Text2Copy1.disableLink": [],
    "Text2Copy1.fontSize": [],
    "Text2Copy1.textColor": [],
    "Text2Copy1.backgroundColor": [],
    "Text2Copy1.borderColor": [],
    "Text2Copy1.textAlign": [],
    "Text2Copy1.fontStyle": [],
    "Text2Copy1.borderWidth": [],
    "Text2Copy2.value": [],
    "Text2Copy2.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(Text2Copy2.currentItem)) )(Text2Copy2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(Text2Copy2.currentItem)) )(Text2Copy2.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(Text2Copy2.currentItem)) )(Text2Copy2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy2.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2Copy2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2Copy2.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2Copy2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy2.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2Copy2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2Copy2.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2Copy2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy2.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2Copy2.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2Copy2.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2Copy2.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2Copy2.isVisible": [],
    "Text2Copy2.animateLoading": [],
    "Text2Copy2.disableLink": [],
    "Text2Copy2.fontSize": [],
    "Text2Copy2.textColor": [],
    "Text2Copy2.backgroundColor": [],
    "Text2Copy2.borderColor": [],
    "Text2Copy2.textAlign": [],
    "Text2Copy2.fontStyle": [],
    "Text2Copy2.borderWidth": [],
    "Text2CopyCopy.value": [],
    "Text2CopyCopy.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.country) )(Text2CopyCopy.currentItem)) )(Text2CopyCopy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.country) )(Text2CopyCopy.currentItem)) )(Text2CopyCopy.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.country) )(Text2CopyCopy.currentItem)) )(Text2CopyCopy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2CopyCopy.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2CopyCopy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2CopyCopy.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(Text2CopyCopy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2CopyCopy.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2CopyCopy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2CopyCopy.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(Text2CopyCopy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2CopyCopy.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2CopyCopy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2CopyCopy.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(Text2CopyCopy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "Text2CopyCopy.isVisible": [],
    "Text2CopyCopy.animateLoading": [],
    "Text2CopyCopy.disableLink": [],
    "Text2CopyCopy.fontSize": [],
    "Text2CopyCopy.textColor": [],
    "Text2CopyCopy.backgroundColor": [],
    "Text2CopyCopy.borderColor": [],
    "Text2CopyCopy.textAlign": [],
    "Text2CopyCopy.fontStyle": [],
    "Text2CopyCopy.borderWidth": [],
    "Canvas3.borderRadius": [],
    "Canvas3.boxShadow": [],
    "Canvas3.isVisible": [],
    "Canvas3.animateLoading": [],
    "Canvas3.backgroundColor": [],
    "Canvas3.borderColor": [],
    "Canvas3.borderWidth": [],
    "Container1.borderRadius": [],
    "Container1.boxShadow": [],
    "Container1.isVisible": [],
    "Container1.animateLoading": [],
    "Container1.backgroundColor": [],
    "Container1.borderColor": [],
    "Container1.borderWidth": [],
    "Canvas2.borderRadius": [],
    "Canvas2.boxShadow": [],
    "Canvas2.isVisible": [],
    "Canvas2.animateLoading": [],
    "Canvas2.backgroundColor": [],
    "Canvas2.borderColor": [],
    "Canvas2.borderWidth": [],
    "list_users.childAutoComplete": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"levelData\" doesn't exist in list_users"
        },
        "errorSegment": "list_users.levelData",
        "originalBinding": "{{(() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()}}",
        "variables": [
          "levelData",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 207
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"levelData\" doesn't exist in list_users"
        },
        "errorSegment": "list_users.levelData",
        "originalBinding": "{{(() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()}}",
        "variables": [
          "levelData",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 263
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"levelData\" doesn't exist in list_users"
        },
        "errorSegment": "list_users.levelData",
        "originalBinding": "{{(() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()}}",
        "variables": [
          "levelData",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 398
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"levelData\" doesn't exist in list_users"
        },
        "errorSegment": "list_users.levelData",
        "originalBinding": "{{(() => {const currentItem = list_users.listData?.[0] ?? {};    const currentView = list_users.currentItemsView?.[0];    const autocomplete = { currentItem, currentIndex: 0, currentView };    if (list_users.levelData) {      const levels = Object.keys(list_users.levelData);      levels.forEach((level) => {        autocomplete[level] = {          currentIndex: 0,          currentItem: list_users.levelData[level].autocomplete.currentItem,          currentView: list_users.levelData[level].autocomplete.currentView,        };      });    }    return autocomplete;})()}}",
        "variables": [
          "levelData",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 474
      }
    ],
    "list_users.pageNo": [],
    "list_users.currentItemsView": [],
    "list_users.selectedItemView": [],
    "list_users.triggeredItemView": [],
    "list_users.selectedItem": [],
    "list_users.triggeredItem": [],
    "list_users.selectedItemKey": [],
    "list_users.triggeredItemKey": [],
    "list_users.defaultSelectedItem": [],
    "list_users.primaryKeys": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = list_users.listData.map((currentItem, currentIndex) => currentItem[\"id\"] )\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentIndex' is defined but never used."
        },
        "errorSegment": "    const $$result = list_users.listData.map((currentItem, currentIndex) => currentItem[\"id\"] )",
        "originalBinding": "{{list_users.listData.map((currentItem, currentIndex) => currentItem[\"id\"] )}}",
        "variables": [
          "currentIndex",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 39
      }
    ],
    "list_users.accentColor": [],
    "list_users.borderRadius": [],
    "list_users.boxShadow": [],
    "list_users.listData": [],
    "list_users.meta.selectedItemKey": [],
    "list_users.totalRecordsCount": [],
    "list_users.isVisible": [],
    "list_users.animateLoading": [],
    "list_users.itemSpacing": [],
    "list_users.backgroundColor": [],
    "list_users.onItemClick": [],
    "inp_name.value": [],
    "inp_name.isValid": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "Expected a 'break' statement before 'case'."
        },
        "errorSegment": "    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "case",
          null,
          null,
          null
        ],
        "code": "W086",
        "line": 0,
        "ch": 365
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "Expected a 'break' statement before 'case'."
        },
        "errorSegment": "    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "case",
          null,
          null,
          null
        ],
        "code": "W086",
        "line": 0,
        "ch": 2522
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "Expected a 'break' statement before 'case'."
        },
        "errorSegment": "    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "case",
          null,
          null,
          null
        ],
        "code": "W086",
        "line": 0,
        "ch": 2727
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"validation\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.validation",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "validation",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 846
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"validation\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.validation",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "validation",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 884
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"regex\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.regex",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "regex",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 965
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"regex\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.regex",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "regex",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 1204
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"regex\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.regex",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "regex",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 1307
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"regex\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.regex",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "regex",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 1594
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"maxNum\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.maxNum",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "maxNum",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 2816
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"maxNum\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.maxNum",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "maxNum",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 2861
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"maxNum\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.maxNum",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "maxNum",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 2890
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"minNum\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.minNum",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "minNum",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 3013
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"minNum\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.minNum",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "minNum",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 3058
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = (() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "\"minNum\" doesn't exist in inp_name"
        },
        "errorSegment": "inp_name.minNum",
        "originalBinding": "{{(() => {let hasValidValue, value, isEmpty;    switch (inp_name.inputType) {      case \"NUMBER\":        try {          isEmpty = _.isNil(inp_name.inputText) || inp_name.inputText === \"\";          value = isEmpty ? null : Number(inp_name.inputText);          hasValidValue = Number.isFinite(value);          break;        } catch (e) {          return false;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"EMAIL\":      case \"PASSWORD\":        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;      default:        value = inp_name.inputText;        isEmpty = !value;        hasValidValue = !!value;        break;    }    if (!inp_name.isRequired && isEmpty) {      return true;    }    if (inp_name.isRequired && !hasValidValue) {      return false;    }    if (typeof inp_name.validation === \"boolean\" && !inp_name.validation) {      return false;    }    let parsedRegex = null;    if (inp_name.regex) {      /*       * break up the regexp pattern into 4 parts: given regex, regex prefix , regex pattern, regex flags       * Example /test/i will be split into [\"/test/gi\", \"/\", \"test\", \"gi\"]       */      const regexParts = inp_name.regex.match(/(\\/?)(.+)\\\\1([a-z]*)/i);      if (!regexParts) {        parsedRegex = new RegExp(inp_name.regex);      } else {        /*         * if we don't have a regex flags (gmisuy), convert provided string into regexp directly         */        if (          regexParts[3] &&          !/^(?!.*?(.).*?\\\\1)[gmisuy]+$/.test(regexParts[3])        ) {          parsedRegex = RegExp(inp_name.regex);        } else {          /*           * if we have a regex flags, use it to form regexp           */          parsedRegex = new RegExp(regexParts[2], regexParts[3]);        }      }    }    switch (inp_name.inputType) {      case \"EMAIL\":        /**         * Explanation of Regex:         *  https://stackoverflow.com/questions/15017052/understanding-email-validation-using-javascript         * */        const emailRegex = new RegExp(          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,        );        if (!emailRegex.test(value)) {          /* email should conform to generic email regex */          return false;        } else if (parsedRegex) {          /* email should conform to user specified regex */          return parsedRegex.test(inp_name.inputText);        } else {          return true;        }      case \"TEXT\":      case \"MULTI_LINE_TEXT\":      case \"PASSWORD\":        if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }      case \"NUMBER\":        if (          !_.isNil(value) &&          !_.isNil(inp_name.maxNum) &&          Number.isFinite(inp_name.maxNum) &&          inp_name.maxNum < value        ) {          return false;        } else if (          !_.isNil(value) &&          !_.isNil(inp_name.minNum) &&          Number.isFinite(inp_name.minNum) &&          inp_name.minNum > value        ) {          return false;        } else if (parsedRegex) {          return parsedRegex.test(inp_name.inputText);        } else {          return hasValidValue;        }    }})()}}",
        "variables": [
          "minNum",
          null,
          null,
          null
        ],
        "code": "INVALID_ENTITY_PROPERTY",
        "line": 0,
        "ch": 3087
      }
    ],
    "inp_name.text": [],
    "inp_name.isDirty": [],
    "inp_name.inputText": [],
    "inp_name.accentColor": [],
    "inp_name.borderRadius": [],
    "inp_name.defaultText": [],
    "inp_name.meta.inputText": [],
    "inp_name.meta.text": [],
    "inp_name.label": [],
    "inp_name.isRequired": [],
    "inp_name.maxChars": [],
    "inp_name.regex": [],
    "inp_name.validation": [],
    "inp_name.errorMessage": [],
    "inp_name.isSpellCheck": [],
    "inp_name.tooltip": [],
    "inp_name.placeholderText": [],
    "inp_name.isVisible": [],
    "inp_name.isDisabled": [],
    "inp_name.animateLoading": [],
    "inp_name.autoFocus": [],
    "inp_name.resetOnSubmit": [],
    "inp_name.iconName": [],
    "inp_name.labelTextColor": [],
    "inp_name.labelTextSize": [],
    "inp_name.labelStyle": [],
    "inp_name.boxShadow": [],
    "inp_name.onFocus": [],
    "inp_name.onBlur": [],
    "inp_name.onSubmit": [],
    "Canvas1.borderRadius": [],
    "Canvas1.boxShadow": [],
    "Canvas1.isVisible": [],
    "Canvas1.animateLoading": [],
    "Canvas1.backgroundColor": [],
    "Canvas1.borderColor": [],
    "Canvas1.borderWidth": [],
    "con_main.borderRadius": [],
    "con_main.boxShadow": [],
    "con_main.isVisible": [],
    "con_main.animateLoading": [],
    "con_main.backgroundColor": [],
    "con_main.borderColor": [],
    "con_main.borderWidth": [],
    "sel_country.onOptionChange": [],
    "sel_country.onDropdownClose": [
      {
        "errorType": "LINT",
        "raw": "\n  async function $$closedFn () {\n    const $$result = ;\n    return await $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "Expected an identifier and instead saw ';'."
        },
        "errorSegment": "    const $$result = ;",
        "originalBinding": "",
        "variables": [
          ";",
          null,
          null,
          null
        ],
        "code": "E030",
        "line": 0,
        "ch": 1
      }
    ],
    "dat_bornAfter.onDateSelected": [],
    "icn_resetFilters.onClick": [],
    "list_users.onPageChange": [],
    "inp_name.onTextChanged": [],
    "JSObject1.body": [],
    "JSObject2.body": [],
    "Image1.currentItem": [],
    "Text1.currentItem": [],
    "Text2.currentItem": [],
    "Text2Copy1.currentItem": [],
    "Text2Copy2.currentItem": [],
    "Text2CopyCopy.currentItem": [],
    "Container1.data": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "Comma warnings can be turned off with 'laxcomma'."
        },
        "errorSegment": "        ,",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    }}",
        "variables": [
          null,
          null,
          null,
          null
        ],
        "code": "I001",
        "line": 4,
        "ch": 9
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Image1: { image: Image1.image,isVisible: Image1.isVisible }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 3,
        "ch": 69
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text1: { isVisible: Text1.isVisible,text: Text1.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 5,
        "ch": 64
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2: { isVisible: Text2.isVisible,text: Text2.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 7,
        "ch": 64
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 9,
        "ch": 79
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: Image1.image,isVisible: Image1.isVisible }\n        ,\n          Text1: { isVisible: Text1.isVisible,text: Text1.text }\n        ,\n          Text2: { isVisible: Text2.isVisible,text: Text2.text }\n        ,\n          Text2Copy1: { isVisible: Text2Copy1.isVisible,text: Text2Copy1.text }\n        ,\n          Text2Copy2: { isVisible: Text2Copy2.isVisible,text: Text2Copy2.text }\n        ,\n          Text2CopyCopy: { isVisible: Text2CopyCopy.isVisible,text: Text2CopyCopy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 11,
        "ch": 79
      }
    ],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.boxShadow": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.animateLoading": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.defaultImage": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.objectFit": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.maxZoomLevel": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.enableDownload": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.enableRotation": [],
    "list_users_Image1_v6bn2e64ob_zz9hd9qh0r.currentItem": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.animateLoading": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_offuw06atv.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_offuw06atv.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.name) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.name) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.name) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_offuw06atv.textAlign": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.isVisible": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.fontStyle": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.textColor": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text1_v6bn2e64ob_offuw06atv.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_offuw06atv.fontSize": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.currentItem": [],
    "list_users_Text1_v6bn2e64ob_offuw06atv.value": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.animateLoading": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.email) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.email) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.email) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.textAlign": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.fontStyle": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.textColor": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.fontSize": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.currentItem": [],
    "list_users_Text2_v6bn2e64ob_8s5l87108q.value": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.animateLoading": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.phone) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.phone) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.phone) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.textAlign": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.fontStyle": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.textColor": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.fontSize": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.currentItem": [],
    "list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.value": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.animateLoading": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.textAlign": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.fontStyle": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.textColor": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.fontSize": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.currentItem": [],
    "list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.value": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.animateLoading": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.country) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.country) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.country) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.textAlign": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.fontStyle": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.textColor": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.fontSize": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.currentItem": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.value": [],
    "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e.boxShadow": [],
    "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e.isVisible": [],
    "list_users_Canvas3_v6bn2e64ob_njwpvr2j4e.borderRadius": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.boxShadow": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.borderColor": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.animateLoading": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.isVisible": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.borderRadius": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.borderWidth": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.backgroundColor": [],
    "list_users_Container1_v6bn2e64ob_0cr8l1zod7.data": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "Comma warnings can be turned off with 'laxcomma'."
        },
        "errorSegment": "        ,",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    }}",
        "variables": [
          null,
          null,
          null,
          null
        ],
        "code": "I001",
        "line": 4,
        "ch": 9
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 3,
        "ch": 135
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 5,
        "ch": 130
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 7,
        "ch": 130
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 9,
        "ch": 145
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.image,isVisible: list_users_Image1_v6bn2e64ob_zz9hd9qh0r.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_offuw06atv.isVisible,text: list_users_Text1_v6bn2e64ob_offuw06atv.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_8s5l87108q.isVisible,text: list_users_Text2_v6bn2e64ob_8s5l87108q.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_mrhgus4xbp.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_57xnwr2uvf.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_htgd6bhdhy.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 11,
        "ch": 145
      }
    ],
    "list_users_Image1_v6bn2e64ob_zvex73g771.boxShadow": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.animateLoading": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.defaultImage": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.image": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.objectFit": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.isVisible": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.maxZoomLevel": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.enableDownload": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Image1_v6bn2e64ob_zvex73g771.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Image1_v6bn2e64ob_zvex73g771.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Image1_v6bn2e64ob_zvex73g771.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Image1_v6bn2e64ob_zvex73g771.enableRotation": [],
    "list_users_Image1_v6bn2e64ob_zvex73g771.currentItem": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.animateLoading": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.name) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.name) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.name) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.textAlign": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.fontStyle": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.textColor": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.fontSize": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.currentItem": [],
    "list_users_Text1_v6bn2e64ob_ofyh1054jr.value": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.animateLoading": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.email) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.email) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.email) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.textAlign": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.fontStyle": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.textColor": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.fontSize": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.currentItem": [],
    "list_users_Text2_v6bn2e64ob_e91gfyhvzq.value": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.animateLoading": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.phone) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.phone) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.phone) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.textAlign": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.fontStyle": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.textColor": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.fontSize": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.currentItem": [],
    "list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.value": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.animateLoading": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (moment(currentItem.dob).format(\"Do MMM YYYY\")) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.textAlign": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.fontStyle": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.textColor": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.fontSize": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.currentItem": [],
    "list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.value": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.animateLoading": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.fontFamily": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.fontFamily.appFont) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.truncateButtonColor": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.colors.primaryColor) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (((currentItem) => (currentItem.country) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (((currentItem) => (currentItem.country) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)",
        "originalBinding": "{{((currentItem) => (((currentItem) => (currentItem.country) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.textAlign": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.fontStyle": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.textColor": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.borderRadius": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)\n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "'currentItem' is defined but never used."
        },
        "errorSegment": "    const $$result = ((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)",
        "originalBinding": "{{((currentItem) => (appsmith.theme.borderRadius.appBorderRadius) )(list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem)}}",
        "variables": [
          "currentItem",
          null,
          null,
          null
        ],
        "code": "W098",
        "line": 0,
        "ch": 3
      }
    ],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.fontSize": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.currentItem": [],
    "list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.value": [],
    "list_users_Canvas3_v6bn2e64ob_pl07riz25p.boxShadow": [],
    "list_users_Canvas3_v6bn2e64ob_pl07riz25p.isVisible": [],
    "list_users_Canvas3_v6bn2e64ob_pl07riz25p.borderRadius": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.boxShadow": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.borderColor": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.animateLoading": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.isVisible": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.borderRadius": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.borderWidth": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.backgroundColor": [],
    "list_users_Container1_v6bn2e64ob_uvrw7ttooc.data": [
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "error",
        "errorMessage": {
          "name": "LintingError",
          "message": "Comma warnings can be turned off with 'laxcomma'."
        },
        "errorSegment": "        ,",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    }}",
        "variables": [
          null,
          null,
          null,
          null
        ],
        "code": "I001",
        "line": 4,
        "ch": 9
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 3,
        "ch": 135
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 5,
        "ch": 130
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 7,
        "ch": 130
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 9,
        "ch": 145
      },
      {
        "errorType": "LINT",
        "raw": "\n  function $$closedFn () {\n    const $$result = \n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    \n    return $$result\n  }\n  $$closedFn.call(THIS_CONTEXT)\n  ",
        "severity": "warning",
        "errorMessage": {
          "name": "LintingError",
          "message": "Misleading line break before ','; readers may interpret this as an expression boundary."
        },
        "errorSegment": "          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }",
        "originalBinding": "{{\n      {\n        \n          Image1: { image: list_users_Image1_v6bn2e64ob_zvex73g771.image,isVisible: list_users_Image1_v6bn2e64ob_zvex73g771.isVisible }\n        ,\n          Text1: { isVisible: list_users_Text1_v6bn2e64ob_ofyh1054jr.isVisible,text: list_users_Text1_v6bn2e64ob_ofyh1054jr.text }\n        ,\n          Text2: { isVisible: list_users_Text2_v6bn2e64ob_e91gfyhvzq.isVisible,text: list_users_Text2_v6bn2e64ob_e91gfyhvzq.text }\n        ,\n          Text2Copy1: { isVisible: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.isVisible,text: list_users_Text2Copy1_v6bn2e64ob_wcte9rt1ms.text }\n        ,\n          Text2Copy2: { isVisible: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.isVisible,text: list_users_Text2Copy2_v6bn2e64ob_xl1ki93nsd.text }\n        ,\n          Text2CopyCopy: { isVisible: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.isVisible,text: list_users_Text2CopyCopy_v6bn2e64ob_342hy39be1.text }\n        \n      }\n    }}",
        "variables": [
          ",",
          null,
          null,
          null
        ],
        "code": "W014",
        "line": 11,
        "ch": 145
      }
    ]
  }
}
