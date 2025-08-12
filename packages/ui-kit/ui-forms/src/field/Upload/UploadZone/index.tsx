import { forwardRef, useImperativeHandle, type PropsWithChildren } from "react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";

export const UploadZone = forwardRef((props: PropsWithChildren<UploadZoneProps>, ref) => {
  const { children, ...restProps } = props;
  const { getInputProps, getRootProps, inputRef, open, rootRef } = useDropzone({
    useFsAccessApi: false,
    ...restProps,
  } as any);

  useImperativeHandle(ref, () => ({ inputRef, rootRef, open }));

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  );
});

export interface UploadZoneProps {
  /** 接受文件类型，格式为{mimeType: ext[]}
   * @exmaple
   * ```javascript
   *  accept: {"image/*":[".png",".jpg"]}
   * ```
   * */
  accept?: DropzoneOptions["accept"];
  style?: object;
  multiple?: boolean;
  preventDropOnDocument?: boolean;
  noClick?: boolean;
  noKeyboard?: boolean;
  noDrag?: boolean;
  noDragEventsBubbling?: boolean;
  minSize?: number;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  getFilesFromEvent?: (event: Event) => void;
  onFileDialogCancel?: () => void;
  onFileDialogOpen?: () => void;
  useFsAccessApi?: boolean;
  onDragEnter?: (event: Event) => void;
  onDragLeave?: (event: Event) => void;
  onDragOver?: (event: Event) => void;
  onDrop?: (File: File[], FileRejection: File[], event: Event) => void;
  onDropAccepted?: (File: File[], event: Event) => void;
  onDropRejected?: (FileRejection: File[], event: Event) => void;
  validator?: (file: File) => any;
}
