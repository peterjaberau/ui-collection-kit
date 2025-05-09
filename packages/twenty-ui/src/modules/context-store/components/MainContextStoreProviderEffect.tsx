import { MAIN_CONTEXT_STORE_INSTANCE_ID } from '@twenty-modules/context-store/constants/MainContextStoreInstanceId';
import { contextStoreCurrentObjectMetadataItemIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentObjectMetadataItemIdComponentState';
import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { contextStoreCurrentViewTypeComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewTypeComponentState';
import { ContextStoreViewType } from '@twenty-modules/context-store/types/ContextStoreViewType';
import { useSetLastVisitedObjectMetadataId } from '@twenty-modules/navigation/hooks/useSetLastVisitedObjectMetadataId';
import { useSetLastVisitedViewForObjectMetadataNamePlural } from '@twenty-modules/navigation/hooks/useSetLastVisitedViewForObjectMetadataNamePlural';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { prefetchViewFromViewIdFamilySelector } from '@twenty-modules/prefetch/states/selector/prefetchViewFromViewIdFamilySelector';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { View } from '@twenty-modules/views/types/View';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

type MainContextStoreProviderEffectProps = {
  viewId?: string;
  objectMetadataItem?: ObjectMetadataItem;
  isRecordIndexPage: boolean;
  isRecordShowPage: boolean;
  isSettingsPage: boolean;
};

export const MainContextStoreProviderEffect = ({
  viewId,
  objectMetadataItem,
  isRecordIndexPage,
  isRecordShowPage,
  isSettingsPage,
}: MainContextStoreProviderEffectProps) => {
  const { setLastVisitedViewForObjectMetadataNamePlural } =
    useSetLastVisitedViewForObjectMetadataNamePlural();

  const { setLastVisitedObjectMetadataId } =
    useSetLastVisitedObjectMetadataId();

  const [contextStoreCurrentViewId, setContextStoreCurrentViewId] =
    useRecoilComponentStateV2(
      contextStoreCurrentViewIdComponentState,
      MAIN_CONTEXT_STORE_INSTANCE_ID,
    );

  const [contextStoreCurrentViewType, setContextStoreCurrentViewType] =
    useRecoilComponentStateV2(
      contextStoreCurrentViewTypeComponentState,
      MAIN_CONTEXT_STORE_INSTANCE_ID,
    );

  const [
    contextStoreCurrentObjectMetadataItemId,
    setContextStoreCurrentObjectMetadataItemId,
  ] = useRecoilComponentStateV2(
    contextStoreCurrentObjectMetadataItemIdComponentState,
    MAIN_CONTEXT_STORE_INSTANCE_ID,
  );

  const view = useRecoilValue(
    prefetchViewFromViewIdFamilySelector({
      viewId: viewId ?? '',
    }),
  );

  useEffect(() => {
    if (contextStoreCurrentObjectMetadataItemId !== objectMetadataItem?.id) {
      setContextStoreCurrentObjectMetadataItemId(objectMetadataItem?.id);
    }

    if (!objectMetadataItem) {
      return;
    }

    setLastVisitedViewForObjectMetadataNamePlural({
      objectNamePlural: objectMetadataItem.namePlural,
      viewId: viewId ?? '',
    });

    setLastVisitedObjectMetadataId({
      objectMetadataItemId: objectMetadataItem.id,
    });
  }, [
    contextStoreCurrentObjectMetadataItemId,
    objectMetadataItem,
    setContextStoreCurrentObjectMetadataItemId,
    setLastVisitedObjectMetadataId,
    setLastVisitedViewForObjectMetadataNamePlural,
    viewId,
  ]);

  useEffect(() => {
    if (isSettingsPage) {
      setContextStoreCurrentViewId(undefined);
      return;
    }

    if (contextStoreCurrentViewId !== viewId) {
      setContextStoreCurrentViewId(viewId);
    }
  }, [
    contextStoreCurrentViewId,
    isSettingsPage,
    setContextStoreCurrentViewId,
    viewId,
  ]);

  useEffect(() => {
    const viewType = getViewType({
      isSettingsPage,
      isRecordShowPage,
      isRecordIndexPage,
      view,
    });

    if (contextStoreCurrentViewType !== viewType) {
      setContextStoreCurrentViewType(viewType);
    }
  }, [
    contextStoreCurrentViewType,
    setContextStoreCurrentViewType,
    view,
    isSettingsPage,
    isRecordShowPage,
    isRecordIndexPage,
  ]);

  return null;
};

const getViewType = ({
  isSettingsPage,
  isRecordShowPage,
  isRecordIndexPage,
  view,
}: {
  isSettingsPage: boolean;
  isRecordShowPage: boolean;
  isRecordIndexPage: boolean;
  view?: View;
}) => {
  if (isSettingsPage) {
    return null;
  }

  if (isRecordIndexPage) {
    return view?.type === ViewType.Kanban
      ? ContextStoreViewType.Kanban
      : ContextStoreViewType.Table;
  }

  if (isRecordShowPage) {
    return ContextStoreViewType.ShowPage;
  }

  return null;
};
