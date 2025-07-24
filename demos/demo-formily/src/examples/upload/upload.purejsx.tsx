import React from 'react'
import {
  Upload,
  FormItem,
  FormLayout,
  FormButtonGroup,
  Submit,
} from '@formily/antd-v5'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'
import { Button } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'

const NormalUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <Button icon={<UploadOutlined />}>Upload files</Button>
    </Upload>
  )
}

const CardUpload = (props) => {
  return (
    <Upload
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      headers={{
        authorization: 'authorization-text',
      }}
    >
      <UploadOutlined style={{ fontSize: 20 }} />
    </Upload>
  )
}

const DraggerUpload = (props) => {
  return (
    <Upload.Dragger
      {...props}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Upload.Dragger>
  )
}

const form = createForm()

export const UploadPurejsx = () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <Field
        name="upload"
        title="Upload"
        required
        decorator={[FormItem]}
        component={[NormalUpload]}
      />
      <Field
        name="upload2"
        title="Card upload"
        required
        decorator={[FormItem]}
        component={[CardUpload]}
      />
      <Field
        name="upload3"
        title="Drag and drop upload"
        required
        decorator={[FormItem]}
        component={[DraggerUpload]}
      />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)
