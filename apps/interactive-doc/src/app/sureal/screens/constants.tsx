export const GLOBAL_PAGES: any = {
  overview: {
    id: "overview",
    name: "Overview",
  },
  signin: {
    id: "signin",
    name: "Authenticate",
  },
  organisations: {
    id: "organisations",
    name: "Organisations",
  },
  referrals: {
    id: "referrals",
    name: "Referrals",
  },
  "mini-new": {
    id: "mini-new",
    name: "Embed Surrealist",
  },
  "ui-collection": {
    id: "ui-collection",
    name: "UICollection",
  },
}
export const VIEW_PAGES = {
  dashboard: {
    id: "dashboard",
    name: "Dashboard",
  },
  query: {
    id: "query",
    name: "Query",
  },
  explorer: {
    id: "explorer",
    name: "Explorer",
  },
  graphql: {
    id: "graphql",
    name: "GraphQL",
  },
  designer: {
    id: "designer",
    name: "Designer",
  },
  authentication: {
    id: "authentication",
    name: "Authentication",
  },
  parameters: {
    id: "parameters",
    name: "Parameters",
  },
  functions: {
    id: "functions",
    name: "Functions",
  },
  documentation: {
    id: "documentation",
    name: "API Docs",
  },
}

export const GLOBAL_NAVIGATION: any[][] = [
  ["overview", "organisations"],
  ["referrals"],
  ["mini-new"],
];
export const VIEW_NAVIGATION: any[][] = [
  ["dashboard"],
  ["query", "explorer", "graphql"],
  ["designer", "authentication", "parameters", "functions"],
  ["documentation"],
]

export const SIDEBAR_MODES: any[] = [
  { label: "Expandable", value: "expandable" },
  { label: "Compact", value: "compact" },
  { label: "Wide", value: "wide" },
]
