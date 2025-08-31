import type { Def } from "tern"

export type CallbackFn = (...args: any) => any;

export type ExtraDef = Record<string, Def | string>;
