export const CANVAS = "canvas"

export enum LibraryInstallError {
  NameCollisionError,
  ImportError,
  TernDefinitionError,
  LibraryOverrideError,
}

export enum PatchType {
  "SET" = "SET",
  "GET" = "GET",
}

export enum NavigationTargetType {
  SAME_WINDOW = "SAME_WINDOW",
  NEW_WINDOW = "NEW_WINDOW",
}

export enum PropertyEvaluationErrorType {
  VALIDATION = "VALIDATION",
  PARSE = "PARSE",
  LINT = "LINT",
}

export enum EvaluationSubstitutionType {
  TEMPLATE = "TEMPLATE",
  PARAMETER = "PARAMETER",
  SMART_SUBSTITUTE = "SMART_SUBSTITUTE",
}

export enum EvaluationScriptType {
  EXPRESSION = "EXPRESSION",
  ANONYMOUS_FUNCTION = "ANONYMOUS_FUNCTION",
  ASYNC_ANONYMOUS_FUNCTION = "ASYNC_ANONYMOUS_FUNCTION",
  TRIGGERS = "TRIGGERS",
  OBJECT_PROPERTY = "OBJECT_PROPERTY",
}

export const ScriptTemplate = "<<string>>"

export const EvaluationScripts: Record<EvaluationScriptType, string> = {
  [EvaluationScriptType.EXPRESSION]: `
  function $$closedFn () {
    const $$result = ${ScriptTemplate}
    return $$result
  }
  $$closedFn.call(THIS_CONTEXT)
  `,
  [EvaluationScriptType.ANONYMOUS_FUNCTION]: `
  function $$closedFn (script) {
    const $$userFunction = script;
    const $$result = $$userFunction?.apply(THIS_CONTEXT, ARGUMENTS);
    return $$result
  }
  $$closedFn(${ScriptTemplate})
  `,
  [EvaluationScriptType.ASYNC_ANONYMOUS_FUNCTION]: `
  async function $$closedFn (script) {
    const $$userFunction = script;
    const $$result = $$userFunction?.apply(THIS_CONTEXT, ARGUMENTS);
    return await $$result;
  }
  $$closedFn(${ScriptTemplate})
  `,
  [EvaluationScriptType.TRIGGERS]: `
  async function $$closedFn () {
    const $$result = ${ScriptTemplate};
    return await $$result
  }
  $$closedFn.call(THIS_CONTEXT)
  `,
  [EvaluationScriptType.OBJECT_PROPERTY]: `
  function $$closedFn () {
    const $$result = {${ScriptTemplate}}
    return $$result
  }
  $$closedFn.call(THIS_CONTEXT)
  `,
}

export enum ConditionType {
  HIDE = "hide", // When set, the component will be shown until condition is true
  SHOW = "show", // When set, the component will be hidden until condition is true
  ENABLE = "enable", // When set, the component will be enabled until condition is true
  DISABLE = "disable", // When set, the component will be disabled until condition is true
  FETCH_DYNAMIC_VALUES = "fetchDynamicValues", // When set, the component will fetch the values dynamically
  EVALUATE_FORM_CONFIG = "evaluateFormConfig", // When set, the component will evaluate the form config settings
}

export enum FormDataPaths {
  COMMAND = "actionConfiguration.formData.command.data",
  ENTITY_TYPE = "actionConfiguration.formData.entityType.data",
}

export const MATCH_ACTION_CONFIG_PROPERTY = /\b(actionConfiguration\.\w+.(?:(\w+.)){1,})\b/g

export const TOASTS = "toasts"
export const FOCUSES = "needsFocus"
export const UPDATES = "propertyUpdates"

export const WIDGETS = "widgets"

export const UNDEFINED_VALIDATION = "UNDEFINED_VALIDATION"
export const VALIDATION_ERROR_COUNT_THRESHOLD = 10
const MAX_ALLOWED_LINE_BREAKS = 1000 // Rendering performance deteriorates beyond this number.
const LINE_BREAKS_ERROR_MESSAGE = `Warning: New lines in the text exceed ${MAX_ALLOWED_LINE_BREAKS}. The text displayed will not contain any new lines.`

export enum BatchKey {
  process_logs = "process_logs",
  process_store_updates = "process_store_updates",
  process_batched_triggers = "process_batched_triggers",
  process_batched_fn_execution = "process_batched_fn_execution",
  process_js_variable_updates = "process_js_variable_updates",
}

export enum EVAL_WORKER_SYNC_ACTION {
  SETUP = "SETUP",
  EVAL_ACTION_BINDINGS = "EVAL_ACTION_BINDINGS",
  CLEAR_CACHE = "CLEAR_CACHE",
  VALIDATE_PROPERTY = "VALIDATE_PROPERTY",
  UNDO = "undo",
  REDO = "redo",
  UPDATE_REPLAY_OBJECT = "UPDATE_REPLAY_OBJECT",
  SET_EVALUATION_VERSION = "SET_EVALUATION_VERSION",
  INIT_FORM_EVAL = "INIT_FORM_EVAL",
  UNINSTALL_LIBRARY = "UNINSTALL_LIBRARY",
  LINT_TREE = "LINT_TREE",
  UPDATE_ACTION_DATA = "UPDATE_ACTION_DATA",
  EVAL_TREE_WITH_CHANGES = "EVAL_TREE_WITH_CHANGES",
}

export enum EVAL_WORKER_ASYNC_ACTION {
  EVAL_TREE = "EVAL_TREE",
  EVAL_TRIGGER = "EVAL_TRIGGER",
  EVAL_EXPRESSION = "EVAL_EXPRESSION",
  LOAD_LIBRARIES = "LOAD_LIBRARIES",
  INSTALL_LIBRARY = "INSTALL_LIBRARY",
}

export const EVAL_WORKER_ACTIONS = {
  ...EVAL_WORKER_SYNC_ACTION,
  ...EVAL_WORKER_ASYNC_ACTION,
}

export enum MAIN_THREAD_ACTION {
  PROCESS_TRIGGER = "PROCESS_TRIGGER",
  PROCESS_BATCHED_TRIGGERS = "PROCESS_BATCHED_TRIGGERS",
  PROCESS_STORE_UPDATES = "PROCESS_STORE_UPDATES",
  PROCESS_LOGS = "PROCESS_LOGS",
  LINT_TREE = "LINT_TREE",
  PROCESS_JS_FUNCTION_EXECUTION = "PROCESS_JS_FUNCTION_EXECUTION",
  UPDATE_DATATREE = "UPDATE_DATATREE",
  SET_META_PROP_FROM_SETTER = "SET_META_PROP_FROM_SETTER",
}

export enum ActionRunBehaviour {
  ON_PAGE_LOAD = "ON_PAGE_LOAD",
  MANUAL = "MANUAL",
  AUTOMATIC = "AUTOMATIC",
  ON_PAGE_UNLOAD = "ON_PAGE_UNLOAD",
}

export enum PropertyEvaluationErrorCategory {
  ACTION_INVOCATION_IN_DATA_FIELD = "ACTION_INVOCATION_IN_DATA_FIELD",
}

export const DATA_BIND_REGEX = /{{([\s\S]*?)}}/
export const DATA_BIND_REGEX_GLOBAL = /{{([\s\S]*?)}}/g
export const AUTOCOMPLETE_MATCH_REGEX = /{{\s*.*?\s*}}/g
export const QUOTED_BINDING_REGEX = /["']({{[\s\S]*?}})["']/g
