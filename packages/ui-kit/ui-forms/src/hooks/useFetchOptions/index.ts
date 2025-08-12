import { useRef, type MutableRefObject } from "react";
import { useDeepCompareEffect, useMemoizedFn, useSafeState } from "ahooks";
import { toJS } from "@formily/reactive";
import { isEqual } from "@iimm/shared";

import type { IFieldOptionItem, IFieldPropOptions, IFieldPropOptionItem } from "../../types";

interface IUseFieldOptionsConfig<T extends IFieldOptionItem = any> {
  /** 外部管理Loading状态：setLoading */
  onLoading?: (loading: boolean) => void;
  /** 获取完options后进行的其他操作，不会影响返回options，为options的副作用 */
  callback?: (options: T[]) => void;
  /** 更新依赖项数组,不需要传递optionsProp,optionsProp会默认加入 */
  deps?: any;
  fetchRef?: MutableRefObject<boolean>;
}

export function useFetchOptions<T extends IFieldOptionItem = any>(
  optionsProp?: IFieldPropOptions,
  config: IUseFieldOptionsConfig<T> = {}
) {
  const { onLoading, callback, deps, fetchRef } = config;
  const [options, setOptions] = useSafeState<T[]>([]);
  const refresh = deps || 0;
  const refreshRef = useRef(refresh);

  const getOptions = useMemoizedFn(async () => {
    let result: IFieldPropOptionItem[] = [];
    onLoading?.(true);
    try {
      if (Array.isArray(optionsProp) && optionsProp.length) {
        result = [...toJS(optionsProp)];
      }

      if (!result.length && typeof optionsProp === "function") {
        const res = await optionsProp(refreshRef.current !== refresh);
        if (Array.isArray(res)) {
          // 如果结果不是Array则直接丢弃
          result = [...res];
        }
      }

      result = result.map((item) =>
        typeof item === "object" && item !== null
          ? item
          : {
              value: item,
              label: item === null || typeof item === "number" ? item?.toString() : item,
            }
      );
      onLoading?.(false);
      if (!isEqual(options, result)) {
        callback?.(result as T[]);
        setOptions(() => {
          if (fetchRef && !fetchRef.current) fetchRef.current = true;
          return result as T[];
        });
      }
    } catch (error) {
      onLoading?.(false);
    }
    refreshRef.current = refresh;
  });

  useDeepCompareEffect(() => {
    getOptions();
  }, [optionsProp, refresh]);

  return options;
}
