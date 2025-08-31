import { isPathDynamicTrigger } from "./DynamicBindingUtils"
import {
  addErrorToEntityProperty,
  getEntityNameAndPropertyPath,
  resetValidationErrorsForEntityProperty,
} from "../Evaluation/evaluationUtils"
import { validate } from "../Evaluation/validations"

export function validateAndParseWidgetProperty({
  configTree,
  evalPropertyValue,
  evalProps,
  fullPropertyPath,
  unEvalPropertyValue,
  widget,
}: any): any {
  const { propertyPath } = getEntityNameAndPropertyPath(fullPropertyPath)

  if (isPathDynamicTrigger(widget, propertyPath)) {
    // TODO find a way to validate triggers
    return unEvalPropertyValue
  }

  const widgetConfig = configTree[widget.widgetName] as any
  const validation = widgetConfig.validationPaths[propertyPath]

  const { isValid, messages, parsed } = validateWidgetProperty(validation, evalPropertyValue, widget, propertyPath)

  // remove already present validation errors
  resetValidationErrorsForEntityProperty({
    evalProps,
    fullPropertyPath,
  })

  if (!isValid) {
    const evalErrors: any[] =
      messages?.map((message: any) => {
        return {
          raw: unEvalPropertyValue,
          errorMessage: message || {},
          errorType: 'VALIDATION',
          severity: 'error',
        }
      }) ?? []

    // Add validation errors
    addErrorToEntityProperty({
      errors: evalErrors,
      evalProps,
      fullPropertyPath,
      configTree,
    })
  }

  return parsed
}

export function validateWidgetProperty(
  config: any,
  value: unknown,
  props: Record<string, unknown>,
  propertyPath: string,
) {
  if (!config) {
    return {
      isValid: true,
      parsed: value,
    }
  }

  return validate(config, value, props, propertyPath)
}

export function validateActionProperty(config: any, value: unknown): any {
  if (!config) {
    return {
      isValid: true,
      parsed: value,
    }
  }

  return validate(config, value, {}, "")
}



const SAFE_URL_PATTERN =
  /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;

/** A pattern that matches safe data URLs. Only matches image, video and audio types. */
const DATA_URL_PATTERN =
  /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

const getIsSafeURL = (value: string) =>
  typeof value === "string" &&
  (value.match(SAFE_URL_PATTERN) || value.match(DATA_URL_PATTERN));

export default getIsSafeURL;
