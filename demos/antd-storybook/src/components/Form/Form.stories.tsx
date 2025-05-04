
import type { Meta, StoryObj } from '@storybook/react';
import { Form } from 'antd';
import WrapperPreview from "../WrapperPreview";

import DemoValidateTriggerComp from "./validate-trigger";
import sourceDemoValidateTrigger from "./validate-trigger?raw";
            

import DemoValidateScrollToFieldComp from "./validate-scroll-to-field";
import sourceDemoValidateScrollToField from "./validate-scroll-to-field?raw";
            

import DemoComplexFormControlComp from "./complex-form-control";
import sourceDemoComplexFormControl from "./complex-form-control?raw";
            

import DemoSizeComp from "./size";
import sourceDemoSize from "./size?raw";
            

import DemoControlHooksComp from "./control-hooks";
import sourceDemoControlHooks from "./control-hooks?raw";
            

import DemoDynamicRuleComp from "./dynamic-rule";
import sourceDemoDynamicRule from "./dynamic-rule?raw";
            

import DemoLayoutMultipleComp from "./layout-multiple";
import sourceDemoLayoutMultiple from "./layout-multiple?raw";
            

import DemoWarningOnlyComp from "./warning-only";
import sourceDemoWarningOnly from "./warning-only?raw";
            

import DemoLoginComp from "./login";
import sourceDemoLogin from "./login?raw";
            

import DemoGetValuePropsNormalizeComp from "./getValueProps-normalize";
import sourceDemoGetValuePropsNormalize from "./getValueProps-normalize?raw";
            

import DemoDynamicFormItemsComp from "./dynamic-form-items";
import sourceDemoDynamicFormItems from "./dynamic-form-items?raw";
            

import DemoLayoutCanWrapComp from "./layout-can-wrap";
import sourceDemoLayoutCanWrap from "./layout-can-wrap?raw";
            

import DemoDynamicFormItemsNoStyleComp from "./dynamic-form-items-no-style";
import sourceDemoDynamicFormItemsNoStyle from "./dynamic-form-items-no-style?raw";
            

import DemoVariantComp from "./variant";
import sourceDemoVariant from "./variant?raw";
            

import DemoRegisterComp from "./register";
import sourceDemoRegister from "./register?raw";
            

import DemoDynamicFormItemsComplexComp from "./dynamic-form-items-complex";
import sourceDemoDynamicFormItemsComplex from "./dynamic-form-items-complex?raw";
            

import DemoValidateOtherComp from "./validate-other";
import sourceDemoValidateOther from "./validate-other?raw";
            

import DemoCustomFeedbackIconsComp from "./custom-feedback-icons";
import sourceDemoCustomFeedbackIcons from "./custom-feedback-icons?raw";
            

import DemoInlineLoginComp from "./inline-login";
import sourceDemoInlineLogin from "./inline-login?raw";
            

import DemoFormItemPathComp from "./form-item-path";
import sourceDemoFormItemPath from "./form-item-path?raw";
            

import DemoWithoutFormCreateComp from "./without-form-create";
import sourceDemoWithoutFormCreate from "./without-form-create?raw";
            

import DemoValidateStaticComp from "./validate-static";
import sourceDemoValidateStatic from "./validate-static?raw";
            

import DemoValidateOnlyComp from "./validate-only";
import sourceDemoValidateOnly from "./validate-only?raw";
            

import DemoFormDependenciesComp from "./form-dependencies";
import sourceDemoFormDependencies from "./form-dependencies?raw";
            

import DemoAdvancedSearchComp from "./advanced-search";
import sourceDemoAdvancedSearch from "./advanced-search?raw";
            

import DemoNestMessagesComp from "./nest-messages";
import sourceDemoNestMessages from "./nest-messages?raw";
            

import DemoRefItemComp from "./ref-item";
import sourceDemoRefItem from "./ref-item?raw";
            

import DemoLayoutComp from "./layout";
import sourceDemoLayout from "./layout?raw";
            

import DemoDisabledComp from "./disabled";
import sourceDemoDisabled from "./disabled?raw";
            

import DemoBasicComp from "./basic";
import sourceDemoBasic from "./basic?raw";
            

import DemoFormInModalComp from "./form-in-modal";
import sourceDemoFormInModal from "./form-in-modal?raw";
            

import DemoRequiredMarkComp from "./required-mark";
import sourceDemoRequiredMark from "./required-mark?raw";
            

import DemoFormContextComp from "./form-context";
import sourceDemoFormContext from "./form-context?raw";
            

import DemoUseWatchComp from "./useWatch";
import sourceDemoUseWatch from "./useWatch?raw";
            

import DemoGlobalStateComp from "./global-state";
import sourceDemoGlobalState from "./global-state?raw";
            

import DemoTimeRelatedControlsComp from "./time-related-controls";
import sourceDemoTimeRelatedControls from "./time-related-controls?raw";
            

import DemoCustomizedFormControlsComp from "./customized-form-controls";
import sourceDemoCustomizedFormControls from "./customized-form-controls?raw";
            

