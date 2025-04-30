import { RuleItem } from 'async-validator';
import * as React from 'react';
import type { FormInstance as AntdFormInstance, FormProps as AntdFormProps, ColProps, TooltipProps } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form';

export type { RuleItem } from 'async-validator';
export type SchemaType =
  | 'string'
  | 'object'
  | 'array'
  | 'number'
  | 'boolean'
  | 'void'
  | 'date'
  | 'datetime'
  | 'block'
  | string;

export type ActionProps = {
  submit: {
    text?: string;
    hide?: boolean;
    [key: string]: any;
  };
  reset: {
    text?: string;
    hide?: boolean;
    [key: string]: any;
  };
};

export interface SchemaBase {
  type?: SchemaType;
  title?: string;
  description?: string;
  descType?: 'text' | 'icon';
  format?: 'image' | 'textarea' | 'color' | 'email' | 'url' | 'dateTime' | 'date' | 'time' | 'upload' | (string & {});
  default?: any;
  /** Is it required? Supports expressions in the form of `'{{ formData.xxx === "" }}'`*/
  required?: boolean | string;
  placeholder?: string;
  bind?: false | string | string[];
  dependencies?: string[];
  /** Minimum value, supports expressions */
  min?: number | string;
  /** Maximum value, supports expressions*/
  max?: number | string;
  /** Whether to disable, support expressions in the form of `'{{ formData.xxx === "" }}'`*/
  disabled?: boolean | string;
  /** Whether to read only, support expressions in the form of `'{{ formData.xxx === "" }}'`*/
  readOnly?: boolean | string;
  /** Whether to hide, hidden fields will not be exposed in formData, support expressions in the form of `'{{ formData.xxx === "" }}'`*/
  hidden?: boolean | string;
  displayType?: 'row' | 'column' | string;
  width?: string | number;
  labelWidth?: number | string;
  maxWidth?: number | string;
  column?: number;
  className?: string;
  widget?: string;
  readOnlyWidget?: string;
  extra?: string;
  properties?: Record<string, Schema>;
  items?: Schema;
  /** Multiple selection, supports expressions*/
  enum?: Array<string | number> | string;
  /** Multiple selection labels, supports expressions*/
  enumNames?: Array<string | number> | string;
  rules?: RuleItem | RuleItem[];
  props?: Record<string, any>;
  /**Extended fields*/
  'add-widget'?: string;
  labelCol?: number | ColProps;
  fieldCol?: number | ColProps;
  tooltip?: string | TooltipProps;
  cellSpan?: number;
  span?: number;
  validateTrigger?: string | string[];
  [key: string]: any;
}

export type Schema = Partial<SchemaBase>;

export interface Error {
  /** Wrong data path */
  name: string;
  /** Error content */
  error: string[];
}

export interface FormParams {
  formData?: any;
  onChange?: (data: any) => void;
  onValidate?: (valid: any) => void;
  showValidate?: boolean;
  /** Data analysis interface, triggered when the form display is rendered*/
  logOnMount?: (stats: any) => void;
  /** Data analysis interface, triggered when the form is submitted successfully, to obtain the total time of filling out this form*/
  logOnSubmit?: (stats: any) => void;
}

export interface ValidateParams {
  formData: any;
  schema: Schema;
  error: Error[];

  [k: string]: any;
}

export interface ResetParams {
  formData?: any;
  submitData?: any;
  errorFields?: Error[];
  touchedKeys?: any[];
  allTouched?: boolean;

  [k: string]: any;
}

export interface FieldParams {
  name: string;
  error?: string[];
  touched?: boolean;
  validating?: boolean;
  value?: any;
}

export interface ListOperate {
  /* List form operation button style*/
  btnType: 'text' | 'icon';
  /* Whether to hide the move button */
  hideMove: boolean;
}

export interface GlobalConfig {
  /* List form configuration */
  listOperate: ListOperate;
  /** List validation bubble mode*/
  listValidatePopover: boolean;
  /* Whether to disable expression */
  mustacheDisabled: boolean;
}

