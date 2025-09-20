import React from "react"
import { Provider } from "./logic/Provider"

const Layout = ({ children }: React.PropsWithChildren) => (
    <Provider>{children}</Provider>
)

export default Layout
