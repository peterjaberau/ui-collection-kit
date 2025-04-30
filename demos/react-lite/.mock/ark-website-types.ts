export const data = [
    {
        "parts": {
            "ItemContent": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The value of the accordion item."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the accordion item is disabled."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "collapsible": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether an accordion item can be closed after it has been expanded."
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial value of the expanded accordion items.\nUse when you don't need to control the value of the accordion."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the accordion items are disabled"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  item(value: string): string\n  itemContent(value: string): string\n  itemTrigger(value: string): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the accordion. Useful for composition."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "multiple": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether multiple accordion items can be expanded at the same time."
                    },
                    "onFocusChange": {
                        "type": "(details: FocusChangeDetails) => void",
                        "isRequired": false,
                        "description": "The callback fired when the focused accordion item changes."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "The callback fired when the state of expanded/collapsed accordion items changes."
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"vertical\"",
                        "description": "The orientation of the accordion items."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled value of the expanded accordion items."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseAccordionReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "accordion",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "MarkerGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Marker": {
                "props": {
                    "value": {
                        "type": "number",
                        "isRequired": true,
                        "description": "The value of the marker"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "0",
                        "description": "The initial value of the slider.\nUse when you don't need to control the value of the slider."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the slider is disabled."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; thumb: string; hiddenInput: string; control: string; valueText: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the machine.\nUseful for composition."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the slider is invalid."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the slider. Useful for form submission."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "The callback function for when the value changes."
                    },
                    "onValueChangeEnd": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "The callback function for when the value changes ends."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the slider is read-only."
                    },
                    "step": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "The step value for the slider."
                    },
                    "value": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The value of the slider."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseAngleSliderReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Thumb": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "angle-slider",
        "framework": "react"
    },
    {
        "parts": {
            "Fallback": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Image": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLImageElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; image: string; fallback: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the avatar. Useful for composition."
                    },
                    "onStatusChange": {
                        "type": "(details: StatusChangeDetails) => void",
                        "isRequired": false,
                        "description": "Functional called when the image loading status changes."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseAvatarReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "avatar",
        "framework": "react"
    },
    {
        "parts": {
            "AutoplayTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "IndicatorGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Indicator": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true,
                        "description": "The index of the indicator."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether the indicator is read only."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ItemGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true,
                        "description": "The index of the item."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "snapAlign": {
                        "type": "'center' | 'end' | 'start'",
                        "isRequired": false,
                        "defaultValue": "\"start\"",
                        "description": "The snap alignment of the item."
                    }
                },
                "element": "HTMLDivElement"
            },
            "NextTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "PrevTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Root": {
                "props": {
                    "slideCount": {
                        "type": "number",
                        "isRequired": true,
                        "description": "The total number of slides.\nUseful for SSR to render the initial ating the snap points."
                    },
                    "allowMouseDrag": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow scrolling via dragging with mouse"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoplay": {
                        "type": "boolean | { delay: number }",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to scroll automatically. The default delay is 4000ms."
                    },
                    "defaultPage": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "0",
                        "description": "The initial page to scroll to when rendered.\nUse when you don't need to control the page of the carousel."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  item(index: number): string\n  itemGroup: string\n  nextTrigger: string\n  prevTrigger: string\n  indicatorGroup: string\n  indicator(index: number): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the carousel. Useful for composition."
                    },
                    "inViewThreshold": {
                        "type": "number | number[]",
                        "isRequired": false,
                        "defaultValue": "0.6",
                        "description": "The threshold for determining if an item is in view."
                    },
                    "loop": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether the carousel should loop around."
                    },
                    "onAutoplayStatusChange": {
                        "type": "(details: AutoplayStatusDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the autoplay status changes."
                    },
                    "onDragStatusChange": {
                        "type": "(details: DragStatusDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the drag status changes."
                    },
                    "onPageChange": {
                        "type": "(details: PageChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the page changes."
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the element."
                    },
                    "padding": {
                        "type": "string",
                        "isRequired": false,
                        "description": "Defines the extra space added around the scrollable area,\nenabling nearby items to remain partially in view."
                    },
                    "page": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The controlled page of the carousel."
                    },
                    "slidesPerMove": {
                        "type": "number | 'auto'",
                        "isRequired": false,
                        "defaultValue": "\"auto\"",
                        "description": "The number of slides to scroll at a time.\n\nWhen set to `auto`, the number of slides to scroll is determined by the\n`slidesPerPage` property."
                    },
                    "slidesPerPage": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "The number of slides to show at a time."
                    },
                    "snapType": {
                        "type": "'proximity' | 'mandatory'",
                        "isRequired": false,
                        "defaultValue": "\"mandatory\"",
                        "description": "The snap type of the item."
                    },
                    "spacing": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"0px\"",
                        "description": "The amount of space between items."
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "The localized messages to use."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseCarouselReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "carousel",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Group": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial value of `value` when uncontrolled"
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the checkbox group is disabled"
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the checkbox group is invalid"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the input fields in the checkbox group\n(Useful for form submission)."
                    },
                    "onValueChange": {
                        "type": "(value: string[]) => void",
                        "isRequired": false,
                        "description": "The callback to call when the value changes"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the checkbox group is read-only"
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled value of the checkbox group"
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "indeterminate": {
                        "type": "boolean",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "checked": {
                        "type": "CheckedState",
                        "isRequired": false,
                        "description": "The controlled checked state of the checkbox"
                    },
                    "defaultChecked": {
                        "type": "CheckedState",
                        "isRequired": false,
                        "description": "The initial checked state of the checkbox when rendered.\nUse when you don't need to control the checked state of the checkbox."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the checkbox is disabled"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The id of the form that the checkbox belongs to."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; hiddenInput: string; control: string; label: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the checkbox. Useful for composition."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the checkbox is invalid"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the input field in a checkbox.\nUseful for form submission."
                    },
                    "onCheckedChange": {
                        "type": "(details: CheckedChangeDetails) => void",
                        "isRequired": false,
                        "description": "The callback invoked when the checked state changes."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the checkbox is read-only"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the checkbox is required"
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"on\"",
                        "description": "The value of checkbox input. Useful for form submission."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseCheckboxReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            }
        },
        "component": "checkbox",
        "framework": "react"
    },
    {
        "parts": {
            "ClientOnly": {
                "props": {
                    "fallback": {
                        "type": "string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>",
                        "isRequired": false
                    }
                }
            }
        },
        "component": "client-only",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "copied": {
                        "type": "string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value to be copied to the clipboard when rendered.\nUse when you don't need to control the value of the clipboard."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; input: string; label: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the clipboard. Useful for composition."
                    },
                    "onStatusChange": {
                        "type": "(details: CopyStatusDetails) => void",
                        "isRequired": false,
                        "description": "The function to be called when the value is copied to the clipboard"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "The function to be called when the value changes"
                    },
                    "timeout": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "3000",
                        "description": "The timeout for the copy operation"
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled value of the clipboard"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseClipboardReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "clipboard",
        "framework": "react"
    },
    {
        "parts": {
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the collapsible when rendered.\nUse when you don't need to control the open state of the collapsible."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the collapsible is disabled."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; content: string; trigger: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the collapsible. Useful for composition."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "The callback invoked when the exit animation completes."
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "The callback invoked when the open state changes."
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the collapsible."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseCollapsibleReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "collapsible",
        "framework": "react"
    },
    {
        "parts": {
            "AreaBackground": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Area": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "xChannel": {
                        "type": "ColorChannel",
                        "isRequired": false
                    },
                    "yChannel": {
                        "type": "ColorChannel",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "AreaThumb": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ChannelInput": {
                "props": {
                    "channel": {
                        "type": "ExtendedColorChannel",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "orientation": {
                        "type": "Orientation",
                        "isRequired": false
                    }
                },
                "element": "HTMLInputElement"
            },
            "ChannelSliderLabel": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "ChannelSlider": {
                "props": {
                    "channel": {
                        "type": "ColorChannel",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "orientation": {
                        "type": "Orientation",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "ChannelSliderThumb": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ChannelSliderTrack": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ChannelSliderValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "EyeDropperTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "FormatSelect": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSelectElement"
            },
            "FormatTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to close the color picker when a swatch is selected"
                    },
                    "defaultFormat": {
                        "type": "ColorFormat",
                        "isRequired": false,
                        "defaultValue": "\"rgba\"",
                        "description": "The initial color format when rendered.\nUse when you don't need to control the color format of the color picker."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the color picker when rendered.\nUse when you don't need to control the open state of the color picker."
                    },
                    "defaultValue": {
                        "type": "Color",
                        "isRequired": false,
                        "defaultValue": "#000000",
                        "description": "The initial color value when rendered.\nUse when you don't need to control the color value of the color picker."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the color picker is disabled"
                    },
                    "format": {
                        "type": "ColorFormat",
                        "isRequired": false,
                        "description": "The controlled color format to use"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; control: string; trigger: string; label: string; input: string; hiddenInput: string; content: string; area: string; areaGradient: string; positioner: string; formatSelect: string; areaThumb: string; channelInput(id: string): string; channelSliderTrack(id: ColorChannel): string; channelSliderT...",
                        "isRequired": false,
                        "description": "The ids of the elements in the color picker. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "initialFocusEl": {
                        "type": "() => HTMLElement | null",
                        "isRequired": false,
                        "description": "The initial focus element when the color picker is opened."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the color picker is invalid"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name for the form input"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onFormatChange": {
                        "type": "(details: FormatChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the color format changes"
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Handler that is called when the user opens or closes the color picker."
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Handler that is called when the value changes, as the user drags."
                    },
                    "onValueChangeEnd": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Handler that is called when the user stops dragging."
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the color picker"
                    },
                    "openAutoFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to auto focus the color picker when it is opened"
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The positioning options for the color picker"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the color picker is read-only"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the color picker is required"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    },
                    "value": {
                        "type": "Color",
                        "isRequired": false,
                        "description": "The controlled color value of the color picker"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseColorPickerReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                },
                "element": "HTMLDivElement"
            },
            "SwatchGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "SwatchIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Swatch": {
                "props": {
                    "value": {
                        "type": "string | Color",
                        "isRequired": true,
                        "description": "The color value"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "respectAlpha": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to include the alpha channel in the color"
                    }
                },
                "element": "HTMLDivElement"
            },
            "SwatchTrigger": {
                "props": {
                    "value": {
                        "type": "string | Color",
                        "isRequired": true,
                        "description": "The color value"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the swatch trigger is disabled"
                    }
                },
                "element": "HTMLButtonElement"
            },
            "TransparencyGrid": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "size": {
                        "type": "string",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ValueSwatch": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "respectAlpha": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to include the alpha channel in the color"
                    }
                },
                "element": "HTMLDivElement"
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "format": {
                        "type": "ColorStringFormat",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "View": {
                "props": {
                    "format": {
                        "type": "ColorFormat",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "color-picker",
        "framework": "react"
    },
    {
        "parts": {
            "ClearTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "ItemGroupLabel": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "item": {
                        "type": "any",
                        "isRequired": false,
                        "description": "The item to render"
                    },
                    "persistFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether hovering outside should clear the highlighted state"
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "List": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "collection": {
                        "type": "ListCollection<T>",
                        "isRequired": true,
                        "description": "The collection of items"
                    },
                    "allowCustomValue": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to allow typing custom values in the input"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to autofocus the input on mount"
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to close the combobox when an item is selected."
                    },
                    "composite": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the combobox is a composed with other composite widgets like tabs"
                    },
                    "defaultHighlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial highlighted value of the combobox when rendered.\nUse when you don't need to control the highlighted value of the combobox."
                    },
                    "defaultInputValue": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"\"",
                        "description": "The initial value of the combobox's input when rendered.\nUse when you don't need to control the value of the combobox's input."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the combobox when rendered.\nUse when you don't need to control the open state of the combobox."
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "defaultValue": "[]",
                        "description": "The initial value of the combobox's selected items when rendered.\nUse when you don't need to control the value of the combobox's selected items."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the combobox is disabled"
                    },
                    "disableLayer": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to disable registering this a dismissable layer"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the combobox."
                    },
                    "highlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled highlighted value of the combobox"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  label: string\n  control: string\n  input: string\n  content: string\n  trigger: string\n  clearTrigger: string\n  item(id: string, index?: number | undefined): string\n  positioner: string\n  itemGroup(id: string | number): string\n  itemGroupLabel(id: string | number): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the combobox. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "inputBehavior": {
                        "type": "'none' | 'autohighlight' | 'autocomplete'",
                        "isRequired": false,
                        "defaultValue": "\"none\"",
                        "description": "Defines the auto-completion behavior of the combobox.\n\n- `autohighlight`: The first focused item is highlighted as the user types\n- `autocomplete`: Navigating the listbox with the arrow keys selects the item and the input is updated"
                    },
                    "inputValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled value of the combobox's input"
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the combobox is invalid"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "loopFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to loop the keyboard navigation through the items"
                    },
                    "multiple": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to allow multiple selection.\n\n**Good to know:** When `multiple` is `true`, the `selectionBehavior` is automatically set to `clear`.\nIt is recommended to render the selected items in a separate container."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The `name` attribute of the combobox's input. Useful for form submission"
                    },
                    "navigate": {
                        "type": "(details: NavigateDetails) => void",
                        "isRequired": false,
                        "description": "Function to navigate to the selected item"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onHighlightChange": {
                        "type": "(details: HighlightChangeDetails<T>) => void",
                        "isRequired": false,
                        "description": "Function called when an item is highlighted using the pointer\nor keyboard navigation."
                    },
                    "onInputValueChange": {
                        "type": "(details: InputValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the input's value changes"
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the popup is opened"
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "onSelect": {
                        "type": "(details: SelectionDetails) => void",
                        "isRequired": false,
                        "description": "Function called when an item is selected"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails<T>) => void",
                        "isRequired": false,
                        "description": "Function called when a new item is selected"
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the combobox"
                    },
                    "openOnChange": {
                        "type": "boolean | ((details: InputValueChangeDetails) => boolean)",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to show the combobox when the input value changes"
                    },
                    "openOnClick": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to open the combobox popup on initial click on the input"
                    },
                    "openOnKeyPress": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to open the combobox on arrow key press"
                    },
                    "placeholder": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The placeholder text of the combobox's input"
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "defaultValue": "{ placement: \"bottom-start\" }",
                        "description": "The positioning options to dynamically position the menu"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the combobox is readonly. This puts the combobox in a \"non-editable\" mode\nbut the user can still interact with it"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the combobox is required"
                    },
                    "scrollToIndexFn": {
                        "type": "(details: ScrollToIndexDetails) => void",
                        "isRequired": false,
                        "description": "Function to scroll to a specific index"
                    },
                    "selectionBehavior": {
                        "type": "'replace' | 'clear' | 'preserve'",
                        "isRequired": false,
                        "defaultValue": "\"replace\"",
                        "description": "The behavior of the combobox input when an item is selected\n\n- `replace`: The selected item string is set as the input value\n- `clear`: The input value is cleared\n- `preserve`: The input value is preserved"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled value of the combobox's selected items"
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseComboboxReturn<T>",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "focusable": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the trigger is focusable"
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "combobox",
        "framework": "react"
    },
    {
        "parts": {
            "ClearTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "fixOnBlur": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to fix the input value on blur."
                    },
                    "index": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The index of the input to focus."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "MonthSelect": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSelectElement"
            },
            "NextTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "PresetTrigger": {
                "props": {
                    "value": {
                        "type": "PresetTriggerValue",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "PrevTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "RangeText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the calendar should close after the date selection is complete.\nThis is ignored when the selection mode is `multiple`."
                    },
                    "defaultFocusedValue": {
                        "type": "DateValue",
                        "isRequired": false,
                        "description": "The initial focused date when rendered.\nUse when you don't need to control the focused date of the date picker."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the date picker when rendered.\nUse when you don't need to control the open state of the date picker."
                    },
                    "defaultValue": {
                        "type": "DateValue[]",
                        "isRequired": false,
                        "description": "The initial selected date(s) when rendered.\nUse when you don't need to control the selected date(s) of the date picker."
                    },
                    "defaultView": {
                        "type": "DateView",
                        "isRequired": false,
                        "defaultValue": "\"day\"",
                        "description": "The default view of the calendar"
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the calendar is disabled."
                    },
                    "fixedWeeks": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the calendar should have a fixed number of weeks.\nThis renders the calendar with 6 weeks instead of 5 or 6."
                    },
                    "focusedValue": {
                        "type": "DateValue",
                        "isRequired": false,
                        "description": "The controlled focused date."
                    },
                    "format": {
                        "type": "(date: DateValue, details: LocaleDetails) => string",
                        "isRequired": false,
                        "description": "The format of the date to display in the input."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; label(index: number): string; table(id: string): string; tableHeader(id: string): string; tableBody(id: string): string; tableRow(id: string): string; content: string; ... 10 more ...; positioner: string; }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the date picker. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "isDateUnavailable": {
                        "type": "(date: DateValue, locale: string) => boolean",
                        "isRequired": false,
                        "description": "Returns whether a date of the calendar is available."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "locale": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"en-US\"",
                        "description": "The locale (BCP 47 language tag) to use when formatting the date."
                    },
                    "max": {
                        "type": "DateValue",
                        "isRequired": false,
                        "description": "The maximum date that can be selected."
                    },
                    "maxView": {
                        "type": "DateView",
                        "isRequired": false,
                        "defaultValue": "\"year\"",
                        "description": "The maximum view of the calendar"
                    },
                    "min": {
                        "type": "DateValue",
                        "isRequired": false,
                        "description": "The minimum date that can be selected."
                    },
                    "minView": {
                        "type": "DateView",
                        "isRequired": false,
                        "defaultValue": "\"day\"",
                        "description": "The minimum view of the calendar"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The `name` attribute of the input element."
                    },
                    "numOfMonths": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The number of months to display."
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusChange": {
                        "type": "(details: FocusChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the focused date changes."
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the calendar opens or closes."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the value changes."
                    },
                    "onViewChange": {
                        "type": "(details: ViewChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the view changes."
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the date picker"
                    },
                    "parse": {
                        "type": "(value: string, details: LocaleDetails) => DateValue | undefined",
                        "isRequired": false,
                        "description": "Function to parse the date from the input back to a DateValue."
                    },
                    "placeholder": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The placeholder text to display in the input."
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The user provided options used to position the date picker content"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the calendar is read-only."
                    },
                    "selectionMode": {
                        "type": "SelectionMode",
                        "isRequired": false,
                        "defaultValue": "\"single\"",
                        "description": "The selection mode of the calendar.\n- `single` - only one date can be selected\n- `multiple` - multiple dates can be selected\n- `range` - a range of dates can be selected"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "startOfWeek": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The first day of the week.\n `0` - Sunday\n `1` - Monday\n `2` - Tuesday\n `3` - Wednesday\n `4` - Thursday\n `5` - Friday\n `6` - Saturday"
                    },
                    "timeZone": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"UTC\"",
                        "description": "The time zone to use"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "The localized messages to use."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    },
                    "value": {
                        "type": "DateValue[]",
                        "isRequired": false,
                        "description": "The controlled selected date(s)."
                    },
                    "view": {
                        "type": "DateView",
                        "isRequired": false,
                        "description": "The view of the calendar"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseDatePickerReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                },
                "element": "HTMLDivElement"
            },
            "TableBody": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLTableSectionElement"
            },
            "TableCell": {
                "props": {
                    "value": {
                        "type": "number | DateValue",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "columns": {
                        "type": "number",
                        "isRequired": false
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false
                    },
                    "visibleRange": {
                        "type": "VisibleRange",
                        "isRequired": false
                    }
                },
                "element": "HTMLTableCellElement"
            },
            "TableCellTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "TableHead": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLTableSectionElement"
            },
            "TableHeader": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLTableCellElement"
            },
            "Table": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "columns": {
                        "type": "number",
                        "isRequired": false
                    }
                },
                "element": "HTMLTableElement"
            },
            "TableRow": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLTableRowElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ViewControl": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "View": {
                "props": {
                    "view": {
                        "type": "DateView",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ViewTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "YearSelect": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSelectElement"
            }
        },
        "component": "date-picker",
        "framework": "react"
    },
    {
        "parts": {
            "Backdrop": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "CloseTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Description": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "aria-label": {
                        "type": "string",
                        "isRequired": false,
                        "description": "Human readable label for the dialog, in event the dialog title is not rendered"
                    },
                    "closeOnEscape": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to close the dialog when the escape key is pressed"
                    },
                    "closeOnInteractOutside": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to close the dialog when the outside is clicked"
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "The initial open state of the dialog when rendered.\nUse when you don't need to control the open state of the dialog."
                    },
                    "finalFocusEl": {
                        "type": "() => MaybeElement",
                        "isRequired": false,
                        "description": "Element to receive focus when the dialog is closed"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  trigger: string\n  positioner: string\n  backdrop: string\n  content: string\n  closeTrigger: string\n  title: string\n  description: string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the dialog. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "initialFocusEl": {
                        "type": "() => MaybeElement",
                        "isRequired": false,
                        "description": "Element to receive focus when the dialog is opened"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "modal": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to prevent pointer interaction outside the element and hide all content below it"
                    },
                    "onEscapeKeyDown": {
                        "type": "(event: KeyboardEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the escape key is pressed"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to call when the dialog's open state changes"
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the dialog"
                    },
                    "persistentElements": {
                        "type": "(() => Element | null)[]",
                        "isRequired": false,
                        "description": "Returns the persistent elements that:\n- should not have pointer-events disabled\n- should not trigger the dismiss event"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "preventScroll": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to prevent scrolling behind the dialog when it's opened"
                    },
                    "restoreFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to restore focus to the element that had focus before the dialog was opened"
                    },
                    "role": {
                        "type": "'dialog' | 'alertdialog'",
                        "isRequired": false,
                        "defaultValue": "\"dialog\"",
                        "description": "The dialog's role"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "trapFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to trap focus inside the dialog when it's opened"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseDialogReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Title": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLHeadingElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "dialog",
        "framework": "react"
    },
    {
        "parts": {},
        "component": "download-trigger",
        "framework": "react"
    },
    {
        "parts": {
            "Area": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "CancelTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "EditTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Preview": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Root": {
                "props": {
                    "activationMode": {
                        "type": "ActivationMode",
                        "isRequired": false,
                        "defaultValue": "\"focus\"",
                        "description": "The activation mode for the preview element.\n\n- \"focus\" - Enter edit mode when the preview is focused\n- \"dblclick\" - Enter edit mode when the preview is double-clicked\n- \"click\" - Enter edit mode when the preview is clicked"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoResize": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the editable should auto-resize to fit the content."
                    },
                    "defaultEdit": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the editable is in edit mode by default."
                    },
                    "defaultValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value of the editable when rendered.\nUse when you don't need to control the value of the editable."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the editable is disabled."
                    },
                    "edit": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the editable is in edit mode."
                    },
                    "finalFocusEl": {
                        "type": "() => HTMLElement | null",
                        "isRequired": false,
                        "description": "The element to receive focus when the editable is closed."
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying input."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  area: string\n  label: string\n  preview: string\n  input: string\n  control: string\n  submitTrigger: string\n  cancelTrigger: string\n  editTrigger: string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the editable. Useful for composition."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the input's value is invalid."
                    },
                    "maxLength": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The maximum number of characters allowed in the editable"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name attribute of the editable component. Used for form submission."
                    },
                    "onEditChange": {
                        "type": "(details: EditChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to call when the edit mode changes."
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to call when the value changes."
                    },
                    "onValueCommit": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to call when the value is committed."
                    },
                    "onValueRevert": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to call when the value is reverted."
                    },
                    "placeholder": {
                        "type": "string | { edit: string; preview: string }",
                        "isRequired": false,
                        "description": "The placeholder text for the editable."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the editable is read-only."
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the editable is required."
                    },
                    "selectOnFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to select the text in the input when it is focused."
                    },
                    "submitMode": {
                        "type": "SubmitMode",
                        "isRequired": false,
                        "defaultValue": "\"both\"",
                        "description": "The action that triggers submit in the edit mode:\n\n- \"enter\" - Trigger submit when the enter key is pressed\n- \"blur\" - Trigger submit when the editable is blurred\n- \"none\" - No action will trigger submit. You need to use the submit button\n- \"both\" - Pressing `Enter` and blurring the input will trigger submit"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "The translations for the editable."
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled value of the editable."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseEditableReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "SubmitTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "editable",
        "framework": "react"
    },
    {
        "parts": {
            "EnvironmentProvider": {
                "props": {
                    "value": {
                        "type": "RootNode | (() => RootNode)",
                        "isRequired": false
                    }
                }
            }
        },
        "component": "environment",
        "framework": "react"
    },
    {
        "parts": {
            "ErrorText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "HelperText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "RequiredIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "fallback": {
                        "type": "string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>",
                        "isRequired": false
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Indicates whether the field is disabled."
                    },
                    "ids": {
                        "type": "ElementIds",
                        "isRequired": false,
                        "description": "The ids of the field parts."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Indicates whether the field is invalid."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Indicates whether the field is read-only."
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Indicates whether the field is required."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "{ ariaDescribedby: string | undefined; ids: { root: string; control: string; label: string; errorText: string; helperText: string; }; refs: { rootRef: RefObject<HTMLDivElement | null>; }; ... 11 more ...; getRequiredIndicatorProps: () => Omit<...>; }",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Select": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSelectElement"
            },
            "Textarea": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoresize": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether the textarea should autoresize"
                    }
                },
                "element": "HTMLTextAreaElement"
            }
        },
        "component": "field",
        "framework": "react"
    },
    {
        "parts": {
            "ErrorText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "HelperText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Legend": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLegendElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Indicates whether the fieldset is invalid."
                    }
                },
                "element": "HTMLFieldSetElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "{ refs: { rootRef: RefObject<HTMLFieldSetElement | null>; }; disabled: boolean; invalid: boolean; getRootProps: () => Omit<DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, \"ref\">; getLegendProps: () => Omit<...>; getHelperTextProps: () => Omit<...>; getErrorTextProps: () => Omit<....",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLFieldSetElement"
            }
        },
        "component": "fieldset",
        "framework": "react"
    },
    {
        "parts": {
            "ClearTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Dropzone": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disableClick": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to disable the click event on the dropzone"
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "ItemDeleteTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ItemGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLUListElement"
            },
            "ItemName": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemPreviewImage": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLImageElement"
            },
            "ItemPreview": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "type": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "'.*'",
                        "description": "The file type to match against. Matches all file types by default."
                    }
                },
                "element": "HTMLImageElement"
            },
            "Item": {
                "props": {
                    "file": {
                        "type": "File",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLIElement"
            },
            "ItemSizeText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "accept": {
                        "type": "Record<string, string[]> | FileMimeType | FileMimeType[]",
                        "isRequired": false,
                        "description": "The accept file types"
                    },
                    "allowDrop": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to allow drag and drop in the dropzone element"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "capture": {
                        "type": "'user' | 'environment'",
                        "isRequired": false,
                        "description": "The default camera to use when capturing media"
                    },
                    "directory": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to accept directories, only works in webkit browsers"
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the file input is disabled"
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  dropzone: string\n  hiddenInput: string\n  trigger: string\n  label: string\n  item(id: string): string\n  itemName(id: string): string\n  itemSizeText(id: string): string\n  itemPreview(id: string): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements. Useful for composition."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the file input is invalid"
                    },
                    "locale": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"en-US\"",
                        "description": "The current locale. Based on the BCP 47 definition."
                    },
                    "maxFiles": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "The maximum number of files"
                    },
                    "maxFileSize": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "Infinity",
                        "description": "The maximum file size in bytes"
                    },
                    "minFileSize": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "0",
                        "description": "The minimum file size in bytes"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the underlying file input"
                    },
                    "onFileAccept": {
                        "type": "(details: FileAcceptDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the file is accepted"
                    },
                    "onFileChange": {
                        "type": "(details: FileChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the value changes, whether accepted or rejected"
                    },
                    "onFileReject": {
                        "type": "(details: FileRejectDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the file is rejected"
                    },
                    "preventDocumentDrop": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to prevent the drop event on the document"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the file input is required"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "The localized messages to use."
                    },
                    "validate": {
                        "type": "(file: File, details: FileValidateDetails) => FileError[] | null",
                        "isRequired": false,
                        "description": "Function to validate a file"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseFileUploadReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "file-upload",
        "framework": "react"
    },
    {
        "parts": {
            "Body": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "CloseTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "DragTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Header": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ResizeTrigger": {
                "props": {
                    "axis": {
                        "type": "ResizeTriggerAxis",
                        "isRequired": true,
                        "description": "The axis of the resize handle"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "allowOverflow": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the panel should be strictly contained within the boundary when dragging"
                    },
                    "closeOnEscape": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the panel should close when the escape key is pressed"
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "The initial open state of the panel when rendered.\nUse when you don't need to control the open state of the panel."
                    },
                    "defaultPosition": {
                        "type": "Point",
                        "isRequired": false,
                        "description": "The initial position of the panel when rendered.\nUse when you don't need to control the position of the panel."
                    },
                    "defaultSize": {
                        "type": "Size",
                        "isRequired": false,
                        "description": "The default size of the panel"
                    },
                    "dir": {
                        "type": "'ltr' | 'rtl'",
                        "isRequired": false,
                        "defaultValue": "\"ltr\"",
                        "description": "The document's text/writing direction."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the panel is disabled"
                    },
                    "draggable": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the panel is draggable"
                    },
                    "getAnchorPosition": {
                        "type": "(details: AnchorPositionDetails) => Point",
                        "isRequired": false,
                        "description": "Function that returns the initial position of the panel when it is opened.\nIf provided, will be used instead of the default position."
                    },
                    "getBoundaryEl": {
                        "type": "() => HTMLElement | null",
                        "isRequired": false,
                        "description": "The boundary of the panel. Useful for recalculating the boundary rect when\nthe it is resized."
                    },
                    "gridSize": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "The snap grid for the panel"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ trigger: string; positioner: string; content: string; title: string; header: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the floating panel. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "lockAspectRatio": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the panel is locked to its aspect ratio"
                    },
                    "maxSize": {
                        "type": "Size",
                        "isRequired": false,
                        "description": "The maximum size of the panel"
                    },
                    "minSize": {
                        "type": "Size",
                        "isRequired": false,
                        "description": "The minimum size of the panel"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the panel is opened or closed"
                    },
                    "onPositionChange": {
                        "type": "(details: PositionChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the position of the panel changes via dragging"
                    },
                    "onPositionChangeEnd": {
                        "type": "(details: PositionChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the position of the panel changes via dragging ends"
                    },
                    "onSizeChange": {
                        "type": "(details: SizeChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the size of the panel changes via resizing"
                    },
                    "onSizeChangeEnd": {
                        "type": "(details: SizeChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the size of the panel changes via resizing ends"
                    },
                    "onStageChange": {
                        "type": "(details: StageChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the stage of the panel changes"
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the panel"
                    },
                    "persistRect": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the panel size and position should be preserved when it is closed"
                    },
                    "position": {
                        "type": "Point",
                        "isRequired": false,
                        "description": "The controlled position of the panel"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "resizable": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the panel is resizable"
                    },
                    "size": {
                        "type": "Size",
                        "isRequired": false,
                        "description": "The size of the panel"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "strategy": {
                        "type": "'absolute' | 'fixed'",
                        "isRequired": false,
                        "defaultValue": "\"fixed\"",
                        "description": "The strategy to use for positioning"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "The translations for the floating panel."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseFloatingPanelReturn",
                        "isRequired": true
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "StageTrigger": {
                "props": {
                    "stage": {
                        "type": "Stage",
                        "isRequired": true,
                        "description": "The stage of the panel"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Title": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "floating-panel",
        "framework": "react"
    },
    {
        "parts": {},
        "component": "focus-trap",
        "framework": "react"
    },
    {
        "parts": {
            "Byte": {
                "props": {
                    "value": {
                        "type": "number",
                        "isRequired": true,
                        "description": "The byte size to format"
                    },
                    "unit": {
                        "type": "'bit' | 'byte'",
                        "isRequired": false,
                        "description": "The unit granularity to display"
                    },
                    "unitDisplay": {
                        "type": "'long' | 'short' | 'narrow'",
                        "isRequired": false,
                        "description": "The unit display"
                    }
                }
            },
            "Number": {
                "props": {
                    "value": {
                        "type": "number",
                        "isRequired": true,
                        "description": "The number to format"
                    }
                }
            }
        },
        "component": "format",
        "framework": "react"
    },
    {
        "parts": {},
        "component": "frame",
        "framework": "react"
    },
    {
        "parts": {
            "Highlight": {
                "props": {
                    "query": {
                        "type": "string | string[]",
                        "isRequired": true,
                        "description": "The query to highlight in the text"
                    },
                    "text": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The text to highlight"
                    },
                    "ignoreCase": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to ignore case while matching"
                    },
                    "matchAll": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to match multiple instances of the query"
                    }
                }
            }
        },
        "component": "highlight",
        "framework": "react"
    },
    {
        "parts": {
            "Arrow": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ArrowTip": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "closeDelay": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "300",
                        "description": "The duration from when the mouse leaves the trigger or content until the hover card closes."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the hover card when rendered.\nUse when you don't need to control the open state of the hover card."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ trigger: string; content: string; positioner: string; arrow: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the popover. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the hover card opens or closes."
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the hover card"
                    },
                    "openDelay": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "700",
                        "description": "The duration from when the mouse enters the trigger until the hover card opens."
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The user provided options used to position the popover content"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseHoverCardReturn",
                        "isRequired": true
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "hover-card",
        "framework": "react"
    },
    {
        "parts": {
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoHighlight": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to automatically highlight the item when typing"
                    }
                },
                "element": "HTMLInputElement"
            },
            "ItemGroupLabel": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "highlightOnHover": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to highlight the item on hover"
                    },
                    "item": {
                        "type": "any",
                        "isRequired": false,
                        "description": "The item to render"
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "collection": {
                        "type": "ListCollection<T>",
                        "isRequired": true,
                        "description": "The collection of items"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultHighlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value of the highlighted item when opened.\nUse when you don't need to control the highlighted value of the listbox."
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "defaultValue": "[]",
                        "description": "The initial default value of the listbox when rendered.\nUse when you don't need to control the value of the listbox."
                    },
                    "deselectable": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to disallow empty selection"
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the listbox is disabled"
                    },
                    "disallowSelectAll": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to disallow selecting all items when `meta+a` is pressed"
                    },
                    "highlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled key of the highlighted item"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  content: string\n  label: string\n  item(id: string | number): string\n  itemGroup(id: string | number): string\n  itemGroupLabel(id: string | number): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the listbox. Useful for composition."
                    },
                    "loopFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to loop the keyboard navigation through the options"
                    },
                    "onHighlightChange": {
                        "type": "(details: HighlightChangeDetails<T>) => void",
                        "isRequired": false,
                        "description": "The callback fired when the highlighted item changes."
                    },
                    "onSelect": {
                        "type": "(details: SelectionDetails) => void",
                        "isRequired": false,
                        "description": "Function called when an item is selected"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails<T>) => void",
                        "isRequired": false,
                        "description": "The callback fired when the selected item changes."
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the element."
                    },
                    "scrollToIndexFn": {
                        "type": "(details: ScrollToIndexDetails) => void",
                        "isRequired": false,
                        "description": "Function to scroll to a specific index"
                    },
                    "selectionMode": {
                        "type": "SelectionMode",
                        "isRequired": false,
                        "defaultValue": "\"single\"",
                        "description": "How multiple selection should behave in the listbox.\n\n- `single`: The user can select a single item.\n- `multiple`: The user can select multiple items without using modifier keys.\n- `extended`: The user can select multiple items by using modifier keys."
                    },
                    "selectOnHighlight": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to select the item when it is highlighted"
                    },
                    "typeahead": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to enable typeahead on the listbox"
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled keys of the selected items"
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseListboxReturn<T>",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                }
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "placeholder": {
                        "type": "string",
                        "isRequired": false,
                        "description": "Text to display when no value is listboxed."
                    }
                },
                "element": "HTMLSpanElement"
            }
        },
        "component": "listbox",
        "framework": "react"
    },
    {
        "parts": {
            "LocaleProvider": {
                "props": {
                    "locale": {
                        "type": "string",
                        "isRequired": true,
                        "defaultValue": "'en-US'",
                        "description": "The locale to use for the application."
                    }
                }
            }
        },
        "component": "locale",
        "framework": "react"
    },
    {
        "parts": {
            "Arrow": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ArrowTip": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "CheckboxItem": {
                "props": {
                    "checked": {
                        "type": "boolean",
                        "isRequired": true,
                        "description": "Whether the option is checked"
                    },
                    "value": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The value of the option"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the menu should be closed when the option is selected."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the menu item is disabled"
                    },
                    "onCheckedChange": {
                        "type": "(checked: boolean) => void",
                        "isRequired": false,
                        "description": "Function called when the option state is changed"
                    },
                    "valueText": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The textual value of the option. Used in typeahead navigation of the menu.\nIf not provided, the text content of the menu item will be used."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ContextTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemGroupLabel": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The unique value of the menu item option."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the menu should be closed when the option is selected."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the menu item is disabled"
                    },
                    "onSelect": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "The function to call when the item is selected"
                    },
                    "valueText": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The textual value of the option. Used in typeahead navigation of the menu.\nIf not provided, the text content of the menu item will be used."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RadioItemGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "onValueChange": {
                        "type": "(e: ValueChangeDetails) => void",
                        "isRequired": false
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "RadioItem": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The value of the option"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the menu should be closed when the option is selected."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the menu item is disabled"
                    },
                    "valueText": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The textual value of the option. Used in typeahead navigation of the menu.\nIf not provided, the text content of the menu item will be used."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "anchorPoint": {
                        "type": "Point",
                        "isRequired": false,
                        "description": "The positioning point for the menu. Can be set by the context menu trigger or the button trigger."
                    },
                    "aria-label": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The accessibility label for the menu"
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to close the menu when an option is selected"
                    },
                    "composite": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the menu is a composed with other composite widgets like a combobox or tabs"
                    },
                    "defaultHighlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial highlighted value of the menu item when rendered.\nUse when you don't need to control the highlighted value of the menu item."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the menu when rendered.\nUse when you don't need to control the open state of the menu."
                    },
                    "highlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled highlighted value of the menu item."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  trigger: string\n  contextTrigger: string\n  content: string\n  groupLabel(id: string): string\n  group(id: string): string\n  positioner: string\n  arrow: string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the menu. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "loopFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to loop the keyboard navigation."
                    },
                    "navigate": {
                        "type": "(details: NavigateDetails) => void",
                        "isRequired": false,
                        "description": "Function to navigate to the selected item if it's an anchor element"
                    },
                    "onEscapeKeyDown": {
                        "type": "(event: KeyboardEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the escape key is pressed"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onHighlightChange": {
                        "type": "(details: HighlightChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the highlighted menu item changes."
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the menu opens or closes"
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "onSelect": {
                        "type": "(details: SelectionDetails) => void",
                        "isRequired": false,
                        "description": "Function called when a menu item is selected."
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the menu"
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The options used to dynamically position the menu"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "typeahead": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the pressing printable characters should trigger typeahead navigation"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseMenuReturn",
                        "isRequired": true
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Separator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLHRElement"
            },
            "TriggerItem": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "menu",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "DecrementTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "IncrementTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "allowMouseWheel": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to allow mouse wheel to change the value"
                    },
                    "allowOverflow": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to allow the value overflow the min/max range"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "clampValueOnBlur": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to clamp the value when the input loses focus (blur)"
                    },
                    "defaultValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value of the input when rendered.\nUse when you don't need to control the value of the input."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the number input is disabled."
                    },
                    "focusInputOnChange": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to focus input when the value changes"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the input element."
                    },
                    "formatOptions": {
                        "type": "NumberFormatOptions",
                        "isRequired": false,
                        "description": "The options to pass to the `Intl.NumberFormat` constructor"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  label: string\n  input: string\n  incrementTrigger: string\n  decrementTrigger: string\n  scrubber: string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the number input. Useful for composition."
                    },
                    "inputMode": {
                        "type": "InputMode",
                        "isRequired": false,
                        "defaultValue": "\"decimal\"",
                        "description": "Hints at the type of data that might be entered by the user. It also determines\nthe type of keyboard shown to the user on mobile devices"
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the number input value is invalid."
                    },
                    "locale": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"en-US\"",
                        "description": "The current locale. Based on the BCP 47 definition."
                    },
                    "max": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "Number.MAX_SAFE_INTEGER",
                        "description": "The maximum value of the number input"
                    },
                    "min": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "Number.MIN_SAFE_INTEGER",
                        "description": "The minimum value of the number input"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name attribute of the number input. Useful for form submission."
                    },
                    "onFocusChange": {
                        "type": "(details: FocusChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the number input is focused"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the value changes"
                    },
                    "onValueInvalid": {
                        "type": "(details: ValueInvalidDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the value overflows or underflows the min/max range"
                    },
                    "pattern": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"[0-9]*(.[0-9]+)?\"",
                        "description": "The pattern used to check the <input> element's value against"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the number input is readonly"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the number input is required"
                    },
                    "spinOnPress": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to spin the value when the increment/decrement button is pressed"
                    },
                    "step": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "The amount to increment or decrement the value by"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled value of the input"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseNumberInputReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Scrubber": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            }
        },
        "component": "number-input",
        "framework": "react"
    },
    {
        "parts": {
            "Ellipsis": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "type": {
                        "type": "'page'",
                        "isRequired": true
                    },
                    "value": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "NextTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "PrevTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "count": {
                        "type": "number",
                        "isRequired": false,
                        "description": "Total number of data items"
                    },
                    "defaultPage": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "The initial active page when rendered.\nUse when you don't need to control the active page of the pagination."
                    },
                    "defaultPageSize": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "10",
                        "description": "The initial number of data items per page when rendered.\nUse when you don't need to control the page size of the pagination."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  ellipsis(index: number): string\n  prevTrigger: string\n  nextTrigger: string\n  item(page: number): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the accordion. Useful for composition."
                    },
                    "onPageChange": {
                        "type": "(details: PageChangeDetails) => void",
                        "isRequired": false,
                        "description": "Called when the page number is changed"
                    },
                    "onPageSizeChange": {
                        "type": "(details: PageSizeChangeDetails) => void",
                        "isRequired": false,
                        "description": "Called when the page size is changed"
                    },
                    "page": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The controlled active page"
                    },
                    "pageSize": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The controlled number of data items per page"
                    },
                    "siblingCount": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "Number of pages to show beside active page"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "type": {
                        "type": "'button' | 'link'",
                        "isRequired": false,
                        "defaultValue": "\"button\"",
                        "description": "The type of the trigger element"
                    }
                },
                "element": "HTMLElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UsePaginationReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLElement"
            }
        },
        "component": "pagination",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Input": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to auto-focus the first input."
                    },
                    "blurOnComplete": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to blur the input when the value is complete"
                    },
                    "count": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The number of inputs to render to improve SSR aria attributes.\nThis will be required in next major version."
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial value of the the pin input when rendered.\nUse when you don't need to control the value of the pin input."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the inputs are disabled"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying input element."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  hiddenInput: string\n  label: string\n  control: string\n  input(id: string): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the pin input. Useful for composition."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the pin input is in the invalid state"
                    },
                    "mask": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the input's value will be masked just like `type=password`"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the input element. Useful for form submission."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called on input change"
                    },
                    "onValueComplete": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when all inputs have valid values"
                    },
                    "onValueInvalid": {
                        "type": "(details: ValueInvalidDetails) => void",
                        "isRequired": false,
                        "description": "Function called when an invalid value is entered"
                    },
                    "otp": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the pin input component signals to its fields that they should\nuse `autocomplete=\"one-time-code\"`."
                    },
                    "pattern": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The regular expression that the user-entered input value is checked against."
                    },
                    "placeholder": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"○\"",
                        "description": "The placeholder text for the input"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the pin input is in the valid state"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the pin input is required"
                    },
                    "selectOnFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to select input value when input is focused"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "type": {
                        "type": "'numeric' | 'alphabetic' | 'alphanumeric'",
                        "isRequired": false,
                        "defaultValue": "\"numeric\"",
                        "description": "The type of value the pin-input should allow"
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled value of the the pin input."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UsePinInputReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "pin-input",
        "framework": "react"
    },
    {
        "parts": {
            "Anchor": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Arrow": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ArrowTip": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "CloseTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Description": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "autoFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to automatically set focus on the first focusable\ncontent within the popover when opened."
                    },
                    "closeOnEscape": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to close the popover when the escape key is pressed."
                    },
                    "closeOnInteractOutside": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to close the popover when the user clicks outside of the popover."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the popover when rendered.\nUse when you don't need to control the open state of the popover."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  anchor: string\n  trigger: string\n  content: string\n  title: string\n  description: string\n  closeTrigger: string\n  positioner: string\n  arrow: string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the popover. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "initialFocusEl": {
                        "type": "() => HTMLElement | null",
                        "isRequired": false,
                        "description": "The element to focus on when the popover is opened."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "modal": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether the popover should be modal. When set to `true`:\n- interaction with outside elements will be disabled\n- only popover content will be visible to screen readers\n- scrolling is blocked\n- focus is trapped within the popover"
                    },
                    "onEscapeKeyDown": {
                        "type": "(event: KeyboardEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the escape key is pressed"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the popover opens or closes"
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the popover"
                    },
                    "persistentElements": {
                        "type": "(() => Element | null)[]",
                        "isRequired": false,
                        "description": "Returns the persistent elements that:\n- should not have pointer-events disabled\n- should not trigger the dismiss event"
                    },
                    "portalled": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the popover is portalled. This will proxy the tabbing behavior regardless of the DOM position\nof the popover content."
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The user provided options used to position the popover content"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UsePopoverReturn",
                        "isRequired": true
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Title": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "popover",
        "framework": "react"
    },
    {
        "parts": {
            "Portal": {
                "props": {
                    "container": {
                        "type": "RefObject<HTMLElement | null>",
                        "isRequired": false
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false
                    }
                }
            }
        },
        "component": "portal",
        "framework": "react"
    },
    {
        "parts": {
            "Presence": {
                "props": {
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    }
                }
            }
        },
        "component": "presence",
        "framework": "react"
    },
    {
        "parts": {
            "Circle": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "SVGSVGElement"
            },
            "CircleRange": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "SVGCircleElement"
            },
            "CircleTrack": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "SVGCircleElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Range": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "50",
                        "description": "The initial value of the progress bar when rendered.\nUse when you don't need to control the value of the progress bar."
                    },
                    "formatOptions": {
                        "type": "NumberFormatOptions",
                        "isRequired": false,
                        "defaultValue": "{ style: \"percent\" }",
                        "description": "The options to use for formatting the value."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; track: string; label: string; circle: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the progress bar. Useful for composition."
                    },
                    "locale": {
                        "type": "string",
                        "isRequired": false,
                        "defaultValue": "\"en-US\"",
                        "description": "The locale to use for formatting the value."
                    },
                    "max": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "100",
                        "description": "The maximum allowed value of the progress bar."
                    },
                    "min": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "0",
                        "description": "The minimum allowed value of the progress bar."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback fired when the value changes."
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the element."
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "The localized messages to use."
                    },
                    "value": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The controlled value of the progress bar."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseProgressReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Track": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "View": {
                "props": {
                    "state": {
                        "type": "ProgressState",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            }
        },
        "component": "progress",
        "framework": "react"
    },
    {
        "parts": {
            "DownloadTrigger": {
                "props": {
                    "fileName": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The name of the file."
                    },
                    "mimeType": {
                        "type": "DataUrlType",
                        "isRequired": true,
                        "description": "The mime type of the image."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "quality": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The quality of the image."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Frame": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "SVGSVGElement"
            },
            "Overlay": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Pattern": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "SVGPathElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value to encode when rendered.\nUse when you don't need to control the value of the qr code."
                    },
                    "encoding": {
                        "type": "QrCodeGenerateOptions",
                        "isRequired": false,
                        "description": "The qr code encoding options."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; frame: string }>",
                        "isRequired": false,
                        "description": "The element ids."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback fired when the value changes."
                    },
                    "pixelSize": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The pixel size of the qr code."
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled value to encode."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseQrCodeReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "qr-code",
        "framework": "react"
    },
    {
        "parts": {
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemControl": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemHiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Item": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false
                    }
                },
                "element": "HTMLLabelElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value of the checked radio when rendered.\nUse when you don't need to control the value of the radio group."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the radio group will be disabled"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying input."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  label: string\n  indicator: string\n  item(value: string): string\n  itemLabel(value: string): string\n  itemControl(value: string): string\n  itemHiddenInput(value: string): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the radio. Useful for composition."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the input fields in the radio\n(Useful for form submission)."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called once a radio is checked"
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "description": "Orientation of the radio group"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the checkbox is read-only"
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled value of the radio group"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseRadioGroupReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "radio-group",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Item": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "allowHalf": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to allow half stars."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to autofocus the rating."
                    },
                    "count": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "5",
                        "description": "The total number of ratings."
                    },
                    "defaultValue": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The initial value of the rating when rendered.\nUse when you don't need to control the value of the rating."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the rating is disabled."
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying input element."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  label: string\n  hiddenInput: string\n  control: string\n  item(id: string): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the rating. Useful for composition."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name attribute of the rating element (used in forms)."
                    },
                    "onHoverChange": {
                        "type": "(details: HoverChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to be called when the rating value is hovered."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to be called when the rating value changes."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the rating is readonly."
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the rating is required."
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "value": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The controlled value of the rating"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseRatingGroupReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "rating-group",
        "framework": "react"
    },
    {
        "parts": {
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemControl": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemHiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Item": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false
                    }
                },
                "element": "HTMLLabelElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value of the checked radio when rendered.\nUse when you don't need to control the value of the radio group."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the radio group will be disabled"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying input."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  label: string\n  indicator: string\n  item(value: string): string\n  itemLabel(value: string): string\n  itemControl(value: string): string\n  itemHiddenInput(value: string): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the radio. Useful for composition."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the input fields in the radio\n(Useful for form submission)."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called once a radio is checked"
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "description": "Orientation of the radio group"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the checkbox is read-only"
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled value of the radio group"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseSegmentGroupReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "segment-group",
        "framework": "react"
    },
    {
        "parts": {
            "ClearTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenSelect": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSelectElement"
            },
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemGroupLabel": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "item": {
                        "type": "any",
                        "isRequired": false,
                        "description": "The item to render"
                    },
                    "persistFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether hovering outside should clear the highlighted state"
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "List": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "collection": {
                        "type": "ListCollection<T>",
                        "isRequired": true,
                        "description": "The collection of items"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "closeOnSelect": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the select should close after an item is selected"
                    },
                    "composite": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the select is a composed with other composite widgets like tabs or combobox"
                    },
                    "defaultHighlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial value of the highlighted item when opened.\nUse when you don't need to control the highlighted value of the select."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the select's open state is controlled by the user"
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial default value of the select when rendered.\nUse when you don't need to control the value of the select."
                    },
                    "deselectable": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the value can be cleared by clicking the selected item.\n\n**Note:** this is only applicable for single selection"
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the select is disabled"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying select."
                    },
                    "highlightedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled key of the highlighted item"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  content: string\n  control: string\n  trigger: string\n  clearTrigger: string\n  label: string\n  hiddenSelect: string\n  positioner: string\n  item(id: string | number): string\n  itemGroup(id: string | number): string\n  itemGroupLabel(id: string | number): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the select. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the select is invalid"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "loopFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to loop the keyboard navigation through the options"
                    },
                    "multiple": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to allow multiple selection"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The `name` attribute of the underlying select."
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onHighlightChange": {
                        "type": "(details: HighlightChangeDetails<T>) => void",
                        "isRequired": false,
                        "description": "The callback fired when the highlighted item changes."
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the popup is opened"
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails<T>) => void",
                        "isRequired": false,
                        "description": "The callback fired when the selected item changes."
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the select menu is open"
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The positioning options of the menu."
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the select is read-only"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the select is required"
                    },
                    "scrollToIndexFn": {
                        "type": "(details: ScrollToIndexDetails) => void",
                        "isRequired": false,
                        "description": "Function to scroll to a specific index"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled keys of the selected items"
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseSelectReturn<T>",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "placeholder": {
                        "type": "string",
                        "isRequired": false,
                        "description": "Text to display when no value is selected."
                    }
                },
                "element": "HTMLSpanElement"
            }
        },
        "component": "select",
        "framework": "react"
    },
    {
        "parts": {
            "ClearTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Guide": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenInput": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the signature pad is disabled."
                    },
                    "drawing": {
                        "type": "DrawingOptions",
                        "isRequired": false,
                        "defaultValue": "'{ size: 2, simulatePressure: true }'",
                        "description": "The drawing options."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; control: string; hiddenInput: string; label: string }>",
                        "isRequired": false,
                        "description": "The ids of the signature pad elements. Useful for composition."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the signature pad. Useful for form submission."
                    },
                    "onDraw": {
                        "type": "(details: DrawDetails) => void",
                        "isRequired": false,
                        "description": "Callback when the signature pad is drawing."
                    },
                    "onDrawEnd": {
                        "type": "(details: DrawEndDetails) => void",
                        "isRequired": false,
                        "description": "Callback when the signature pad is done drawing."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the signature pad is read-only."
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the signature pad is required."
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "The translations of the signature pad. Useful for internationalization."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseSignaturePadReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Segment": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "SVGSVGElement"
            }
        },
        "component": "signature-pad",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "DraggingIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "MarkerGroup": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Marker": {
                "props": {
                    "value": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Range": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "aria-label": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The aria-label of each slider thumb. Useful for providing an accessible name to the slider"
                    },
                    "aria-labelledby": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The `id` of the elements that labels each slider thumb. Useful for providing an accessible name to the slider"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "number[]",
                        "isRequired": false,
                        "description": "The initial value of the slider when rendered.\nUse when you don't need to control the value of the slider."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the slider is disabled"
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying input element."
                    },
                    "getAriaValueText": {
                        "type": "(details: ValueTextDetails) => string",
                        "isRequired": false,
                        "description": "Function that returns a human readable value for the slider thumb"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  thumb(index: number): string\n  hiddenInput(index: number): string\n  control: string\n  track: string\n  range: string\n  label: string\n  valueText: string\n  marker(index: number): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the slider. Useful for composition."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the slider is invalid"
                    },
                    "max": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "100",
                        "description": "The maximum value of the slider"
                    },
                    "min": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "0",
                        "description": "The minimum value of the slider"
                    },
                    "minStepsBetweenThumbs": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "0",
                        "description": "The minimum permitted steps between multiple thumbs."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name associated with each slider thumb (when used in a form)"
                    },
                    "onFocusChange": {
                        "type": "(details: FocusChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the slider's focused index changes"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the value of the slider changes"
                    },
                    "onValueChangeEnd": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the slider value change is done"
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the slider"
                    },
                    "origin": {
                        "type": "'center' | 'end' | 'start'",
                        "isRequired": false,
                        "defaultValue": "\"start\"",
                        "description": "The origin of the slider range. The track is filled from the origin\nto the thumb for single values.\n- \"start\": Useful when the value represents an absolute value\n- \"center\": Useful when the value represents an offset (relative)\n- \"end\": Useful when the value represents an offset from the end"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the slider is read-only"
                    },
                    "step": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1",
                        "description": "The step value of the slider"
                    },
                    "thumbAlignment": {
                        "type": "'center' | 'contain'",
                        "isRequired": false,
                        "defaultValue": "\"contain\"",
                        "description": "The alignment of the slider thumb relative to the track\n- `center`: the thumb will extend beyond the bounds of the slider track.\n- `contain`: the thumb will be contained within the bounds of the track."
                    },
                    "thumbSize": {
                        "type": "{ width: number; height: number }",
                        "isRequired": false,
                        "description": "The slider thumbs dimensions"
                    },
                    "value": {
                        "type": "number[]",
                        "isRequired": false,
                        "description": "The controlled value of the slider"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseSliderReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Thumb": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "Track": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ValueText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "slider",
        "framework": "react"
    },
    {
        "parts": {
            "Panel": {
                "props": {
                    "id": {
                        "type": "string",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ResizeTrigger": {
                "props": {
                    "id": {
                        "type": "`${string}:${string}`",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Root": {
                "props": {
                    "panels": {
                        "type": "PanelData[]",
                        "isRequired": true,
                        "description": "The size constraints of the panels."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultSize": {
                        "type": "number[]",
                        "isRequired": false,
                        "description": "The initial size of the panels when rendered.\nUse when you don't need to control the size of the panels."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  resizeTrigger(id: string): string\n  label(id: string): string\n  panel(id: string | number): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the splitter. Useful for composition."
                    },
                    "keyboardResizeBy": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The number of pixels to resize the panel by when the keyboard is used."
                    },
                    "nonce": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The nonce for the injected splitter cursor stylesheet."
                    },
                    "onCollapse": {
                        "type": "(details: ExpandCollapseDetails) => void",
                        "isRequired": false,
                        "description": "Function called when a panel is collapsed."
                    },
                    "onExpand": {
                        "type": "(details: ExpandCollapseDetails) => void",
                        "isRequired": false,
                        "description": "Function called when a panel is expanded."
                    },
                    "onResize": {
                        "type": "(details: ResizeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the splitter is resized."
                    },
                    "onResizeEnd": {
                        "type": "(details: ResizeEndDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the splitter resize ends."
                    },
                    "onResizeStart": {
                        "type": "() => void",
                        "isRequired": false,
                        "description": "Function called when the splitter resize starts."
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the splitter. Can be `horizontal` or `vertical`"
                    },
                    "size": {
                        "type": "number[]",
                        "isRequired": false,
                        "description": "The controlled size data of the panels"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseSplitterReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "splitter",
        "framework": "react"
    },
    {
        "parts": {
            "CompletedContent": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Content": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "index": {
                        "type": "number",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "List": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "NextTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "PrevTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Progress": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "count": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The total number of steps"
                    },
                    "defaultStep": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The initial value of the stepper when rendered.\nUse when you don't need to control the value of the stepper."
                    },
                    "ids": {
                        "type": "ElementIds",
                        "isRequired": false,
                        "description": "The custom ids for the stepper elements"
                    },
                    "linear": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the stepper requires the user to complete the steps in order"
                    },
                    "onStepChange": {
                        "type": "(details: StepChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback to be called when the value changes"
                    },
                    "onStepComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Callback to be called when a step is completed"
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the stepper"
                    },
                    "step": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The controlled value of the stepper"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseStepsReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Separator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "steps",
        "framework": "react"
    },
    {
        "parts": {
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "checked": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled checked state of the switch"
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the switch is disabled."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; hiddenInput: string; control: string; label: string; thumb: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the switch. Useful for composition."
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the switch is marked as invalid."
                    },
                    "label": {
                        "type": "string",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name of the input field in a switch\n(Useful for form submission)."
                    },
                    "onCheckedChange": {
                        "type": "(details: CheckedChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to call when the switch is clicked."
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the switch is read-only"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "If `true`, the switch input is marked as required,"
                    },
                    "value": {
                        "type": "string | number",
                        "isRequired": false,
                        "defaultValue": "\"on\"",
                        "description": "The value of switch input. Useful for form submission."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseSwitchReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Thumb": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            }
        },
        "component": "switch",
        "framework": "react"
    },
    {
        "parts": {
            "TabContent": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The value of the tab"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "TabIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "TabList": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "TabTrigger": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true,
                        "description": "The value of the tab"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the tab is disabled"
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Root": {
                "props": {
                    "activationMode": {
                        "type": "'manual' | 'automatic'",
                        "isRequired": false,
                        "defaultValue": "\"automatic\"",
                        "description": "The activation mode of the tabs. Can be `manual` or `automatic`\n- `manual`: Tabs are activated when clicked or press `enter` key.\n- `automatic`: Tabs are activated when receiving focus"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "composite": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the tab is composite"
                    },
                    "defaultValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial selected tab value when rendered.\nUse when you don't need to control the selected tab value."
                    },
                    "deselectable": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the active tab can be deselected when clicking on it."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; trigger: string; list: string; content: string; indicator: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the tabs. Useful for composition."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "loopFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the keyboard navigation will loop from last tab to first, and vice versa."
                    },
                    "navigate": {
                        "type": "(details: NavigateDetails) => void",
                        "isRequired": false,
                        "description": "Function to navigate to the selected tab when clicking on it.\nUseful if tab triggers are anchor elements."
                    },
                    "onFocusChange": {
                        "type": "(details: FocusChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback to be called when the focused tab changes"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback to be called when the selected/active tab changes"
                    },
                    "orientation": {
                        "type": "'horizontal' | 'vertical'",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the tabs. Can be `horizontal` or `vertical`\n- `horizontal`: only left and right arrow key navigation will work.\n- `vertical`: only up and down arrow key navigation will work."
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    },
                    "value": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled selected tab value"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseTabsReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "tabs",
        "framework": "react"
    },
    {
        "parts": {
            "ClearTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "HiddenInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "ItemDeleteTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ItemInput": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "ItemPreview": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "index": {
                        "type": "string | number",
                        "isRequired": true
                    },
                    "value": {
                        "type": "string",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Root": {
                "props": {
                    "addOnPaste": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to add a tag when you paste values into the tag input"
                    },
                    "allowOverflow": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to allow tags to exceed max. In this case,\nwe'll attach `data-invalid` to the root"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the input should be auto-focused"
                    },
                    "blurBehavior": {
                        "type": "'clear' | 'add'",
                        "isRequired": false,
                        "description": "The behavior of the tags input when the input is blurred\n- `\"add\"`: add the input value as a new tag\n- `\"clear\"`: clear the input value"
                    },
                    "defaultInputValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The initial tag input value when rendered.\nUse when you don't need to control the tag input value."
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial tag value when rendered.\nUse when you don't need to control the tag value."
                    },
                    "delimiter": {
                        "type": "string | RegExp",
                        "isRequired": false,
                        "defaultValue": "\",\"",
                        "description": "The character that serves has:\n- event key to trigger the addition of a new tag\n- character used to split tags when pasting into the input"
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the tags input should be disabled"
                    },
                    "editable": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether a tag can be edited after creation, by pressing `Enter` or double clicking."
                    },
                    "form": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The associate form of the underlying input element."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  root: string\n  input: string\n  hiddenInput: string\n  clearBtn: string\n  label: string\n  control: string\n  item(opts: ItemProps): string\n  itemDeleteTrigger(opts: ItemProps): string\n  itemInput(opts: ItemProps): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the tags input. Useful for composition."
                    },
                    "inputValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The controlled tag input's value"
                    },
                    "invalid": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the tags input is invalid"
                    },
                    "max": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "Infinity",
                        "description": "The max number of tags"
                    },
                    "maxLength": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The max length of the input."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The name attribute for the input. Useful for form submissions"
                    },
                    "onFocusOutside": {
                        "type": "(event: FocusOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the focus is moved outside the component"
                    },
                    "onHighlightChange": {
                        "type": "(details: HighlightChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback fired when a tag is highlighted by pointer or keyboard navigation"
                    },
                    "onInputValueChange": {
                        "type": "(details: InputValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback fired when the input value is updated"
                    },
                    "onInteractOutside": {
                        "type": "(event: InteractOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when an interaction happens outside the component"
                    },
                    "onPointerDownOutside": {
                        "type": "(event: PointerDownOutsideEvent) => void",
                        "isRequired": false,
                        "description": "Function called when the pointer is pressed down outside the component"
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback fired when the tag values is updated"
                    },
                    "onValueInvalid": {
                        "type": "(details: ValidityChangeDetails) => void",
                        "isRequired": false,
                        "description": "Callback fired when the max tag count is reached or the `validateTag` function returns `false`"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the tags input should be read-only"
                    },
                    "required": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the tags input is required"
                    },
                    "translations": {
                        "type": "IntlTranslations",
                        "isRequired": false,
                        "description": "Specifies the localized strings that identifies the accessibility elements and their states"
                    },
                    "validate": {
                        "type": "(details: ValidateArgs) => boolean",
                        "isRequired": false,
                        "description": "Returns a boolean that determines whether a tag can be added.\nUseful for preventing duplicates or invalid tag values."
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled tag value"
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseTagsInputReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "tags-input",
        "framework": "react"
    },
    {
        "parts": {
            "Cell": {
                "props": {
                    "value": {
                        "type": "number | TimePeriod",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "ClearTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Column": {
                "props": {
                    "unit": {
                        "type": "TimeUnit",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Input": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLInputElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "allowSeconds": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to show the seconds."
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the timepicker open state is controlled by the user"
                    },
                    "defaultValue": {
                        "type": "Time",
                        "isRequired": false,
                        "description": "The initial selected time when rendered.\nUse when you don't need to control the selected time."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the time picker is disabled."
                    },
                    "disableLayer": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to disable the interaction outside logic"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{\n  trigger: string\n  input: string\n  positioner: string\n  content: string\n  clearTrigger: string\n  control: string\n  column(unit: TimeUnit): string\n}>",
                        "isRequired": false,
                        "description": "The ids of the elements in the date picker. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "locale": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The locale (BCP 47 language tag) to use when formatting the time."
                    },
                    "max": {
                        "type": "Time",
                        "isRequired": false,
                        "description": "The maximum time that can be selected."
                    },
                    "min": {
                        "type": "Time",
                        "isRequired": false,
                        "description": "The minimum time that can be selected."
                    },
                    "name": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The `name` attribute of the input element."
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onFocusChange": {
                        "type": "(details: FocusChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the focused date changes."
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the time picker opens or closes."
                    },
                    "onValueChange": {
                        "type": "(value: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the value changes."
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the timepicker is open"
                    },
                    "placeholder": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The placeholder text of the input."
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The user provided options used to position the time picker content"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "readOnly": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the time picker is read-only."
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "steps": {
                        "type": "{ hour?: number | undefined; minute?: number | undefined; second?: number | undefined }",
                        "isRequired": false,
                        "description": "The steps of each time unit."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    },
                    "value": {
                        "type": "Time",
                        "isRequired": false,
                        "description": "The controlled selected time."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseTimePickerReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Spacer": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "time-picker",
        "framework": "react"
    },
    {
        "parts": {
            "ActionTrigger": {
                "props": {
                    "action": {
                        "type": "TimerAction",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Area": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "type": {
                        "type": "keyof Time<number>",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "autoStart": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the timer should start automatically"
                    },
                    "countdown": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the timer should countdown, decrementing the timer on each tick."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; area: string }>",
                        "isRequired": false,
                        "description": "The ids of the timer parts"
                    },
                    "interval": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1000",
                        "description": "The interval in milliseconds to update the timer count."
                    },
                    "onComplete": {
                        "type": "() => void",
                        "isRequired": false,
                        "description": "Function invoked when the timer is completed"
                    },
                    "onTick": {
                        "type": "(details: TickDetails) => void",
                        "isRequired": false,
                        "description": "Function invoked when the timer ticks"
                    },
                    "startMs": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The total duration of the timer in milliseconds."
                    },
                    "targetMs": {
                        "type": "number",
                        "isRequired": false,
                        "description": "The minimum count of the timer in milliseconds."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseTimerReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Separator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "timer",
        "framework": "react"
    },
    {
        "parts": {
            "ActionTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "CloseTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Description": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Title": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Toaster": {
                "props": {
                    "toaster": {
                        "type": "CreateToasterReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "dir": {
                        "type": "'ltr' | 'rtl'",
                        "isRequired": false,
                        "defaultValue": "\"ltr\"",
                        "description": "The document's text/writing direction."
                    },
                    "getRootNode": {
                        "type": "() => Node | ShadowRoot | Document",
                        "isRequired": false,
                        "description": "A root node to correctly resolve document in custom environments. E.x.: Iframes, Electron."
                    }
                }
            }
        },
        "component": "toast",
        "framework": "react"
    },
    {
        "parts": {
            "Item": {
                "props": {
                    "value": {
                        "type": "string",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial selected value of the toggle group when rendered.\nUse when you don't need to control the selected value of the toggle group."
                    },
                    "deselectable": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the toggle group allows empty selection.\n**Note:** This is ignored if `multiple` is `true`."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the toggle is disabled."
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ root: string; item(value: string): string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the toggle. Useful for composition."
                    },
                    "loopFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to loop focus inside the toggle group."
                    },
                    "multiple": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to allow multiple toggles to be selected."
                    },
                    "onValueChange": {
                        "type": "(details: ValueChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function to call when the toggle is clicked."
                    },
                    "orientation": {
                        "type": "Orientation",
                        "isRequired": false,
                        "defaultValue": "\"horizontal\"",
                        "description": "The orientation of the toggle group."
                    },
                    "rovingFocus": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to use roving tab index to manage focus."
                    },
                    "value": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled selected value of the toggle group."
                    }
                },
                "element": "HTMLDivElement"
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseToggleGroupReturn",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "toggle-group",
        "framework": "react"
    },
    {
        "parts": {
            "Indicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "fallback": {
                        "type": "string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<...>",
                        "isRequired": false,
                        "description": "The fallback content to render when the toggle is not pressed."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultPressed": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The default pressed state of the toggle."
                    },
                    "onPressedChange": {
                        "type": "(pressed: boolean) => void",
                        "isRequired": false,
                        "description": "Event handler called when the pressed state of the toggle changes."
                    },
                    "pressed": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The pressed state of the toggle."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "toggle",
        "framework": "react"
    },
    {
        "parts": {
            "Arrow": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ArrowTip": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "aria-label": {
                        "type": "string",
                        "isRequired": false,
                        "description": "Custom label for the tooltip."
                    },
                    "closeDelay": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "500",
                        "description": "The close delay of the tooltip."
                    },
                    "closeOnClick": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the tooltip should close on click"
                    },
                    "closeOnEscape": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to close the tooltip when the Escape key is pressed."
                    },
                    "closeOnPointerDown": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether to close the tooltip on pointerdown."
                    },
                    "closeOnScroll": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the tooltip should close on scroll"
                    },
                    "defaultOpen": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The initial open state of the tooltip when rendered.\nUse when you don't need to control the open state of the tooltip."
                    },
                    "disabled": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the tooltip is disabled"
                    },
                    "id": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The unique identifier of the machine."
                    },
                    "ids": {
                        "type": "Partial<{ trigger: string; content: string; arrow: string; positioner: string }>",
                        "isRequired": false,
                        "description": "The ids of the elements in the tooltip. Useful for composition."
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "interactive": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether the tooltip's content is interactive.\nIn this mode, the tooltip will remain open when user hovers over the content."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "onOpenChange": {
                        "type": "(details: OpenChangeDetails) => void",
                        "isRequired": false,
                        "description": "Function called when the tooltip is opened."
                    },
                    "open": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "The controlled open state of the tooltip"
                    },
                    "openDelay": {
                        "type": "number",
                        "isRequired": false,
                        "defaultValue": "1000",
                        "description": "The open delay of the tooltip."
                    },
                    "positioning": {
                        "type": "PositioningOptions",
                        "isRequired": false,
                        "description": "The user provided options used to position the popover content"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseTooltipReturn",
                        "isRequired": true
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Trigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            }
        },
        "component": "tooltip",
        "framework": "react"
    },
    {
        "parts": {
            "ActionTrigger": {
                "props": {
                    "action": {
                        "type": "StepAction",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Arrow": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ArrowTip": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Backdrop": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "CloseTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLButtonElement"
            },
            "Content": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Control": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Description": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Positioner": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ProgressText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Root": {
                "props": {
                    "tour": {
                        "type": "UseTourReturn",
                        "isRequired": true
                    },
                    "immediate": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether to synchronize the present change immediately or defer it to the next frame"
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExitComplete": {
                        "type": "VoidFunction",
                        "isRequired": false,
                        "description": "Function called when the animation ends in the closed state"
                    },
                    "present": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Whether the node is present (controlled by the user)"
                    },
                    "skipAnimationOnMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to allow the initial presence animation."
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Spotlight": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Title": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLHeadingElement"
            }
        },
        "component": "tour",
        "framework": "react"
    },
    {
        "parts": {
            "BranchContent": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "BranchControl": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "BranchIndentGuide": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "BranchIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Branch": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "BranchText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "BranchTrigger": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemIndicator": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "Item": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            },
            "ItemText": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLSpanElement"
            },
            "Label": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLLabelElement"
            },
            "NodeProvider": {
                "props": {
                    "indexPath": {
                        "type": "number[]",
                        "isRequired": true,
                        "description": "The index path of the tree node"
                    },
                    "node": {
                        "type": "NonNullable<T>",
                        "isRequired": false,
                        "description": "The tree node"
                    }
                }
            },
            "Root": {
                "props": {
                    "collection": {
                        "type": "TreeCollection<T>",
                        "isRequired": true,
                        "description": "The collection of tree nodes"
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "defaultExpandedValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial expanded node ids when rendered.\nUse when you don't need to control the expanded node ids."
                    },
                    "defaultSelectedValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The initial selected node ids when rendered.\nUse when you don't need to control the selected node ids."
                    },
                    "expandedValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled expanded node ids"
                    },
                    "expandOnClick": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether clicking on a branch should open it or not"
                    },
                    "focusedValue": {
                        "type": "string",
                        "isRequired": false,
                        "description": "The id of the focused node"
                    },
                    "ids": {
                        "type": "Partial<{ root: string; tree: string; label: string; node(value: string): string }>",
                        "isRequired": false,
                        "description": "The ids of the tree elements. Useful for composition."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "onExpandedChange": {
                        "type": "(details: ExpandedChangeDetails) => void",
                        "isRequired": false,
                        "description": "Called when the tree is opened or closed"
                    },
                    "onFocusChange": {
                        "type": "(details: FocusChangeDetails) => void",
                        "isRequired": false,
                        "description": "Called when the focused node changes"
                    },
                    "onSelectionChange": {
                        "type": "(details: SelectionChangeDetails) => void",
                        "isRequired": false,
                        "description": "Called when the selection changes"
                    },
                    "selectedValue": {
                        "type": "string[]",
                        "isRequired": false,
                        "description": "The controlled selected node ids"
                    },
                    "selectionMode": {
                        "type": "'multiple' | 'single'",
                        "isRequired": false,
                        "defaultValue": "\"single\"",
                        "description": "Whether the tree supports multiple selection\n- \"single\": only one node can be selected\n- \"multiple\": multiple nodes can be selected"
                    },
                    "typeahead": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "true",
                        "description": "Whether the tree supports typeahead search"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "RootProvider": {
                "props": {
                    "value": {
                        "type": "UseTreeViewReturn<T>",
                        "isRequired": true
                    },
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    },
                    "lazyMount": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to enable lazy mounting"
                    },
                    "unmountOnExit": {
                        "type": "boolean",
                        "isRequired": false,
                        "defaultValue": "false",
                        "description": "Whether to unmount on exit."
                    }
                }
            },
            "Tree": {
                "props": {
                    "asChild": {
                        "type": "boolean",
                        "isRequired": false,
                        "description": "Use the provided child element as the default rendered element, combining their props and behavior."
                    }
                },
                "element": "HTMLDivElement"
            }
        },
        "component": "tree-view",
        "framework": "react"
    }
]
