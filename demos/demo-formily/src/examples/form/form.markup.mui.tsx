import React from "react"
import { useMemo, useCallback } from "react"
import dayjs from "dayjs"

import { ModalForm, Select, Submit, Reset, DatePicker, FormLayout } from "@ui-kit/ui-forms"
import { createForm } from "@formily/core"
import { Field, FormProvider } from "@formily/react"

const type2OptionsGetter = () => {
  return ["A", "B", { value: "c", label: "OptionC" }]
}

export const FormMarkupMui = () => {
  const form = createForm()
  const onSubmit = useCallback((values) => {
    // Todo
  }, [])

  return (
    <FormProvider form={form}>
      <FormLayout xs={12} sm={6} xl={4} fullWidth showFeedback withFormItem>
        <Field
          name="type"
          title="Report Type"
          required
          component={[Select, { options: ["A", "B", { value: "c", label: "Options C" }] }]}
        />
        <Field
          name="type2"
          title="Build Type"
          description="This is a prompt tooltip"
          required
          component={[Select, { options: type2OptionsGetter }]}
        />
        <Field
          name="date"
          title="First inspection date"
          description="This is a prompt tooltip"
          required
          component={[DatePicker, { maxDate: dayjs() }]}
        />
      </FormLayout>
      <Reset />
      <Submit onSubmit={onSubmit} />
    </FormProvider>
  )
}
