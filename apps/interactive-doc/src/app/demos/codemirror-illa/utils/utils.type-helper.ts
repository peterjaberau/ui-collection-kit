export const isCloudVersion = process.env.ILLA_INSTANCE_ID === "CLOUD"

export const DISPLAY_NAME_REGEX = /^([a-zA-Z_$])([a-zA-Z0-9_$])*$/

export enum Types {
  STRING = "STRING",
  NUMBER = "NUMBER",
  BOOLEAN = "BOOLEAN",
  OBJECT = "OBJECT",
  ARRAY = "ARRAY",
  FUNCTION = "FUNCTION",
  UNDEFINED = "UNDEFINED",
  NULL = "NULL",
  UNKNOWN = "UNKNOWN",
}

export const isInt = (val: string | number): boolean => {
  return Number.isInteger(val) || (typeof val === "string" && /^\d+$/.test(val))
}

export function isURL(str: string) {
  const pattern = new RegExp(
    /^(((ht|f)tps?):\/\/)?(([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})\/?/,
  ) // fragment locator
  return !!pattern.test(str)
}

export function isBlobURLOrUrl(url: string): boolean {
  if (!url) return false
  return url.startsWith("blob:") || isURL(url)
}

export const isServerRender = (function () {
  try {
    return !(typeof window !== "undefined" && document !== undefined)
  } catch (e) {
    return true
  }
})()

export const getType = (value: unknown) => {
  if (typeof value === "string") return Types.STRING
  if (typeof value === "number") return Types.NUMBER
  if (typeof value === "boolean") return Types.BOOLEAN
  if (Array.isArray(value)) return Types.ARRAY
  if (isFunction(value)) return Types.FUNCTION
  if (isObject(value)) return Types.OBJECT
  if (typeof value === "undefined") return Types.UNDEFINED
  if (value === null) return Types.NULL
  return Types.UNKNOWN
}

export const isValidUrlScheme = (url: string): boolean => {
  return (
    // Standard http call
    url.startsWith("http://") ||
    // Secure http call
    url.startsWith("https://") ||
    // Mail url to directly open email app prefilled
    url.startsWith("mailto:") ||
    // Tel url to directly open phone app prefilled
    url.startsWith("tel:")
  )
}

export const isValidDisplayName = (displayName: string): boolean => DISPLAY_NAME_REGEX.test(displayName)






// public types
export enum CONTAINER_TYPE {
  "EDITOR_DOT_PANEL" = "EDITOR_DOT_PANEL",
  "EDITOR_SCALE_SQUARE" = "EDITOR_SCALE_SQUARE",
  "EDITOR_PAGE_SQUARE" = "EDITOR_PAGE_SQUARE",
  "EDITOR_LAYOUT_SQUARE" = "EDITOR_LAYOUT_SQUARE",
}

export enum SECTION_POSITION {
  "TOP" = "TOP",
  "BOTTOM" = "BOTTOM",
  "CENTER" = "CENTER",
  "FULL" = "FULL",
  "NONE" = "NONE",
}


export enum AI_AGENT_MODEL {
  GPT_3_5 = 1,
  GPT_4 = 3,
  GLM_4 = 12,
  MISTRAL = 13,
  CLAUDE = 15,
  MOONSHOT = 16,
}

export enum AI_AGENT_TYPE {
  CHAT = 1,
  TEXT_GENERATION = 2,
}

export enum APP_TYPE {
  "PC" = "pc",
  "MOBILE" = "mobile",
}

export enum FLOW_ACTIVE_STATUS {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum FLOW_RUNNING_STATUS {
  SCHEDULING = 1,
  RUNNING = 2,
  STOPPED = 3,
  ERROR = 4,
}

export enum SUBSCRIBE_PLAN {
  UNDEFINED = "undefined",
  TEAM_LICENSE_FREE = "team_license_free",
  TEAM_LICENSE_PLUS = "team_license_plus",
  TEAM_LICENSE_PREMIUM = "team_license_premium",
  TEAM_LICENSE_ENTERPRISE = "team_license_enterprise",
  TEAM_LICENSE_INSUFFICIENT = "team_license_insufficient",
  TEAM_LICENSE_EXPIRED = "team_license_expired",
  TEAM_LICENSE_CANCELED = "team_license_canceled",
  TEAM_LICENSE_APPSUMO_TIER_1 = "team_license_appsumo_tier_1",
  TEAM_LICENSE_APPSUMO_TIER_2 = "team_license_appsumo_tier_2",
  TEAM_LICENSE_APPSUMO_TIER_3 = "team_license_appsumo_tier_3",
  TEAM_LICENSE_APPSUMO_TIER_4 = "team_license_appsumo_tier_4",
  DRIVE_FREE = "drive_free",
  DRIVE_VOLUME_PAID = "drive_volume_paid",
  DRIVE_VOLUME_INSUFFICIENT = "drive_volume_insufficient",
  DRIVE_VOLUME_EXPIRED = "drive_volume_expired",
  DRIVE_VOLUME_CANCELED = "drive_volume_canceled",
  COLLA_FREE = "colla_free",
  COLLA_SUBSCRIBE_PAID = "colla_subscribe_paid",
  COLLA_SUBSCRIBE_INSUFFICIENT = "colla_subscribe_insufficient",
  COLLA_SUBSCRIBE_CANCELED = "colla_subscribe_canceled",
  COLLA_SUBSCRIBE_EXPIRED = "colla_subscribe_expired",
}

export enum SUBSCRIPTION_CYCLE {
  FREE = 0,
  MONTHLY = 1,
  YEARLY = 2,
  LIFETIME = 3,
}

export enum USER_ROLE {
  "GUEST" = -1,
  "OWNER" = 1,
  "ADMIN",
  "EDITOR",
  "VIEWER",
}

export enum USER_STATUS {
  "OK" = 1,
  "PENDING" = 2,
}

export enum PROMOTION_CODE_USAGE {
  DEFAULT_REGISTER = 1,
}

export enum ACTION_RUN_TIME {
  APP_LOADED = "appLoaded",
  PAGE_LOADING = "pageLoading",
  NONE = "none",
}


//is
// thx arco
export function isDayjs(time: any) {
  // dayjs.isDayjs in practical application scenarios, such as multiple versions of dayjs may fail
  return (
    isObject(time) &&
    "$y" in time &&
    "$M" in time &&
    "$D" in time &&
    "$d" in time &&
    "$H" in time &&
    "$m" in time &&
    "$s" in time
  )
}

export function isArray(obj: any): obj is any[] {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}

export function isPromise(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Promise]"
}

export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === "[object String]"
}

export function isNumber(obj: any): obj is number {
  return (
    Object.prototype.toString.call(obj) === "[object Number]" && obj === obj
  )
}

export function isFile(obj: any): obj is File {
  return Object.prototype.toString.call(obj) === "[object File]"
}

export function isFunction<T extends Function = Function>(
  value: any,
): value is T {
  return typeof value === "function"
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined
}

export function isNull(obj: any): obj is null {
  return obj === null
}

export function isNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined
}

// thx arco
export const isServerRendering = (function () {
  try {
    return !(typeof window !== "undefined" && document !== undefined)
  } catch (e) {
    return true
  }
})()

/** merge multiple children to a string node */
export const isSingleNode = (child: any) => {
  return isString(child) || isNumber(child)
}
