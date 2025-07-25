import React from 'react'
import {
  Upload,
  FormItem,
  FormLayout,
  FormButtonGroup,
  Submit,
} from '../../components'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Button } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'

const NormalUpload: any = (props: any) => {
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

const CardUpload: any = (props: any) => {
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

const DraggerUpload: any = (props: any) => {
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

const SchemaField: any = createSchemaField({
  components: {
    NormalUpload,
    CardUpload,
    DraggerUpload,
    FormItem,
  },
})

const form = createForm()

const schema = {
  type: 'object',
  properties: {
    upload: {
      type: 'array',
      title: 'Upload',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'NormalUpload',
    },
    upload2: {
      type: 'array',
      title: 'Card upload',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'CardUpload',
    },
    upload3: {
      type: 'array',
      title: 'Drag and drop upload',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'DraggerUpload',
    },
  },
}

export const UploadSchema = () => (
  <FormProvider form={form}>
    <FormLayout labelCol={6} wrapperCol={10}>
      <SchemaField schema={schema} />
      <FormButtonGroup.FormItem>
        <Submit onSubmit={console.log}>Submit</Submit>
      </FormButtonGroup.FormItem>
    </FormLayout>
  </FormProvider>
)
