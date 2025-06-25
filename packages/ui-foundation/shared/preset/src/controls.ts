const data = {
  accordion: {
    type: "object",
    properties: {
      collapsible: { type: "boolean", defaultValue: false },
      multiple: { type: "boolean", defaultValue: false },
      quiet: { type: "boolean", defaultValue: false },
      orientation: { type: "select", options: ["horizontal", "vertical"], defaultValue: "vertical" },
    },
  },
  checkbox: {
    type: "object",
    properties: {
      name: { type: "string", defaultValue: "checkbox" },
      disabled: { type: "boolean", defaultValue: false },
      value: { type: "string", defaultValue: "on" },
      readOnly: { type: "boolean", defaultValue: false },
    },
  },
  collapsible: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
    },
  },
  switch: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
    },
  },
  combobox: {
    type: "object",
    properties: {
      inputBehavior: {
        type: "select",
        defaultValue: "autohighlight",
        options: ["autohighlight", "autocomplete", "none"],
      },
      selectionBehavior: {
        type: "select",
        defaultValue: "replace",
        options: ["replace", "clear", "preserve"],
      },
      disabled: { type: "boolean", defaultValue: false },
      multiple: { type: "boolean", defaultValue: false },
      loopFocus: { type: "boolean", defaultValue: true },
      openOnClick: { type: "boolean", defaultValue: false },
    },
  },
  editable: {
    type: "object",
    properties: {
      readOnly: { type: "boolean", defaultValue: false },
      disabled: { type: "boolean", defaultValue: false },
      autoResize: { type: "boolean", defaultValue: false },
      maxLength: { type: "number", defaultValue: 1000 },
      submitMode: {
        type: "select",
        options: ["enter", "blur", "both", "none"],
        defaultValue: "both",
      },
      activationMode: {
        type: "select",
        options: ["focus", "dblclick", "click"],
        defaultValue: "focus",
      },
    },
  },
  menu: {
    type: "object",
    properties: {
      closeOnSelect: { type: "boolean", defaultValue: true },
      loopFocus: { type: "boolean", defaultValue: false },
    },
  },
  hoverCard: {
    type: "object",
    properties: {
      openDelay: { type: "number", defaultValue: 700 },
      closeDelay: { type: "number", defaultValue: 300 },
    },
  },
  numberInput: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      clampValueOnBlur: { type: "boolean", defaultValue: true },
      allowMouseWheel: { type: "boolean", defaultValue: false },
      spinOnPress: { type: "boolean", defaultValue: true },
      step: { type: "number", defaultValue: 1 },
      min: { type: "number", defaultValue: 0 },
      max: { type: "number", defaultValue: 100 },
      locale: {
        type: "select",
        options: ["en-US", "en-GB", "fr-FR", "de-DE", "ja-JP", "mk-MK", "zh-CN"],
      },
      formatOptions: {
        type: "object",
        properties: {
          maximumFractionDigits: { type: "number" },
          minimumFractionDigits: { type: "number" },
          style: {
            type: "select",
            options: ["decimal", "currency", "percent"],
          },
          currency: {
            type: "select",
            defaultValue: "USD",
            options: ["USD", "EUR", "JPY", "GBP", "MXN", "CNY"],
          },
        },
      },
    },
  },
  pinInput: {
    type: "object",
    properties: {
      mask: { type: "boolean", defaultValue: false },
      otp: { type: "boolean", defaultValue: false },
      blurOnComplete: { type: "boolean", defaultValue: false },
      type: { type: "select", options: ["numeric", "alphanumeric", "alphabetic"], defaultValue: "numeric" },
    },
  },

  popover: {
    type: "object",
    properties: {
      modal: { type: "boolean", defaultValue: false },
      portalled: { type: "boolean", defaultValue: true },
      autoFocus: { type: "boolean", defaultValue: true },
      closeOnEsc: { type: "boolean", defaultValue: true },
    },
  },
  radio: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
    },
  },
  slider: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
      orientation: { type: "select", options: ["horizontal", "vertical"], defaultValue: "horizontal" },
      thumbAlignment: { type: "select", options: ["contain", "center"], defaultValue: "contain" },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
      origin: { type: "select", options: ["center", "start", "end"], defaultValue: "start" },
      min: { type: "number", defaultValue: 0 },
      max: { type: "number", defaultValue: 100 },
      step: { type: "number", defaultValue: 1 },
    },
  },
  tabs: {
    type: "object",
    properties: {
      activationMode: { type: "select", options: ["manual", "automatic"], defaultValue: "automatic" },
      deselectable: { type: "boolean", defaultValue: false },
      loopFocus: { type: "boolean", defaultValue: true },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
      orientation: { type: "select", options: ["vertical", "horizontal"], defaultValue: "horizontal" },
    },
  },
  pagination: {
    type: "object",
    properties: {
      pageSize: { type: "number", defaultValue: 10 },
      siblingCount: { type: "number", defaultValue: 1 },
    },
  },
  tagsInput: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
      addOnPaste: { type: "boolean", defaultValue: false },
      blurBehavior: { type: "select", options: ["add", "clear"], defaultValue: "---" },
      max: { type: "number", defaultValue: 6 },
      allowOverflow: { type: "boolean", defaultValue: false },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
    },
  },
  rating: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
      allowHalf: { type: "boolean", defaultValue: true },
      max: { type: "number", defaultValue: 5 },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
    },
  },
  splitter: {
    type: "object",
    properties: {
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
      orientation: { type: "select", options: ["vertical", "horizontal"], defaultValue: "horizontal" },
    },
  },
  toast: {
    type: "object",
    properties: {
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
    },
  },
  select: {
    type: "object",
    properties: {
      multiple: { type: "boolean", defaultValue: false },
      disabled: { type: "boolean", defaultValue: false },
      loopFocus: { type: "boolean", defaultValue: true },
      readOnly: { type: "boolean", defaultValue: false },
      deselectable: { type: "boolean", defaultValue: false },
      closeOnSelect: { type: "boolean", defaultValue: true },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
    },
  },
  listbox: {
    type: "object",
    properties: {
      selectionMode: {
        type: "select",
        options: ["none", "single", "multiple", "extended"],
        defaultValue: "single",
      },
      deselectable: { type: "boolean", defaultValue: true },
      disabled: { type: "boolean", defaultValue: false },
      loopFocus: { type: "boolean", defaultValue: false },
    },
  },
  datePicker: {
    type: "object",
    properties: {
      readOnly: { type: "boolean", defaultValue: false },
      disabled: { type: "boolean", defaultValue: false },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
      startOfWeek: { type: "number", defaultValue: 0 },
      fixedWeeks: { type: "boolean", defaultValue: false },
      locale: {
        type: "select",
        options: ["en-US", "en-GB", "fr-FR", "de-DE", "ja-JP", "mk-MK", "zh-CN"],
        defaultValue: "en-US",
      },
    },
  },
  transition: {
    type: "object",
    properties: {
      duration: { type: "number", defaultValue: 200 },
      easing: {
        type: "select",
        options: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
        defaultValue: "ease",
      },
    },
  },
  carousel: {
    type: "object",
    properties: {
      orientation: { type: "select", options: ["horizontal", "vertical"], defaultValue: "horizontal" },
      slidesPerPage: { type: "number", defaultValue: 2 },
      loop: { type: "boolean", defaultValue: false },
    },
  },
  colorPicker: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
    },
  },
  fileUpload: {
    type: "object",
    properties: {
      accept: { type: "string", defaultValue: "" },
      maxFiles: { type: "number", defaultValue: 1 },
      disabled: { type: "boolean", defaultValue: false },
      dropzone: { type: "boolean", defaultValue: true },
    },
  },
  toggleGroup: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      loopFocus: { type: "boolean", defaultValue: true },
      multiple: { type: "boolean", defaultValue: false },
      rovingFocus: { type: "boolean", defaultValue: true },
    },
  },
  progress: {
    type: "object",
    properties: {
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
    },
  },
  treeview: {
    type: "object",
    properties: {
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
      selectionMode: { type: "select", options: ["single", "multiple"], defaultValue: "single" },
      openOnClick: { type: "boolean", defaultValue: true },
    },
  },
  clipboard: {
    type: "object",
    properties: {
      timeout: { type: "number", defaultValue: 3000 },
    },
  },
  tour: {
    type: "object",
    properties: {
      keyboardNavigation: { type: "boolean", defaultValue: true },
      closeOnEsc: { type: "boolean", defaultValue: true },
      closeOnInteractOutside: { type: "boolean", defaultValue: true },
      preventInteraction: { type: "boolean", defaultValue: true },
    },
  },
  floatingPanel: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      resizable: { type: "boolean", defaultValue: true },
      draggable: { type: "boolean", defaultValue: true },
      lockAspectRatio: { type: "boolean", defaultValue: false },
      closeOnEscape: { type: "boolean", defaultValue: true },
      persistRect: { type: "boolean", defaultValue: false },
    },
  },
  signature: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
      drawing: {
        type: "object",
        properties: {
          size: { type: "number", defaultValue: 2 },
          simulatePressure: { type: "boolean", defaultValue: true },
        },
      },
    },
  },
  timePicker: {
    type: "object",
    properties: {
      locale: {
        type: "select",
        options: ["en-US", "en-GB", "fr-FR", "de-DE", "ja-JP", "mk-MK", "zh-CN"],
        defaultValue: "en-US",
      },
      withSeconds: { type: "boolean", defaultValue: false },
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
    },
  },
  qrCode: {
    type: "object",
    properties: {
      value: { type: "string", defaultValue: "https://chakra-ui.com/" },
      encoding: {
        type: "object",
        properties: {
          ecc: { type: "select", options: ["L", "M", "Q", "H"], defaultValue: "H" },
          boostEcc: { type: "boolean", defaultValue: false },
        },
      },
    },
  },
  steps: {
    type: "object",
    properties: {
      linear: { type: "boolean", defaultValue: false },
      orientation: { type: "select", options: ["horizontal", "vertical"], defaultValue: "horizontal" },
    },
  },
  angleSlider: {
    type: "object",
    properties: {
      disabled: { type: "boolean", defaultValue: false },
      readOnly: { type: "boolean", defaultValue: false },
      step: { type: "number", defaultValue: 1 },
    },
  },
  navigationMenu: {
    type: "object",
    properties: {
      dir: { type: "select", options: ["ltr", "rtl"], defaultValue: "ltr" },
      openDelay: { type: "number", defaultValue: 200 },
      closeDelay: { type: "number", defaultValue: 300 },
    },
  },
}


export const getSchemaControls = () => {
    return data
}

export const getSchemaControl = (name: string) => {
    const control = data[name] || {}
    return control
}
