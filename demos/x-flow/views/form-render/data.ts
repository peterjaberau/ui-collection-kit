export const controls = {
    linkButton: {
        type: 'object',
        title: 'Link Button',
        properties: {
            root: {
                title: 'Root',
                type: "object",
                properties:  {
                    variant: {
                        title: "Variant",
                        type: 'string',
                        enum: ["gray", "black", "primary", "error", "modifiable"],
                        default: "gray"
                    },
                    size: {
                        title: "Size",
                        type: 'string',
                        enum: ["medium", "large", "small", "xsmall", "xxsmall"],
                        default: "medium"
                    },
                    children: {
                        title: "Children",

                        type: 'array',
                        "items": {
                            "type": "object",
                            properties: {
                                "component": {
                                    "title": "Choose a component",
                                    "type": "string",
                                    enum: ["button", "button-group", "button-component", "link-button", "div"],
                                    default: "div"
                                },
                            },

                        },

                    }
                },


                // underline: {
                //     type: "boolean",
                //     defaultValue: false
                // },
                // asChild: {
                //     type: 'boolean',
                // },
            },
            icon: {
                title: 'Icon',
                type: 'object',
                properties: {
                    type: {
                        title: 'Type',
                        type: 'string'
                    },
                    as: {
                        title: 'As',
                        'type': 'string',
                        'default': 'div'
                    }
                }
            }

        }
    }
}


