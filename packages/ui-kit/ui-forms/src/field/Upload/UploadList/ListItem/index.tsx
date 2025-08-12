import type { CSSProperties, ReactNode } from "react";
import { useMemoizedFn } from "ahooks";
import { Tooltip } from "@mui/material";
import { IconTrash } from "@tabler/icons-react";
import classNames from "classnames";

import { prefixCls as prefix } from "../../../../utils";
import { type IUploadedFile } from "../../../../types";

const prefixCls = `${prefix}-upload`;

export const ListItem = (props: ListItemProps) => {
  const {
    className,
    style,
    file,
    onClickThumb,
    iconRender,
    isImage,
    imageIndex,
    showPreviewIcon,
    showRemoveIcon,
    previewIcon: customPreviewIcon,
    removeIcon,
    onPreview,
    onRemove,
  } = props;
  const { status, message } = file || {};
  const iconNode = iconRender?.(file!) || customPreviewIcon;
  let icon = <div className={`${prefixCls}-text-icon`}>{iconNode}</div>;

  const thumbnail = isImage ? (
    <img src={file!.thumbUrl || file!.url} alt={file!.name} className={`${prefixCls}-list-item-image`} />
  ) : (
    iconNode
  );
  const aClassName = classNames({
    [`${prefixCls}-list-item-thumbnail`]: true,
    [`${prefixCls}-list-item-thumbnail-file`]: !isImage,
    [`${prefixCls}-error`]: status === "error",
  });
  icon = (
    <Tooltip arrow placement="top" title={isImage ? "图片预览" : ""}>
      <div className={aClassName}>{thumbnail}</div>
    </Tooltip>
  );
  const handleOnPreview = useMemoizedFn(async (file, e, imageIndex) => {
    if (typeof onPreview === "function") {
      onPreview(file, e);
    } else if (imageIndex !== -1 && typeof imageIndex === "number" && typeof onClickThumb === "function") {
      onClickThumb(imageIndex);
    }
  });

  const tooltip = (
    <>
      <div>{file!.name}</div>
      {status === "error" && <div style={{ color: "red" }}>{message}</div>}
    </>
  );
  return (
    <div
      className={classNames({
        [`${prefixCls}-list-item`]: true,
        [`${prefixCls}-error`]: status === "error",
        [`${prefixCls}-list-item-error`]: status === "error",
        [`${className}`]: !!className,
      })}
      style={style}
    >
      {showPreviewIcon && <div onClick={(e) => handleOnPreview(file, e, imageIndex)}>{icon}</div>}
      <Tooltip title={tooltip} arrow placement="top">
        <div
          className={classNames({
            [`${prefixCls}-list-item-name`]: true,
            [`${prefixCls}-error`]: status === "error",
          })}
        >
          {file!.name}
        </div>
      </Tooltip>
      {showRemoveIcon && typeof onRemove === "function" && (
        <Tooltip title="删除" arrow placement="top">
          <div
            className={classNames({
              [`${prefixCls}-list-item-action-icon`]: true,
              [`${prefixCls}-error`]: status === "error",
            })}
            onClick={() => onRemove(file!)}
          >
            {removeIcon || <IconTrash size="1.2rem" />}
          </div>
        </Tooltip>
      )}
    </div>
  );
};

interface ListItemProps {
  className?: string;
  style?: CSSProperties;
  file?: IUploadedFile;
  onClickThumb?: (imageIndex: number) => void;
  iconRender?: (file: IUploadedFile) => ReactNode;
  isImage?: boolean;
  imageIndex?: number;
  showPreviewIcon?: boolean;
  showRemoveIcon?: boolean;
  previewIcon?: ReactNode;
  removeIcon?: ReactNode;
  onPreview?: (file: IUploadedFile, e?: MouseEvent) => void;
  onRemove?: (file?: IUploadedFile) => void;
}
