import { uploadFileToDrive } from "@/utils/drive/upload/getSingedURL"
import { IUploadDetailStore } from "./interface"

export const updateFileDetailStore: IUploadDetailStore | any = {
  fileDetailInfos: [],
  listeners: [],
  subscribe(listener: any) {
    updateFileDetailStore.listeners.push(listener)
    return () => {
      updateFileDetailStore.listeners = updateFileDetailStore.listeners.filter(
        (l: any) => l !== listener,
      )
    }
  },
  addFileDetailInfo(fileDetailInfo: any) {
    updateFileDetailStore.fileDetailInfos = [
      ...updateFileDetailStore.fileDetailInfos,
      fileDetailInfo,
    ]
    updateFileDetailStore.listeners.forEach((listener: any) => listener())
  },
  updateFileDetailInfo(queryID: any, fileDetailInfo: any) {
    const index = updateFileDetailStore.fileDetailInfos.findIndex(
      (item: any) => item.queryID === queryID,
    )
    if (index !== -1) {
      updateFileDetailStore.fileDetailInfos[index] = {
        ...updateFileDetailStore.fileDetailInfos[index],
        ...fileDetailInfo,
      }
      updateFileDetailStore.fileDetailInfos = [
        ...updateFileDetailStore.fileDetailInfos,
      ]
      updateFileDetailStore.listeners.forEach((listener: any) => listener())
    }
  },
  deleteFileDetailInfo(queryID: any) {
    updateFileDetailStore.fileDetailInfos =
      updateFileDetailStore.fileDetailInfos.filter(
        (item: any) => item.queryID !== queryID,
      )
    updateFileDetailStore.listeners.forEach((listener: any) => listener())
  },
  retryUpload(queryID: any) {
    const uploadInfo = updateFileDetailStore.fileDetailInfos.find(
      (item: any) => item.queryID === queryID,
    )
    if (uploadInfo && uploadInfo.saveToILLADriveParams) {
      uploadFileToDrive(
        queryID,
        uploadInfo.saveToILLADriveParams.fileData,
        uploadInfo.saveToILLADriveParams,
        uploadInfo.abortController?.signal!,
      ).catch((e) => {
        console.error("upload_detail_re_try_storage_not_enough:", e)
        // handleCollaPurchaseError(
        //   e,
        //   CollarModalType.STORAGE,
        //   "upload_detail_re_try_storage_not_enough",
        // )
      })
      updateFileDetailStore.listeners.forEach((listener: any) => listener())
    }
  },
  getSnapshot() {
    return updateFileDetailStore.fileDetailInfos
  },
}
