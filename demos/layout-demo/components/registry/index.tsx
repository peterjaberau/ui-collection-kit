// fields.type = text | radio | select | number | array | textarea | custom | external | object

export const registryConfig = {
  components: {
    Button: {
      fields: {
        label: { type: "text", placeholder: "Lorem ipsum..." },
        size: {
          type: "radio",
          options: [
            { label: "xs", value: "xs" },
            { label: "sm", value: "sm" },
            { label: "md", value: "md" },
            { label: "lg", value: "lg" },
            { label: "xl", value: "xl" },
          ],
        },
        variant: {
          type: "radio",
          options: [
            { label: "solid", value: "solid" },
            { label: "subtle", value: "subtle" },
            { label: "glass", value: "glass" },
            { label: "surface", value: "surface" },
            { label: "outline", value: "outline" },
            { label: "ghost", value: "ghost" },
            { label: "plain", value: "plain" },
          ],
        },
        colorPalette: {
          type: "select",
          options: [
            { label: "gray", value: "gray" },
            { label: "neutral", value: "neutral" },
            { label: "stone", value: "stone" },
            { label: "orange", value: "orange" },
            { label: "red", value: "red" },
            { label: "blue", value: "blue" },
            { label: "teal", value: "teal" },
          ],
        },
        loading: {
          type: "radio",
          options: [
            { label: "true", value: "true" },
            { label: "false", value: "false" },
          ],
        },
      },
      defaultProps: {
        label: 'Button',
        size: 'md',
        variant: 'surface',
        colorPalette: 'gray',
      },
      render: ({ title }: any) => {
        return <div>{title}</div>;
      },
    },
  },
};
