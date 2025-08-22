export interface BuilderInfo {
  version: string
  language: string
  [key: string]: any
}

export const BuilderInfoInitialState: BuilderInfo | any = {
  version: process.env.ILLA_APP_VERSION,
  language: "English",
}
