const fuseConfig: {
  config: {
    "customScrollbars": true,
    "direction": "ltr", //ltr, rtl
    "layout": {
      "style": "layout1", //layout1, layout2, layout3
      config: {
        "mode": "container", //"fullwidth", "boxed", "container"
        "containerWidth": 1120,
        "navbar": {
          "display": true,
          "style": "style-1", //"fixed", "style-1 - slide" "style-2 = tabbed"
          "folded": true,
          "position": "left",
          "open": true
        },
        "toolbar": {
          "display": true,
          "style": "fixed", //fixed, static
          "position": "below"
        },
        "footer": {
          "display": true,
          "style": "fixed" //fixed, static
        },
        "leftSidePanel": {
          "display": true
        },
        "rightSidePanel": {
          "display": true
        },
        "scroll": "content"
      }
    },
    "theme": {
      "main": {
        "palette": {
          "mode": "light",
          "text": {
            "primary": "#1F232B",
            "secondary": "#4B5563",
            "disabled": "#9CA3AF"
          },
          "common": {
            "black": "rgb(17, 24, 39)",
            "white": "rgb(255, 255, 255)"
          },
          "primary": {
            "light": "#363B44",
            "main": "#1F232B",
            "dark": "#0F1115",
            "contrastDefaultColor": "light",
            "contrastText": "#FFFFFF"
          },
          "secondary": {
            "light": "#3C83D6",
            "main": "#1565C0",
            "dark": "#0E4B90",
            "contrastText": "#FFFFFF"
          },
          "background": {
            "paper": "#FFFFFF",
            "default": "#F6F7F8"
          },
          "error": {
            "light": "#F87171",
            "main": "#EF4444",
            "dark": "#B91C1C",
            "contrastText": "#FFFFFF"
          },
          "grey": {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "300": "#D1D5DB",
            "400": "#9CA3AF",
            "500": "#6B7280",
            "600": "#4B5563",
            "700": "#374151",
            "800": "#272F3C",
            "900": "#1F232B",
            "A100": "#F3F4F6",
            "A200": "#E5E7EB",
            "A400": "#6B7280",
            "A700": "#374151"
          },
          "success": {
            "main": "#22C55E",
            "light": "#4ADE80",
            "dark": "#15803D",
            "contrastText": "#1F232B"
          },
          "info": {
            "main": "#3B82F6",
            "light": "#60A5FA",
            "dark": "#1D4ED8",
            "contrastText": "#FFFFFF"
          },
          "warning": {
            "main": "#F59E0B",
            "light": "#FBBF24",
            "dark": "#B45309",
            "contrastText": "#1F232B"
          },
          "divider": "#E5E7EB",
          "action": {
            "active": "#4B5563",
            "hover": "#E5E7EB",
            "selected": "#D1D5DB",
            "disabled": "#BFC4CC",
            "disabledBackground": "#F6F7F8",
            "focus": "#D1D5DB"
          }
        }
      },
      "navbar": {
        "palette": {
          "mode": "light",
          "text": {
            "primary": "#1F232B",
            "secondary": "#4B5563",
            "disabled": "#9CA3AF"
          },
          "common": {
            "black": "rgb(17, 24, 39)",
            "white": "rgb(255, 255, 255)"
          },
          "primary": {
            "light": "#363B44",
            "main": "#1F232B",
            "dark": "#0F1115",
            "contrastDefaultColor": "light",
            "contrastText": "#FFFFFF"
          },
          "secondary": {
            "light": "#3C83D6",
            "main": "#1565C0",
            "dark": "#0E4B90",
            "contrastText": "#FFFFFF"
          },
          "background": {
            "paper": "#FFFFFF",
            "default": "#E5E7EB"
          },
          "error": {
            "light": "#F87171",
            "main": "#EF4444",
            "dark": "#B91C1C",
            "contrastText": "#FFFFFF"
          },
          "grey": {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "300": "#D1D5DB",
            "400": "#9CA3AF",
            "500": "#6B7280",
            "600": "#4B5563",
            "700": "#374151",
            "800": "#272F3C",
            "900": "#1F232B",
            "A100": "#F3F4F6",
            "A200": "#E5E7EB",
            "A400": "#6B7280",
            "A700": "#374151"
          },
          "success": {
            "main": "#22C55E",
            "light": "#4ADE80",
            "dark": "#15803D",
            "contrastText": "#1F232B"
          },
          "info": {
            "main": "#3B82F6",
            "light": "#60A5FA",
            "dark": "#1D4ED8",
            "contrastText": "#FFFFFF"
          },
          "warning": {
            "main": "#F59E0B",
            "light": "#FBBF24",
            "dark": "#B45309",
            "contrastText": "#1F232B"
          },
          "divider": "#E5E7EB",
          "action": {
            "active": "#4B5563",
            "hover": "#E5E7EB",
            "selected": "#D1D5DB",
            "disabled": "#BFC4CC",
            "disabledBackground": "#F6F7F8",
            "focus": "#D1D5DB"
          }
        }
      },
      "toolbar": {
        "palette": {
          "mode": "light",
          "text": {
            "primary": "#1F232B",
            "secondary": "#4B5563",
            "disabled": "#9CA3AF"
          },
          "common": {
            "black": "rgb(17, 24, 39)",
            "white": "rgb(255, 255, 255)"
          },
          "primary": {
            "light": "#363B44",
            "main": "#1F232B",
            "dark": "#0F1115",
            "contrastDefaultColor": "light",
            "contrastText": "#FFFFFF"
          },
          "secondary": {
            "light": "#3C83D6",
            "main": "#1565C0",
            "dark": "#0E4B90",
            "contrastText": "#FFFFFF"
          },
          "background": {
            "paper": "#FFFFFF",
            "default": "#F6F7F8"
          },
          "error": {
            "light": "#F87171",
            "main": "#EF4444",
            "dark": "#B91C1C",
            "contrastText": "#FFFFFF"
          },
          "grey": {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "300": "#D1D5DB",
            "400": "#9CA3AF",
            "500": "#6B7280",
            "600": "#4B5563",
            "700": "#374151",
            "800": "#272F3C",
            "900": "#1F232B",
            "A100": "#F3F4F6",
            "A200": "#E5E7EB",
            "A400": "#6B7280",
            "A700": "#374151"
          },
          "success": {
            "main": "#22C55E",
            "light": "#4ADE80",
            "dark": "#15803D",
            "contrastText": "#1F232B"
          },
          "info": {
            "main": "#3B82F6",
            "light": "#60A5FA",
            "dark": "#1D4ED8",
            "contrastText": "#FFFFFF"
          },
          "warning": {
            "main": "#F59E0B",
            "light": "#FBBF24",
            "dark": "#B45309",
            "contrastText": "#1F232B"
          },
          "divider": "#E5E7EB",
          "action": {
            "active": "#4B5563",
            "hover": "#E5E7EB",
            "selected": "#D1D5DB",
            "disabled": "#BFC4CC",
            "disabledBackground": "#F6F7F8",
            "focus": "#D1D5DB"
          }
        }
      },
      "footer": {
        "palette": {
          "mode": "light",
          "text": {
            "primary": "#1F232B",
            "secondary": "#4B5563",
            "disabled": "#9CA3AF"
          },
          "common": {
            "black": "rgb(17, 24, 39)",
            "white": "rgb(255, 255, 255)"
          },
          "primary": {
            "light": "#363B44",
            "main": "#1F232B",
            "dark": "#0F1115",
            "contrastDefaultColor": "light",
            "contrastText": "#FFFFFF"
          },
          "secondary": {
            "light": "#3C83D6",
            "main": "#1565C0",
            "dark": "#0E4B90",
            "contrastText": "#FFFFFF"
          },
          "background": {
            "paper": "#FFFFFF",
            "default": "#F6F7F8"
          },
          "error": {
            "light": "#F87171",
            "main": "#EF4444",
            "dark": "#B91C1C",
            "contrastText": "#FFFFFF"
          },
          "grey": {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "300": "#D1D5DB",
            "400": "#9CA3AF",
            "500": "#6B7280",
            "600": "#4B5563",
            "700": "#374151",
            "800": "#272F3C",
            "900": "#1F232B",
            "A100": "#F3F4F6",
            "A200": "#E5E7EB",
            "A400": "#6B7280",
            "A700": "#374151"
          },
          "success": {
            "main": "#22C55E",
            "light": "#4ADE80",
            "dark": "#15803D",
            "contrastText": "#1F232B"
          },
          "info": {
            "main": "#3B82F6",
            "light": "#60A5FA",
            "dark": "#1D4ED8",
            "contrastText": "#FFFFFF"
          },
          "warning": {
            "main": "#F59E0B",
            "light": "#FBBF24",
            "dark": "#B45309",
            "contrastText": "#1F232B"
          },
          "divider": "#E5E7EB",
          "action": {
            "active": "#4B5563",
            "hover": "#E5E7EB",
            "selected": "#D1D5DB",
            "disabled": "#BFC4CC",
            "disabledBackground": "#F6F7F8",
            "focus": "#D1D5DB"
          }
        }
      }
    },


  }
}

const vuexyConfig: {


  layout: {
    skin: 'default', // 'default', 'bordered'
    layout: 'vertical', // 'vertical', 'collapsed', 'horizontal'
    layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
    compactContentWidth: 1440, // in px
    navbar: {
      type: 'fixed', // 'fixed', 'static'
      contentWidth: 'compact', // 'compact', 'wide'
      floating: true, //! true, false (This will not work in the Horizontal Layout)
      detached: true, //! true, false (This will not work in the Horizontal Layout or floating navbar is enabled)
      blur: true // true, false
    },
    contentWidth: 'compact', // 'compact', 'wide'
    footer: {
      type: 'static', // 'fixed', 'static'
      contentWidth: 'compact', // 'compact', 'wide'
      detached: true //! true, false (This will not work in the Horizontal Layout)
    },
  }
}
