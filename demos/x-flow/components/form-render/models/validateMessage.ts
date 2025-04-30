const typeTemplate = "'${label}' is not a valid ${type}";
const typeTemplateCN = "The data type must be ${type}";

export const validateMessagesEN = {
  default: "Validation error on field '${label}'",
  required: "'${label}' is required",
  enum: "'${label}' must be one of [${enum}]",
  whitespace: "'${label}' cannot be empty",
  date: {
    format: "'${label}' is invalid for format date",
    parse: "'${label}' could not be parsed as date",
    invalid: "'${label}' is invalid date",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: "'${label}' must be exactly ${len} characters",
    min: "'${label}' must be at least ${min} characters",
    max: "'${label}' cannot be longer than ${max} characters",
    range: "'${label}' must be between ${min} and ${max} characters",
  },
  number: {
    len: "'${label}' must equal ${len}",
    min: "'${label}' cannot be less than ${min}",
    max: "'${label}' cannot be greater than ${max}",
    range: "'${label}' must be between ${min} and ${max}",
  },
  array: {
    len: "'${label}' must be exactly ${len} in length",
    min: "'${label}' cannot be less than ${min} in length",
    max: "'${label}' cannot be greater than ${max} in length",
    range: "'${label}' must be between ${min} and ${max} in length",
  },
  pattern: {
    mismatch: "'${label}' does not match pattern ${pattern}",
  },
};

export const validateMessagesCN = {
  default: '${label} failed validation',
  required: '${label} is required',
  whitespace: '${label} cannot be empty',
  date: {
    format: '${label} format error',
    parse: '${label} cannot be parsed',
    invalid: '${label} data is invalid',
  },
  types: {
    string: typeTemplateCN,
    method: typeTemplateCN,
    array: typeTemplateCN,
    object: typeTemplateCN,
    number: typeTemplateCN,
    date: typeTemplateCN,
    boolean: typeTemplateCN,
    integer: typeTemplateCN,
    float: typeTemplateCN,
    regexp: typeTemplateCN,
    email: typeTemplateCN,
    url: typeTemplateCN,
    hex: typeTemplateCN,
  },
  string: {
    len: '${label} length is not ${len}',
    min: '${label} length cannot be less than ${min}',
    max: '${label} length cannot be greater than ${max}',
    range: '${label} length must be between ${min} and ${max}',
  },
  number: {
    len: '${label} is not equal to ${len}',
    min: '${label} cannot be less than ${min}',
    max: '${label} cannot be greater than ${max}',
    range: '${label} must be between ${min} and ${max}',
  },
  array: {
    len: '${label} length is not ${len}',
    min: '${label} length cannot be less than ${min}',
    max: '${label} length cannot be greater than ${max}',
    range: '${label} length must be between ${min} and ${max}',
  },
  pattern: {
    mismatch: '${label} does not pass the regular expression ${pattern}',
  },
};
