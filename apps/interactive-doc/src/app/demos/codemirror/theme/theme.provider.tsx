'use client'
import { PropsWithChildren } from "react"
import { ConfigProvider, ThemeConfig } from "antd"
import { themeConfig } from "./theme.config"
import { useStyle } from "./theme.override"
import theme from "./theme.json"

export const ThemeProvider = (props: PropsWithChildren) => {
  const { styles } = useStyle()

  return (
    <ConfigProvider
      {...themeConfig}
      theme={{
        ...(theme as unknown as ThemeConfig),
        cssVar: { key: "app", prefix: "" },
      }}
      // button={{ className: styles.linearGradientButton }}
      card={{ className: styles.card }}
      children={props.children}
    />
  )
}