export interface FormInstance {
  /*
   * Submit the form
   */
  submit: () => void;
  /**
   * Dynamically set Schema based on path
   */
  setSchemaByPath: (path: string, schema: any) => any;
  /**
   * Get hidden form data
   */
  getHiddenValues: () => any;
  /**
   * Set the Schema
   */
  setSchema: (schema: any, cover?: boolean) => void;
  /**
   * Get the form's schema
   */
  getSchema: () => any;
  /**
   *
   * Get the flatten schema
   */
  getFlattenSchema: (path?: string) => any;
  /**
   * Get Schema based on the path
   */
  getSchemaByPath: (path: string) => any;
  /**
   * Manually modify errorFields verification information externally
   */
  setErrorFields: (errors: any[]) => void;
  /**
   * Manually delete all verification information under a certain path externally
   */
  removeErrorField: (path: string) => any;
  /**
   * Verify form
   */
  validateFields: AntdFormInstance['validateFields'];
  /**
   * Get the error information of the corresponding field field
   */
  getFieldError: AntdFormInstance['getFieldError'];
  /**
   * Get error information for a set of fields
   */
  getFieldsError: AntdFormInstance['getFieldsError'];
  /**
   * Check if a form item has been modified
   */
  isFieldTouched: AntdFormInstance['isFieldTouched'];
  /**
   * Check if a set of form items have been modified
   */
  isFieldsTouched: AntdFormInstance['isFieldsTouched'];
  /**
   * Check if a form item is being validated
   */
  isFieldValidating: AntdFormInstance['isFieldValidating'];
  /**
   * Get form value based on path
   */
  getValueByPath: AntdFormInstance['getFieldValue'];
  /**
   * Modify form value according to path
   */
  setValueByPath: AntdFormInstance['setFieldValue'];
  /**
   * Get form value
   */
  getValues: AntdFormInstance['getFieldsValue'];
  /**
   * Set the form value
   */
  setValues: AntdFormInstance['setFieldsValue'];
  /**
   * Reset form
   */
  resetFields: AntdFormInstance['resetFields'];
  /**
   * @deprecated will be deprecated soon, do not use this API, use getFieldsError
   */
  errorFields: AntdFormInstance['getFieldsError'];
  /**
   * @deprecated will be deprecated soon, do not use this API, use form.isFieldsValidating
   */
  scrollToPath: AntdFormInstance['scrollToField'];
  /**
   * @deprecated will be deprecated soon, do not use this API, use setValueByPath
   */
  onItemChange: AntdFormInstance['setFieldValue'];
  /**
   * @deprecated will be deprecated soon, please do not use this API
   */
  init: any;
  /**
   * @deprecated Will be deprecated soon. Do not use this API. Use getSchema instead.
   */
  __schema: any;
  /**
   * @deprecated Do not use internal methods
   */
  __initStore: (data: any) => any;
  /**
   * Ref object storing field
   */
  setFieldRef: (path: string, ref: any) => void;
  /**
   * Get the ref object of field
   */
  getFieldRef: (path: string) => any;
}

export type WatchProperties = {
  [path: string]:
    | {
        handler: (value: any) => void;
        immediate?: boolean;
      }
    | ((value: any) => void);
};