export const data = {
    alignUi: {
        base: {
            items: [
                {
                    name: 'button',
                    title: 'Button',
                    items: []
                },

                {
                    name: 'link-button',
                    title: 'Link Button',
                    controls: {
                        root: {
                            variant: {
                                type: ["gray", "black", "primary", "error", "modifiable"],
                                defaultValue: "gray"
                            },
                            size: {
                                type: ["medium", "medium"],
                                defaultValue: "medium"
                            },
                            underline: {
                                type: "boolean",
                                defaultValue: false
                            },
                            asChild: {
                                type: 'boolean',
                            },
                        },
                        icon: {
                            type: 'string',
                            as: 'div'
                        }

                    },

                    items: [
                        {
                            name: 'basic',
                            title: 'Basic',
                            props: {
                                children: 'Link button basic'
                            }
                        },
                        {
                            name: 'gray-default',
                            title: 'gray-default',
                            props: {
                                variant: "gray",
                                children: 'Link button gray'

                            }
                        },
                        {
                            name: 'black',
                            title: 'black',
                            props: {
                                variant: "black",
                                children: 'Link button'
                            }
                        },
                        {
                            name: 'primary',
                            title: 'primary',
                            props: {
                                variant: "primary",
                                children: 'Link button'
                            }
                        },
                        {
                            name: 'error',
                            title: 'error',
                            props: {
                                variant: "error",
                                children: 'Link button'
                            }
                        },
                        {
                            name: 'modifiable',
                            title: 'modifiable',
                            props: {
                                variant: "modifiable",
                                className: "text-success-base",
                                children: 'Link button'
                            }
                        },
                        {
                            name: 'size',
                            title: 'size',
                            children: [
                                {
                                    props: {
                                        children: "Link Button",
                                    }
                                },
                                {
                                    props: {
                                        size: "small",
                                        children: "Link Button"
                                    }
                                },
                            ]
                        },
                        {
                            name: 'underline',
                            title: 'underline',
                            children: [
                                {
                                    props: {
                                        children: "Link Button",
                                        underline: true,
                                        variant: 'gray'
                                    }
                                },
                                {
                                    props: {
                                        children: "Link Button",
                                        underline: true,
                                        variant: 'black'
                                    }
                                },
                                {
                                    props: {
                                        children: "Link Button",
                                        underline: true,
                                        variant: 'primary'
                                    }
                                },
                                {
                                    props: {
                                        children: "Link Button",
                                        underline: true,
                                        variant: 'error'
                                    }
                                },

                            ]
                        },
                        {
                            name: 'with-icon',
                            title: 'with icon',
                        },
                        {
                            name: 'disabled',
                            title: 'disabled',
                            children: [
                                {
                                    props: {
                                        children: "Link Button",
                                        disabled: true,
                                        variant: 'gray'
                                    }
                                },
                                {
                                    props: {
                                        children: "Link Button",
                                        disabled: true,
                                        variant: 'black'
                                    }
                                },
                                {
                                    props: {
                                        children: "Link Button",
                                        disabled: true,
                                        variant: 'primary'
                                    }
                                },
                                {
                                    props: {
                                        children: "Link Button",
                                        disabled: true,
                                        variant: 'error'
                                    }
                                },
                                {
                                    props: {
                                        variant: 'modifiable',
                                        children: "Link Button",
                                        disabled: true,
                                        className: 'text-success-base'
                                    }
                                },
                            ]
                        },
                        {
                            name: 'as-child',
                            title: 'as-child',
                            props: {
                                asChild: true,
                                children: 'Link Button',
                            }
                        }
                    ]
                },






                {
                    name: 'button',
                    title: 'Button',
                    items: []
                },

                {
                    name: 'button-component',
                    title: 'button component',
                    controls: {
                        root: {
                            variant: {
                                type: ["primary", "error", "neutral"],
                                defaultValue: "primary",
                            },
                            size: {
                                type: ["medium", "small", "xsmall", "xxsmall"],
                                defaultValue: "medium"
                            },
                            mode:["filled", "stroke","lighter","ghost"],
                            defaultValue: "filled",


                            underline: {
                                type: "boolean",
                                defaultValue: false
                            },
                            asChild: {
                                type: 'boolean',
                            },
                        },
                        icon: {
                            type: 'string',
                            as: 'div'
                        }

                    },

                    items: [

                        {
                            name: 'demo',
                            title: 'Demo',
                            props: {
                                children: 'Button Component',
                            }
                        },

                        {
                            name: 'primary-default',
                            title: 'primary-default',
                            props: {
                                children: [





                                    {
                                        props: {
                                            children: "primary default",
                                            mode: "filled",
                                            variant: 'primary'

                                        }
                                    },



                                ]
                            }


                        },

                        {
                            name: 'neutral-default',
                            title: 'neutral-default',
                            children: [
                                {
                                    props: {
                                        children: "neutral default",
                                        mode: "filled",
                                        variant: 'neutral',
                                    }
                                },
                                {
                                    props: {
                                        children: "primary default",
                                        mode: "stroke",
                                        variant: 'neutral',
                                    }
                                },

                                {
                                    props: {
                                        children: "primary default",
                                        mode: "lighter",
                                        variant: 'neutral',


                                    }
                                },
                                {
                                    props: {
                                        children: "primary default",
                                        mode: "ghost",
                                        variant: 'neutral',
                                    }
                                },
                            ]
                        },
                        {
                            name: 'error-default',
                            title: 'error-default',
                            children: [
                                {
                                    props: {
                                        children: "error default",
                                        mode: "filled",
                                        variant: 'error',
                                    }
                                },
                                {
                                    props: {
                                        children: "error default",
                                        mode: "stroke",
                                        variant: 'error',
                                    }
                                },

                                {
                                    props: {
                                        children: "error default",
                                        mode: "lighter",
                                        variant: 'error',


                                    }
                                },
                                {
                                    props: {
                                        children: "error default",
                                        mode: "ghost",
                                        variant: 'error',
                                    }
                                },
                            ]
                        },

                        {
                            name: 'size-button',
                            title: 'size-button',
                            children: [
                                {
                                    props: {
                                        children: "size Button",
                                        size: "medium"


                                    }
                                },
                            ]
                        },




                        {
                            name: 'disabled',
                            title: 'disabled',
                            children: [
                                {
                                    props: {
                                        children: "disabled",
                                        disabled: true,
                                        mode: 'stroke'
                                    }
                                },
                                {
                                    props: {
                                        children: "disabled",
                                        disabled: true,
                                        mode: 'lighter',
                                    }
                                },
                                {
                                    props: {
                                        children: "disabled",
                                        disabled: true,
                                        variant: 'ghost'
                                    }
                                },
                            ]
                        },

                        {
                            name: 'with-icon',
                            title: 'with icon',


                        },

                        {
                            name: 'full-width',
                            title: 'full width',
                            props: {
                                variant: "neutral",
                                className: "w-full",
                            }
                        },

                        {
                            name: 'as-child',
                            title: 'asChild',
                            props: {
                                asChild: true,
                                children: 'As Link',
                            }
                        },




                    ]
                },

                {
                    name: 'button-group',
                    title: 'Button group',
                },

                {
                    name: 'drawer',
                    title: 'Drawer',
                }
            ],
        },
        blocks: {
            items: [
                {
                    name: 'primary',
                    title: 'Primary (Default)',

                }
            ],
        },
        templates: {
            items: [],
        }

    }
}
