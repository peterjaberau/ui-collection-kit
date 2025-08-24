import { useSelector } from '@xstate/react';
import { useEntitiesActor } from '#actors/hooks/useEntitiesActor';
import { useUiActor } from "#actors/hooks/useUiActor"
import { APP_MODE, RENDER_MODES } from '#actors/enums'

export function useEditorSelectors() {

  const { app } = useEntitiesActor();
  const { uiActorContext } = useUiActor();

  const renderMode = app === APP_MODE.EDIT ? RENDER_MODES.CANVAS : RENDER_MODES.PAGE;
  const isPreviewMode = uiActorContext.editor.isPreviewMode;


  return {
    renderMode,
    isPreviewMode
  }

}