export interface FRProps extends Omit<AntdFormProps, 'form'> {
  /**
   * The className of the top level of the form
   */
  className?: string;
  /**
   * Style for the top level of the form
   */
  style?: React.CSSProperties;
  /**
   * Form schema
   */
  schema: Schema;
  /**
   * form singleton
   */
  form: FormInstance;
  /**
   * Mapping rules between components and schema
   */
  mapping?: Record<string, string>;
  /**
   * Custom components
   */
  widgets?: Record<string, any>;
  /**
   * The arrangement of label elements and input elements, column - displayed in two rows, row - displayed in the same row, inline - naturally arranged, default `column`
   */
  displayType?: 'column' | 'row' | 'inline';
  /**
   * Indicates whether to display the colon after label
   */
  colon?: boolean;
  /**
   * label text alignment
   */
  labelAlign?: 'right' | 'left';
  // labelCol?: number | ExtendedColProps;
  fieldCol?: number | ColProps;
  /**
   * Read-only mode
   */
  readOnly?: boolean;
  /**
   * Disable mode
   */
  disabled?: boolean;
  /**
   * Label width
   */
  labelWidth?: string | number;
  /**
   * Antd's global config
   */
  configProvider?: ConfigProviderProps;
  /**
   * Override the default validation information
   */
  validateMessages?: RcFormProps['validateMessages'];
  /**
   * Display the current form internal status
   */
  debug?: boolean;
  /**
   * Display css layout hint line
   */
  debugCss?: boolean;
  /**
   * Display language, currently only supports Chinese and English
   */
  locale?: 'zh-CN' | 'en-US';
  /**
   * The number of columns displayed in a row
   */
  column?: number;
  /**
   * The data will be passed as the fourth parameter of beforeFinish
   */
  config?: any;
  /**
   * Similar to the usage of vuejs's watch, monitoring value changes and triggering callbacks
   */
  watch?: WatchProperties;
  /*
   * Form global configuration
   */
  globalConfig?: GlobalConfig;
  /**
   * Globally shared properties of the form
   */
  globalProps?: any;
  /**
   * Form first load hook
   */
  onMount?: () => void;
  /**
   * Form submission hook
   */
  beforeFinish?: (params: ValidateParams) => Error[] | Promise<Error[]>;
  /**
   * Form submission hook
   */
  onFinish?: (formData: any) => void;
  /**
   * Trigger callback event when field value is updated
   */
  onValuesChange?: (
    changedValues: {
      dataPath: string;
      value: any;
      dataIndex: number[] | unknown;
    },
    formData: any,
  ) => void;
  /**
   * Whether to remove hidden data. By default, it is not removed.
   */
  removeHiddenData?: boolean;
  /**
   * Configure custom layout components
   */
  layoutWidgets?: any;
  /**
   * Extension methods
   */
  methods?: Record<string, Function>;
  operateExtra?: React.ReactNode;
  maxWidth?: number | string;
  footer?: boolean | ((dom: React.JSX.Element[]) => React.ReactNode) | Partial<ActionProps>;
}

export interface SearchProps extends Omit<FRProps, 'form'> {
  debug?: boolean;
  searchBtnStyle?: React.CSSProperties;
  searchBtnClassName?: string;
  displayType?: any;
  propsSchema?: any;
  className?: string;
  style?: React.CSSProperties;
  hidden?: boolean;
  searchOnMount?: boolean | unknown;
  searchWithError?: boolean;
  searchBtnRender?: (submit: Function, clearSearch: Function, other: any) => React.ReactNode[];
  searchText?: string;
  resetText?: string;
  onSearch?: (search: any) => any;
  afterSearch?: (params: any) => any;
  onReset?: (form: any) => void;
  widgets?: any;
  form?: any;
  [key: string]: any;
}

/** Custom component props */
export type WidgetProps = {
  value: any;
  onChange: (value: any) => void;
  schema: Schema;
  style: React.CSSProperties;
  id: string;
  addons: WidgetAddonsType;
  disabled?: boolean;
  readOnly?: boolean;
  [other: string]: any;
};

/** Custom component addons */
export type WidgetAddonsType = FormInstance & {
  globalProps: Record<string, any>;
  dependValues: any[];
  dataIndex: string[];
  dataPath: string;
  schemaPath: string;
};

declare const FR: React.FC<FRProps>;

export declare function useForm(params?: FormParams): FormInstance;

export type ConnectedForm<T> = T & {
  form: FormInstance;
};

export declare function connectForm<T extends {} = any>(
  component: React.ComponentType<ConnectedForm<T>>,
): React.ComponentType<T>;

export default FR;
