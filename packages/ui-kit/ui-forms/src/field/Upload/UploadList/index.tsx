import { type CSSProperties, type ReactNode, useEffect } from "react";
import { useMemoizedFn, useSafeState, useUpdate } from "ahooks";
import { ImageCarouselModal } from "mui-component";
import { PhotoTwoTone, FilePresentTwoTone } from "@mui/icons-material";
import classNames from "classnames";

import { ListItem } from "./ListItem";
import { prefixCls } from "../../../utils";
import type { IUploadedFile } from "../../../types";

export const UploadList = (props: UploadListProps) => {
  const {
    className,
    items,
    previewFile,
    onPreview,
    onRemove,
    iconRender,
    isImage,
    style,
    onClickThumb: onClickThumbProp,
    itemStyle,
    itemClassName,
    ...restProps
  } = props;
  const forceUpdate = useUpdate();
  const [open, setOpen] = useSafeState(false);
  const [selectedItem, setSelectedItem] = useSafeState(0);

  // 更新文件的预览图
  useEffect(() => {
    (items || []).forEach(async (file) => {
      if (
        !(
          typeof document === "undefined" ||
          typeof window === "undefined" ||
          !window?.FileReader ||
          !window?.File ||
          file.url !== undefined
        )
      ) {
        file.url = "";
        if (!!previewFile) {
          const previewDataUrl = await previewFile(file);
          file.url = previewDataUrl || "";
          forceUpdate();
        }
      }
    });
  }, [items, previewFile, forceUpdate]);

  const internalIconRender = useMemoizedFn((file) => {
    if (typeof iconRender === "function") {
      return iconRender(file);
    }
    return isImage?.(file) ? <PhotoTwoTone fontSize="large" /> : <FilePresentTwoTone fontSize="large" />;
  });

  interface ImageItem {
    src?: string;
    title: string;
    itemIndex: number;
  }

  const imagesList: ImageItem[] = (items || [])
    .filter((item) => isImage?.(item) && (item.url || item.thumbUrl))
    .map((item, index) => ({ src: item.url || item.thumbUrl, title: item.name, itemIndex: index }));

  const getImageIndex = useMemoizedFn((file, imagesList: ImageItem[]) => {
    const index = imagesList.filter((item) => item.src === file.url || item.src === file.thumbUrl)[0]?.itemIndex ?? -1;
    return index;
  });

  const onClickThumb = useMemoizedFn((index) => {
    if (index === -1) {
      return;
    }
    if (imagesList.length) {
      setSelectedItem(index);
      setOpen(true);
    }
    onClickThumbProp?.(index);
  });

  return (
    <div
      style={style}
      className={classNames({
        [`${prefixCls}-upload-list`]: true,
        [`${className}`]: !!className,
      })}
    >
      {!!imagesList.length && (
        <ImageCarouselModal
          images={imagesList}
          selectedItem={selectedItem}
          onChange={(index) => setSelectedItem(index)}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
      {items?.map((file, index) => (
        <ListItem
          key={`${index}-${file.name}`}
          file={file}
          imageIndex={getImageIndex(file, imagesList)}
          onClickThumb={onClickThumb}
          onRemove={onRemove}
          onPreview={onPreview}
          iconRender={internalIconRender}
          isImage={isImage?.(file)}
          style={itemStyle}
          className={itemClassName}
          {...restProps}
        />
      ))}
    </div>
  );
};

export interface UploadListProps {
  previewFile?: (file: IUploadedFile) => Promise<string | void> | string | void;
  className?: string;
  style?: CSSProperties;
  itemStyle?: CSSProperties;
  itemClassName?: string;
  onClickThumb?: (imageIndex: number) => void;
  iconRender?: (file: IUploadedFile) => ReactNode;
  isImage?: (file: IUploadedFile) => boolean;
  showPreviewIcon?: boolean;
  showRemoveIcon?: boolean;
  previewIcon?: ReactNode;
  removeIcon?: ReactNode;
  onPreview?: (file: IUploadedFile, e?: MouseEvent) => void;
  onRemove?: (file?: IUploadedFile) => void;
  items?: IUploadedFile[];
}
