import React from "react"
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ThemeProvider } from "./theme/theme.provider"
import { DataProvider } from "./data/DataProvider"

const Layout = ({ children }: React.PropsWithChildren) => (
  <>
    <AntdRegistry>
      <ThemeProvider>
        <DataProvider>
        {children}
        </DataProvider>
      </ThemeProvider>
    </AntdRegistry>
  </>
)

export default Layout
