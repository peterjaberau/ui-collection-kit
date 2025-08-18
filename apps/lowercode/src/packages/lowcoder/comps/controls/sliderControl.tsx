import { Input } from "#lowcoder-design/components/Input";
import { SimpleComp } from "#lowcoder-core/index";
import { controlItem, ControlPropertyViewWrapper, SwitchWrapper } from "#lowcoder-design/index";
import { ControlParams } from "./controlParams";
import Slider from "antd/es/slider";

class SliderControl extends SimpleComp<number> {
  readonly IGNORABLE_DEFAULT_VALUE = "";
  protected getDefaultValue(): number {
    return 24;
  }

  getPropertyView() {
    return this.propertyView({});
  }

  propertyView(params: ControlParams) {
    return controlItem(
      { filterText: params.label },
      <ControlPropertyViewWrapper {...params}>
        <Slider
          style={{ width: "90%", margin: "8px 5% 0 5%"}}
          min={1}  // Define the minimum value for the slider
          max={48} // Define the maximum value for the slider
          value={this.value || 24}
          onChange={(value: any) => this.dispatchChangeValueAction(value)} // this.dispatchChangeValueAction(value)}
          // onChangeComplete={(value) => this.dispatchChangeValueAction(value)}
        />
      </ControlPropertyViewWrapper>
    );
  }
}

export { SliderControl };
