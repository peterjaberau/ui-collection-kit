"use client"
import "antd/dist/reset.css"
import "react-grid-layout/css/styles.css"
import "simplebar-react/dist/simplebar.min.css"
import "github-markdown-css/github-markdown-light.css"
// import "react-quill-new/dist/quill.snow.css"
import "tui-image-editor/dist/tui-image-editor.css"
import "tui-color-picker/dist/tui-color-picker.min.css"

import "core-js/actual"

import ResizeObserver from "resize-observer-polyfill"
import numbro from "numbro"
import Papa from "papaparse"
import * as supabase from "@supabase/supabase-js"
// import * as alasql from "alasql";

import * as uuid from "uuid"
import "regenerator-runtime/runtime"

import { debug } from "loglevel"
import "./index.css"
import log from "loglevel"
import "antd-mobile/es/global"
import "animate.css"
import { AppRenderer } from "./app-renderer"

if (typeof window !== "undefined") {
  window.numbro = numbro
  window.Papa = Papa
  window.uuid = uuid
  window.supabase = supabase
  // window.alasql = alasql;

  // for chrome 63
  if (!window.ResizeObserver) {
    window.ResizeObserver = ResizeObserver
  }
}

debug(`REACT_APP_EDITION: ${process.env.REACT_APP_EDITION}`)
debug(`REACT_APP_LANGUAGES:, ${process.env.REACT_APP_LANGUAGES}`)
debug(`REACT_APP_API_SERVICE_URL:, ${process.env.REACT_APP_API_SERVICE_URL}`)
debug(`REACT_APP_NODE_SERVICE_URL:, ${process.env.REACT_APP_NODE_SERVICE_URL}`)
debug(`REACT_APP_ENV:, ${process.env.REACT_APP_ENV}`)
debug(`REACT_APP_LOG_LEVEL:, ${process.env.REACT_APP_LOG_LEVEL}`)

export const Bootstrap = (props: { children: React.ReactNode }) => {
  return <AppRenderer>{props.children}</AppRenderer>
}
