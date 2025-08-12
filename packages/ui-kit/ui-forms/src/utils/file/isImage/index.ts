import { isImageMimeType, getFileExtensionFromUrl } from "@iimm/shared";

import { type IUploadedFile } from "../../../types";

export const isImage = (file: IUploadedFile) => {
  if (file.type && !file.thumbUrl && !file.url) {
    return isImageMimeType(file.type);
  }
  const url = file.thumbUrl || file.url || "";
  const extension = getFileExtensionFromUrl(url);
  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }
  if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  }
  if (extension) {
    // other file types which have extension
    return false;
  }
  return false;
};
