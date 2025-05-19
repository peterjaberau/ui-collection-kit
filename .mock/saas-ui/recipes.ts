export const data: any = {
  "recipes": {
    "badge": {
      "className": "chakra-badge",
      "base": {
        "display": "inline-flex",
        "alignItems": "center",
        "borderRadius": "full",
        "gap": "1",
        "fontWeight": "medium",
        "fontVariantNumeric": "tabular-nums",
        "whiteSpace": "nowrap",
        "userSelect": "none"
      },
      "variants": {
        "variant": {
          "solid": {
            "bg": "colorPalette.solid",
            "color": "colorPalette.contrast"
          },
          "subtle": {
            "bg": "colorPalette.subtle",
            "color": "colorPalette.fg"
          },
          "outline": {
            "color": "colorPalette.fg",
            "shadow": "inset 0 0 0px 1px var(--shadow-color)",
            "shadowColor": "colorPalette.subtle"
          },
          "surface": {
            "bg": "colorPalette.muted/20",
            "color": "colorPalette.fg",
            "shadow": "inset 0 0 0px 1px var(--shadow-color)",
            "shadowColor": "colorPalette.subtle"
          },
          "plain": {
            "color": "colorPalette.fg"
          }
        },
        "size": {
          "xs": {
            "textStyle": "2xs",
            "px": "1",
            "minH": "4"
          },
          "sm": {
            "textStyle": "xs",
            "px": "1.5",
            "minH": "5"
          },
          "md": {
            "textStyle": "sm",
            "px": "2",
            "minH": "6"
          },
          "lg": {
            "textStyle": "sm",
            "px": "2.5",
            "minH": "7"
          }
        }
      },
      "defaultVariants": {
        "variant": "subtle",
        "size": "sm"
      }
    },
    "button": {
      "className": "chakra-button",
      "base": {
        "colorPalette": "gray",
        "display": "inline-flex",
        "appearance": "none",
        "alignItems": "center",
        "justifyContent": "center",
        "userSelect": "none",
        "position": "relative",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "flexShrink": "0",
        "outline": "0",
        "lineHeight": "1.2",
        "isolation": "isolate",
        "fontWeight": "medium",
        "transitionProperty": "common",
        "transitionDuration": "moderate",
        "focusVisibleRing": "outside",
        "_disabled": {
          "layerStyle": "disabled"
        },
        "_icon": {
          "fontSize": "1em",
          "flexShrink": 0
        }
      },
      "variants": {
        "size": {
          "xs": {
            "gap": "1",
            "h": "6",
            "minW": "6",
            "textStyle": "xs",
            "borderRadius": "control.sm",
            "px": "2"
          },
          "sm": {
            "gap": "2",
            "h": "7",
            "minW": "7",
            "textStyle": "sm",
            "borderRadius": "control.md",
            "px": "2.5"
          },
          "md": {
            "gap": "2",
            "h": "8",
            "minW": "8",
            "borderRadius": "control.md",
            "textStyle": "sm",
            "px": "3"
          },
          "lg": {
            "gap": "3",
            "h": "10",
            "minW": "10",
            "borderRadius": "control.lg",
            "textStyle": "md",
            "px": "4.5"
          },
          "xl": {
            "gap": "3",
            "h": "12",
            "minW": "12",
            "borderRadius": "control.lg",
            "textStyle": "lg",
            "px": "6"
          }
        },
        "variant": {
          "solid": {
            "bg": "colorPalette.solid",
            "boxShadow": "sm",
            "color": "colorPalette.contrast",
            "_hover": {
              "bg": "colorPalette.solid/90"
            },
            "_popupExpanded": {
              "bg": "colorPalette.solid/90"
            }
          },
          "subtle": {
            "bg": "colorPalette.muted",
            "color": "colorPalette.fg",
            "_hover": {
              "bg": "colorPalette.subtle"
            },
            "_popupExpanded": {
              "bg": "colorPalette.subtle"
            }
          },
          "glass": {
            "bg": "colorPalette.solid",
            "color": "colorPalette.contrast",
            "--btn-shadow": "shadows.sm",
            "boxShadow": {
              "base": "0 0 0 1px rgba(0,0,0,0.25) inset, 0px 2px 0px 0px rgba(255,255,255,0.2) inset, var(--btn-shadow)",
              "_dark": " 0px 1px 0px 0px rgba(255,255,255,0.2) inset, var(--btn-shadow)"
            },
            "textShadow": "0 1px 2px rgba(0,0,0,0.3)",
            "overflow": "clip",
            "_after": {
              "content": "\"\"",
              "position": "absolute",
              "top": "0",
              "left": "0",
              "right": "0",
              "bottom": "0",
              "background": "linear-gradient(180deg, white 40%, rgba(0,0,0,0.2))",
              "opacity": 0.2,
              "transitionProperty": "opacity",
              "transitionDuration": "moderate",
              "pointerEvents": "none"
            },
            "_hover": {
              "bg": "colorPalette.solid",
              "_after": {
                "background": "linear-gradient(180deg, rgba(255,255,255,0.8) 40%, rgba(0,0,0,0.6))"
              }
            },
            "_popupExpanded": {
              "bg": "colorPalette.solid",
              "_after": {
                "background": "linear-gradient(180deg, rgba(255,255,255,0.8) 40%, rgba(0,0,0,0.6))"
              }
            }
          },
          "surface": {
            "bg": "colorPalette.muted/20",
            "borderWidth": "1px",
            "borderColor": "colorPalette.emphasized/90",
            "color": "colorPalette.fg",
            "shadow": "xs",
            "_hover": {
              "bg": "colorPalette.muted",
              "borderColor": "colorPalette.emphasized"
            },
            "_popupExpanded": {
              "bg": "colorPalette.muted",
              "borderColor": "colorPalette.emphasized"
            }
          },
          "outline": {
            "borderWidth": "0.5px",
            "borderColor": "colorPalette.emphasized",
            "color": "colorPalette.fg",
            "_hover": {
              "bg": "colorPalette.muted"
            },
            "_popupExpanded": {
              "bg": "colorPalette.muted"
            }
          },
          "ghost": {
            "color": "colorPalette.fg",
            "_hover": {
              "bg": "colorPalette.subtle"
            },
            "_popupExpanded": {
              "bg": "colorPalette.subtle"
            }
          },
          "plain": {
            "color": "colorPalette.fg"
          }
        }
      },
      "compoundVariants": [
        {
          "variant": "plain",
          "css": {
            "px": 0
          }
        }
      ],
      "defaultVariants": {
        "size": "md",
        "variant": "surface",
        "colorPalette": "gray"
      }
    },
    "code": {
      "className": "chakra-code",
      "base": {
        "fontFamily": "mono",
        "alignItems": "center",
        "display": "inline-flex",
        "borderRadius": "indicator.md"
      },
      "variants": {
        "variant": {
          "solid": {
            "bg": "colorPalette.solid",
            "color": "colorPalette.contrast"
          },
          "subtle": {
            "bg": "colorPalette.subtle",
            "color": "colorPalette.fg"
          },
          "outline": {
            "color": "colorPalette.fg",
            "shadow": "inset 0 0 0px 1px var(--shadow-color)",
            "shadowColor": "colorPalette.subtle"
          },
          "surface": {
            "bg": "colorPalette.muted/20",
            "color": "colorPalette.fg",
            "shadow": "inset 0 0 0px 1px var(--shadow-color)",
            "shadowColor": "colorPalette.subtle"
          },
          "plain": {
            "color": "colorPalette.fg"
          }
        },
        "size": {
          "xs": {
            "textStyle": "2xs",
            "px": "1",
            "minH": "4"
          },
          "sm": {
            "textStyle": "xs",
            "px": "1.5",
            "minH": "5"
          },
          "md": {
            "textStyle": "sm",
            "px": "2",
            "minH": "6"
          },
          "lg": {
            "textStyle": "sm",
            "px": "2.5",
            "minH": "7"
          }
        }
      },
      "defaultVariants": {
        "variant": "subtle",
        "size": "sm"
      }
    },
    "container": {
      "className": "chakra-container",
      "base": {
        "position": "relative",
        "maxWidth": "8xl",
        "w": "100%",
        "mx": "auto",
        "px": {
          "base": "4",
          "md": "6",
          "lg": "8"
        }
      },
      "variants": {
        "centerContent": {
          "true": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center"
          }
        },
        "fluid": {
          "true": {
            "maxWidth": "full"
          }
        }
      }
    },
    "heading": {
      "className": "chakra-heading",
      "base": {
        "fontFamily": "heading",
        "fontWeight": "semibold"
      },
      "variants": {
        "size": {
          "xs": {
            "textStyle": "xs"
          },
          "sm": {
            "textStyle": "sm"
          },
          "md": {
            "textStyle": "md"
          },
          "lg": {
            "textStyle": "lg"
          },
          "xl": {
            "textStyle": "xl"
          },
          "2xl": {
            "textStyle": "2xl"
          },
          "3xl": {
            "textStyle": "3xl"
          },
          "4xl": {
            "textStyle": "4xl"
          },
          "5xl": {
            "textStyle": "5xl"
          },
          "6xl": {
            "textStyle": "6xl"
          },
          "7xl": {
            "textStyle": "7xl"
          }
        }
      },
      "defaultVariants": {
        "size": "xl"
      }
    },
    "input": {
      "className": "chakra-input",
      "base": {
        "width": "100%",
        "minWidth": "0",
        "outline": "0",
        "position": "relative",
        "appearance": "none",
        "textAlign": "start",
        "_disabled": {
          "layerStyle": "disabled"
        },
        "height": "var(--input-height)",
        "minW": "var(--input-height)",
        "--focus-color": "colors.colorPalette.focusRing",
        "--error-color": "colors.border.error",
        "_invalid": {
          "focusRingColor": "var(--error-color)",
          "borderColor": "var(--error-color)"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "borderRadius": "control.sm",
            "textStyle": "xs",
            "px": "2",
            "--input-height": "sizes.6"
          },
          "sm": {
            "borderRadius": "control.md",
            "textStyle": "sm",
            "px": "2.5",
            "--input-height": "sizes.7"
          },
          "md": {
            "borderRadius": "control.md",
            "textStyle": "sm",
            "px": "3",
            "--input-height": "sizes.8"
          },
          "lg": {
            "borderRadius": "control.lg",
            "textStyle": "md",
            "px": "4.5",
            "--input-height": "sizes.10"
          },
          "xl": {
            "borderRadius": "control.lg",
            "textStyle": "md",
            "px": "6",
            "--input-height": "sizes.12"
          }
        },
        "variant": {
          "outline": {
            "bg": "transparent",
            "borderWidth": "1px",
            "borderColor": "border",
            "focusVisibleRing": "inside",
            "focusRingWidth": "0",
            "_hover": {
              "borderColor": "border.emphasized",
              "_focusVisible": {
                "borderColor": "var(--focus-ring-color)"
              }
            }
          },
          "subtle": {
            "borderWidth": "1px",
            "borderColor": "transparent",
            "bg": "bg.muted",
            "focusVisibleRing": "inside"
          },
          "flushed": {
            "bg": "transparent",
            "borderBottomWidth": "1px",
            "borderBottomColor": "border",
            "borderRadius": "0",
            "px": "0",
            "_focusVisible": {
              "borderColor": "var(--focus-color)",
              "boxShadow": "0px 1px 0px 0px var(--focus-color)"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "inputAddon": {
      "className": "chakra-input-addon",
      "base": {
        "flex": "0 0 auto",
        "width": "auto",
        "height": "var(--input-height)",
        "display": "flex",
        "alignItems": "center",
        "whiteSpace": "nowrap"
      },
      "variants": {
        "size": {
          "xs": {
            "borderRadius": "control.sm",
            "textStyle": "xs",
            "px": "2",
            "--input-height": "sizes.6"
          },
          "sm": {
            "borderRadius": "control.md",
            "textStyle": "sm",
            "px": "2.5",
            "--input-height": "sizes.7"
          },
          "md": {
            "borderRadius": "control.md",
            "textStyle": "sm",
            "px": "3",
            "--input-height": "sizes.8"
          },
          "lg": {
            "borderRadius": "control.lg",
            "textStyle": "md",
            "px": "4.5",
            "--input-height": "sizes.10"
          },
          "xl": {
            "borderRadius": "control.lg",
            "textStyle": "md",
            "px": "6",
            "--input-height": "sizes.12"
          }
        },
        "variant": {
          "outline": {
            "border": "1px solid",
            "borderColor": "border",
            "bg": "bg.muted"
          },
          "subtle": {
            "border": "2px solid",
            "borderColor": "transparent",
            "bg": {
              "_light": "gray.100",
              "_dark": "white/10"
            }
          },
          "flushed": {
            "borderBottom": "1px solid",
            "borderColor": "inherit",
            "borderRadius": "0",
            "px": "0",
            "bg": "transparent"
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "kbd": {
      "className": "chakra-kbd",
      "base": {
        "display": "inline-flex",
        "alignItems": "center",
        "fontWeight": "medium",
        "fontFamily": "body",
        "flexShrink": "0",
        "whiteSpace": "nowrap",
        "wordSpacing": "-0.5em",
        "userSelect": "none",
        "px": "1",
        "borderRadius": "indicator.md"
      },
      "variants": {
        "variant": {
          "raised": {
            "bg": "colorPalette.subtle",
            "color": "colorPalette.fg",
            "borderWidth": "1px",
            "borderBottomWidth": "2px",
            "borderColor": "colorPalette.muted"
          },
          "outline": {
            "borderWidth": "1px",
            "color": "colorPalette.fg"
          },
          "subtle": {
            "bg": "colorPalette.subtle",
            "color": "colorPalette.fg"
          },
          "plain": {
            "color": "colorPalette.fg"
          }
        },
        "size": {
          "sm": {
            "textStyle": "xs",
            "height": "4.5"
          },
          "md": {
            "textStyle": "xs",
            "height": "5"
          },
          "lg": {
            "textStyle": "sm",
            "height": "6"
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "subtle"
      }
    },
    "link": {
      "className": "chakra-link",
      "base": {
        "display": "inline-flex",
        "alignItems": "center",
        "outline": "none",
        "gap": "1.5",
        "cursor": "pointer",
        "borderRadius": "control.sm",
        "focusRing": "outside"
      },
      "variants": {
        "variant": {
          "underline": {
            "color": "colorPalette.fg",
            "textDecoration": "underline",
            "textUnderlineOffset": "3px",
            "textDecorationColor": "currentColor/20"
          },
          "plain": {
            "color": "colorPalette.fg",
            "_hover": {
              "textDecoration": "underline",
              "textUnderlineOffset": "3px",
              "textDecorationColor": "currentColor/20"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "plain"
      }
    },
    "mark": {
      "className": "chakra-mark",
      "base": {
        "bg": "transparent",
        "color": "inherit",
        "whiteSpace": "nowrap"
      },
      "variants": {
        "variant": {
          "subtle": {
            "bg": "colorPalette.subtle",
            "color": "inherit"
          },
          "solid": {
            "bg": "colorPalette.solid",
            "color": "colorPalette.contrast"
          },
          "text": {
            "fontWeight": "medium"
          },
          "plain": {}
        }
      }
    },
    "separator": {
      "className": "chakra-separator",
      "base": {
        "display": "block",
        "borderColor": "border"
      },
      "variants": {
        "variant": {
          "solid": {
            "borderStyle": "solid"
          },
          "dashed": {
            "borderStyle": "dashed"
          },
          "dotted": {
            "borderStyle": "dotted"
          }
        },
        "orientation": {
          "vertical": {
            "height": "100%",
            "borderInlineStartWidth": "var(--separator-thickness)"
          },
          "horizontal": {
            "width": "100%",
            "borderTopWidth": "var(--separator-thickness)"
          }
        },
        "size": {
          "xs": {
            "--separator-thickness": "0.5px"
          },
          "sm": {
            "--separator-thickness": "1px"
          },
          "md": {
            "--separator-thickness": "2px"
          },
          "lg": {
            "--separator-thickness": "3px"
          }
        }
      },
      "defaultVariants": {
        "size": "sm",
        "variant": "solid",
        "orientation": "horizontal"
      }
    },
    "skeleton": {
      "className": "chakra-skeleton",
      "base": {},
      "variants": {
        "loading": {
          "true": {
            "borderRadius": "panel.md",
            "boxShadow": "none",
            "backgroundClip": "padding-box",
            "cursor": "default",
            "color": "transparent",
            "pointerEvents": "none",
            "userSelect": "none",
            "flexShrink": "0",
            "&::before, &::after, *": {
              "visibility": "hidden"
            }
          },
          "false": {
            "background": "unset",
            "animation": "fade-in var(--fade-duration, 0.1s) ease-out !important"
          }
        },
        "variant": {
          "pulse": {
            "background": "bg.emphasized",
            "animation": "pulse",
            "animationDuration": "var(--duration, 1.2s)"
          },
          "shine": {
            "--animate-from": "200%",
            "--animate-to": "-200%",
            "--start-color": "colors.bg.muted",
            "--end-color": "colors.bg.emphasized",
            "backgroundImage": "linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))",
            "backgroundSize": "400% 100%",
            "animation": "bg-position var(--duration, 5s) ease-in-out infinite"
          },
          "none": {
            "animation": "none"
          }
        }
      },
      "defaultVariants": {
        "variant": "pulse",
        "loading": true
      }
    },
    "skipNavLink": {
      "className": "chakra-skip-nav",
      "base": {
        "display": "inline-flex",
        "bg": "bg.panel",
        "padding": "2.5",
        "borderRadius": "control.md",
        "fontWeight": "semibold",
        "focusVisibleRing": "outside",
        "textStyle": "sm",
        "userSelect": "none",
        "border": "0",
        "height": "1px",
        "width": "1px",
        "margin": "-1px",
        "outline": "0",
        "overflow": "hidden",
        "position": "absolute",
        "clip": "rect(0 0 0 0)",
        "_focusVisible": {
          "clip": "auto",
          "width": "auto",
          "height": "auto",
          "position": "fixed",
          "top": "6",
          "insetStart": "6"
        }
      }
    },
    "spinner": {
      "className": "chakra-spinner",
      "base": {
        "display": "inline-block",
        "borderColor": "currentColor",
        "borderStyle": "solid",
        "borderWidth": "2px",
        "borderRadius": "full",
        "width": "var(--spinner-size)",
        "height": "var(--spinner-size)",
        "animation": "spin",
        "animationDuration": "slowest",
        "--spinner-track-color": "transparent",
        "borderBottomColor": "var(--spinner-track-color)",
        "borderInlineStartColor": "var(--spinner-track-color)"
      },
      "variants": {
        "size": {
          "inherit": {
            "--spinner-size": "1em"
          },
          "xs": {
            "--spinner-size": "sizes.3"
          },
          "sm": {
            "--spinner-size": "sizes.4"
          },
          "md": {
            "--spinner-size": "sizes.5"
          },
          "lg": {
            "--spinner-size": "sizes.8"
          },
          "xl": {
            "--spinner-size": "sizes.10"
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "textarea": {
      "className": "chakra-textarea",
      "base": {
        "width": "100%",
        "minWidth": "0",
        "outline": "0",
        "position": "relative",
        "appearance": "none",
        "textAlign": "start",
        "_disabled": {
          "layerStyle": "disabled"
        },
        "--focus-color": "colors.colorPalette.focusRing",
        "--error-color": "colors.border.error",
        "_invalid": {
          "focusRingColor": "var(--error-color)",
          "borderColor": "var(--error-color)"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "borderRadius": "control.sm",
            "textStyle": "xs",
            "px": "2",
            "py": "1",
            "scrollPaddingBottom": "1"
          },
          "sm": {
            "borderRadius": "control.md",
            "textStyle": "sm",
            "px": "2.5",
            "py": "1.5",
            "scrollPaddingBottom": "1.5"
          },
          "md": {
            "borderRadius": "control.md",
            "textStyle": "sm",
            "px": "3",
            "py": "1.5",
            "scrollPaddingBottom": "1.5"
          },
          "lg": {
            "borderRadius": "control.lg",
            "textStyle": "md",
            "px": "4",
            "py": "2",
            "scrollPaddingBottom": "2"
          },
          "xl": {
            "borderRadius": "control.lg",
            "textStyle": "md",
            "px": "4.5",
            "py": "3.5",
            "scrollPaddingBottom": "3.5"
          }
        },
        "variant": {
          "outline": {
            "bg": "transparent",
            "borderWidth": "1px",
            "borderColor": "border",
            "focusVisibleRing": "inside",
            "focusRingWidth": 0
          },
          "subtle": {
            "borderWidth": "1px",
            "borderColor": "transparent",
            "bg": "bg.muted",
            "focusVisibleRing": "inside"
          },
          "flushed": {
            "bg": "transparent",
            "borderBottomWidth": "1px",
            "borderBottomColor": "border",
            "borderRadius": "0",
            "px": "0",
            "_focusVisible": {
              "borderColor": "var(--focus-color)",
              "boxShadow": "0px 1px 0px 0px var(--focus-color)"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "icon": {
      "className": "chakra-icon",
      "base": {
        "display": "inline-block",
        "lineHeight": "1em",
        "flexShrink": "0",
        "color": "currentcolor",
        "verticalAlign": "middle",
        "width": "var(--icon-size)",
        "height": "var(--icon-size)"
      },
      "variants": {
        "size": {
          "inherit": {
            "--icon-size": "1em"
          },
          "xs": {
            "--icon-size": "sizes.3"
          },
          "sm": {
            "--icon-size": "sizes.4"
          },
          "md": {
            "--icon-size": "sizes.5"
          },
          "lg": {
            "--icon-size": "sizes.6"
          },
          "xl": {
            "--icon-size": "sizes.7"
          },
          "2xl": {
            "--icon-size": "sizes.8"
          }
        }
      },
      "defaultVariants": {
        "size": "inherit"
      }
    },
    "checkmark": {
      "className": "chakra-checkmark",
      "base": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexShrink": "0",
        "color": "white",
        "borderWidth": "1px",
        "borderColor": "transparent",
        "borderRadius": "control.md",
        "focusVisibleRing": "outside",
        "_invalid": {
          "colorPalette": "red",
          "borderColor": "border.error"
        },
        "_disabled": {
          "opacity": "0.5"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "boxSize": "3"
          },
          "sm": {
            "boxSize": "3.5"
          },
          "md": {
            "boxSize": "4",
            "p": "0.5"
          },
          "lg": {
            "boxSize": "5",
            "p": "0.5"
          }
        },
        "variant": {
          "solid": {
            "borderColor": "border.emphasized",
            "&:is([data-state=checked], [data-state=indeterminate])": {
              "bg": "colorPalette.solid",
              "color": "colorPalette.contrast",
              "borderColor": "colorPalette.solid"
            }
          },
          "outline": {
            "borderColor": "border.emphasized",
            "&:is([data-state=checked], [data-state=indeterminate])": {
              "color": "colorPalette.fg",
              "borderColor": "colorPalette.solid"
            }
          },
          "subtle": {
            "bg": "colorPalette.muted",
            "borderColor": "colorPalette.emphasized",
            "&:is([data-state=checked], [data-state=indeterminate])": {
              "color": "colorPalette.fg"
            }
          },
          "plain": {
            "&:is([data-state=checked], [data-state=indeterminate])": {
              "color": "colorPalette.fg"
            }
          },
          "inverted": {
            "borderColor": "border",
            "color": "colorPalette.fg",
            "&:is([data-state=checked], [data-state=indeterminate])": {
              "borderColor": "colorPalette.solid"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "solid",
        "size": "md"
      }
    },
    "radiomark": {
      "className": "chakra-radiomark",
      "base": {
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexShrink": 0,
        "verticalAlign": "top",
        "color": "white",
        "borderWidth": "1px",
        "borderColor": "transparent",
        "borderRadius": "full",
        "cursor": "radio",
        "_focusVisible": {
          "focusVisibleRing": "outside"
        },
        "_invalid": {
          "colorPalette": "red",
          "borderColor": "red.500"
        },
        "_disabled": {
          "opacity": "0.5",
          "cursor": "disabled"
        },
        "& .dot": {
          "height": "100%",
          "width": "100%",
          "borderRadius": "full",
          "bg": "currentColor",
          "scale": "0.4"
        }
      },
      "variants": {
        "variant": {
          "solid": {
            "borderWidth": "1px",
            "borderColor": "border",
            "_checked": {
              "bg": "colorPalette.solid",
              "color": "colorPalette.contrast",
              "borderColor": "colorPalette.solid"
            }
          },
          "subtle": {
            "borderWidth": "1px",
            "bg": "colorPalette.muted",
            "borderColor": "colorPalette.muted",
            "color": "transparent",
            "_checked": {
              "color": "colorPalette.fg"
            }
          },
          "outline": {
            "borderWidth": "1px",
            "borderColor": "inherit",
            "_checked": {
              "color": "colorPalette.fg",
              "borderColor": "colorPalette.solid"
            },
            "& .dot": {
              "scale": "0.6"
            }
          },
          "inverted": {
            "bg": "bg",
            "borderWidth": "1px",
            "borderColor": "inherit",
            "_checked": {
              "color": "colorPalette.solid",
              "borderColor": "currentcolor"
            }
          }
        },
        "size": {
          "xs": {
            "boxSize": "3"
          },
          "sm": {
            "boxSize": "3.5"
          },
          "md": {
            "boxSize": "4"
          },
          "lg": {
            "boxSize": "5"
          }
        }
      },
      "defaultVariants": {
        "variant": "solid",
        "size": "md"
      }
    },
    "suiCommand": {
      "className": "sui-command",
      "base": {
        "colorPalette": "gray",
        "display": "inline-flex",
        "gap": 1,
        "color": "fg.muted",
        "[role=tooltip] > &": {
          "ms": 1,
          "_before": {
            "content": "\"•\"",
            "me": 1,
            "fontSize": "xs"
          }
        }
      },
      "variants": {
        "size": {
          "sm": {
            "fontSize": "xs"
          },
          "md": {
            "fontSize": "sm"
          },
          "lg": {
            "fontSize": "md"
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "suiIconBadge": {
      "className": "sui-icon-badge",
      "base": {
        "colorPalette": "gray",
        "display": "inline-flex",
        "alignItems": "center",
        "justifyContent": "center"
      },
      "variants": {
        "variant": {
          "outline": {
            "borderWidth": "1px",
            "borderColor": "colorPalette.subtle",
            "color": "colorPalette.fg"
          },
          "solid": {
            "bg": "colorPalette.solid",
            "color": "white"
          },
          "subtle": {
            "bg": "colorPalette.subtle",
            "color": "colorPalette.fg"
          }
        },
        "size": {
          "sm": {
            "borderRadius": "sm",
            "fontSize": "0.9em",
            "w": 6,
            "h": 6
          },
          "md": {
            "borderRadius": "md",
            "fontSize": "1.1em",
            "w": 8,
            "h": 8
          },
          "lg": {
            "borderRadius": "md",
            "fontSize": "1.3em",
            "w": 10,
            "h": 10
          },
          "xl": {
            "borderRadius": "md",
            "fontSize": "1.5em",
            "w": 12,
            "h": 12
          }
        }
      },
      "defaultVariants": {
        "variant": "outline",
        "size": "md"
      }
    }
  },
  "slotRecipes": {
    "accordion": {
      "className": "chakra-accordion",
      "slots": [
        "root",
        "item",
        "itemTrigger",
        "itemContent",
        "itemIndicator",
        "itemBody"
      ],
      "base": {
        "root": {
          "width": "full",
          "--accordion-radius": "radii.panel.md"
        },
        "item": {
          "overflowAnchor": "none"
        },
        "itemTrigger": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "space-between",
          "width": "full",
          "outline": "0",
          "gap": "3",
          "fontWeight": "medium",
          "borderRadius": "var(--accordion-radius)",
          "_focusVisible": {
            "outline": "2px solid",
            "outlineColor": "colorPalette.focusRing"
          },
          "_disabled": {
            "layerStyle": "disabled"
          }
        },
        "itemBody": {
          "pt": "var(--accordion-padding-y)",
          "pb": "calc(var(--accordion-padding-y) * 2)"
        },
        "itemContent": {
          "overflow": "hidden",
          "borderRadius": "var(--accordion-radius)",
          "_open": {
            "animationName": "expand-height, fade-in",
            "animationDuration": "moderate"
          },
          "_closed": {
            "animationName": "collapse-height, fade-out",
            "animationDuration": "moderate"
          }
        },
        "itemIndicator": {
          "transition": "rotate 0.2s",
          "transformOrigin": "center",
          "color": "fg.subtle",
          "_open": {
            "rotate": "90deg"
          },
          "_icon": {
            "width": "1.2em",
            "height": "1.2em"
          }
        }
      },
      "variants": {
        "variant": {
          "outline": {
            "item": {
              "borderBottomWidth": "1px"
            }
          },
          "subtle": {
            "itemTrigger": {
              "px": "var(--accordion-padding-x)"
            },
            "itemContent": {
              "px": "var(--accordion-padding-x)"
            },
            "item": {
              "borderRadius": "var(--accordion-radius)",
              "_open": {
                "bg": "colorPalette.subtle"
              }
            }
          },
          "enclosed": {
            "root": {
              "borderWidth": "1px",
              "borderRadius": "var(--accordion-radius)",
              "divideY": "1px",
              "overflow": "hidden"
            },
            "itemTrigger": {
              "px": "var(--accordion-padding-x)"
            },
            "itemContent": {
              "px": "var(--accordion-padding-x)"
            },
            "item": {
              "_open": {
                "bg": "bg.subtle"
              }
            }
          },
          "plain": {}
        },
        "size": {
          "sm": {
            "root": {
              "--accordion-padding-x": "spacing.3",
              "--accordion-padding-y": "spacing.2"
            },
            "itemTrigger": {
              "textStyle": "sm",
              "py": "var(--accordion-padding-y)"
            }
          },
          "md": {
            "root": {
              "--accordion-padding-x": "spacing.4",
              "--accordion-padding-y": "spacing.2"
            },
            "itemTrigger": {
              "textStyle": "md",
              "py": "var(--accordion-padding-y)"
            }
          },
          "lg": {
            "root": {
              "--accordion-padding-x": "spacing.4.5",
              "--accordion-padding-y": "spacing.2.5"
            },
            "itemTrigger": {
              "textStyle": "lg",
              "py": "var(--accordion-padding-y)"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "actionBar": {
      "className": "chakra-action-bar",
      "slots": [
        "positioner",
        "content",
        "separator",
        "selectionTrigger",
        "closeTrigger"
      ],
      "base": {
        "positioner": {
          "position": "fixed",
          "display": "flex",
          "justifyContent": "center",
          "pointerEvents": "none",
          "insetInline": "0",
          "top": "unset",
          "bottom": "calc(env(safe-area-inset-bottom) + 20px)"
        },
        "content": {
          "bg": "bg.panel",
          "shadow": "md",
          "display": "flex",
          "alignItems": "center",
          "gap": "3",
          "borderRadius": "panel.md",
          "py": "2.5",
          "px": "3",
          "pointerEvents": "auto",
          "translate": "calc(-1 * var(--scrollbar-width) / 2) 0px",
          "_open": {
            "animationName": "slide-from-bottom, fade-in",
            "animationDuration": "moderate"
          },
          "_closed": {
            "animationName": "slide-to-bottom, fade-out",
            "animationDuration": "faster"
          }
        },
        "separator": {
          "width": "1px",
          "height": "5",
          "bg": "border"
        },
        "selectionTrigger": {
          "display": "inline-flex",
          "alignItems": "center",
          "gap": "2",
          "alignSelf": "stretch",
          "textStyle": "sm",
          "px": "4",
          "py": "1",
          "borderRadius": "control.md",
          "borderWidth": "1px",
          "borderStyle": "dashed"
        }
      }
    },
    "alert": {
      "slots": [
        "title",
        "description",
        "root",
        "indicator",
        "content"
      ],
      "className": "chakra-alert",
      "base": {
        "root": {
          "width": "full",
          "display": "flex",
          "alignItems": "flex-start",
          "position": "relative"
        },
        "title": {
          "fontWeight": "medium"
        },
        "description": {
          "display": "inline"
        },
        "indicator": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": "0",
          "width": "1em",
          "height": "1em"
        },
        "content": {
          "display": "flex",
          "flex": "1",
          "gap": "1"
        }
      },
      "variants": {
        "status": {
          "info": {
            "root": {
              "colorPalette": "blue"
            }
          },
          "warning": {
            "root": {
              "colorPalette": "orange"
            }
          },
          "success": {
            "root": {
              "colorPalette": "green"
            }
          },
          "error": {
            "root": {
              "colorPalette": "red"
            }
          },
          "neutral": {
            "root": {
              "colorPalette": "gray"
            }
          }
        },
        "inline": {
          "true": {
            "content": {
              "display": "inline-flex",
              "flexDirection": "row",
              "alignItems": "center"
            }
          },
          "false": {
            "content": {
              "display": "flex",
              "flexDirection": "column"
            }
          }
        },
        "variant": {
          "subtle": {
            "root": {
              "bg": "colorPalette.subtle",
              "color": "colorPalette.fg"
            }
          },
          "surface": {
            "root": {
              "bg": "colorPalette.subtle",
              "color": "colorPalette.fg",
              "shadow": "inset 0 0 0px 1px var(--shadow-color)",
              "shadowColor": "colorPalette.solid"
            },
            "indicator": {
              "color": "colorPalette.fg"
            }
          },
          "outline": {
            "root": {
              "color": "colorPalette.fg",
              "shadow": "inset 0 0 0px 1px var(--shadow-color)",
              "shadowColor": "colorPalette.subtle"
            },
            "indicator": {
              "color": "colorPalette.fg"
            }
          },
          "solid": {
            "root": {
              "bg": "colorPalette.solid",
              "color": "colorPalette.contrast"
            },
            "indicator": {
              "color": "colorPalette.contrast"
            }
          }
        },
        "size": {
          "sm": {
            "root": {
              "gap": "2",
              "px": "3",
              "py": "3",
              "textStyle": "xs",
              "borderRadius": "panel.sm"
            },
            "indicator": {
              "textStyle": "lg"
            }
          },
          "md": {
            "root": {
              "gap": "3",
              "px": "4",
              "py": "4",
              "textStyle": "sm",
              "borderRadius": "panel.md"
            },
            "indicator": {
              "textStyle": "xl"
            }
          },
          "lg": {
            "root": {
              "gap": "3",
              "px": "4",
              "py": "4",
              "textStyle": "md",
              "borderRadius": "panel.lg"
            },
            "indicator": {
              "textStyle": "2xl"
            }
          }
        }
      },
      "defaultVariants": {
        "status": "info",
        "variant": "subtle",
        "size": "md",
        "inline": false
      }
    },
    "avatar": {
      "slots": [
        "root",
        "image",
        "fallback"
      ],
      "className": "chakra-avatar",
      "base": {
        "root": {
          "--avatar-font-size": "calc(var(--avatar-size) / 2)",
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "fontWeight": "medium",
          "position": "relative",
          "verticalAlign": "top",
          "flexShrink": "0",
          "userSelect": "none",
          "width": "var(--avatar-size)",
          "height": "var(--avatar-size)",
          "fontSize": "var(--avatar-font-size)",
          "borderRadius": "var(--avatar-radius)",
          "&[data-group-item]": {
            "borderWidth": "2px",
            "borderColor": "bg"
          }
        },
        "image": {
          "width": "100%",
          "height": "100%",
          "objectFit": "cover",
          "borderRadius": "var(--avatar-radius)"
        },
        "fallback": {
          "lineHeight": "1",
          "textTransform": "uppercase",
          "fontWeight": "medium",
          "fontSize": "var(--avatar-font-size)",
          "borderRadius": "var(--avatar-radius)"
        }
      },
      "variants": {
        "size": {
          "full": {
            "root": {
              "--avatar-size": "100%",
              "--avatar-font-size": "calc(var(--tag-avatar-size) / 2)"
            }
          },
          "2xs": {
            "root": {
              "--avatar-size": "sizes.4"
            }
          },
          "xs": {
            "root": {
              "--avatar-size": "sizes.5"
            }
          },
          "sm": {
            "root": {
              "--avatar-size": "sizes.6"
            }
          },
          "md": {
            "root": {
              "--avatar-size": "sizes.9"
            }
          },
          "lg": {
            "root": {
              "--avatar-size": "sizes.12"
            }
          },
          "xl": {
            "root": {
              "--avatar-size": "sizes.16"
            }
          },
          "2xl": {
            "root": {
              "--avatar-size": "sizes.20"
            }
          }
        },
        "variant": {
          "solid": {
            "root": {
              "bg": "colorPalette.solid",
              "color": "colorPalette.contrast"
            }
          },
          "subtle": {
            "root": {
              "bg": "colorPalette.muted",
              "color": "colorPalette.fg"
            }
          },
          "outline": {
            "root": {
              "color": "colorPalette.fg",
              "borderWidth": "1px",
              "borderColor": "colorPalette.muted"
            }
          }
        },
        "shape": {
          "square": {},
          "rounded": {
            "root": {
              "--avatar-radius": "radii.indicator.md"
            }
          },
          "full": {
            "root": {
              "--avatar-radius": "radii.full"
            }
          }
        },
        "borderless": {
          "true": {
            "root": {
              "&[data-group-item]": {
                "borderWidth": "0px"
              }
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "shape": "full",
        "variant": "solid"
      }
    },
    "blockquote": {
      "className": "chakra-blockquote",
      "slots": [
        "root",
        "icon",
        "content",
        "caption"
      ],
      "base": {
        "root": {
          "position": "relative",
          "display": "flex",
          "flexDirection": "column",
          "gap": "2"
        },
        "caption": {
          "textStyle": "sm",
          "color": "fg.muted"
        },
        "icon": {
          "boxSize": "5"
        }
      },
      "variants": {
        "justify": {
          "start": {
            "root": {
              "alignItems": "flex-start",
              "textAlign": "start"
            }
          },
          "center": {
            "root": {
              "alignItems": "center",
              "textAlign": "center"
            }
          },
          "end": {
            "root": {
              "alignItems": "flex-end",
              "textAlign": "end"
            }
          }
        },
        "variant": {
          "subtle": {
            "root": {
              "paddingX": "5",
              "borderStartWidth": "4px",
              "borderStartColor": "colorPalette.muted"
            },
            "icon": {
              "color": "colorPalette.fg"
            }
          },
          "solid": {
            "root": {
              "paddingX": "5",
              "borderStartWidth": "4px",
              "borderStartColor": "colorPalette.solid"
            },
            "icon": {
              "color": "colorPalette.solid"
            }
          },
          "plain": {
            "root": {
              "paddingX": "5"
            },
            "icon": {
              "color": "colorPalette.solid"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "subtle",
        "justify": "start"
      }
    },
    "breadcrumb": {
      "className": "chakra-breadcrumb",
      "slots": [
        "link",
        "currentLink",
        "item",
        "list",
        "root",
        "ellipsis",
        "separator"
      ],
      "base": {
        "list": {
          "display": "flex",
          "alignItems": "center",
          "wordBreak": "break-word",
          "color": "fg.muted"
        },
        "link": {
          "outline": "0",
          "textDecoration": "none",
          "borderRadius": "control.sm",
          "focusRing": "outside",
          "display": "inline-flex",
          "alignItems": "center",
          "gap": "2"
        },
        "item": {
          "display": "inline-flex",
          "alignItems": "center"
        },
        "separator": {
          "color": "fg.muted",
          "opacity": "0.8",
          "_icon": {
            "boxSize": "1em"
          }
        },
        "ellipsis": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "_icon": {
            "boxSize": "1em"
          }
        }
      },
      "variants": {
        "variant": {
          "underline": {
            "link": {
              "color": "colorPalette.fg",
              "textDecoration": "underline",
              "textUnderlineOffset": "0.2em",
              "textDecorationColor": "colorPalette.muted"
            },
            "currentLink": {
              "color": "colorPalette.fg"
            }
          },
          "plain": {
            "link": {
              "color": "fg.muted",
              "_hover": {
                "color": "fg"
              }
            },
            "currentLink": {
              "color": "fg"
            }
          }
        },
        "size": {
          "sm": {
            "list": {
              "gap": "1",
              "textStyle": "xs"
            }
          },
          "md": {
            "list": {
              "gap": "1.5",
              "textStyle": "sm"
            }
          },
          "lg": {
            "list": {
              "gap": "2",
              "textStyle": "md"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "plain",
        "size": "md"
      }
    },
    "card": {
      "className": "chakra-card",
      "slots": [
        "root",
        "header",
        "body",
        "footer",
        "title",
        "description"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "position": "relative",
          "minWidth": "0",
          "wordWrap": "break-word",
          "borderRadius": "lg",
          "color": "fg",
          "textAlign": "start"
        },
        "title": {
          "fontWeight": "semibold"
        },
        "description": {
          "color": "fg.muted",
          "fontSize": "sm"
        },
        "header": {
          "padding": "var(--card-padding)",
          "display": "flex",
          "flexDirection": "column",
          "gap": "1"
        },
        "body": {
          "padding": "var(--card-padding)",
          "flex": "1",
          "display": "flex",
          "flexDirection": "column",
          "&:is(.chakra-card__header + &)": {
            "paddingTop": 0
          }
        },
        "footer": {
          "display": "flex",
          "alignItems": "center",
          "gap": "2",
          "padding": "var(--card-padding)",
          "paddingTop": 0
        }
      },
      "variants": {
        "size": {
          "sm": {
            "root": {
              "--card-padding": "spacing.2.5"
            },
            "title": {
              "fontSize": "sm"
            }
          },
          "md": {
            "root": {
              "--card-padding": "spacing.4"
            },
            "title": {
              "fontSize": "md"
            }
          },
          "lg": {
            "root": {
              "--card-padding": "spacing.6"
            },
            "title": {
              "fontSize": "lg"
            }
          }
        },
        "variant": {
          "elevated": {
            "root": {
              "bg": "bg.panel",
              "boxShadow": "md",
              "borderWidth": "0.5px",
              "borderColor": "border",
              "_pressable": {
                "transitionProperty": "common",
                "transitionDuration": "fast",
                "_hover": {
                  "borderColor": "border.emphasized"
                }
              }
            }
          },
          "outline": {
            "root": {
              "bg": "bg.panel",
              "borderWidth": "1px",
              "borderColor": "border",
              "_pressable": {
                "transitionProperty": "common",
                "transitionDuration": "fast",
                "_hover": {
                  "borderColor": "border.emphasized"
                }
              }
            }
          },
          "subtle": {
            "root": {
              "bg": "colorPalette.muted"
            }
          },
          "solid": {
            "root": {
              "bg": "colorPalette.solid",
              "color": "colorPalette.contrast",
              "_pressable": {
                "_hover": {
                  "bg": "colorPalette.solid/80"
                }
              }
            },
            "description": {
              "color": "colorPalette.contrast/80"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "outline",
        "size": "md"
      }
    },
    "checkbox": {
      "slots": [
        "root",
        "label",
        "control",
        "indicator",
        "group"
      ],
      "className": "chakra-checkbox",
      "base": {
        "root": {
          "colorPalette": "accent",
          "display": "inline-flex",
          "gap": "2",
          "alignItems": "center",
          "verticalAlign": "top",
          "position": "relative"
        },
        "control": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": "0",
          "color": "white",
          "borderWidth": "1px",
          "borderColor": "transparent",
          "borderRadius": "control.md",
          "focusVisibleRing": "outside",
          "_invalid": {
            "colorPalette": "red",
            "borderColor": "border.error"
          },
          "_disabled": {
            "opacity": "0.5"
          }
        },
        "label": {
          "fontWeight": "medium",
          "userSelect": "none",
          "_disabled": {
            "opacity": "0.5"
          }
        }
      },
      "variants": {
        "size": {
          "xs": {
            "root": {
              "gap": "1.5"
            },
            "label": {
              "textStyle": "xs"
            },
            "control": {
              "boxSize": "3"
            }
          },
          "sm": {
            "root": {
              "gap": "2"
            },
            "label": {
              "textStyle": "sm"
            },
            "control": {
              "boxSize": "3.5"
            }
          },
          "md": {
            "root": {
              "gap": "2.5"
            },
            "label": {
              "textStyle": "sm"
            },
            "control": {
              "boxSize": "4",
              "p": "0.5"
            }
          },
          "lg": {
            "root": {
              "gap": "3"
            },
            "label": {
              "textStyle": "md"
            },
            "control": {
              "boxSize": "5",
              "p": "0.5"
            }
          }
        },
        "variant": {
          "outline": {
            "control": {
              "borderColor": "border.emphasized",
              "&:is([data-state=checked], [data-state=indeterminate])": {
                "color": "colorPalette.fg",
                "borderColor": "colorPalette.solid"
              }
            }
          },
          "solid": {
            "control": {
              "borderColor": "border.emphasized",
              "&:is([data-state=checked], [data-state=indeterminate])": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            }
          },
          "subtle": {
            "control": {
              "bg": "colorPalette.muted",
              "borderColor": "colorPalette.emphasized",
              "&:is([data-state=checked], [data-state=indeterminate])": {
                "color": "colorPalette.fg"
              }
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "solid",
        "size": "md"
      }
    },
    "checkboxCard": {
      "slots": [
        "root",
        "control",
        "label",
        "description",
        "addon",
        "indicator",
        "content"
      ],
      "className": "chakra-checkbox-card",
      "base": {
        "root": {
          "colorPalette": "accent",
          "display": "flex",
          "flexDirection": "column",
          "userSelect": "none",
          "position": "relative",
          "borderRadius": "panel.md",
          "flex": "1",
          "focusVisibleRing": "outside",
          "_disabled": {
            "opacity": "0.8",
            "borderColor": "border.subtle"
          },
          "_invalid": {
            "outline": "2px solid",
            "outlineColor": "border.error"
          }
        },
        "control": {
          "display": "inline-flex",
          "flex": "1",
          "position": "relative",
          "borderRadius": "panel.md",
          "justifyContent": "var(--checkbox-card-justify)",
          "alignItems": "var(--checkbox-card-align)"
        },
        "label": {
          "fontWeight": "medium",
          "display": "flex",
          "alignItems": "center",
          "gap": "2",
          "_disabled": {
            "opacity": "0.5"
          }
        },
        "description": {
          "opacity": "0.64",
          "textStyle": "sm"
        },
        "addon": {
          "_disabled": {
            "opacity": "0.5"
          }
        },
        "indicator": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": "0",
          "color": "white",
          "borderWidth": "1px",
          "borderColor": "transparent",
          "borderRadius": "control.md",
          "focusVisibleRing": "outside",
          "_invalid": {
            "colorPalette": "red",
            "borderColor": "border.error"
          },
          "_disabled": {
            "opacity": "0.5"
          }
        },
        "content": {
          "display": "flex",
          "flexDirection": "column",
          "flex": "1",
          "gap": "1",
          "justifyContent": "var(--checkbox-card-justify)",
          "alignItems": "var(--checkbox-card-align)"
        }
      },
      "variants": {
        "size": {
          "sm": {
            "root": {
              "textStyle": "sm"
            },
            "control": {
              "padding": "3",
              "gap": "1.5"
            },
            "addon": {
              "px": "3",
              "py": "1.5",
              "borderTopWidth": "1px"
            },
            "indicator": {
              "boxSize": "3.5"
            }
          },
          "md": {
            "root": {
              "textStyle": "sm"
            },
            "control": {
              "padding": "4",
              "gap": "2.5"
            },
            "addon": {
              "px": "4",
              "py": "2",
              "borderTopWidth": "1px"
            },
            "indicator": {
              "boxSize": "4",
              "p": "0.5"
            }
          },
          "lg": {
            "root": {
              "textStyle": "md"
            },
            "control": {
              "padding": "4",
              "gap": "3.5"
            },
            "addon": {
              "px": "4",
              "py": "2",
              "borderTopWidth": "1px"
            },
            "indicator": {
              "boxSize": "5",
              "p": "0.5"
            }
          }
        },
        "variant": {
          "surface": {
            "root": {
              "borderWidth": "1px",
              "borderColor": "border",
              "_checked": {
                "bg": "colorPalette.subtle",
                "color": "colorPalette.fg",
                "borderColor": "colorPalette.muted"
              },
              "_disabled": {
                "bg": "bg.muted"
              }
            },
            "indicator": {
              "borderColor": "border.emphasized",
              "&:is([data-state=checked], [data-state=indeterminate])": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            }
          },
          "subtle": {
            "root": {
              "bg": "bg.muted"
            },
            "control": {
              "_checked": {
                "bg": "colorPalette.muted",
                "color": "colorPalette.fg"
              }
            },
            "indicator": {
              "&:is([data-state=checked], [data-state=indeterminate])": {
                "color": "colorPalette.fg"
              }
            }
          },
          "outline": {
            "root": {
              "borderWidth": "1px",
              "borderColor": "border",
              "_checked": {
                "boxShadow": "0 0 0 1px var(--shadow-color)",
                "boxShadowColor": "colorPalette.solid",
                "borderColor": "colorPalette.solid"
              }
            },
            "indicator": {
              "borderColor": "border.emphasized",
              "&:is([data-state=checked], [data-state=indeterminate])": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            }
          },
          "solid": {
            "root": {
              "borderWidth": "1px",
              "_checked": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            },
            "indicator": {
              "borderColor": "border",
              "color": "colorPalette.fg",
              "&:is([data-state=checked], [data-state=indeterminate])": {
                "borderColor": "colorPalette.solid"
              }
            }
          }
        },
        "justify": {
          "start": {
            "root": {
              "--checkbox-card-justify": "flex-start"
            }
          },
          "end": {
            "root": {
              "--checkbox-card-justify": "flex-end"
            }
          },
          "center": {
            "root": {
              "--checkbox-card-justify": "center"
            }
          }
        },
        "align": {
          "start": {
            "root": {
              "--checkbox-card-align": "flex-start"
            },
            "content": {
              "textAlign": "start"
            }
          },
          "end": {
            "root": {
              "--checkbox-card-align": "flex-end"
            },
            "content": {
              "textAlign": "end"
            }
          },
          "center": {
            "root": {
              "--checkbox-card-align": "center"
            },
            "content": {
              "textAlign": "center"
            }
          }
        },
        "orientation": {
          "vertical": {
            "control": {
              "flexDirection": "column"
            }
          },
          "horizontal": {
            "control": {
              "flexDirection": "row"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline",
        "align": "start",
        "orientation": "horizontal"
      }
    },
    "collapsible": {
      "slots": [
        "root",
        "trigger",
        "content",
        "indicator"
      ],
      "className": "chakra-collapsible",
      "base": {
        "content": {
          "_open": {
            "animationName": "expand-height, fade-in",
            "animationDuration": "moderate"
          },
          "_closed": {
            "animationName": "collapse-height, fade-out",
            "animationDuration": "moderate",
            "overflow": "hidden"
          }
        }
      }
    },
    "dataList": {
      "slots": [
        "root",
        "item",
        "itemLabel",
        "itemValue"
      ],
      "className": "chakra-data-list",
      "base": {
        "itemLabel": {
          "color": "fg.muted",
          "display": "flex",
          "alignItems": "center",
          "gap": "1"
        },
        "itemValue": {
          "display": "flex",
          "minWidth": "0",
          "flex": "1"
        }
      },
      "variants": {
        "orientation": {
          "horizontal": {
            "root": {
              "display": "flex",
              "flexDirection": "column"
            },
            "item": {
              "display": "inline-flex",
              "alignItems": "center",
              "gap": "4"
            },
            "itemLabel": {
              "minWidth": "120px"
            }
          },
          "vertical": {
            "root": {
              "display": "flex",
              "flexDirection": "column"
            },
            "item": {
              "display": "flex",
              "flexDirection": "column",
              "gap": "1"
            }
          }
        },
        "size": {
          "sm": {
            "root": {
              "gap": "3"
            },
            "item": {
              "textStyle": "xs"
            }
          },
          "md": {
            "root": {
              "gap": "4"
            },
            "item": {
              "textStyle": "sm"
            }
          },
          "lg": {
            "root": {
              "gap": "5"
            },
            "item": {
              "textStyle": "md"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "orientation": "horizontal"
      }
    },
    "dialog": {
      "slots": [
        "trigger",
        "backdrop",
        "positioner",
        "content",
        "title",
        "description",
        "closeTrigger",
        "header",
        "body",
        "footer",
        "backdrop"
      ],
      "className": "chakra-dialog",
      "base": {
        "backdrop": {
          "layerStyle": "backdrop",
          "pos": "fixed",
          "left": 0,
          "top": 0,
          "w": "100vw",
          "h": "100dvh",
          "zIndex": "layer-4",
          "_open": {
            "animationName": "fade-in",
            "animationDuration": "slow"
          },
          "_closed": {
            "animationName": "fade-out",
            "animationDuration": "moderate"
          }
        },
        "positioner": {
          "display": "flex",
          "width": "100vw",
          "height": "100dvh",
          "position": "fixed",
          "left": 0,
          "top": 0,
          "--dialog-z-index": "zIndex.layer-4",
          "zIndex": "calc(var(--dialog-z-index) + var(--layer-index, 0))",
          "justifyContent": "center",
          "overscrollBehaviorY": "none"
        },
        "content": {
          "display": "flex",
          "flexDirection": "column",
          "position": "relative",
          "width": "100%",
          "outline": 0,
          "textStyle": "sm",
          "my": "var(--dialog-margin, var(--dialog-base-margin))",
          "zIndex": "calc(var(--dialog-z-index) + var(--layer-index, 0))",
          "layerStyle": "overlay",
          "_open": {
            "animationDuration": "moderate"
          },
          "_closed": {
            "animationDuration": "faster"
          }
        },
        "header": {
          "display": "flex",
          "flex": 0,
          "px": "6",
          "py": "4"
        },
        "body": {
          "flex": "1",
          "px": "6",
          "pt": "2",
          "pb": "6"
        },
        "footer": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "flex-end",
          "gap": "3",
          "px": "6",
          "pt": "2",
          "pb": "4"
        },
        "title": {
          "textStyle": "lg",
          "fontWeight": "semibold"
        },
        "description": {
          "color": "fg.muted"
        },
        "closeTrigger": {
          "position": "absolute",
          "top": "4",
          "right": "4"
        }
      },
      "variants": {
        "variant": {
          "dialog": {},
          "confirm": {
            "content": {
              "textAlign": "center"
            },
            "header": {
              "flexDirection": "column",
              "alignItems": "center"
            },
            "footer": {
              "display": "flex",
              "flexDirection": "column-reverse",
              "justifyContent": "stretch",
              "alignItems": "stretch"
            }
          }
        },
        "placement": {
          "center": {
            "positioner": {
              "alignItems": "center"
            },
            "content": {
              "--dialog-base-margin": "auto",
              "mx": "auto"
            }
          },
          "top": {
            "positioner": {
              "alignItems": "flex-start"
            },
            "content": {
              "--dialog-base-margin": "spacing.16",
              "mx": "auto"
            }
          },
          "bottom": {
            "positioner": {
              "alignItems": "flex-end"
            },
            "content": {
              "--dialog-base-margin": "spacing.16",
              "mx": "auto"
            }
          }
        },
        "scrollBehavior": {
          "inside": {
            "positioner": {
              "overflow": "hidden"
            },
            "content": {
              "maxH": "calc(100% - 7.5rem)"
            },
            "body": {
              "overflow": "auto"
            }
          },
          "outside": {
            "positioner": {
              "overflow": "auto",
              "pointerEvents": "auto"
            }
          }
        },
        "size": {
          "xs": {
            "content": {
              "maxW": "sm"
            }
          },
          "sm": {
            "content": {
              "maxW": "md"
            }
          },
          "md": {
            "content": {
              "maxW": "lg"
            }
          },
          "lg": {
            "content": {
              "maxW": "2xl"
            }
          },
          "xl": {
            "content": {
              "maxW": "4xl"
            }
          },
          "cover": {
            "positioner": {
              "padding": "10"
            },
            "content": {
              "width": "100%",
              "height": "100%",
              "--dialog-margin": "0"
            }
          },
          "full": {
            "content": {
              "maxW": "100vw",
              "minH": "100vh",
              "--dialog-margin": "0",
              "borderRadius": "0"
            }
          }
        },
        "motionPreset": {
          "scale": {
            "content": {
              "_open": {
                "animationName": "scale-in, fade-in"
              },
              "_closed": {
                "animationName": "scale-out, fade-out"
              }
            }
          },
          "slide-in-bottom": {
            "content": {
              "_open": {
                "animationName": "slide-from-bottom, fade-in"
              },
              "_closed": {
                "animationName": "slide-to-bottom, fade-out"
              }
            }
          },
          "slide-in-top": {
            "content": {
              "_open": {
                "animationName": "slide-from-top, fade-in"
              },
              "_closed": {
                "animationName": "slide-to-top, fade-out"
              }
            }
          },
          "slide-in-left": {
            "content": {
              "_open": {
                "animationName": "slide-from-left, fade-in"
              },
              "_closed": {
                "animationName": "slide-to-left, fade-out"
              }
            }
          },
          "slide-in-right": {
            "content": {
              "_open": {
                "animationName": "slide-from-right, fade-in"
              },
              "_closed": {
                "animationName": "slide-to-right, fade-out"
              }
            }
          },
          "none": {}
        }
      },
      "compoundVariants": [
        {
          "variant": "confirm",
          "css": {
            "content": {
              "maxW": "xs"
            }
          }
        }
      ],
      "defaultVariants": {
        "size": "md",
        "scrollBehavior": "outside",
        "placement": "top",
        "motionPreset": "scale",
        "variant": "dialog"
      }
    },
    "drawer": {
      "slots": [
        "trigger",
        "backdrop",
        "positioner",
        "content",
        "title",
        "description",
        "closeTrigger",
        "header",
        "body",
        "footer",
        "backdrop"
      ],
      "className": "chakra-drawer",
      "base": {
        "backdrop": {
          "layerStyle": "backdrop",
          "pos": "fixed",
          "insetInlineStart": 0,
          "top": 0,
          "w": "100vw",
          "h": "100dvh",
          "zIndex": "layer-4",
          "_open": {
            "animationName": "fade-in",
            "animationDuration": "slow"
          },
          "_closed": {
            "animationName": "fade-out",
            "animationDuration": "moderate"
          }
        },
        "positioner": {
          "--drawer-z-index": "zIndex.layer-4",
          "display": "flex",
          "width": "100vw",
          "height": "100dvh",
          "position": "fixed",
          "padding": 2,
          "insetInlineStart": 0,
          "top": 0,
          "zIndex": "calc(var(--drawer-z-index) + var(--layer-index, 0))",
          "overscrollBehaviorY": "none"
        },
        "content": {
          "display": "flex",
          "flexDirection": "column",
          "position": "relative",
          "width": "100%",
          "outline": 0,
          "zIndex": "calc(var(--drawer-z-index) + var(--layer-index, 0))",
          "textStyle": "sm",
          "maxH": "100dvh",
          "color": "inherit",
          "layerStyle": "overlay",
          "_open": {
            "animationDuration": "slowest",
            "animationTimingFunction": "ease-in-smooth"
          },
          "_closed": {
            "animationDuration": "slower",
            "animationTimingFunction": "ease-in-smooth"
          }
        },
        "header": {
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "center",
          "justifyContent": "space-between",
          "flex": 0,
          "px": "6",
          "py": "4"
        },
        "body": {
          "px": "6",
          "py": "2",
          "flex": "1",
          "overflow": "auto"
        },
        "footer": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "flex-end",
          "gap": "3",
          "px": "6",
          "pt": "2",
          "pb": "4"
        },
        "title": {
          "textStyle": "lg",
          "fontWeight": "semibold"
        },
        "description": {
          "color": "fg.muted"
        },
        "closeTrigger": {
          "position": "absolute",
          "top": "4",
          "right": "4"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "content": {
              "maxW": "xs"
            }
          },
          "sm": {
            "content": {
              "maxW": "md"
            }
          },
          "md": {
            "content": {
              "maxW": "lg"
            }
          },
          "lg": {
            "content": {
              "maxW": "2xl"
            }
          },
          "xl": {
            "content": {
              "maxW": "4xl"
            }
          },
          "full": {
            "content": {
              "maxW": "100vw",
              "h": "100dvh"
            }
          }
        },
        "placement": {
          "start": {
            "positioner": {
              "justifyContent": "flex-start"
            },
            "content": {
              "_open": {
                "animationName": {
                  "base": "slide-from-left-full, fade-in",
                  "_rtl": "slide-from-right-full, fade-in"
                }
              },
              "_closed": {
                "animationName": {
                  "base": "slide-to-left-full, fade-out",
                  "_rtl": "slide-to-right-full, fade-out"
                }
              }
            }
          },
          "end": {
            "positioner": {
              "justifyContent": "flex-end"
            },
            "content": {
              "_open": {
                "animationName": {
                  "base": "slide-from-right-full, fade-in",
                  "_rtl": "slide-from-left-full, fade-in"
                }
              },
              "_closed": {
                "animationName": {
                  "base": "slide-to-right-full, fade-out",
                  "_rtl": "slide-to-right-full, fade-out"
                }
              }
            }
          },
          "top": {
            "positioner": {
              "alignItems": "flex-start"
            },
            "content": {
              "maxW": "100%",
              "_open": {
                "animationName": "slide-from-top-full, fade-in"
              },
              "_closed": {
                "animationName": "slide-to-top-full, fade-out"
              }
            }
          },
          "bottom": {
            "positioner": {
              "alignItems": "flex-end"
            },
            "content": {
              "maxW": "100%",
              "_open": {
                "animationName": "slide-from-bottom-full, fade-in"
              },
              "_closed": {
                "animationName": "slide-to-bottom-full, fade-out"
              }
            }
          }
        },
        "attached": {
          "true": {
            "positioner": {
              "padding": 0
            },
            "content": {
              "borderRadius": "none"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "xs",
        "placement": "end"
      }
    },
    "editable": {
      "slots": [
        "root",
        "area",
        "label",
        "preview",
        "input",
        "editTrigger",
        "submitTrigger",
        "cancelTrigger",
        "control",
        "textarea"
      ],
      "className": "chakra-editable",
      "base": {
        "root": {
          "display": "inline-flex",
          "alignItems": "center",
          "position": "relative",
          "gap": "1.5",
          "width": "full"
        },
        "preview": {
          "fontSize": "inherit",
          "fontWeight": "inherit",
          "textAlign": "inherit",
          "bg": "transparent",
          "borderRadius": "control.md",
          "py": "1",
          "px": "1",
          "display": "inline-flex",
          "alignItems": "center",
          "transitionProperty": "common",
          "transitionDuration": "moderate",
          "cursor": "text",
          "_hover": {
            "bg": "bg.muted"
          },
          "_disabled": {
            "userSelect": "none"
          }
        },
        "input": {
          "fontSize": "inherit",
          "fontWeight": "inherit",
          "textAlign": "inherit",
          "bg": "transparent",
          "borderRadius": "control.md",
          "outline": "0",
          "py": "1",
          "px": "1",
          "transitionProperty": "common",
          "transitionDuration": "moderate",
          "width": "full",
          "focusVisibleRing": "inside",
          "focusRingWidth": "2px",
          "_placeholder": {
            "opacity": 0.6
          }
        },
        "control": {
          "display": "inline-flex",
          "alignItems": "center",
          "gap": "1.5"
        }
      },
      "variants": {
        "size": {
          "sm": {
            "root": {
              "textStyle": "sm"
            },
            "preview": {
              "minH": "8"
            },
            "input": {
              "minH": "8"
            }
          },
          "md": {
            "root": {
              "textStyle": "sm"
            },
            "preview": {
              "minH": "9"
            },
            "input": {
              "minH": "9"
            }
          },
          "lg": {
            "root": {
              "textStyle": "md"
            },
            "preview": {
              "minH": "10"
            },
            "input": {
              "minH": "10"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "emptyState": {
      "slots": [
        "root",
        "content",
        "indicator",
        "title",
        "description",
        "actions"
      ],
      "className": "chakra-empty-state",
      "base": {
        "root": {
          "colorPalette": "accent",
          "width": "full",
          "height": "full",
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
          "justifyContent": "center"
        },
        "content": {
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
          "justifyContent": "center"
        },
        "indicator": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "color": "colorPalette.solid",
          "_icon": {
            "boxSize": "1em"
          }
        },
        "title": {
          "fontWeight": "semibold"
        },
        "description": {
          "textStyle": "sm",
          "color": "fg.muted"
        },
        "actions": {
          "display": "flex",
          "flexDirection": "row",
          "gap": "2"
        }
      },
      "variants": {
        "size": {
          "sm": {
            "root": {
              "px": "4",
              "py": "6"
            },
            "indicator": {
              "textStyle": "3xl",
              "mb": "2"
            },
            "title": {
              "textStyle": "md"
            },
            "description": {
              "textStyle": "xs"
            },
            "content": {
              "textStyle": "xs"
            },
            "actions": {
              "mt": "2"
            }
          },
          "md": {
            "root": {
              "px": "8",
              "py": "12"
            },
            "indicator": {
              "textStyle": "4xl",
              "mb": "3"
            },
            "title": {
              "textStyle": "lg"
            },
            "description": {
              "textStyle": "sm"
            },
            "content": {
              "textStyle": "sm"
            },
            "actions": {
              "mt": "3"
            }
          },
          "lg": {
            "root": {
              "px": "12",
              "py": "16"
            },
            "indicator": {
              "textStyle": "6xl",
              "mb": "4"
            },
            "title": {
              "textStyle": "xl"
            },
            "description": {
              "textStyle": "md"
            },
            "content": {
              "textStyle": "md"
            },
            "actions": {
              "mt": "4"
            }
          }
        },
        "align": {
          "start": {
            "content": {
              "alignItems": "flex-start"
            }
          },
          "center": {
            "content": {
              "alignItems": "center"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "align": "center"
      }
    },
    "field": {
      "className": "chakra-field",
      "slots": [
        "root",
        "errorText",
        "helperText",
        "input",
        "label",
        "select",
        "textarea",
        "requiredIndicator",
        "requiredIndicator"
      ],
      "base": {
        "requiredIndicator": {
          "color": "fg.error",
          "lineHeight": "1"
        },
        "root": {
          "display": "flex",
          "width": "100%",
          "position": "relative",
          "gap": "1.5"
        },
        "label": {
          "display": "flex",
          "alignItems": "center",
          "textAlign": "start",
          "textStyle": "sm",
          "fontWeight": "medium",
          "gap": "1",
          "userSelect": "none",
          "_disabled": {
            "opacity": "0.5"
          }
        },
        "errorText": {
          "display": "inline-flex",
          "alignItems": "center",
          "fontWeight": "medium",
          "gap": "1",
          "color": "fg.error",
          "textStyle": "xs"
        },
        "helperText": {
          "color": "fg.muted",
          "textStyle": "xs"
        }
      },
      "variants": {
        "orientation": {
          "vertical": {
            "root": {
              "flexDirection": "column",
              "alignItems": "flex-start"
            }
          },
          "horizontal": {
            "root": {
              "display": "grid",
              "gridTemplateColumns": "var(--field-label-width, 8rem) 1fr",
              "alignItems": "center",
              "&:has(textarea)": {
                "alignItems": "flex-start",
                "& label": {
                  "pt": 1.5
                }
              }
            },
            "helperText": {
              "gridColumn": 2
            },
            "errorText": {
              "gridColumn": 2
            }
          }
        }
      },
      "defaultVariants": {
        "orientation": "vertical"
      }
    },
    "fileUpload": {
      "className": "chakra-file-upload",
      "slots": [
        "root",
        "dropzone",
        "item",
        "itemDeleteTrigger",
        "itemGroup",
        "itemName",
        "itemPreview",
        "itemPreviewImage",
        "itemSizeText",
        "label",
        "trigger",
        "clearTrigger",
        "itemContent",
        "dropzoneContent",
        "fileText"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "4",
          "width": "100%",
          "alignItems": "flex-start"
        },
        "label": {
          "fontWeight": "medium",
          "textStyle": "sm"
        },
        "dropzone": {
          "background": "bg",
          "borderRadius": "panel.md",
          "borderWidth": "1px",
          "borderStyle": "dashed",
          "display": "flex",
          "alignItems": "center",
          "flexDirection": "column",
          "gap": "4",
          "justifyContent": "center",
          "p": "4",
          "transition": "backgrounds",
          "focusVisibleRing": "outside",
          "_dragging": {
            "bg": "colorPalette.subtle",
            "borderStyle": "solid",
            "borderColor": "colorPalette.solid"
          }
        },
        "dropzoneContent": {
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
          "textAlign": "center",
          "gap": "4",
          "textStyle": "sm"
        },
        "item": {
          "textStyle": "sm",
          "animationName": "fade-in",
          "animationDuration": "moderate",
          "background": "bg",
          "borderRadius": "panel.md",
          "borderWidth": "1px",
          "width": "100%",
          "display": "flex",
          "alignItems": "center",
          "gap": "3",
          "px": "4",
          "py": "2"
        },
        "itemGroup": {
          "width": "100%",
          "display": "flex",
          "flexDirection": "column",
          "gap": "3"
        },
        "itemName": {
          "color": "fg",
          "fontWeight": "medium",
          "lineClamp": "1"
        },
        "itemContent": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "0.5",
          "flex": "1"
        },
        "itemSizeText": {
          "color": "fg.muted",
          "textStyle": "xs"
        },
        "itemDeleteTrigger": {
          "alignSelf": "flex-start"
        },
        "itemPreviewImage": {
          "width": "10",
          "height": "10",
          "objectFit": "scale-down"
        }
      },
      "defaultVariants": {}
    },
    "hoverCard": {
      "className": "chakra-hover-card",
      "slots": [
        "arrow",
        "arrowTip",
        "trigger",
        "positioner",
        "content"
      ],
      "base": {
        "content": {
          "position": "relative",
          "display": "flex",
          "flexDirection": "column",
          "textStyle": "sm",
          "--hovercard-bg": "colors.bg.panel",
          "bg": "var(--hovercard-bg)",
          "maxWidth": "80",
          "--hover-card-z-index": "zIndex.layer-2",
          "zIndex": "calc(var(--hover-card-z-index) + var(--layer-index, 0))",
          "transformOrigin": "var(--transform-origin)",
          "borderWidth": "1px",
          "outline": "0",
          "layerStyle": "overlay",
          "_open": {
            "animationStyle": "slide-fade-in",
            "animationDuration": "fast"
          },
          "_closed": {
            "animationStyle": "slide-fade-out",
            "animationDuration": "faster"
          }
        },
        "arrow": {
          "--arrow-size": "sizes.3",
          "--arrow-background": "var(--hovercard-bg)"
        },
        "arrowTip": {
          "borderTopWidth": "0.5px",
          "borderInlineStartWidth": "0.5px"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "content": {
              "padding": "3",
              "borderRadius": "panel.sm"
            }
          },
          "sm": {
            "content": {
              "padding": "4",
              "borderRadius": "panel.md"
            }
          },
          "md": {
            "content": {
              "padding": "5",
              "borderRadius": "panel.md"
            }
          },
          "lg": {
            "content": {
              "padding": "6",
              "borderRadius": "panel.lg"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "list": {
      "className": "chakra-list",
      "slots": [
        "root",
        "item",
        "indicator"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "var(--list-gap)",
          "& :where(ul, ol)": {
            "marginTop": "var(--list-gap)"
          }
        },
        "item": {
          "whiteSpace": "normal",
          "display": "list-item"
        },
        "indicator": {
          "marginEnd": "2",
          "minHeight": "1lh",
          "flexShrink": 0,
          "display": "inline-block",
          "verticalAlign": "middle"
        }
      },
      "variants": {
        "variant": {
          "marker": {
            "root": {
              "listStyle": "revert",
              "listStylePosition": "inside"
            },
            "item": {
              "_marker": {
                "color": "fg.subtle"
              }
            }
          },
          "plain": {
            "item": {
              "alignItems": "flex-start",
              "display": "inline-flex"
            }
          }
        },
        "align": {
          "center": {
            "item": {
              "alignItems": "center"
            }
          },
          "start": {
            "item": {
              "alignItems": "flex-start"
            }
          },
          "end": {
            "item": {
              "alignItems": "flex-end"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "marker"
      }
    },
    "menu": {
      "className": "chakra-menu",
      "slots": [
        "arrow",
        "arrowTip",
        "content",
        "contextTrigger",
        "indicator",
        "item",
        "itemGroup",
        "itemGroupLabel",
        "itemIndicator",
        "itemText",
        "positioner",
        "separator",
        "trigger",
        "triggerItem",
        "itemCommand"
      ],
      "base": {
        "content": {
          "layerStyle": "overlay",
          "boxShadow": "md",
          "borderWidth": "1px",
          "borderColor": "border",
          "outline": 0,
          "color": "fg",
          "maxHeight": "var(--available-height)",
          "--menu-z-index": "zIndex.layer-3",
          "zIndex": "calc(var(--menu-z-index) + var(--layer-index, 0))",
          "overflow": "hidden",
          "_open": {
            "animationStyle": "slide-fade-in",
            "animationDuration": "fastest"
          },
          "_closed": {
            "animationStyle": "slide-fade-out",
            "animationDuration": "fastest"
          }
        },
        "item": {
          "textDecoration": "none",
          "color": "fg",
          "userSelect": "none",
          "borderRadius": "control.md",
          "width": "100%",
          "display": "flex",
          "cursor": "menuitem",
          "alignItems": "center",
          "textAlign": "start",
          "position": "relative",
          "flex": "0 0 auto",
          "outline": 0,
          "_disabled": {
            "layerStyle": "disabled"
          }
        },
        "itemText": {
          "flex": "1"
        },
        "itemGroupLabel": {
          "textStyle": "sm",
          "color": "fg.subtle"
        },
        "indicator": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": "0"
        },
        "itemCommand": {
          "opacity": "0.6",
          "textStyle": "xs",
          "ms": "auto",
          "ps": "4",
          "letterSpacing": "widest"
        },
        "separator": {
          "height": "1px",
          "bg": "bg.muted",
          "my": "1",
          "mx": "-1"
        }
      },
      "variants": {
        "variant": {
          "subtle": {
            "item": {
              "_highlighted": {
                "bg": "bg.subtle"
              }
            }
          },
          "solid": {
            "item": {
              "_highlighted": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast"
              }
            }
          }
        },
        "size": {
          "sm": {
            "content": {
              "minW": "8rem",
              "padding": "0.5"
            },
            "item": {
              "gap": "1",
              "textStyle": "xs",
              "py": "1",
              "px": "1.5",
              "ps": "var(--menu-item-inset, {sizes.1.5})"
            },
            "itemGroupLabel": {
              "textStyle": "xs",
              "py": "1",
              "px": "1.5"
            }
          },
          "md": {
            "content": {
              "minW": "8rem",
              "padding": "1"
            },
            "item": {
              "gap": "2",
              "textStyle": "sm",
              "py": "1.5",
              "px": "2",
              "ps": "var(--menu-item-inset, {sizes.2})"
            },
            "itemGroupLabel": {
              "textStyle": "sm",
              "py": "1.5",
              "px": "2"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "subtle"
      }
    },
    "nativeSelect": {
      "className": "chakra-native-select",
      "slots": [
        "root",
        "field",
        "indicator"
      ],
      "base": {
        "root": {
          "height": "fit-content",
          "display": "flex",
          "width": "100%",
          "position": "relative"
        },
        "field": {
          "width": "100%",
          "minWidth": "0",
          "outline": "0",
          "appearance": "none",
          "borderRadius": "control.md",
          "_disabled": {
            "layerStyle": "disabled"
          },
          "_invalid": {
            "borderColor": "border.error"
          },
          "focusVisibleRing": "inside",
          "lineHeight": "normal",
          "& > option, & > optgroup": {
            "bg": "inherit"
          }
        },
        "indicator": {
          "position": "absolute",
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "pointerEvents": "none",
          "top": "50%",
          "transform": "translateY(-50%)",
          "height": "100%",
          "color": "fg.muted",
          "_disabled": {
            "opacity": "0.5"
          },
          "_invalid": {
            "color": "fg.error"
          },
          "_icon": {
            "width": "1em",
            "height": "1em"
          }
        }
      },
      "variants": {
        "variant": {
          "outline": {
            "field": {
              "bg": "transparent",
              "borderWidth": "1px",
              "borderColor": "border",
              "_expanded": {
                "borderColor": "border.emphasized"
              }
            }
          },
          "subtle": {
            "field": {
              "borderWidth": "1px",
              "borderColor": "transparent",
              "bg": "bg.muted"
            }
          },
          "plain": {
            "field": {
              "bg": "transparent",
              "color": "fg",
              "focusRingWidth": "2px"
            }
          }
        },
        "size": {
          "xs": {
            "field": {
              "textStyle": "xs",
              "ps": "2",
              "pe": "6",
              "height": "6"
            },
            "indicator": {
              "textStyle": "sm",
              "insetEnd": "1.5"
            }
          },
          "sm": {
            "field": {
              "textStyle": "sm",
              "ps": "2.5",
              "pe": "8",
              "height": "8"
            },
            "indicator": {
              "textStyle": "md",
              "insetEnd": "2"
            }
          },
          "md": {
            "field": {
              "textStyle": "sm",
              "ps": "3",
              "pe": "8",
              "height": "10"
            },
            "indicator": {
              "textStyle": "lg",
              "insetEnd": "2"
            }
          },
          "lg": {
            "field": {
              "textStyle": "md",
              "ps": "4",
              "pe": "8",
              "height": "11"
            },
            "indicator": {
              "textStyle": "xl",
              "insetEnd": "3"
            }
          },
          "xl": {
            "field": {
              "textStyle": "md",
              "ps": "4.5",
              "pe": "10",
              "height": "12"
            },
            "indicator": {
              "textStyle": "xl",
              "insetEnd": "3"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "numberInput": {
      "className": "chakra-number-input",
      "slots": [
        "root",
        "label",
        "input",
        "control",
        "valueText",
        "incrementTrigger",
        "decrementTrigger",
        "scrubber"
      ],
      "base": {
        "root": {
          "position": "relative",
          "zIndex": "0",
          "isolation": "isolate",
          "width": "full"
        },
        "input": {
          "width": "100%",
          "minWidth": "0",
          "outline": "0",
          "position": "relative",
          "appearance": "none",
          "textAlign": "start",
          "_disabled": {
            "layerStyle": "disabled"
          },
          "height": "var(--input-height)",
          "minW": "var(--input-height)",
          "--focus-color": "colors.colorPalette.focusRing",
          "--error-color": "colors.border.error",
          "_invalid": {
            "focusRingColor": "var(--error-color)",
            "borderColor": "var(--error-color)"
          },
          "verticalAlign": "top",
          "pe": "calc(var(--stepper-width) + 0.5rem)"
        },
        "control": {
          "display": "flex",
          "flexDirection": "column",
          "position": "absolute",
          "top": "0",
          "insetEnd": "0px",
          "margin": "1px",
          "width": "var(--stepper-width)",
          "height": "calc(100% - 2px)",
          "zIndex": "1",
          "borderStartWidth": "1px",
          "divideY": "1px"
        },
        "incrementTrigger": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "flex": "1",
          "userSelect": "none",
          "cursor": "button",
          "lineHeight": "1",
          "color": "fg.muted",
          "--stepper-base-radius": "radii.xs",
          "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
          "_icon": {
            "boxSize": "1em"
          },
          "_disabled": {
            "opacity": "0.5"
          },
          "_hover": {
            "bg": "bg.muted"
          },
          "_active": {
            "bg": "bg.emphasized"
          },
          "borderTopEndRadius": "var(--stepper-radius)"
        },
        "decrementTrigger": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "flex": "1",
          "userSelect": "none",
          "cursor": "button",
          "lineHeight": "1",
          "color": "fg.muted",
          "--stepper-base-radius": "radii.xs",
          "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
          "_icon": {
            "boxSize": "1em"
          },
          "_disabled": {
            "opacity": "0.5"
          },
          "_hover": {
            "bg": "bg.muted"
          },
          "_active": {
            "bg": "bg.emphasized"
          },
          "borderBottomEndRadius": "var(--stepper-radius)"
        },
        "valueText": {
          "fontWeight": "medium",
          "fontFeatureSettings": "pnum",
          "fontVariantNumeric": "proportional-nums"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "input": {
              "borderRadius": "control.sm",
              "textStyle": "xs",
              "px": "2",
              "--input-height": "sizes.6"
            },
            "control": {
              "fontSize": "2xs",
              "--stepper-width": "sizes.4"
            }
          },
          "sm": {
            "input": {
              "borderRadius": "control.md",
              "textStyle": "sm",
              "px": "2.5",
              "--input-height": "sizes.7"
            },
            "control": {
              "fontSize": "xs",
              "--stepper-width": "sizes.5"
            }
          },
          "md": {
            "input": {
              "borderRadius": "control.md",
              "textStyle": "sm",
              "px": "3",
              "--input-height": "sizes.8"
            },
            "control": {
              "fontSize": "sm",
              "--stepper-width": "sizes.6"
            }
          },
          "lg": {
            "input": {
              "borderRadius": "control.lg",
              "textStyle": "md",
              "px": "4.5",
              "--input-height": "sizes.10"
            },
            "control": {
              "fontSize": "sm",
              "--stepper-width": "sizes.6"
            }
          }
        },
        "variant": {
          "outline": {
            "input": {
              "bg": "transparent",
              "borderWidth": "1px",
              "borderColor": "border",
              "focusVisibleRing": "inside",
              "focusRingWidth": "0",
              "_hover": {
                "borderColor": "border.emphasized",
                "_focusVisible": {
                  "borderColor": "var(--focus-ring-color)"
                }
              }
            }
          },
          "subtle": {
            "input": {
              "borderWidth": "1px",
              "borderColor": "transparent",
              "bg": "bg.muted",
              "focusVisibleRing": "inside"
            }
          },
          "flushed": {
            "input": {
              "bg": "transparent",
              "borderBottomWidth": "1px",
              "borderBottomColor": "border",
              "borderRadius": "0",
              "px": "0",
              "_focusVisible": {
                "borderColor": "var(--focus-color)",
                "boxShadow": "0px 1px 0px 0px var(--focus-color)"
              }
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "pinInput": {
      "className": "chakra-pin-input",
      "slots": [
        "root",
        "label",
        "input",
        "control"
      ],
      "base": {
        "input": {
          "width": "var(--input-height)",
          "minWidth": "0",
          "outline": "0",
          "position": "relative",
          "appearance": "none",
          "textAlign": "center",
          "_disabled": {
            "layerStyle": "disabled"
          },
          "height": "var(--input-height)",
          "minW": "var(--input-height)",
          "--focus-color": "colors.colorPalette.focusRing",
          "--error-color": "colors.border.error",
          "_invalid": {
            "focusRingColor": "var(--error-color)",
            "borderColor": "var(--error-color)"
          }
        }
      },
      "variants": {
        "size": {
          "xs": {
            "input": {
              "borderRadius": "control.sm",
              "textStyle": "xs",
              "px": 0,
              "--input-height": "sizes.6"
            }
          },
          "sm": {
            "input": {
              "borderRadius": "control.md",
              "textStyle": "sm",
              "px": 0,
              "--input-height": "sizes.7"
            }
          },
          "md": {
            "input": {
              "borderRadius": "control.md",
              "textStyle": "sm",
              "px": 0,
              "--input-height": "sizes.8"
            }
          },
          "lg": {
            "input": {
              "borderRadius": "control.lg",
              "textStyle": "md",
              "px": 0,
              "--input-height": "sizes.10"
            }
          },
          "xl": {
            "input": {
              "borderRadius": "control.lg",
              "textStyle": "md",
              "px": 0,
              "--input-height": "sizes.12"
            }
          }
        },
        "variant": {
          "outline": {
            "input": {
              "bg": "transparent",
              "borderWidth": "1px",
              "borderColor": "border",
              "focusVisibleRing": "inside",
              "focusRingWidth": "0",
              "_hover": {
                "borderColor": "border.emphasized",
                "_focusVisible": {
                  "borderColor": "var(--focus-ring-color)"
                }
              }
            }
          },
          "subtle": {
            "input": {
              "borderWidth": "1px",
              "borderColor": "transparent",
              "bg": "bg.muted",
              "focusVisibleRing": "inside"
            }
          },
          "flushed": {
            "input": {
              "bg": "transparent",
              "borderBottomWidth": "1px",
              "borderBottomColor": "border",
              "borderRadius": "0",
              "px": "0",
              "_focusVisible": {
                "borderColor": "var(--focus-color)",
                "boxShadow": "0px 1px 0px 0px var(--focus-color)"
              }
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "popover": {
      "className": "chakra-popover",
      "slots": [
        "arrow",
        "arrowTip",
        "anchor",
        "trigger",
        "indicator",
        "positioner",
        "content",
        "title",
        "description",
        "closeTrigger",
        "header",
        "body",
        "footer"
      ],
      "base": {
        "content": {
          "layerStyle": "overlay",
          "position": "relative",
          "display": "flex",
          "flexDirection": "column",
          "textStyle": "sm",
          "--popover-bg": "colors.bg.panel",
          "bg": "var(--popover-bg)",
          "--popover-size": "sizes.xs",
          "--popover-mobile-size": "calc(100dvw - 1rem)",
          "width": {
            "base": "min(var(--popover-mobile-size), var(--popover-size))",
            "sm": "var(--popover-size)"
          },
          "--popover-z-index": "zIndex.layer-2",
          "zIndex": "calc(var(--popover-z-index) + var(--layer-index, 0))",
          "borderWidth": "1px",
          "outline": "0",
          "transformOrigin": "var(--transform-origin)",
          "_open": {
            "animationStyle": "scale-fade-in",
            "animationDuration": "fast"
          },
          "_closed": {
            "animationStyle": "scale-fade-out",
            "animationDuration": "faster"
          }
        },
        "header": {
          "paddingInline": "var(--popover-padding)",
          "paddingTop": "var(--popover-padding)"
        },
        "body": {
          "padding": "var(--popover-padding)",
          "flex": "1"
        },
        "footer": {
          "display": "flex",
          "alignItems": "center",
          "paddingInline": "var(--popover-padding)",
          "paddingBottom": "var(--popover-padding)"
        },
        "arrow": {
          "--arrow-size": "sizes.3",
          "--arrow-background": "var(--popover-bg)"
        },
        "arrowTip": {
          "borderTopWidth": "1px",
          "borderInlineStartWidth": "1px"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "content": {
              "--popover-padding": "spacing.3"
            }
          },
          "sm": {
            "content": {
              "--popover-padding": "spacing.4"
            }
          },
          "md": {
            "content": {
              "--popover-padding": "spacing.5"
            }
          },
          "lg": {
            "content": {
              "--popover-padding": "spacing.6"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "progress": {
      "slots": [
        "root",
        "label",
        "track",
        "range",
        "valueText",
        "view",
        "circle",
        "circleTrack",
        "circleRange"
      ],
      "className": "chakra-progress",
      "base": {
        "root": {
          "colorPalette": "accent",
          "textStyle": "sm",
          "position": "relative"
        },
        "track": {
          "overflow": "hidden",
          "position": "relative"
        },
        "range": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "transitionProperty": "width, height",
          "transitionDuration": "slow",
          "height": "100%",
          "bgColor": "var(--track-color)",
          "_indeterminate": {
            "--animate-from-x": "-40%",
            "--animate-to-x": "100%",
            "position": "absolute",
            "willChange": "left",
            "minWidth": "50%",
            "animation": "position 1s ease infinite normal none running",
            "backgroundImage": "linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)"
          }
        },
        "label": {
          "display": "inline-flex",
          "fontWeight": "medium"
        },
        "valueText": {
          "textStyle": "xs",
          "lineHeight": "1",
          "fontWeight": "medium"
        }
      },
      "variants": {
        "variant": {
          "outline": {
            "track": {
              "shadow": "inset",
              "bgColor": "bg.subtle"
            },
            "range": {
              "bgColor": "colorPalette.solid"
            }
          },
          "subtle": {
            "track": {
              "bgColor": "colorPalette.muted"
            },
            "range": {
              "bgColor": "colorPalette.solid/72"
            }
          }
        },
        "shape": {
          "square": {},
          "rounded": {
            "track": {
              "borderRadius": "control.sm"
            }
          },
          "full": {
            "track": {
              "borderRadius": "full"
            }
          }
        },
        "striped": {
          "true": {
            "range": {
              "backgroundImage": "linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)",
              "backgroundSize": "var(--stripe-size) var(--stripe-size)",
              "--stripe-size": "1rem",
              "--stripe-color": {
                "_light": "rgba(255, 255, 255, 0.3)",
                "_dark": "rgba(0, 0, 0, 0.3)"
              }
            }
          }
        },
        "animated": {
          "true": {
            "range": {
              "--animate-from": "var(--stripe-size)",
              "animation": "bg-position 1s linear infinite"
            }
          }
        },
        "size": {
          "xs": {
            "track": {
              "h": "1.5"
            }
          },
          "sm": {
            "track": {
              "h": "2"
            }
          },
          "md": {
            "track": {
              "h": "2.5"
            }
          },
          "lg": {
            "track": {
              "h": "3"
            }
          },
          "xl": {
            "track": {
              "h": "4"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "outline",
        "size": "md",
        "shape": "rounded"
      }
    },
    "progressCircle": {
      "className": "chakra-progress-circle",
      "slots": [
        "root",
        "label",
        "track",
        "range",
        "valueText",
        "view",
        "circle",
        "circleTrack",
        "circleRange"
      ],
      "base": {
        "root": {
          "display": "inline-flex",
          "textStyle": "sm",
          "position": "relative"
        },
        "circle": {
          "_indeterminate": {
            "animation": "spin 2s linear infinite"
          }
        },
        "circleTrack": {
          "--track-color": "colors.colorPalette.muted",
          "stroke": "var(--track-color)"
        },
        "circleRange": {
          "stroke": "colorPalette.solid",
          "transitionProperty": "stroke-dasharray",
          "transitionDuration": "0.6s",
          "_indeterminate": {
            "animation": "circular-progress 1.5s linear infinite"
          }
        },
        "label": {
          "display": "inline-flex"
        },
        "valueText": {
          "lineHeight": "1",
          "fontWeight": "medium",
          "letterSpacing": "tight",
          "fontVariantNumeric": "tabular-nums"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "circle": {
              "--size": "24px",
              "--thickness": "4px"
            },
            "valueText": {
              "textStyle": "2xs"
            }
          },
          "sm": {
            "circle": {
              "--size": "32px",
              "--thickness": "5px"
            },
            "valueText": {
              "textStyle": "2xs"
            }
          },
          "md": {
            "circle": {
              "--size": "40px",
              "--thickness": "6px"
            },
            "valueText": {
              "textStyle": "xs"
            }
          },
          "lg": {
            "circle": {
              "--size": "48px",
              "--thickness": "7px"
            },
            "valueText": {
              "textStyle": "sm"
            }
          },
          "xl": {
            "circle": {
              "--size": "64px",
              "--thickness": "8px"
            },
            "valueText": {
              "textStyle": "sm"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "radioCard": {
      "className": "chakra-radio-card",
      "slots": [
        "root",
        "label",
        "item",
        "itemText",
        "itemControl",
        "indicator",
        "itemAddon",
        "itemIndicator",
        "itemContent",
        "itemDescription"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "1.5",
          "isolation": "isolate"
        },
        "item": {
          "flex": "1",
          "display": "flex",
          "flexDirection": "column",
          "userSelect": "none",
          "position": "relative",
          "borderRadius": "panel.md",
          "_focus": {
            "bg": "colorPalette.muted/20"
          },
          "_disabled": {
            "opacity": "0.8",
            "borderColor": "border.disabled"
          },
          "_checked": {
            "zIndex": "1"
          }
        },
        "label": {
          "display": "inline-flex",
          "fontWeight": "medium",
          "textStyle": "sm",
          "_disabled": {
            "opacity": "0.5"
          }
        },
        "itemText": {
          "fontWeight": "medium"
        },
        "itemDescription": {
          "opacity": "0.64",
          "textStyle": "sm"
        },
        "itemControl": {
          "display": "inline-flex",
          "flex": "1",
          "pos": "relative",
          "rounded": "inherit",
          "justifyContent": "var(--radio-card-justify)",
          "alignItems": "var(--radio-card-align)",
          "_disabled": {
            "bg": "bg.muted"
          }
        },
        "itemIndicator": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": 0,
          "verticalAlign": "top",
          "color": "white",
          "borderWidth": "1px",
          "borderColor": "transparent",
          "borderRadius": "full",
          "cursor": "radio",
          "_focusVisible": {
            "focusVisibleRing": "outside"
          },
          "_invalid": {
            "colorPalette": "red",
            "borderColor": "red.500"
          },
          "_disabled": {
            "opacity": "0.5",
            "cursor": "disabled"
          },
          "& .dot": {
            "height": "100%",
            "width": "100%",
            "borderRadius": "full",
            "bg": "currentColor",
            "scale": "0.4"
          }
        },
        "itemAddon": {
          "roundedBottom": "inherit",
          "_disabled": {
            "color": "fg.muted"
          }
        },
        "itemContent": {
          "display": "flex",
          "flexDirection": "column",
          "flex": "1",
          "gap": "1",
          "justifyContent": "var(--radio-card-justify)",
          "alignItems": "var(--radio-card-align)"
        }
      },
      "variants": {
        "size": {
          "sm": {
            "item": {
              "textStyle": "sm"
            },
            "itemControl": {
              "padding": "3",
              "gap": "1.5"
            },
            "itemAddon": {
              "px": "3",
              "py": "1.5",
              "borderTopWidth": "1px"
            },
            "itemIndicator": {
              "boxSize": "3.5"
            }
          },
          "md": {
            "item": {
              "textStyle": "sm"
            },
            "itemControl": {
              "padding": "4",
              "gap": "2.5"
            },
            "itemAddon": {
              "px": "4",
              "py": "2",
              "borderTopWidth": "1px"
            },
            "itemIndicator": {
              "boxSize": "4"
            }
          },
          "lg": {
            "item": {
              "textStyle": "md"
            },
            "itemControl": {
              "padding": "4",
              "gap": "3.5"
            },
            "itemAddon": {
              "px": "4",
              "py": "2",
              "borderTopWidth": "1px"
            },
            "itemIndicator": {
              "boxSize": "5"
            }
          }
        },
        "variant": {
          "surface": {
            "item": {
              "borderWidth": "1px",
              "_checked": {
                "bg": "colorPalette.subtle",
                "color": "colorPalette.fg",
                "borderColor": "colorPalette.muted"
              }
            },
            "itemIndicator": {
              "borderWidth": "1px",
              "borderColor": "border",
              "_checked": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            }
          },
          "subtle": {
            "item": {
              "bg": "bg.muted"
            },
            "itemControl": {
              "_checked": {
                "bg": "colorPalette.muted",
                "color": "colorPalette.fg"
              }
            },
            "itemIndicator": {
              "borderWidth": "1px",
              "borderColor": "inherit",
              "_checked": {
                "color": "colorPalette.fg",
                "borderColor": "colorPalette.solid"
              },
              "& .dot": {
                "scale": "0.6"
              }
            }
          },
          "outline": {
            "item": {
              "borderWidth": "1px",
              "_checked": {
                "boxShadow": "0 0 0 1px var(--shadow-color)",
                "boxShadowColor": "colorPalette.solid",
                "borderColor": "colorPalette.solid"
              }
            },
            "itemIndicator": {
              "borderWidth": "1px",
              "borderColor": "border",
              "_checked": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            }
          },
          "solid": {
            "item": {
              "borderWidth": "1px",
              "_checked": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            },
            "itemIndicator": {
              "bg": "bg",
              "borderWidth": "1px",
              "borderColor": "inherit",
              "_checked": {
                "color": "colorPalette.solid",
                "borderColor": "currentcolor"
              }
            }
          }
        },
        "justify": {
          "start": {
            "item": {
              "--radio-card-justify": "flex-start"
            }
          },
          "end": {
            "item": {
              "--radio-card-justify": "flex-end"
            }
          },
          "center": {
            "item": {
              "--radio-card-justify": "center"
            }
          }
        },
        "align": {
          "start": {
            "item": {
              "--radio-card-align": "flex-start"
            },
            "itemControl": {
              "textAlign": "start"
            }
          },
          "end": {
            "item": {
              "--radio-card-align": "flex-end"
            },
            "itemControl": {
              "textAlign": "end"
            }
          },
          "center": {
            "item": {
              "--radio-card-align": "center"
            },
            "itemControl": {
              "textAlign": "center"
            }
          }
        },
        "orientation": {
          "vertical": {
            "itemControl": {
              "flexDirection": "column"
            }
          },
          "horizontal": {
            "itemControl": {
              "flexDirection": "row"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline",
        "align": "start",
        "orientation": "horizontal"
      }
    },
    "radioGroup": {
      "className": "chakra-radio-group",
      "slots": [
        "root",
        "label",
        "item",
        "itemText",
        "itemControl",
        "indicator",
        "itemAddon",
        "itemIndicator"
      ],
      "base": {
        "item": {
          "display": "inline-flex",
          "alignItems": "center",
          "position": "relative",
          "fontWeight": "medium",
          "_disabled": {
            "cursor": "disabled"
          }
        },
        "itemControl": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": 0,
          "verticalAlign": "top",
          "color": "white",
          "borderWidth": "1px",
          "borderColor": "transparent",
          "borderRadius": "full",
          "cursor": "radio",
          "_focusVisible": {
            "focusVisibleRing": "outside"
          },
          "_invalid": {
            "colorPalette": "red",
            "borderColor": "red.500"
          },
          "_disabled": {
            "opacity": "0.5",
            "cursor": "disabled"
          },
          "& .dot": {
            "height": "100%",
            "width": "100%",
            "borderRadius": "full",
            "bg": "currentColor",
            "scale": "0.4"
          }
        },
        "label": {
          "userSelect": "none",
          "textStyle": "sm",
          "_disabled": {
            "opacity": "0.5"
          }
        }
      },
      "variants": {
        "variant": {
          "outline": {
            "itemControl": {
              "borderWidth": "1px",
              "borderColor": "inherit",
              "_checked": {
                "color": "colorPalette.fg",
                "borderColor": "colorPalette.solid"
              },
              "& .dot": {
                "scale": "0.6"
              }
            }
          },
          "subtle": {
            "itemControl": {
              "borderWidth": "1px",
              "bg": "colorPalette.muted",
              "borderColor": "colorPalette.muted",
              "color": "transparent",
              "_checked": {
                "color": "colorPalette.fg"
              }
            }
          },
          "solid": {
            "itemControl": {
              "borderWidth": "1px",
              "borderColor": "border",
              "_checked": {
                "bg": "colorPalette.solid",
                "color": "colorPalette.contrast",
                "borderColor": "colorPalette.solid"
              }
            }
          }
        },
        "size": {
          "xs": {
            "item": {
              "textStyle": "xs",
              "gap": "1.5"
            },
            "itemControl": {
              "boxSize": "3"
            }
          },
          "sm": {
            "item": {
              "textStyle": "sm",
              "gap": "2"
            },
            "itemControl": {
              "boxSize": "3.5"
            }
          },
          "md": {
            "item": {
              "textStyle": "sm",
              "gap": "2.5"
            },
            "itemControl": {
              "boxSize": "4"
            }
          },
          "lg": {
            "item": {
              "textStyle": "md",
              "gap": "3"
            },
            "itemControl": {
              "boxSize": "5"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "solid"
      }
    },
    "ratingGroup": {
      "className": "chakra-rating-group",
      "slots": [
        "root",
        "label",
        "item",
        "control",
        "itemIndicator"
      ],
      "base": {
        "root": {
          "display": "inline-flex"
        },
        "control": {
          "display": "inline-flex",
          "alignItems": "center"
        },
        "item": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "userSelect": "none"
        },
        "itemIndicator": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "width": "1em",
          "height": "1em",
          "position": "relative",
          "_icon": {
            "stroke": "currentColor",
            "width": "100%",
            "height": "100%",
            "display": "inline-block",
            "flexShrink": 0,
            "position": "absolute",
            "left": 0,
            "top": 0
          },
          "& [data-bg]": {
            "color": "bg.emphasized"
          },
          "& [data-fg]": {
            "color": "transparent"
          },
          "&[data-highlighted]:not([data-half])": {
            "& [data-fg]": {
              "color": "colorPalette.solid"
            }
          },
          "&[data-half]": {
            "& [data-fg]": {
              "color": "colorPalette.solid",
              "clipPath": "inset(0 50% 0 0)"
            }
          }
        }
      },
      "variants": {
        "size": {
          "xs": {
            "item": {
              "textStyle": "sm"
            }
          },
          "sm": {
            "item": {
              "textStyle": "md"
            }
          },
          "md": {
            "item": {
              "textStyle": "xl"
            }
          },
          "lg": {
            "item": {
              "textStyle": "2xl"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "segmentGroup": {
      "className": "chakra-segment-group",
      "slots": [
        "root",
        "label",
        "item",
        "itemText",
        "itemControl",
        "indicator"
      ],
      "base": {
        "root": {
          "borderRadius": "var(--segment-radius)",
          "display": "inline-flex",
          "boxShadow": "inset",
          "minW": "max-content",
          "textAlign": "center",
          "position": "relative",
          "isolation": "isolate",
          "bg": "bg.muted",
          "borderWidth": "1px"
        },
        "item": {
          "display": "flex",
          "alignItems": "center",
          "userSelect": "none",
          "fontSize": "sm",
          "position": "relative",
          "color": "fg.subtle",
          "cursor": "button",
          "borderRadius": "var(--segment-radius)",
          "_disabled": {
            "opacity": "0.5"
          },
          "_hover": {
            "color": "fg"
          },
          "&:has(input:focus-visible)": {
            "focusRing": "inside",
            "focusRingWidth": "1px"
          },
          "_before": {
            "content": "\"\"",
            "position": "absolute",
            "insetInlineStart": 0,
            "insetBlock": "0",
            "bg": "border",
            "width": "1px",
            "transition": "opacity 0.2s"
          },
          "_checked": {
            "color": "fg"
          },
          "& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type": {
            "_before": {
              "opacity": "0"
            }
          },
          "&[data-state=checked][data-ssr]": {
            "shadow": "sm",
            "bg": "bg",
            "color": "fg",
            "borderRadius": "var(--segment-radius)"
          }
        },
        "indicator": {
          "pos": "absolute",
          "bg": {
            "base": "bg",
            "_dark": "bg.emphasized"
          },
          "width": "var(--width)",
          "height": "var(--height)",
          "top": "var(--top)",
          "left": "var(--left)",
          "zIndex": -1,
          "borderRadius": "var(--segment-radius)",
          "boxShadow": "0 0 0 1px {colors.border.emphasized}"
        }
      },
      "variants": {
        "size": {
          "xs": {
            "root": {
              "--segment-radius": "radii.control.sm",
              "height": "6"
            },
            "item": {
              "textStyle": "xs",
              "px": "3",
              "gap": "1"
            }
          },
          "sm": {
            "root": {
              "--segment-radius": "radii.control.md",
              "height": "7"
            },
            "item": {
              "textStyle": "sm",
              "px": "4",
              "gap": "2"
            }
          },
          "md": {
            "root": {
              "--segment-radius": "radii.control.md",
              "height": "8"
            },
            "item": {
              "textStyle": "md",
              "px": "4",
              "gap": "2"
            }
          },
          "lg": {
            "root": {
              "--segment-radius": "radii.control.lg",
              "height": "10"
            },
            "item": {
              "textStyle": "md",
              "px": "5",
              "gap": "3"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "select": {
      "className": "chakra-select",
      "slots": [
        "label",
        "positioner",
        "trigger",
        "indicator",
        "clearTrigger",
        "item",
        "itemText",
        "itemIndicator",
        "itemGroup",
        "itemGroupLabel",
        "list",
        "content",
        "root",
        "control",
        "valueText",
        "indicatorGroup"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "1.5",
          "width": "full"
        },
        "trigger": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "space-between",
          "width": "full",
          "minH": "var(--select-trigger-height)",
          "px": "var(--select-trigger-padding-x)",
          "userSelect": "none",
          "textAlign": "start",
          "focusVisibleRing": "inside",
          "focusRingWidth": 0,
          "_placeholderShown": {
            "color": "fg.muted"
          },
          "_disabled": {
            "layerStyle": "disabled"
          },
          "_invalid": {
            "borderColor": "border.error"
          },
          "_hover": {
            "borderColor": "border.emphasized",
            "_focusVisible": {
              "borderColor": "var(--focus-ring-color)"
            }
          }
        },
        "indicatorGroup": {
          "display": "flex",
          "alignItems": "center",
          "gap": "1",
          "pos": "absolute",
          "right": "0",
          "top": "0",
          "bottom": "0",
          "px": "var(--select-trigger-padding-x)",
          "pointerEvents": "none"
        },
        "indicator": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "color": {
            "base": "fg.muted",
            "_disabled": "fg.subtle",
            "_invalid": "fg.error"
          }
        },
        "content": {
          "layerStyle": "overlay",
          "boxShadow": "md",
          "borderWidth": "1px",
          "borderColor": "border",
          "display": "flex",
          "flexDirection": "column",
          "zIndex": "dropdown",
          "outline": 0,
          "maxH": "96",
          "overflowY": "auto",
          "_open": {
            "animationStyle": "slide-fade-in",
            "animationDuration": "fast"
          },
          "_closed": {
            "animationStyle": "slide-fade-out",
            "animationDuration": "fastest"
          }
        },
        "item": {
          "position": "relative",
          "userSelect": "none",
          "display": "flex",
          "alignItems": "center",
          "gap": "2",
          "cursor": "option",
          "justifyContent": "space-between",
          "flex": "1",
          "textAlign": "start",
          "borderRadius": "control.md",
          "_highlighted": {
            "bg": "bg.subtle"
          },
          "_disabled": {
            "pointerEvents": "none",
            "opacity": "0.5"
          },
          "_icon": {
            "width": "4",
            "height": "4"
          }
        },
        "control": {
          "pos": "relative"
        },
        "itemText": {
          "flex": "1"
        },
        "itemGroup": {
          "_first": {
            "mt": "0"
          }
        },
        "itemGroupLabel": {
          "py": "1",
          "fontWeight": "medium"
        },
        "label": {
          "fontWeight": "medium",
          "userSelect": "none",
          "textStyle": "sm",
          "_disabled": {
            "layerStyle": "disabled"
          }
        },
        "valueText": {
          "lineClamp": "1",
          "maxW": "80%"
        }
      },
      "variants": {
        "variant": {
          "outline": {
            "trigger": {
              "bg": "transparent",
              "borderWidth": "1px",
              "borderColor": "border",
              "_expanded": {
                "borderColor": "border.emphasized"
              }
            }
          },
          "subtle": {
            "trigger": {
              "borderWidth": "1px",
              "borderColor": "transparent",
              "bg": "bg.muted"
            }
          }
        },
        "size": {
          "xs": {
            "root": {
              "--select-trigger-height": "sizes.6",
              "--select-trigger-padding-x": "spacing.2"
            },
            "content": {
              "p": "1",
              "gap": "1",
              "textStyle": "xs"
            },
            "trigger": {
              "borderRadius": "sm",
              "textStyle": "xs",
              "gap": "1"
            },
            "item": {
              "py": "1",
              "px": "2"
            },
            "itemGroupLabel": {
              "py": "1",
              "px": "2"
            },
            "indicator": {
              "_icon": {
                "width": "3.5",
                "height": "3.5"
              }
            }
          },
          "sm": {
            "root": {
              "--select-trigger-height": "sizes.7",
              "--select-trigger-padding-x": "spacing.2.5"
            },
            "content": {
              "p": "1",
              "textStyle": "sm"
            },
            "trigger": {
              "borderRadius": "sm",
              "textStyle": "sm",
              "gap": "1"
            },
            "indicator": {
              "_icon": {
                "width": "4",
                "height": "4"
              }
            },
            "item": {
              "py": "1",
              "px": "1.5"
            },
            "itemGroup": {
              "mt": "1"
            },
            "itemGroupLabel": {
              "py": "1",
              "px": "1.5"
            }
          },
          "md": {
            "root": {
              "--select-trigger-height": "sizes.8",
              "--select-trigger-padding-x": "spacing.3"
            },
            "content": {
              "p": "1",
              "textStyle": "sm"
            },
            "itemGroup": {
              "mt": "1.5"
            },
            "item": {
              "py": "1.5",
              "px": "2"
            },
            "itemIndicator": {
              "display": "flex",
              "alignItems": "center",
              "justifyContent": "center"
            },
            "itemGroupLabel": {
              "py": "1.5",
              "px": "2"
            },
            "trigger": {
              "borderRadius": "md",
              "textStyle": "sm",
              "gap": "2"
            },
            "indicator": {
              "_icon": {
                "width": "4",
                "height": "4"
              }
            }
          },
          "lg": {
            "root": {
              "--select-trigger-height": "sizes.10",
              "--select-trigger-padding-x": "spacing.4"
            },
            "content": {
              "p": "1.5",
              "textStyle": "md"
            },
            "itemGroup": {
              "mt": "2"
            },
            "item": {
              "py": "2",
              "px": "3"
            },
            "itemGroupLabel": {
              "py": "2",
              "px": "3"
            },
            "trigger": {
              "borderRadius": "md",
              "textStyle": "md",
              "py": "3",
              "gap": "2"
            },
            "indicator": {
              "_icon": {
                "width": "5",
                "height": "5"
              }
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline"
      }
    },
    "slider": {
      "className": "chakra-slider",
      "slots": [
        "root",
        "label",
        "thumb",
        "valueText",
        "track",
        "range",
        "control",
        "markerGroup",
        "marker",
        "draggingIndicator",
        "markerIndicator"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "1",
          "fontSize": "sm",
          "position": "relative",
          "isolation": "isolate",
          "touchAction": "none"
        },
        "control": {
          "display": "inline-flex",
          "alignItems": "center",
          "position": "relative"
        },
        "track": {
          "overflow": "hidden",
          "borderRadius": "full",
          "flex": "1"
        },
        "range": {
          "width": "inherit",
          "height": "inherit",
          "_disabled": {
            "bg": "border.emphasized!"
          }
        },
        "markerGroup": {
          "position": "absolute!",
          "top": "var(--slider-marker-top)",
          "insetInline": "var(--slider-marker-inset)",
          "zIndex": "1"
        },
        "marker": {
          "--marker-bg": {
            "base": "white",
            "_underValue": "colors.bg"
          },
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
          "gap": "1.5",
          "color": "fg.muted",
          "fontSize": "xs"
        },
        "markerIndicator": {
          "width": "var(--slider-marker-size)",
          "height": "var(--slider-marker-size)",
          "borderRadius": "full",
          "bg": "var(--marker-bg)"
        },
        "thumb": {
          "width": "var(--slider-thumb-size)",
          "height": "var(--slider-thumb-size)",
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "outline": 0,
          "zIndex": "2",
          "borderRadius": "full",
          "_focusVisible": {
            "ring": "2px",
            "ringColor": "colorPalette.focusRing",
            "ringOffset": "2px",
            "ringOffsetColor": "bg"
          }
        }
      },
      "variants": {
        "size": {
          "sm": {
            "root": {
              "--slider-thumb-size": "sizes.4",
              "--slider-track-size": "sizes.1.5",
              "--slider-marker-top": "6px",
              "--slider-marker-size": "sizes.1",
              "--slider-marker-inset": "3px"
            }
          },
          "md": {
            "root": {
              "--slider-thumb-size": "sizes.5",
              "--slider-track-size": "sizes.2",
              "--slider-marker-top": "8px",
              "--slider-marker-size": "sizes.1",
              "--slider-marker-inset": "4px"
            }
          },
          "lg": {
            "root": {
              "--slider-thumb-size": "sizes.6",
              "--slider-track-size": "sizes.2.5",
              "--slider-marker-top": "9px",
              "--slider-marker-size": "sizes.1.5",
              "--slider-marker-inset": "5px"
            }
          }
        },
        "variant": {
          "outline": {
            "track": {
              "shadow": "inset",
              "bg": "bg.emphasized/72"
            },
            "range": {
              "bg": "colorPalette.solid"
            },
            "thumb": {
              "borderWidth": "2px",
              "borderColor": "colorPalette.solid",
              "bg": "bg",
              "_disabled": {
                "bg": "border.emphasized",
                "borderColor": "border.emphasized"
              }
            }
          },
          "solid": {
            "track": {
              "bg": "colorPalette.subtle",
              "_disabled": {
                "bg": "bg.muted"
              }
            },
            "range": {
              "bg": "colorPalette.solid"
            },
            "thumb": {
              "bg": "colorPalette.solid",
              "_disabled": {
                "bg": "border.emphasized"
              }
            }
          }
        },
        "orientation": {
          "vertical": {
            "root": {
              "display": "inline-flex"
            },
            "control": {
              "flexDirection": "column",
              "height": "100%",
              "minWidth": "var(--slider-thumb-size)"
            },
            "track": {
              "width": "var(--slider-track-size)"
            },
            "thumb": {
              "left": "50%",
              "translate": "-50% 0"
            }
          },
          "horizontal": {
            "control": {
              "flexDirection": "row",
              "width": "100%",
              "minHeight": "var(--slider-thumb-size)"
            },
            "track": {
              "height": "var(--slider-track-size)"
            },
            "thumb": {
              "top": "50%",
              "translate": "0 -50%"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "outline",
        "orientation": "horizontal"
      }
    },
    "stat": {
      "className": "chakra-stat",
      "slots": [
        "root",
        "label",
        "helpText",
        "valueText",
        "valueUnit",
        "indicator"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "0",
          "position": "relative",
          "flex": "1"
        },
        "label": {
          "color": "fg.muted",
          "textStyle": "sm"
        },
        "helpText": {
          "color": "fg.muted",
          "textStyle": "xs"
        },
        "valueUnit": {
          "color": "fg.muted",
          "textStyle": "xs",
          "fontWeight": "initial",
          "letterSpacing": "initial"
        },
        "valueText": {
          "verticalAlign": "baseline",
          "fontWeight": "semibold",
          "letterSpacing": "tight",
          "fontFeatureSettings": "pnum",
          "fontVariantNumeric": "proportional-nums",
          "display": "inline-flex",
          "gap": "1"
        },
        "indicator": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "marginEnd": 1,
          "& :where(svg)": {
            "w": "1em",
            "h": "1em"
          },
          "&[data-type=up]": {
            "color": "fg.success"
          },
          "&[data-type=down]": {
            "color": "fg.error"
          }
        }
      },
      "variants": {
        "size": {
          "sm": {
            "valueText": {
              "textStyle": "xl"
            }
          },
          "md": {
            "valueText": {
              "textStyle": "2xl"
            }
          },
          "lg": {
            "valueText": {
              "textStyle": "3xl"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "steps": {
      "className": "chakra-steps",
      "slots": [
        "root",
        "list",
        "item",
        "trigger",
        "indicator",
        "separator",
        "content",
        "title",
        "description",
        "nextTrigger",
        "prevTrigger",
        "progress"
      ],
      "base": {
        "root": {
          "display": "flex",
          "width": "full"
        },
        "list": {
          "display": "flex",
          "justifyContent": "space-between",
          "--steps-gutter": "spacing.3",
          "--steps-thickness": "2px"
        },
        "title": {
          "fontWeight": "medium",
          "color": "fg"
        },
        "description": {
          "color": "fg.muted"
        },
        "separator": {
          "bg": "border",
          "flex": "1"
        },
        "indicator": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "flexShrink": "0",
          "borderRadius": "full",
          "fontWeight": "medium",
          "width": "var(--steps-size)",
          "height": "var(--steps-size)",
          "_icon": {
            "flexShrink": "0",
            "width": "var(--steps-icon-size)",
            "height": "var(--steps-icon-size)"
          }
        },
        "item": {
          "position": "relative",
          "display": "flex",
          "flex": "1 0 0",
          "&:last-of-type": {
            "flex": "initial",
            "& [data-part=separator]": {
              "display": "none"
            }
          }
        },
        "trigger": {
          "display": "flex",
          "alignItems": "center",
          "gap": "3",
          "textAlign": "start",
          "focusVisibleRing": "outside",
          "borderRadius": "control.md"
        },
        "content": {
          "focusVisibleRing": "outside"
        }
      },
      "variants": {
        "orientation": {
          "vertical": {
            "root": {
              "flexDirection": "row",
              "height": "100%"
            },
            "list": {
              "flexDirection": "column",
              "alignItems": "flex-start"
            },
            "separator": {
              "position": "absolute",
              "width": "var(--steps-thickness)",
              "height": "100%",
              "maxHeight": "calc(100% - var(--steps-size) - var(--steps-gutter) * 2)",
              "top": "calc(var(--steps-size) + var(--steps-gutter))",
              "insetStart": "calc(var(--steps-size) / 2 - 1px)"
            },
            "item": {
              "alignItems": "flex-start"
            }
          },
          "horizontal": {
            "root": {
              "flexDirection": "column",
              "width": "100%"
            },
            "list": {
              "flexDirection": "row",
              "alignItems": "center"
            },
            "separator": {
              "width": "100%",
              "height": "var(--steps-thickness)",
              "marginX": "var(--steps-gutter)"
            },
            "item": {
              "alignItems": "center"
            }
          }
        },
        "variant": {
          "solid": {
            "indicator": {
              "_incomplete": {
                "borderWidth": "var(--steps-thickness)"
              },
              "_current": {
                "bg": "colorPalette.muted",
                "borderWidth": "var(--steps-thickness)",
                "borderColor": "colorPalette.solid",
                "color": "colorPalette.fg"
              },
              "_complete": {
                "bg": "colorPalette.solid",
                "borderColor": "colorPalette.solid",
                "color": "colorPalette.contrast"
              }
            },
            "separator": {
              "_complete": {
                "bg": "colorPalette.solid"
              }
            }
          },
          "subtle": {
            "indicator": {
              "_incomplete": {
                "bg": "bg.muted"
              },
              "_current": {
                "bg": "colorPalette.muted",
                "color": "colorPalette.fg"
              },
              "_complete": {
                "bg": "colorPalette.emphasized",
                "color": "colorPalette.fg"
              }
            },
            "separator": {
              "_complete": {
                "bg": "colorPalette.emphasized"
              }
            }
          }
        },
        "size": {
          "xs": {
            "root": {
              "gap": "2.5"
            },
            "list": {
              "--steps-size": "sizes.6",
              "--steps-icon-size": "sizes.3.5",
              "textStyle": "xs"
            },
            "title": {
              "textStyle": "sm"
            }
          },
          "sm": {
            "root": {
              "gap": "3"
            },
            "list": {
              "--steps-size": "sizes.8",
              "--steps-icon-size": "sizes.4",
              "textStyle": "xs"
            },
            "title": {
              "textStyle": "sm"
            }
          },
          "md": {
            "root": {
              "gap": "4"
            },
            "list": {
              "--steps-size": "sizes.10",
              "--steps-icon-size": "sizes.4",
              "textStyle": "sm"
            },
            "title": {
              "textStyle": "sm"
            }
          },
          "lg": {
            "root": {
              "gap": "6"
            },
            "list": {
              "--steps-size": "sizes.11",
              "--steps-icon-size": "sizes.5",
              "textStyle": "md"
            },
            "title": {
              "textStyle": "md"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "solid",
        "orientation": "horizontal"
      }
    },
    "switch": {
      "slots": [
        "root",
        "label",
        "control",
        "thumb",
        "indicator"
      ],
      "className": "chakra-switch",
      "base": {
        "root": {
          "display": "inline-flex",
          "gap": "2.5",
          "alignItems": "center",
          "position": "relative",
          "verticalAlign": "middle",
          "--switch-diff": "calc(var(--switch-width) - var(--switch-height))",
          "--switch-x": {
            "base": "var(--switch-diff)",
            "_rtl": "calc(var(--switch-diff) * -1)"
          }
        },
        "label": {
          "lineHeight": "1",
          "userSelect": "none",
          "fontSize": "sm",
          "fontWeight": "medium",
          "_disabled": {
            "opacity": "0.5"
          }
        },
        "indicator": {
          "position": "absolute",
          "height": "var(--switch-height)",
          "width": "var(--switch-height)",
          "fontSize": "var(--switch-indicator-font-size)",
          "fontWeight": "medium",
          "flexShrink": 0,
          "userSelect": "none",
          "display": "grid",
          "placeContent": "center",
          "transition": "inset-inline-start 0.12s ease",
          "insetInlineStart": "calc(var(--switch-x) - 2px)",
          "_checked": {
            "insetInlineStart": "2px"
          }
        },
        "control": {
          "display": "inline-flex",
          "gap": "0.5rem",
          "flexShrink": 0,
          "justifyContent": "flex-start",
          "cursor": "switch",
          "borderRadius": "full",
          "position": "relative",
          "width": "var(--switch-width)",
          "height": "var(--switch-height)",
          "_disabled": {
            "opacity": "0.5",
            "cursor": "not-allowed"
          },
          "_invalid": {
            "focusRingColor": "border.error"
          }
        },
        "thumb": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": 0,
          "transitionProperty": "translate",
          "transitionDuration": "fast",
          "borderRadius": "inherit",
          "_checked": {
            "translate": "var(--switch-x) 0"
          }
        }
      },
      "variants": {
        "variant": {
          "solid": {
            "control": {
              "borderRadius": "full",
              "bg": "bg.emphasized",
              "focusVisibleRing": "outside",
              "_checked": {
                "bg": "colorPalette.solid"
              }
            },
            "thumb": {
              "bg": "white",
              "width": "var(--switch-height)",
              "height": "var(--switch-height)",
              "scale": "0.8",
              "boxShadow": "sm",
              "_checked": {
                "bg": "colorPalette.contrast"
              }
            }
          },
          "raised": {
            "control": {
              "borderRadius": "full",
              "height": "calc(var(--switch-height) / 2)",
              "bg": "bg.muted",
              "boxShadow": "inset",
              "_checked": {
                "bg": "colorPalette.solid/60"
              }
            },
            "thumb": {
              "width": "var(--switch-height)",
              "height": "var(--switch-height)",
              "position": "relative",
              "top": "calc(var(--switch-height) * -0.25)",
              "bg": "white",
              "boxShadow": "xs",
              "focusVisibleRing": "outside",
              "_checked": {
                "bg": "colorPalette.solid"
              }
            }
          }
        },
        "size": {
          "xs": {
            "root": {
              "--switch-width": "sizes.6",
              "--switch-height": "sizes.3",
              "--switch-indicator-font-size": "fontSizes.xs"
            }
          },
          "sm": {
            "root": {
              "--switch-width": "sizes.8",
              "--switch-height": "sizes.4",
              "--switch-indicator-font-size": "fontSizes.xs"
            }
          },
          "md": {
            "root": {
              "--switch-width": "sizes.10",
              "--switch-height": "sizes.5",
              "--switch-indicator-font-size": "fontSizes.sm"
            }
          },
          "lg": {
            "root": {
              "--switch-width": "sizes.12",
              "--switch-height": "sizes.6",
              "--switch-indicator-font-size": "fontSizes.md"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "solid",
        "size": "md"
      }
    },
    "table": {
      "className": "chakra-table",
      "slots": [
        "root",
        "header",
        "body",
        "row",
        "columnHeader",
        "cell",
        "footer",
        "caption"
      ],
      "base": {
        "root": {
          "fontVariantNumeric": "lining-nums tabular-nums",
          "borderCollapse": "collapse",
          "width": "full",
          "textAlign": "start",
          "verticalAlign": "top"
        },
        "row": {
          "_selected": {
            "bg": "colorPalette.subtle"
          }
        },
        "cell": {
          "textAlign": "start",
          "alignItems": "center"
        },
        "columnHeader": {
          "fontWeight": "medium",
          "textAlign": "start",
          "color": "fg"
        },
        "caption": {
          "fontWeight": "medium",
          "textStyle": "xs"
        },
        "footer": {
          "fontWeight": "medium"
        }
      },
      "variants": {
        "interactive": {
          "true": {
            "body": {
              "& tr": {
                "_hover": {
                  "bg": "colorPalette.subtle"
                }
              }
            }
          }
        },
        "stickyHeader": {
          "true": {
            "header": {
              "& :where(tr)": {
                "top": "var(--table-sticky-offset, 0)",
                "position": "sticky",
                "zIndex": 1
              }
            }
          }
        },
        "striped": {
          "true": {
            "row": {
              "&:nth-of-type(odd) td": {
                "bg": "bg.muted"
              }
            }
          }
        },
        "showColumnBorder": {
          "true": {
            "columnHeader": {
              "&:not(:last-of-type)": {
                "borderInlineEndWidth": "1px"
              }
            },
            "cell": {
              "&:not(:last-of-type)": {
                "borderInlineEndWidth": "1px"
              }
            }
          }
        },
        "variant": {
          "line": {
            "columnHeader": {
              "borderBottomWidth": "1px"
            },
            "cell": {
              "borderBottomWidth": "1px"
            },
            "row": {
              "bg": "bg"
            }
          },
          "outline": {
            "root": {
              "boxShadow": "0 0 0 1px {colors.border}",
              "overflow": "hidden"
            },
            "columnHeader": {
              "borderBottomWidth": "1px"
            },
            "header": {
              "bg": "bg.muted"
            },
            "row": {
              "&:not(:last-of-type)": {
                "borderBottomWidth": "1px"
              }
            },
            "footer": {
              "borderTopWidth": "1px"
            }
          }
        },
        "size": {
          "sm": {
            "root": {
              "textStyle": "sm"
            },
            "columnHeader": {
              "px": "2",
              "py": "2"
            },
            "cell": {
              "px": "2",
              "py": "2"
            }
          },
          "md": {
            "root": {
              "textStyle": "sm"
            },
            "columnHeader": {
              "px": "3",
              "py": "3"
            },
            "cell": {
              "px": "3",
              "py": "3"
            }
          },
          "lg": {
            "root": {
              "textStyle": "md"
            },
            "columnHeader": {
              "px": "4",
              "py": "3"
            },
            "cell": {
              "px": "4",
              "py": "3"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "line",
        "size": "md"
      }
    },
    "tabs": {
      "slots": [
        "root",
        "trigger",
        "list",
        "content",
        "contentGroup",
        "indicator"
      ],
      "className": "chakra-tabs",
      "base": {
        "root": {
          "colorPalette": "gray",
          "--tabs-trigger-radius": "radii.control.md",
          "position": "relative",
          "_horizontal": {
            "display": "block"
          },
          "_vertical": {
            "display": "flex"
          }
        },
        "list": {
          "display": "inline-flex",
          "position": "relative",
          "isolation": "isolate",
          "--tabs-indicator-shadow": "shadows.xs",
          "--tabs-indicator-bg": "colors.bg",
          "minH": "var(--tabs-height)",
          "_horizontal": {
            "flexDirection": "row"
          },
          "_vertical": {
            "flexDirection": "column"
          }
        },
        "trigger": {
          "outline": "0",
          "minW": "var(--tabs-height)",
          "height": "var(--tabs-height)",
          "display": "flex",
          "alignItems": "center",
          "fontWeight": "medium",
          "position": "relative",
          "cursor": "button",
          "gap": "2",
          "_focusVisible": {
            "zIndex": 1,
            "focusVisibleRing": "outside"
          },
          "_disabled": {
            "cursor": "not-allowed",
            "opacity": 0.5
          }
        },
        "content": {
          "focusVisibleRing": "inside",
          "_horizontal": {
            "width": "100%",
            "pt": "var(--tabs-content-padding)"
          },
          "_vertical": {
            "height": "100%",
            "ps": "var(--tabs-content-padding)"
          }
        },
        "indicator": {
          "width": "var(--width)",
          "height": "var(--height)",
          "borderRadius": "var(--tabs-indicator-radius)",
          "bg": "var(--tabs-indicator-bg)",
          "shadow": "var(--tabs-indicator-shadow)",
          "zIndex": -1
        }
      },
      "variants": {
        "fitted": {
          "true": {
            "list": {
              "display": "flex"
            },
            "trigger": {
              "flex": 1,
              "textAlign": "center",
              "justifyContent": "center"
            }
          }
        },
        "justify": {
          "start": {
            "list": {
              "justifyContent": "flex-start"
            }
          },
          "center": {
            "list": {
              "justifyContent": "center"
            }
          },
          "end": {
            "list": {
              "justifyContent": "flex-end"
            }
          }
        },
        "size": {
          "xs": {
            "root": {
              "--tabs-height": "sizes.6",
              "--tabs-content-padding": "spacing.2",
              "--tabs-trigger-radius": "radii.control.sm"
            },
            "trigger": {
              "py": "1",
              "px": "2",
              "textStyle": "xs"
            }
          },
          "sm": {
            "root": {
              "--tabs-height": "sizes.7",
              "--tabs-content-padding": "spacing.3",
              "--tabs-trigger-radius": "radii.control.md"
            },
            "trigger": {
              "py": "1",
              "px": "3",
              "textStyle": "sm"
            }
          },
          "md": {
            "root": {
              "--tabs-height": "sizes.8",
              "--tabs-content-padding": "spacing.4",
              "--tabs-trigger-radius": "radii.control.md"
            },
            "trigger": {
              "py": "2",
              "px": "4",
              "textStyle": "sm"
            }
          },
          "lg": {
            "root": {
              "--tabs-height": "sizes.10",
              "--tabs-content-padding": "spacing.4.5",
              "--tabs-trigger-radius": "radii.control.lg"
            },
            "trigger": {
              "py": "2",
              "px": "4.5",
              "textStyle": "md"
            }
          }
        },
        "variant": {
          "line": {
            "list": {
              "display": "flex",
              "borderColor": "border",
              "_horizontal": {
                "borderBottomWidth": "1px"
              },
              "_vertical": {
                "borderEndWidth": "1px"
              }
            },
            "trigger": {
              "color": "fg.muted",
              "_hover": {
                "color": "fg.subtle"
              },
              "_disabled": {
                "_active": {
                  "bg": "initial"
                }
              },
              "_selected": {
                "color": "fg",
                "_horizontal": {
                  "layerStyle": "indicator.bottom",
                  "borderTopRadius": "3px",
                  "--indicator-offset-x": "spacing.3",
                  "--indicator-offset-y": "-1px",
                  "--indicator-color": "colors.colorPalette.solid"
                },
                "_vertical": {
                  "layerStyle": "indicator.end",
                  "--indicator-offset-x": "-1px"
                }
              }
            }
          },
          "pills": {
            "list": {
              "gap": 2
            },
            "trigger": {
              "borderRadius": "var(--tabs-trigger-radius)",
              "color": "fg.muted",
              "borderWidth": "1px",
              "borderColor": "border.emphasized",
              "_hover": {
                "bg": "bg.muted",
                "color": "fg.subtle"
              },
              "_selected": {
                "bg": "colorPalette.subtle",
                "color": "colorPalette.fg",
                "borderColor": "colorPalette.solid/40",
                "_hover": {
                  "bg": "colorPalette.subtle",
                  "color": "colorPalette.fg"
                }
              }
            }
          },
          "ghost": {
            "list": {
              "gap": 2
            },
            "trigger": {
              "borderRadius": "var(--tabs-trigger-radius)",
              "color": "fg.subtle",
              "_hover": {
                "bg": "colorPalette.muted",
                "color": "colorPalette.fg"
              },
              "_selected": {
                "bg": "colorPalette.subtle",
                "color": "colorPalette.fg",
                "_hover": {
                  "bg": "colorPalette.subtle",
                  "color": "colorPalette.fg"
                }
              }
            }
          },
          "enclosed": {
            "list": {
              "bg": "bg.muted",
              "boxShadow": "inset",
              "borderRadius": "md",
              "borderWidth": "1px",
              "minH": "calc(var(--tabs-height) - 4px)"
            },
            "trigger": {
              "justifyContent": "center",
              "color": "fg.muted",
              "borderRadius": "var(--tabs-trigger-radius)",
              "_hover": {
                "color": "fg.subtle"
              },
              "_selected": {
                "bg": "bg",
                "color": "colorPalette.fg",
                "shadow": "sm"
              }
            }
          },
          "outline": {
            "list": {
              "--line-thickness": "1px",
              "--line-offset": "calc(var(--line-thickness) * -1)",
              "borderColor": "border",
              "display": "flex",
              "_horizontal": {
                "_before": {
                  "content": "\"\"",
                  "position": "absolute",
                  "bottom": "0px",
                  "width": "100%",
                  "borderBottomWidth": "var(--line-thickness)",
                  "borderBottomColor": "border"
                }
              },
              "_vertical": {
                "_before": {
                  "content": "\"\"",
                  "position": "absolute",
                  "insetInline": "var(--line-offset)",
                  "height": "calc(100% - calc(var(--line-thickness) * 2))",
                  "borderEndWidth": "var(--line-thickness)",
                  "borderEndColor": "border"
                }
              }
            },
            "trigger": {
              "color": "fg.muted",
              "borderWidth": "1px",
              "borderColor": "transparent",
              "_hover": {
                "color": "fg.subtle"
              },
              "_selected": {
                "bg": "currentBg",
                "color": "colorPalette.fg"
              },
              "_horizontal": {
                "borderTopRadius": "var(--tabs-trigger-radius)",
                "marginBottom": "var(--line-offset)",
                "marginEnd": {
                  "_notLast": "var(--line-offset)"
                },
                "_selected": {
                  "borderColor": "border",
                  "borderBottomColor": "transparent"
                }
              },
              "_vertical": {
                "borderStartRadius": "var(--tabs-trigger-radius)",
                "marginEnd": "var(--line-offset)",
                "marginBottom": {
                  "_notLast": "var(--line-offset)"
                },
                "_selected": {
                  "borderColor": "border",
                  "borderEndColor": "transparent"
                }
              }
            }
          },
          "plain": {
            "trigger": {
              "color": "fg.muted",
              "_selected": {
                "color": "colorPalette.fg"
              },
              "borderRadius": "var(--tabs-trigger-radius)",
              "&[data-selected][data-ssr]": {
                "bg": "var(--tabs-indicator-bg)",
                "shadow": "var(--tabs-indicator-shadow)",
                "borderRadius": "var(--tabs-indicator-radius)"
              }
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "line"
      }
    },
    "tag": {
      "slots": [
        "root",
        "label",
        "closeTrigger",
        "startElement",
        "endElement"
      ],
      "className": "chakra-tag",
      "base": {
        "root": {
          "colorPalette": "neutral",
          "display": "inline-flex",
          "alignItems": "center",
          "verticalAlign": "top",
          "maxWidth": "100%",
          "userSelect": "none",
          "borderRadius": "full",
          "focusVisibleRing": "outside"
        },
        "label": {
          "lineClamp": "1"
        },
        "closeTrigger": {
          "cursor": "button",
          "position": "relative",
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "outline": "0",
          "borderRadius": "full",
          "color": "currentColor",
          "opacity": 0.8,
          "padding": "1px",
          "focusVisibleRing": "inside",
          "focusRingWidth": "2px",
          "_hover": {
            "opacity": 1,
            "bg": "colorPalette.subtle"
          },
          "_after": {
            "content": "\"\"",
            "position": "absolute",
            "boxSize": "24px",
            "borderRadius": "full"
          }
        },
        "startElement": {
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "flexShrink": 0,
          "boxSize": "var(--tag-element-size)",
          "_icon": {
            "boxSize": "80% !important"
          },
          "&:has([data-scope=avatar])": {
            "boxSize": "var(--tag-avatar-size)",
            "ms": "var(--tag-element-offset)"
          },
          "&:has([class*=\"status__root\"])": {
            "width": "var(--tag-status-size)"
          }
        },
        "endElement": {
          "flexShrink": 0,
          "boxSize": "var(--tag-element-size)",
          "_icon": {
            "boxSize": "100%"
          },
          "&:has(button)": {
            "me": "var(--tag-element-offset)"
          }
        }
      },
      "variants": {
        "size": {
          "sm": {
            "root": {
              "px": "1.5",
              "minH": "5",
              "gap": "1",
              "--tag-avatar-size": "spacing.3.5",
              "--tag-status-size": "spacing.2",
              "--tag-element-size": "spacing.3.5",
              "--tag-element-offset": "spacing.-0.5"
            },
            "label": {
              "textStyle": "xs"
            }
          },
          "md": {
            "root": {
              "px": "2",
              "minH": "6",
              "gap": "1",
              "--tag-avatar-size": "spacing.4",
              "--tag-status-size": "spacing.2",
              "--tag-element-size": "spacing.4",
              "--tag-element-offset": "spacing.-1"
            },
            "label": {
              "textStyle": "xs"
            }
          },
          "lg": {
            "root": {
              "px": "2.5",
              "minH": "7",
              "gap": "1",
              "--tag-avatar-size": "spacing.5",
              "--tag-status-size": "spacing.2",
              "--tag-element-size": "spacing.5",
              "--tag-element-offset": "spacing.-1.5"
            },
            "label": {
              "textStyle": "sm"
            },
            "closeTrigger": {
              "padding": "2px"
            }
          },
          "xl": {
            "root": {
              "px": "3",
              "minH": "8",
              "gap": "1.5",
              "--tag-avatar-size": "spacing.6",
              "--tag-status-size": "spacing.2",
              "--tag-element-size": "spacing.6",
              "--tag-element-offset": "spacing.-2"
            },
            "label": {
              "textStyle": "md"
            },
            "closeTrigger": {
              "padding": "3px"
            }
          }
        },
        "variant": {
          "subtle": {
            "root": {
              "bg": "colorPalette.subtle",
              "color": "colorPalette.fg"
            }
          },
          "solid": {
            "root": {
              "bg": "colorPalette.solid",
              "color": "colorPalette.contrast"
            }
          },
          "outline": {
            "root": {
              "color": "colorPalette.fg",
              "shadow": "inset 0 0 0px 1px var(--shadow-color)",
              "shadowColor": "colorPalette.subtle"
            }
          },
          "surface": {
            "root": {
              "bg": "colorPalette.muted/20",
              "color": "colorPalette.fg",
              "shadow": "inset 0 0 0px 1px var(--shadow-color)",
              "shadowColor": "colorPalette.subtle"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "surface"
      }
    },
    "toast": {
      "slots": [
        "root",
        "title",
        "description",
        "indicator",
        "closeTrigger",
        "actionTrigger"
      ],
      "className": "chakra-toast",
      "base": {
        "root": {
          "width": "full",
          "display": "flex",
          "alignItems": "flex-start",
          "position": "relative",
          "gap": "2",
          "py": "3",
          "ps": "3",
          "pe": "6",
          "borderRadius": "md",
          "borderWidth": "1px",
          "translate": "var(--x) var(--y)",
          "scale": "var(--scale)",
          "zIndex": "var(--z-index)",
          "height": "var(--height, var(--toast-height))",
          "opacity": "var(--opacity)",
          "willChange": "translate, opacity, scale, height",
          "transition": "translate 400ms, scale 400ms, opacity 400ms, height 200ms, box-shadow 200ms",
          "transitionTimingFunction": "bounce-in",
          "_closed": {
            "transition": "translate 400ms, scale 400ms, height 200ms, opacity 200ms",
            "transitionTimingFunction": "bounce-out"
          },
          "bg": "bg.panel",
          "color": "fg",
          "boxShadow": "lg",
          "overflow": "hidden",
          "--toast-indicated-color": "colors.fg.muted",
          "&[data-type=warning]": {
            "--toast-indicated-color": "colors.fg.warning"
          },
          "&[data-type=success]": {
            "--toast-indicated-color": "colors.fg.success"
          },
          "&[data-type=error]": {
            "--toast-indicated-color": "colors.fg.error"
          },
          "&[data-overlap]": {
            "_before": {
              "content": "\"\"",
              "position": "absolute",
              "inset": "0",
              "maskImage": "linear-gradient(to bottom, transparent, black 50%)"
            }
          }
        },
        "title": {
          "fontWeight": "medium",
          "textStyle": "sm",
          "marginEnd": "2"
        },
        "description": {
          "display": "inline",
          "textStyle": "sm",
          "opacity": "0.8"
        },
        "indicator": {
          "flexShrink": "0",
          "boxSize": "5",
          "color": "var(--toast-indicated-color)"
        },
        "actionTrigger": {
          "cursor": "button",
          "textStyle": "sm",
          "fontWeight": "medium",
          "height": "6",
          "px": "3",
          "ms": "-3",
          "borderRadius": "sm",
          "alignSelf": "flex-start",
          "transition": "background 200ms",
          "color": "colorPalette.solid/80",
          "_hover": {
            "bg": "bg.subtle",
            "color": "colorPalette.solid"
          }
        },
        "closeTrigger": {
          "position": "absolute",
          "top": "2",
          "insetEnd": "2"
        }
      }
    },
    "tooltip": {
      "slots": [
        "trigger",
        "arrow",
        "arrowTip",
        "positioner",
        "content"
      ],
      "className": "chakra-tooltip",
      "base": {
        "content": {
          "--tooltip-bg": "colors.bg",
          "display": "flex",
          "alignItems": "center",
          "bg": "var(--tooltip-bg)",
          "color": "fg",
          "px": "2.5",
          "py": "1",
          "borderRadius": "panel.sm",
          "fontWeight": "medium",
          "textStyle": "xs",
          "boxShadow": "md",
          "maxW": "xs",
          "zIndex": "tooltip",
          "transformOrigin": "var(--transform-origin)",
          "_open": {
            "animationStyle": "scale-fade-in",
            "animationDuration": "fast"
          },
          "_closed": {
            "animationStyle": "scale-fade-out",
            "animationDuration": "fast"
          }
        },
        "arrow": {
          "--arrow-size": "sizes.2",
          "--arrow-background": "var(--tooltip-bg)",
          "zIndex": "-1"
        },
        "arrowTip": {
          "borderTopWidth": "1px",
          "borderInlineStartWidth": "1px",
          "borderColor": "var(--tooltip-bg)"
        }
      },
      "variants": {
        "variant": {
          "inverted": {
            "content": {
              "--tooltip-bg": "colors.bg.inverted",
              "color": "fg.inverted"
            }
          }
        }
      }
    },
    "status": {
      "className": "chakra-status",
      "slots": [
        "root",
        "indicator"
      ],
      "base": {
        "root": {
          "colorPalette": "gray",
          "display": "inline-flex",
          "alignItems": "center",
          "gap": "2"
        },
        "indicator": {
          "width": "0.64em",
          "height": "0.64em",
          "flexShrink": 0,
          "borderRadius": "full",
          "forcedColorAdjust": "none",
          "bg": "colorPalette.solid"
        }
      },
      "variants": {
        "size": {
          "sm": {
            "root": {
              "textStyle": "xs"
            }
          },
          "md": {
            "root": {
              "textStyle": "sm"
            }
          },
          "lg": {
            "root": {
              "textStyle": "md"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "timeline": {
      "slots": [
        "root",
        "item",
        "content",
        "separator",
        "indicator",
        "connector",
        "title",
        "description"
      ],
      "className": "chakra-timeline",
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "width": "full",
          "--timeline-thickness": "1px",
          "--timeline-gutter": "4px"
        },
        "item": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexShrink": 0,
          "gap": "4",
          "_last": {
            "& :where(.chakra-timeline__separator)": {
              "display": "none"
            }
          }
        },
        "separator": {
          "position": "absolute",
          "borderStartWidth": "var(--timeline-thickness)",
          "ms": "calc(-1 * var(--timeline-thickness) / 2)",
          "insetInlineStart": "calc(var(--timeline-indicator-size) / 2)",
          "insetBlock": "0",
          "borderColor": "border"
        },
        "indicator": {
          "outline": "2px solid {colors.bg}",
          "position": "relative",
          "flexShrink": "0",
          "boxSize": "var(--timeline-indicator-size)",
          "fontSize": "var(--timeline-font-size)",
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "borderRadius": "full",
          "fontWeight": "medium"
        },
        "connector": {
          "alignSelf": "stretch",
          "position": "relative"
        },
        "content": {
          "pb": "6",
          "display": "flex",
          "flexDirection": "column",
          "width": "full",
          "gap": "2"
        },
        "title": {
          "display": "flex",
          "fontWeight": "medium",
          "flexWrap": "wrap",
          "gap": "1.5",
          "alignItems": "center",
          "mt": "var(--timeline-margin)"
        },
        "description": {
          "color": "fg.muted",
          "textStyle": "xs"
        }
      },
      "variants": {
        "variant": {
          "subtle": {
            "indicator": {
              "bg": "bg.muted"
            }
          },
          "solid": {
            "indicator": {
              "bg": "bg.inverted",
              "color": "fg.inverted"
            }
          },
          "outline": {
            "indicator": {
              "bg": "bg",
              "borderWidth": "2px"
            }
          },
          "plain": {}
        },
        "size": {
          "sm": {
            "root": {
              "--timeline-indicator-size": "sizes.4",
              "--timeline-font-size": "fontSizes.2xs"
            },
            "title": {
              "textStyle": "xs"
            }
          },
          "md": {
            "root": {
              "--timeline-indicator-size": "sizes.5",
              "--timeline-font-size": "fontSizes.xs"
            },
            "title": {
              "textStyle": "sm"
            }
          },
          "lg": {
            "root": {
              "--timeline-indicator-size": "sizes.6",
              "--timeline-font-size": "fontSizes.xs"
            },
            "title": {
              "mt": "0.5",
              "textStyle": "sm"
            }
          },
          "xl": {
            "root": {
              "--timeline-indicator-size": "sizes.8",
              "--timeline-font-size": "fontSizes.sm"
            },
            "title": {
              "mt": "1.5",
              "textStyle": "sm"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md",
        "variant": "solid"
      }
    },
    "suiAppShell": {
      "className": "sui-app-shell",
      "slots": [
        "root",
        "content",
        "main"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "height": "100dvh"
        },
        "content": {
          "display": "flex",
          "flex": 1,
          "minWidth": 0,
          "minHeight": 0
        },
        "main": {
          "display": "flex",
          "flex": 1,
          "flexDirection": "column",
          "minWidth": 0
        }
      },
      "variants": {
        "fullscreen": {
          "true": {
            "root": {
              "position": "fixed",
              "inset": 0
            }
          }
        },
        "variant": {
          "plain": {}
        }
      },
      "defaultVariants": {
        "fullscreen": false,
        "variant": "plain"
      }
    },
    "suiLoadingOverlay": {
      "className": "sui-loading-overlay",
      "slots": [
        "root",
        "text"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
          "justifyContent": "center",
          "p": 4,
          "transitionProperty": "opacity",
          "transitionDuration": "slower",
          "_open": {
            "opacity": 1
          },
          "_closed": {
            "opacity": 0
          }
        }
      },
      "variants": {
        "variant": {
          "fill": {
            "root": {
              "flex": 1,
              "height": "100%",
              "bg": "currentBg"
            }
          },
          "fullscreen": {
            "root": {
              "position": "fixed",
              "inset": 0,
              "zIndex": "modal",
              "bg": "bg"
            }
          },
          "overlay": {
            "root": {
              "position": "absolute",
              "inset": 0,
              "bg": "currentBg/50"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "fill"
      }
    },
    "suiPersona": {
      "className": "sui-persona",
      "slots": [
        "root",
        "avatar",
        "presence",
        "details",
        "label",
        "secondaryLabel",
        "tertiaryLabel"
      ],
      "base": {
        "root": {
          "--presence-border-color": "var(--bg-currentcolor)",
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "center"
        },
        "presence": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "center",
          "position": "absolute",
          "bottom": 0,
          "right": 0,
          "boxSize": "calc(var(--avatar-size) / 3)",
          "transform": "translate(12%, 12%)",
          "borderWidth": "0.10em",
          "borderRadius": "50%",
          "borderColor": "var(--presence-border-color)",
          "bg": "var(--persona-presence)"
        },
        "details": {
          "display": "flex",
          "flexDirection": "column",
          "minW": 0,
          "lineHeight": "short"
        },
        "label": {
          "overflow": "hidden",
          "whiteSpace": "nowrap",
          "textOverflow": "ellipsis",
          "minW": 0,
          "color": "fg"
        },
        "secondaryLabel": {
          "overflow": "hidden",
          "whiteSpace": "nowrap",
          "textOverflow": "ellipsis",
          "minW": 0,
          "color": "fg/60"
        },
        "tertiaryLabel": {
          "overflow": "hidden",
          "whiteSpace": "nowrap",
          "textOverflow": "ellipsis",
          "minW": 0,
          "color": "fg/60"
        }
      },
      "variants": {
        "size": {
          "2xs": {
            "details": {
              "ms": 1
            },
            "label": {
              "fontSize": "xs"
            },
            "secondaryLabel": {
              "display": "none"
            },
            "tertiaryLabel": {
              "display": "none"
            }
          },
          "xs": {
            "details": {
              "ms": 1.5
            },
            "label": {
              "fontSize": "xs"
            },
            "secondaryLabel": {
              "display": "none"
            },
            "tertiaryLabel": {
              "display": "none"
            }
          },
          "sm": {
            "details": {
              "ms": 2
            },
            "label": {
              "fontSize": "sm"
            },
            "secondaryLabel": {
              "fontSize": "xs"
            },
            "tertiaryLabel": {
              "display": "none"
            }
          },
          "md": {
            "details": {
              "ms": 2
            },
            "label": {
              "fontSize": "sm"
            },
            "secondaryLabel": {
              "fontSize": "xs"
            },
            "tertiaryLabel": {
              "display": "none"
            }
          },
          "lg": {
            "details": {
              "ms": 3
            },
            "label": {
              "fontSize": "md"
            },
            "secondaryLabel": {
              "fontSize": "sm"
            },
            "tertiaryLabel": {
              "fontSize": "sm"
            }
          },
          "xl": {
            "details": {
              "ms": 4
            },
            "label": {
              "fontSize": "lg"
            },
            "secondaryLabel": {
              "fontSize": "md"
            },
            "tertiaryLabel": {
              "fontSize": "md"
            }
          },
          "2xl": {
            "details": {
              "ms": 4
            },
            "label": {
              "fontSize": "xl"
            },
            "secondaryLabel": {
              "fontSize": "lg"
            },
            "tertiaryLabel": {
              "fontSize": "lg"
            }
          }
        }
      },
      "defaultVariants": {
        "size": "md"
      }
    },
    "suiGridList": {
      "className": "sui-grid-list",
      "slots": [
        "root",
        "item",
        "header",
        "cell"
      ],
      "base": {
        "root": {
          "position": "relative"
        },
        "item": {
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "center",
          "justifyContent": "space-between",
          "flex": 1,
          "userSelect": "none",
          "borderRadius": "inherit",
          "outline": "none",
          "_focusVisible": {
            "boxShadow": "outline"
          },
          "_disabled": {
            "cursor": "disabled",
            "opacity": 0.5,
            "_hover": {
              "bg": "transparent",
              "_dark": {
                "bg": "transparent"
              }
            },
            "_active": {
              "bg": "transparent",
              "_dark": {
                "bg": "transparent"
              }
            }
          }
        },
        "header": {
          "display": "flex",
          "flexDirection": "row",
          "position": "sticky",
          "fontWeight": "medium",
          "color": "fg.subtle"
        },
        "cell": {
          "flexShrink": 0
        }
      },
      "variants": {
        "interactive": {
          "true": {
            "item": {
              "cursor": "button",
              "transitionProperty": "bg",
              "transitionDuration": "fast",
              "_hover": {
                "bg": "bg.subtle"
              },
              "_active": {
                "bg": "bg.subtle"
              }
            }
          }
        },
        "variant": {
          "simple": {},
          "rounded": {
            "item": {
              "borderRadius": "md",
              "mb": 0.5
            }
          }
        },
        "size": {
          "sm": {
            "root": {
              "textStyle": "sm",
              "py": 0.5
            },
            "item": {
              "py": 1,
              "px": 2,
              "gap": 1
            },
            "header": {
              "py": 0.5,
              "px": 2
            }
          },
          "md": {
            "root": {
              "textStyle": "md",
              "py": 1
            },
            "item": {
              "py": 2,
              "px": 3,
              "gap": 2
            },
            "header": {
              "py": 1,
              "px": 3
            }
          }
        }
      },
      "compoundVariants": [
        {
          "variant": "rounded",
          "size": "sm",
          "css": {
            "root": {
              "p": 1
            }
          }
        },
        {
          "variant": "rounded",
          "size": "md",
          "css": {
            "root": {
              "p": 2
            }
          }
        }
      ],
      "defaultVariants": {
        "variant": "simple",
        "size": "md"
      }
    },
    "suiNavbar": {
      "className": "sui-navbar",
      "slots": [
        "root",
        "content",
        "brand",
        "item",
        "link"
      ],
      "base": {
        "root": {
          "display": "flex",
          "zIndex": "layer-3",
          "width": "full",
          "height": "auto",
          "alignItems": "center",
          "justifyContent": "center",
          "top": 0,
          "insetX": 0,
          "transitionProperty": "common",
          "transitionDuration": "moderate",
          "transitionTimingFunction": "ease-in-out",
          "_hidden": {
            "transform": "translateY(-100%)"
          }
        },
        "content": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "space-between",
          "width": "full",
          "height": "var(--navbar-height)",
          "flexWrap": "nowrap"
        },
        "brand": {
          "display": "flex",
          "alignItems": "center",
          "justifyContent": "flex-start",
          "height": "full",
          "bg": "transparent",
          "textDecoration": "none",
          "color": "inherit",
          "whiteSpace": "nowrap",
          "boxSizing": "border-box"
        },
        "link": {
          "bg": "transparent",
          "color": "currentColor",
          "display": "inline-flex",
          "alignItems": "center",
          "justifyContent": "center",
          "textDecoration": "none",
          "whiteSpace": "nowrap",
          "boxSizing": "border-box",
          "borderRadius": "md",
          "transitionProperty": "common",
          "transitionDuration": "moderate",
          "lineHeight": 1,
          "_focusVisible": {
            "outline": "none",
            "boxShadow": "outline"
          },
          "_hover": {
            "bg": "bg.muted",
            "textDecoration": "none"
          },
          "_active": {
            "fontWeight": "semibold"
          }
        }
      },
      "variants": {
        "variant": {
          "neutral": {
            "root": {
              "bg": "bg.panel",
              "color": "fg"
            }
          },
          "solid": {
            "root": {
              "bg": "colorPalette.500",
              "color": "colorPalette.contrast"
            }
          }
        },
        "size": {
          "md": {
            "root": {
              "fontSize": "sm"
            },
            "content": {
              "px": {
                "base": 4,
                "lg": 6
              },
              "gap": 4
            },
            "link": {
              "px": 3,
              "h": 8
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "neutral",
        "size": "md"
      }
    },
    "suiSidebar": {
      "className": "sui-sidebar",
      "slots": [
        "root",
        "backdrop",
        "header",
        "body",
        "footer",
        "trigger",
        "flyoutTrigger",
        "group",
        "groupHeader",
        "groupTitle",
        "groupEndElement",
        "groupContent",
        "track",
        "inset"
      ],
      "base": {
        "root": {
          "--sidebar-z-index": "zIndex.layer-3",
          "position": "relative",
          "display": "flex",
          "flexDirection": "column"
        },
        "backdrop": {
          "layerStyle": "backdrop",
          "position": "fixed",
          "inset": 0,
          "--sidebar-backdrop-z-index": "zIndex.layer-3",
          "zIndex": "calc(var(--sidebar-backdrop-z-index) - 2)",
          "_open": {
            "animationName": "fade-in",
            "animationDuration": "slow"
          },
          "_closed": {
            "animationName": "fade-out",
            "animationDuration": "moderate"
          }
        },
        "trigger": {
          "display": "inline-flex",
          "appearance": "none",
          "alignItems": "center",
          "justifyContent": "center",
          "userSelect": "none",
          "whiteSpace": "nowrap",
          "verticalAlign": "middle",
          "outline": "none"
        },
        "header": {
          "display": "flex",
          "flexDirection": "row",
          "py": 2
        },
        "body": {
          "display": "flex",
          "flexDirection": "column",
          "gap": 4,
          "flex": 1,
          "py": 3,
          "overflowY": "auto"
        },
        "footer": {
          "display": "flex",
          "flexDirection": "column",
          "py": 2
        },
        "group": {
          "position": "relative"
        },
        "groupHeader": {
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "center",
          "gap": 1,
          "height": 6,
          "borderRadius": "md",
          "fontSize": "xs",
          "transitionProperty": "common",
          "transitionDuration": "fast",
          "_groupCollapsible": {
            "cursor": "button",
            "userSelect": "none",
            "_hover": {
              "bg": "sidebar.accent.bg/80"
            }
          }
        },
        "groupTitle": {
          "display": "flex",
          "alignItems": "center",
          "flex": 1,
          "px": 2,
          "fontWeight": "medium",
          "color": "sidebar.fg/70"
        },
        "groupEndElement": {
          "& > button": {
            "boxSize": 6,
            "_hover": {
              "bg": "transparent"
            }
          }
        },
        "groupContent": {
          "pt": 1,
          "display": "flex",
          "flexDirection": "column"
        },
        "track": {
          "display": "flex",
          "justifyContent": "center",
          "position": "absolute",
          "top": 0,
          "right": "-4px",
          "bottom": 0,
          "width": "7px",
          "cursor": "button",
          "_after": {
            "content": "\"\"",
            "display": "block",
            "height": "100%",
            "width": "2px",
            "opacity": 0,
            "transitionProperty": "opacity",
            "transitionDuration": "fast",
            "transitionDelay": "0.2s",
            "bg": "sidebar.accent.fg/60",
            "pointerEvents": "none"
          },
          "_hover": {
            "_after": {
              "opacity": 1
            }
          }
        },
        "flyoutTrigger": {
          "display": "none"
        },
        "inset": {
          "height": "100%",
          "minHeight": "0",
          "display": "flex",
          "flexDirection": "column",
          "bg": "bg.content"
        }
      },
      "variants": {
        "variant": {
          "sidebar": {
            "root": {
              "borderRightWidth": "1px",
              "borderLeftColor": "sidebar.border"
            },
            "inset": {}
          },
          "inset": {
            "inset": {
              "borderColor": "sidebar.border",
              "borderWidth": "1px",
              "borderRadius": "panel.md",
              "marginBlock": "var(--inset-gap, {spacing.2})",
              "marginEnd": "var(--inset-gap, {spacing.2})",
              "overflow": "clip"
            }
          }
        },
        "mode": {
          "collapsible": {
            "root": {
              "base": {
                "position": "fixed",
                "height": "100dvh",
                "zIndex": "layer-3"
              },
              "md": {
                "position": "relative",
                "height": "auto",
                "zIndex": "unset"
              },
              "width": "var(--sidebar-width, 280px)",
              "maxWidth": [
                "100vw",
                "var(--sidebar-max-width, 320px)"
              ],
              "minWidth": "var(--sidebar-min-width, 220px)",
              "bg": "sidebar.bg",
              "transitionProperty": "margin-left",
              "_open": {
                "marginLeft": 0,
                "transitionDuration": "moderate",
                "transitionTimingFunction": "bounce-in"
              },
              "_closed": {
                "marginLeft": "calc(var(--sidebar-width, 280px) * -1)",
                "transitionDuration": "fast",
                "transitionTimingFunction": "bounce-out"
              }
            }
          },
          "flyout": {
            "root": {
              "position": "fixed",
              "top": 2,
              "left": 2,
              "bottom": 2,
              "zIndex": "var(--sidebar-z-index)",
              "width": "var(--sidebar-width, 280px)",
              "maxWidth": [
                "100vw",
                "var(--sidebar-max-width, 320px)"
              ],
              "minWidth": "var(--sidebar-min-width, 220px)",
              "bg": "sidebar.bg",
              "borderColor": "sidebar.border",
              "boxShadow": "none",
              "borderWidth": "1px",
              "borderRadius": "lg",
              "_open": {
                "transitionDuration": "moderate",
                "transitionTimingFunction": "ease-out",
                "boxShadow": "lg"
              },
              "_closed": {
                "left": "calc(var(--sidebar-width, 280px) * -1)",
                "transitionDuration": "fast",
                "transitionTimingFunction": "ease-in-out"
              }
            },
            "flyoutTrigger": {
              "display": "block",
              "position": "absolute",
              "--sidebar-flyout-trigger-z-index": "zIndex.layer-3",
              "zIndex": "calc(var(--sidebar-flyout-trigger-z-index) - 1)",
              "height": "100%",
              "width": "8px"
            },
            "track": {
              "top": "8px",
              "bottom": "8px"
            }
          },
          "compact": {}
        },
        "size": {
          "md": {
            "header": {
              "px": 3
            },
            "body": {
              "px": 3
            },
            "footer": {
              "px": 3
            },
            "groupEndElement": {
              "pe": "1"
            }
          }
        }
      },
      "compoundVariants": [
        {
          "variant": "inset",
          "mode": "collapsible",
          "css": {
            "root": {
              "py": "var(--inset-gap, {spacing.2})",
              "_closed": {
                "& [class*=\"__inset\"]": {
                  "ps": "var(--inset-gap, {spacing.2})"
                }
              }
            }
          }
        }
      ],
      "defaultVariants": {
        "variant": "sidebar",
        "mode": "collapsible",
        "size": "md"
      }
    },
    "suiSidebarNavItem": {
      "className": "sui-sidebar-nav-item",
      "slots": [
        "item",
        "button",
        "endElement"
      ],
      "base": {
        "item": {
          "position": "relative",
          "fontSize": "sm",
          "py": "1px"
        },
        "button": {
          "display": "flex",
          "alignItems": "center",
          "gap": 2,
          "isolation": "isolate",
          "width": "100%",
          "textOverflow": "ellipsis",
          "overflow": "hidden",
          "whiteSpace": "nowrap",
          "cursor": "button",
          "transitionProperty": "common",
          "transitionDuration": "fast",
          "focusVisibleRing": "inside",
          "focusRingWidth": "1px",
          "& > svg": {
            "boxSize": 4,
            "color": "var(--sidebar-item-icon-color)"
          },
          "&:has([data-slot=\"endElement\"])": {
            "pe": 0
          }
        },
        "endElement": {
          "display": "flex",
          "gap": "1px",
          "ms": "auto",
          "& button": {
            "_hover": {
              "bg": "transparent"
            }
          }
        }
      },
      "variants": {
        "variant": {
          "muted": {
            "button": {
              "bg": "transparent",
              "color": "sidebar.accent.fg/85",
              "--sidebar-item-icon-color": "sidebar.accent.fg/85",
              "_hover": {
                "bg": "sidebar.accent.bg/90",
                "color": "sidebar.accent.fg",
                "--sidebar-item-icon-color": "sidebar.accent.fg"
              },
              "_active": {
                "bg": "sidebar.accent.bg",
                "color": "sidebar.accent.fg",
                "--sidebar-item-icon-color": "sidebar.accent.fg"
              }
            }
          }
        },
        "size": {
          "sm": {
            "item": {
              "textStyle": "sm"
            },
            "button": {
              "borderRadius": "control.md",
              "px": 2,
              "height": 7
            },
            "endElement": {
              "pe": "1"
            }
          },
          "md": {
            "item": {
              "textStyle": "sm"
            },
            "button": {
              "borderRadius": "control.md",
              "px": 2.5,
              "height": 8
            },
            "endElement": {
              "pe": "1"
            }
          },
          "lg": {
            "item": {
              "textStyle": "sm"
            },
            "button": {
              "borderRadius": "control.lg",
              "px": 3,
              "height": 10
            },
            "endElement": {
              "pe": "1"
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "muted",
        "size": "md"
      }
    },
    "suiPage": {
      "className": "sui-page",
      "slots": [
        "root",
        "header",
        "headerContent",
        "heading",
        "headerFooter",
        "title",
        "description",
        "body"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column",
          "flex": 1,
          "minH": 0
        },
        "title": {
          "fontWeight": "medium"
        },
        "description": {
          "color": "fg.muted"
        },
        "body": {
          "flex": 1,
          "overflowY": "auto",
          "p": 4
        }
      },
      "variants": {
        "variant": {
          "panel": {
            "root": {
              "bg": "var(--page-bg-color)",
              "zIndex": 1
            },
            "header": {
              "--page-header-row-height": "40px",
              "display": "grid",
              "gridTemplateAreas": "\"nav heading actions\"\n               \"footer footer footer\"",
              "gridTemplateColumns": "auto max-content 1fr",
              "gridTemplateRows": "minmax(var(--page-header-row-height), auto)",
              "columnGap": 2,
              "alignItems": "center",
              "justifyContent": "stretch",
              "flexShrink": 0,
              "px": 3,
              "borderBottomWidth": "1px"
            },
            "title": {
              "me": 4,
              "textStyle": "sm"
            },
            "description": {
              "textStyle": "xs"
            }
          },
          "settings": {
            "root": {
              "overflowY": "auto",
              "px": 4
            },
            "header": {
              "flexDirection": "row",
              "alignItems": "center",
              "mb": {
                "base": 4,
                "lg": 8
              },
              "minH": 24
            },
            "heading": {
              "py": {
                "base": 4,
                "lg": 8
              }
            },
            "title": {
              "textStyle": "2xl"
            },
            "description": {
              "textStyle": "md"
            },
            "body": {
              "overflow": "visible",
              "p": 0
            }
          }
        }
      },
      "defaultVariants": {
        "variant": "panel"
      }
    },
    "suiSection": {
      "className": "sui-section",
      "slots": [
        "root",
        "header",
        "title",
        "description",
        "body"
      ],
      "base": {
        "root": {
          "display": "flex",
          "flexDirection": "column"
        },
        "header": {
          "flexShrink": 0,
          "mb": 4
        },
        "title": {
          "textStyle": "heading",
          "fontWeight": "semibold",
          "lineHeight": "110%",
          "letterSpacing": "-1%",
          "mb": 1
        },
        "description": {
          "color": "fg.muted",
          "fontSize": "md",
          "& a": {
            "fontWeight": "medium",
            "color": "fg"
          }
        },
        "body": {
          "flex": 1,
          "minWidth": 0
        }
      },
      "variants": {
        "variant": {
          "annotated": {
            "root": {
              "flexDirection": {
                "base": "column",
                "md": "row"
              },
              "mt": 4
            },
            "header": {
              "width": {
                "base": "full",
                "md": "30%"
              },
              "mb": {
                "base": 4,
                "md": 0
              },
              "pe": {
                "base": 4,
                "md": 8
              }
            }
          }
        }
      },
      "defaultVariants": {}
    }
  },
}
