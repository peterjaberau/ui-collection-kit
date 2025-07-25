import React from 'react'
import {
  Upload,
  FormItem,
  FormLayout,
  FormButtonGroup,
  Submit,
} from '@ui-kit/forms'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
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

const SchemaField = createSchemaField({
  components: {
    NormalUpload,
    CardUpload,
    DraggerUpload,
    FormItem,
  },
})

const form = createForm()

export const UploadMarkup = () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <SchemaField>
        <SchemaField.Array
          name="upload"
          title="Upload"
          x-decorator="FormItem"
          x-component="NormalUpload"
          required
        />
        <SchemaField.Array
          name="upload2"
          title="Card upload"
          x-decorator="FormItem"
          x-component="CardUpload"
          required
        />
        <SchemaField.Array
          name="upload3"
          title="Drag and drop upload"
          x-decorator="FormItem"
          x-component="DraggerUpload"
          required
        />
      </SchemaField>
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)
