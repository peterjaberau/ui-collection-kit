export const data = {
  "badge": {
    "fields": {
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
    "defaultProps": {
      "variant": "subtle",
      "size": "sm"
    }
  },
  "button": {
    "fields": {
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
    "defaultProps": {
      "size": "md",
      "variant": "surface",
      "colorPalette": "gray"
    }
  },
  "code": {
    "fields": {
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
    "defaultProps": {
      "variant": "subtle",
      "size": "sm"
    }
  },
  "container": {
    "fields": {
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
    "fields": {
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
    "defaultProps": {
      "size": "xl"
    }
  },
  "input": {
    "fields": {
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
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    }
  },
  "inputAddon": {
    "fields": {
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
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    }
  },
  "kbd": {
    "fields": {
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
    "defaultProps": {
      "size": "md",
      "variant": "subtle"
    }
  },
  "link": {
    "fields": {
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
    "defaultProps": {
      "variant": "plain"
    }
  },
  "mark": {
    "fields": {
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
    "fields": {
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
    "defaultProps": {
      "size": "sm",
      "variant": "solid",
      "orientation": "horizontal"
    }
  },
  "skeleton": {
    "fields": {
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
    "defaultProps": {
      "variant": "pulse",
      "loading": true
    }
  },
  "skipNavLink": {},
  "spinner": {
    "fields": {
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
    "defaultProps": {
      "size": "md"
    }
  },
  "textarea": {
    "fields": {
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
    "defaultProps": {
      "size": "md",
      "variant": "outline"
    }
  },
  "icon": {
    "fields": {
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
    "defaultProps": {
      "size": "inherit"
    }
  },
  "checkmark": {
    "fields": {
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
    "defaultProps": {
      "variant": "solid",
      "size": "md"
    }
  },
  "radiomark": {
    "fields": {
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
    "defaultProps": {
      "variant": "solid",
      "size": "md"
    }
  },
  "suiCommand": {
    "fields": {
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
    "defaultProps": {
      "size": "md"
    }
  },
  "suiIconBadge": {
    "fields": {
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
    "defaultProps": {
      "variant": "outline",
      "size": "md"
    }
  }
}
