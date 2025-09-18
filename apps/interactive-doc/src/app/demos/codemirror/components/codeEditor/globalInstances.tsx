'use client'
import { App } from "antd"

let messageInstance: any
let notificationInstance: any
let modalInstance: any

export default () => {
  const staticFunction = App.useApp()
  messageInstance = staticFunction.message
  modalInstance = staticFunction.modal
  notificationInstance = staticFunction.notification
  return null
}

export { messageInstance, notificationInstance, modalInstance }
