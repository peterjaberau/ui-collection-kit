import { isJSFunctionProperty } from "#actor-lib/ast";
import { set } from "lodash";

class JsPropertiesState {
  private jsPropertiesState: any = {};

  delete(jsObjectName: string) {
    delete this.jsPropertiesState[`${jsObjectName}`];
  }

  update(jsObjectName: string, properties: any[]) {
    for (const jsObjectProperty of properties) {
      const { key, position, rawContent, type } = jsObjectProperty;

      if (isJSFunctionProperty(jsObjectProperty)) {
        set(
          this.jsPropertiesState,
          `[${jsObjectName}.${jsObjectProperty.key}]`,
          {
            position: position,
            value: rawContent,
            isMarkedAsync: jsObjectProperty.isMarkedAsync,
          },
        );
      } else if (type !== "literal") {
        set(this.jsPropertiesState, `[${jsObjectName}.${key}]`, {
          position: position,
          value: rawContent,
        });
      }
    }
  }

  getMap() {
    return this.jsPropertiesState;
  }
}

export const jsPropertiesState = new JsPropertiesState();