import DemoDynamicFormItemComp from "./dynamic-form-item";
import sourceDemoDynamicFormItem from "./dynamic-form-item?raw";
            

const meta = {
  title: 'Antd/Base/Form',
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<any>;


export const Demo_validateTrigger: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoValidateTrigger}><DemoValidateTriggerComp {...p} /></WrapperPreview>
};

export const Demo_validateScrollToField: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoValidateScrollToField}><DemoValidateScrollToFieldComp {...p} /></WrapperPreview>
};

export const Demo_complexFormControl: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoComplexFormControl}><DemoComplexFormControlComp {...p} /></WrapperPreview>
};

export const Demo_size: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoSize}><DemoSizeComp {...p} /></WrapperPreview>
};

export const Demo_controlHooks: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoControlHooks}><DemoControlHooksComp {...p} /></WrapperPreview>
};

export const Demo_dynamicRule: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamicRule}><DemoDynamicRuleComp {...p} /></WrapperPreview>
};

export const Demo_layoutMultiple: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLayoutMultiple}><DemoLayoutMultipleComp {...p} /></WrapperPreview>
};

export const Demo_warningOnly: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWarningOnly}><DemoWarningOnlyComp {...p} /></WrapperPreview>
};

export const Demo_login: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLogin}><DemoLoginComp {...p} /></WrapperPreview>
};

export const Demo_getValuePropsNormalize: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGetValuePropsNormalize}><DemoGetValuePropsNormalizeComp {...p} /></WrapperPreview>
};

export const Demo_dynamicFormItems: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamicFormItems}><DemoDynamicFormItemsComp {...p} /></WrapperPreview>
};

export const Demo_layoutCanWrap: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLayoutCanWrap}><DemoLayoutCanWrapComp {...p} /></WrapperPreview>
};

export const Demo_dynamicFormItemsNoStyle: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamicFormItemsNoStyle}><DemoDynamicFormItemsNoStyleComp {...p} /></WrapperPreview>
};

export const Demo_variant: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoVariant}><DemoVariantComp {...p} /></WrapperPreview>
};

export const Demo_register: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRegister}><DemoRegisterComp {...p} /></WrapperPreview>
};

export const Demo_dynamicFormItemsComplex: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamicFormItemsComplex}><DemoDynamicFormItemsComplexComp {...p} /></WrapperPreview>
};

export const Demo_validateOther: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoValidateOther}><DemoValidateOtherComp {...p} /></WrapperPreview>
};

export const Demo_customFeedbackIcons: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomFeedbackIcons}><DemoCustomFeedbackIconsComp {...p} /></WrapperPreview>
};

export const Demo_inlineLogin: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoInlineLogin}><DemoInlineLoginComp {...p} /></WrapperPreview>
};

export const Demo_formItemPath: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormItemPath}><DemoFormItemPathComp {...p} /></WrapperPreview>
};

export const Demo_withoutFormCreate: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoWithoutFormCreate}><DemoWithoutFormCreateComp {...p} /></WrapperPreview>
};

export const Demo_validateStatic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoValidateStatic}><DemoValidateStaticComp {...p} /></WrapperPreview>
};

export const Demo_validateOnly: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoValidateOnly}><DemoValidateOnlyComp {...p} /></WrapperPreview>
};

export const Demo_formDependencies: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormDependencies}><DemoFormDependenciesComp {...p} /></WrapperPreview>
};

export const Demo_advancedSearch: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoAdvancedSearch}><DemoAdvancedSearchComp {...p} /></WrapperPreview>
};

export const Demo_nestMessages: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoNestMessages}><DemoNestMessagesComp {...p} /></WrapperPreview>
};

export const Demo_refItem: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRefItem}><DemoRefItemComp {...p} /></WrapperPreview>
};

export const Demo_layout: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoLayout}><DemoLayoutComp {...p} /></WrapperPreview>
};

export const Demo_disabled: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDisabled}><DemoDisabledComp {...p} /></WrapperPreview>
};

export const Demo_basic: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoBasic}><DemoBasicComp {...p} /></WrapperPreview>
};

export const Demo_formInModal: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormInModal}><DemoFormInModalComp {...p} /></WrapperPreview>
};

export const Demo_requiredMark: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoRequiredMark}><DemoRequiredMarkComp {...p} /></WrapperPreview>
};

export const Demo_formContext: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoFormContext}><DemoFormContextComp {...p} /></WrapperPreview>
};

export const Demo_useWatch: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoUseWatch}><DemoUseWatchComp {...p} /></WrapperPreview>
};

export const Demo_globalState: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoGlobalState}><DemoGlobalStateComp {...p} /></WrapperPreview>
};

export const Demo_timeRelatedControls: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoTimeRelatedControls}><DemoTimeRelatedControlsComp {...p} /></WrapperPreview>
};

export const Demo_customizedFormControls: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoCustomizedFormControls}><DemoCustomizedFormControlsComp {...p} /></WrapperPreview>
};

export const Demo_dynamicFormItem: Story = {
  render: (p:any) => <WrapperPreview code={sourceDemoDynamicFormItem}><DemoDynamicFormItemComp {...p} /></WrapperPreview>
};
