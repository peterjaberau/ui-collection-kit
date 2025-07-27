import { createLocales } from '#packages/core'

export const Upload = {
  'zh-CN': {
    title: 'Upload',
    settings: {
      'x-component-props': {
        accept: 'Accept',
        action: 'Upload Address',
        data: 'Data',
        directory: 'Support Upload Directory',
        headers: 'Headers',
        listType: { title: 'List Type', dataSource: ['Text', 'Image', 'Card'] },
        multiple: 'Multiple',
        name: 'Name',
        openFileDialogOnClick: 'Open File Dialog On Click',
        showUploadList: 'Show Upload List',
        withCredentials: 'withCredentials',
        maxCount: 'Max Count',
        method: 'Method',
        textContent: 'Text Content',
      },
    },
  },
  'en-US': {
    title: 'Upload',
    settings: {
      'x-component-props': {
        accept: 'Accept',
        action: 'Upload Address',
        data: 'Data',
        directory: 'Support Upload Directory',
        headers: 'Headers',
        listType: { title: 'List Type', dataSource: ['Text', 'Image', 'Card'] },
        multiple: 'Multiple',
        name: 'Name',
        openFileDialogOnClick: 'Open File Dialog On Click',
        showUploadList: 'Show Upload List',
        withCredentials: 'withCredentials',
        maxCount: 'Max Count',
        method: 'Method',
        textContent: 'Text Content',
      },
    },
  },
  'ko-KR': {
    title: 'Upload',
    settings: {
      'x-component-props': {
        accept: 'Accept',
        action: 'Upload Address',
        data: 'Data',
        directory: 'Support Upload Directory',
        headers: 'Headers',
        listType: { title: 'List Type', dataSource: ['Text', 'Image', 'Card'] },
        multiple: 'Multiple',
        name: 'Name',
        openFileDialogOnClick: 'Open File Dialog On Click',
        showUploadList: 'Show Upload List',
        withCredentials: 'withCredentials',
        maxCount: 'Max Count',
        method: 'Method',
        textContent: 'Text Content',
      },
    },
  },
}

export const UploadDragger = createLocales(Upload, {
  'zh-CN': {
    title: 'UploadDragger',
    settings: {
      'x-component-props': {},
    },
  },
  'en-US': {
    title: 'UploadDragger',
    settings: {
      'x-component-props': {},
    },
  },
  'ko-KR': {
    title: 'UploadDragger',
    settings: {
      'x-component-props': {},
    },
  },
})
