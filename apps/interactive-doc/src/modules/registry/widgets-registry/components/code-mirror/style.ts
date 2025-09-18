import { css } from "@emotion/react"

export const RenderCodeMirrorWrapperStyle = css`
  width: 100%;
  height: 100%;
  position: relative;
  :hover {
    .open-window-icon-hotspot {
      visibility: visible;
    }
  }
`

export const openWindowIconHotspotStyle = css`
  position: absolute;
  z-index: 10;
  right: 2px;
  bottom: 2px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  font-size: 12px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px 2px 6px 2px;
  visibility: hidden;
`
