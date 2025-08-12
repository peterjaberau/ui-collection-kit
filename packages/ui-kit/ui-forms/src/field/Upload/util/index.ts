import { IUploadedFile } from '../../../types';

const isSameFile = (f1: IUploadedFile, f2: IUploadedFile) => (!((f1.name !== f2.name || f1.size !== f2.size || f1.type !== f2.type || f1.lastModified !== f2.lastModified)));

export const updateFileList = (newfile: IUploadedFile| IUploadedFile[], fileList: IUploadedFile[]) => {
  const newFileList = Array.isArray(newfile) ? newfile : (newfile ? [ newfile ] : []);
  if (!newFileList.length) return null;
  const nextFileList = [ ...(fileList || []) ];
  for (let i = 0; i < newFileList.length; i++) {
    const file = newFileList[i];
    const fileIndex = nextFileList.findIndex(item => isSameFile(item, file));
    if (fileIndex === -1) {
      nextFileList.push(file);
    } else {
      nextFileList[fileIndex] = file;
    }
  }
  return nextFileList;
};

export const removeFileItem = (file: IUploadedFile, fileList: IUploadedFile[]) => {
  const newFileList = (fileList || []).filter(item => !isSameFile(item, file));
  if (newFileList.length === (fileList || []).length) {
    return null;
  }
  return newFileList;
};
