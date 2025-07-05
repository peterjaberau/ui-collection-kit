import { chakra, defineSlotRecipe, useSlotRecipe } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"

const xrEditorSlotRecipe = defineSlotRecipe({
  slots: ["root"],
  base: {
    root: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
  },
})


export const XREditor = () => {
  return (
    <div data-name="App">
      <div
        data-name="FlexibleWorkbench"
        className="FW XREditor"
        style="--colorBorderSecondary: #4d4d4d; width: 100vw; height: 100vh; overflow: hidden;"
      >
        <div className="header">
          <div
            data-name="WorkbenchHeader"
            style="display: flex; align-items: center; justify-content: space-between; height: 100%;"
          >
            <div className="ant-space css-dev-only-do-not-override-3itlsw ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small">
              <div className="ant-space-item">
                <span className="ant-typography css-dev-only-do-not-override-3itlsw" style="font-size: 16px;">
                  <strong>New Project</strong>
                </span>
              </div>
              <div className="ant-space-item">
                <button
                  aria-describedby="rc_unique_13"
                  type="button"
                  className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-text ant-btn-color-default ant-btn-variant-text ant-btn-sm ant-btn-icon-only"
                >
                  <span className="ant-btn-icon">
                    <span role="img" aria-label="setting" className="anticon anticon-setting">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="setting"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
              <div className="ant-space-item">
                <div
                  className="ant-divider css-dev-only-do-not-override-3itlsw ant-divider-vertical"
                  role="separator"
                ></div>
              </div>
              <div className="ant-space-item">
                <div className="ant-space-compact css-dev-only-do-not-override-3itlsw">
                  <button
                    aria-describedby="rc_unique_15"
                    type="button"
                    className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm ant-btn-compact-item ant-btn-compact-first-item"
                  >
                    <span className="ant-btn-icon">
                      <span role="img" aria-label="bars" className="anticon anticon-bars">
                        <svg
                          viewBox="0 0 1024 1024"
                          focusable="false"
                          data-icon="bars"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
                        </svg>
                      </span>
                    </span>
                    <span
                      className="ant-typography ant-typography-ellipsis ant-typography-ellipsis-single-line css-dev-only-do-not-override-3itlsw"
                      style="width: 150px; text-align: left;"
                    >
                      Scene 1
                    </span>
                  </button>
                  <button
                    type="button"
                    className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm ant-btn-compact-item ant-btn-compact-last-item"
                  >
                    <span>1/1</span>
                  </button>
                </div>
              </div>
              <div className="ant-space-item">
                <div
                  className="ant-divider css-dev-only-do-not-override-3itlsw ant-divider-vertical"
                  role="separator"
                ></div>
              </div>
              <div className="ant-space-item">
                <div data-name="WorkbenchSegmented" style="display: flex;">
                  <div className="ant-space-compact css-dev-only-do-not-override-3itlsw">
                    <button
                      type="button"
                      className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm ant-btn-compact-item ant-btn-compact-first-item"
                    >
                      <span className="ant-btn-icon">
                        <span
                          role="img"
                          className="anticon BizIcon default"
                          style="--color-primary: #1668dc; --color-disabled: rgba(255,255,255,0.25);"
                        >
                          <svg
                            viewBox="2 2 17 17"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            className=""
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M475.25 53a.5.5 0 0 0-.213.047l-5.754 2.709a.5.5 0 0 0-.285.453v7.293a.5.5 0 0 0 .275.447l6.002 3.002a.5.5 0 0 0 .448 0l6.002-3.002a.5.5 0 0 0 .275-.447v-6.916a.5.5 0 0 0 0-.182v-.195a.5.5 0 0 0-.287-.453l-5.75-2.707a.5.5 0 0 0-.213-.049zm.111 1h.278l5.01 2.36-5.149 2.51-5.148-2.51zm-5.363 3.299 5.002 2.44v5.956l-5.002-2.502zM481 57.3v5.892l-5 2.5v-5.955z"
                                transform="translate(-465.503 -50.002)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                      <span>Model Design</span>
                    </button>
                    <button
                      type="button"
                      className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm ant-btn-compact-item"
                    >
                      <span className="ant-btn-icon">
                        <span
                          role="img"
                          className="anticon BizIcon default"
                          style="--color-primary: #1668dc; --color-disabled: rgba(255,255,255,0.25);"
                        >
                          <svg
                            viewBox="2 2 17 17"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            className=""
                            xml:space="preserve"
                          >
                            <g>
                              <path
                                d="M310.582 494c-1.187 0-2.136.69-2.523 1.621-.388.93-.208 2.105.67 2.983l2.5 2.5c.622.622.692 1.322.455 1.892-.238.57-.79 1.004-1.602 1.004l-6.535-.008 2.139-2.139a.5.5 0 1 0-.707-.707l-2.934 2.936-.01.008a.5.5 0 0 0-.207.416.5.5 0 0 0 0 .008.5.5 0 0 0 .004.047.5.5 0 0 0 .008.049.5.5 0 0 0 .193.298l2.946 2.946a.5.5 0 1 0 .707-.707l-2.155-2.155 6.551.008c1.188 0 2.136-.69 2.524-1.62.387-.931.207-2.105-.67-2.983l-2.5-2.5c-.623-.622-.693-1.323-.455-1.893.237-.57.789-1.004 1.601-1.004h4.75a.5.5 0 1 0 0-1z"
                                transform="matrix(-1 0 0 1 318.58 -490.927)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                      <span>Animation Editor</span>
                    </button>
                    <button
                      type="button"
                      className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm ant-btn-compact-item"
                    >
                      <span className="ant-btn-icon">
                        <span role="img" aria-label="function" className="anticon anticon-function">
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="function"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <defs>
                              <style></style>
                            </defs>
                            <path d="M841 370c3-3.3 2.7-8.3-.6-11.3a8.24 8.24 0 00-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6a7.96 7.96 0 01-13.4-1.9l-63.5-141.3a7.9 7.9 0 00-7.3-4.7H380.7l.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415a8.07 8.07 0 007.8 9.7H284l-89 429.9a8.07 8.07 0 007.8 9.7H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 .9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6a8.02 8.02 0 007.2-11.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z"></path>
                          </svg>
                        </span>
                      </span>
                      <span>Logic Arrangement</span>
                    </button>
                    <button
                      type="button"
                      className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-sm ant-btn-compact-item ant-btn-compact-last-item"
                    >
                      <span className="ant-btn-icon">
                        <span role="img" aria-label="send" className="anticon anticon-send">
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="send"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <defs>
                              <style></style>
                            </defs>
                            <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
                          </svg>
                        </span>
                      </span>
                      <span>Model Export</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ant-space css-dev-only-do-not-override-3itlsw ant-space-horizontal ant-space-align-center"
              style="gap: 16px;"
            >
              <div className="ant-space-item"></div>
              <div className="ant-space-item">
                <button
                  type="button"
                  className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-sm"
                >
                  <span className="ant-btn-icon">
                    <span role="img" aria-label="save" className="anticon anticon-save">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="save"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path>
                      </svg>
                    </span>
                  </span>
                  <span>keep</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="side FW-SidePanelContainer">
            <ul className="FW-SidePanelContainer-side">
              <li className="active">
                <span role="img" aria-label="appstore" className="anticon anticon-appstore">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="appstore"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
                  </svg>
                </span>
              </li>
              <li title="File explorer" className="">
                <span
                  role="img"
                  className="anticon BizIcon default"
                  style="--color-primary: #1668dc; --color-disabled: rgba(255,255,255,0.25); cursor: pointer;"
                >
                  <svg
                    viewBox="2 2 17 17"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    className=""
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M158.48 493a.5.5 0 0 0-.384.197l-4.95 4.95a.5.5 0 0 0 .354.853h5a.5.5 0 0 0 .5-.5V494h5v12h-10v-6h-1v6.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-6.02z"
                        transform="translate(-149 -490)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </li>
              <li title="PerformanceAnalyzer" className="">
                <span
                  role="img"
                  className="anticon BizIcon default"
                  style="--color-primary: #1668dc; --color-disabled: rgba(255,255,255,0.25); cursor: pointer;"
                >
                  <svg
                    viewBox="2 2 17 17"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    className=""
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        transform="translate(-255.002 -92)"
                        d="M263.504 94.996c-.253 0-.505.17-.5.508L263 97h-2.5a.5.5 0 0 0-.5.5v2.5l-1.494-.002c-.676-.01-.676 1.01 0 1L260 101v2l-1.494-.002c-.676-.01-.676 1.01 0 1L260 104v2.5a.5.5 0 0 0 .5.5h2.5l.004 1.496c-.01.676 1.01.676 1 0L264 107h2l.004 1.496c-.01.676 1.01.676 1 0L267 107h2.5a.5.5 0 0 0 .5-.5V104l1.498-.002c.676.01.676-1.01 0-1L270 103v-2l1.498-.002c.676.01.676-1.01 0-1L270 100v-2.5a.5.5 0 0 0-.5-.5H267l.004-1.496c.01-.676-1.01-.676-1 0L266 97h-2l.004-1.496c.005-.338-.248-.508-.5-.508zM261 98h8v8h-8z"
                      ></path>
                      <path
                        d="M305.5 100a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm.5 1h2v2h-2z"
                        transform="translate(-297.002 -92)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div className="FW-split horizontal split">
            <div className="ca" style="width: calc(70% - 4.2px);">
              <div className="FW-component">
                <div className="header">
                  <div className="title">
                    <span
                      role="img"
                      className="anticon BizIcon default"
                      style="--color-primary: #1668dc; --color-disabled: rgba(255,255,255,0.25); cursor: pointer; margin-right: 8px;"
                    >
                      <svg
                        viewBox="2 2 17 17"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        className=""
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M475.25 53a.5.5 0 0 0-.213.047l-5.754 2.709a.5.5 0 0 0-.285.453v7.293a.5.5 0 0 0 .275.447l6.002 3.002a.5.5 0 0 0 .448 0l6.002-3.002a.5.5 0 0 0 .275-.447v-6.916a.5.5 0 0 0 0-.182v-.195a.5.5 0 0 0-.287-.453l-5.75-2.707a.5.5 0 0 0-.213-.049zm.111 1h.278l5.01 2.36-5.149 2.51-5.148-2.51zm-5.363 3.299 5.002 2.44v5.956l-5.002-2.502zM481 57.3v5.892l-5 2.5v-5.955z"
                            transform="translate(-465.503 -50.002)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <div className="main">3D Canvas</div>
                    <div id="FW-internal-slot-8j2po1gvgr2l2v" className="internal-slot">
                      <div data-name="Header" style="display: flex; justify-content: space-between;">
                        <div className="ant-space css-dev-only-do-not-override-3itlsw ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small">
                          <div className="ant-space-item">
                            <button
                              aria-describedby="rc_unique_17"
                              type="button"
                              className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm"
                            >
                              <span className="ant-btn-icon">
                                <span role="img" aria-label="desktop" className="anticon anticon-desktop">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="desktop"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"></path>
                                  </svg>
                                </span>
                              </span>
                              <span>Viewport</span>
                            </button>
                          </div>
                          <div className="ant-space-item">
                            <button
                              aria-describedby="rc_unique_19"
                              type="button"
                              className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm"
                            >
                              <span className="ant-btn-icon">
                                <span role="img" aria-label="picture" className="anticon anticon-picture">
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="picture"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path>
                                  </svg>
                                </span>
                              </span>
                              <span>background</span>
                            </button>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm"
                        >
                          <span className="ant-btn-icon">
                            <span role="img" aria-label="aim" className="anticon anticon-aim">
                              <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="aim"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <defs>
                                  <style></style>
                                </defs>
                                <path d="M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"></path>
                                <path d="M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8A118.57 118.57 0 00512 392z"></path>
                              </svg>
                            </span>
                          </span>
                          <span>enlarge</span>
                        </button>
                        <div className="ant-space-compact css-dev-only-do-not-override-3itlsw">
                          <button
                            type="button"
                            className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-primary ant-btn-color-primary ant-btn-variant-solid ant-btn-sm ant-btn-compact-item ant-btn-compact-first-item"
                          >
                            <span className="ant-btn-icon">
                              <span
                                role="img"
                                className="anticon BizIcon default"
                                style="--color-primary: #1668dc; --color-disabled: rgba(255,255,255,0.25);"
                              >
                                <svg
                                  viewBox="2 2 17 17"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  focusable="false"
                                  className=""
                                  xml:space="preserve"
                                >
                                  <g>
                                    <path
                                      d="M36 74a4.998 4.998 0 0 0-4.916 4.105c.482-.09.975-.129 1.47-.074.664.074.552 1.069-.11.994a3.997 3.997 0 0 0-1.438.102 4.995 4.995 0 0 0 4.857 4.867c.122-.473.166-.965.11-1.455a.5.5 0 1 1 .994-.115 5 5 0 0 1-.055 1.49A5 5 0 0 0 36 74zm-1.568 4.83a.5.5 0 0 1 .28.09 4.97 4.97 0 0 1 1.368 1.37c.406.559-.466 1.144-.83.556a3.997 3.997 0 0 0-1.094-1.096c-.42-.272-.225-.924.276-.92z"
                                      transform="translate(-24 -71)"
                                    ></path>
                                    <path
                                      d="M29.484 78.758a.5.5 0 0 0-.267.088 5 5 0 1 0 6.895 7 .5.5 0 1 0-.823-.569 3.997 3.997 0 0 1-4.111 1.637 3.998 3.998 0 0 1-1.404-7.238.5.5 0 0 0-.29-.918z"
                                      transform="translate(-24 -71)"
                                    ></path>
                                  </g>
                                </svg>
                              </span>
                            </span>
                            <span>Overlays</span>
                          </button>
                          <button
                            aria-describedby="rc_unique_21"
                            type="button"
                            className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm ant-btn-icon-only ant-btn-compact-item ant-btn-compact-last-item"
                          >
                            <span className="ant-btn-icon">
                              <span role="img" aria-label="down" className="anticon anticon-down">
                                <svg
                                  viewBox="64 64 896 896"
                                  focusable="false"
                                  data-icon="down"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                </svg>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="FW-component-body-8j2po1gvgr2l2v" className="body">
                  <div data-name="CanvasViewer" className="CanvasViewer viewport-auto">
                    <div
                      className="transparent-board CanvasViewer-Host"
                      style="width: 1342px; height: 472px; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; overflow: hidden;"
                    >
                      <canvas
                        data-engine="XR"
                        touch-action="none"
                        tabIndex="1"
                        width="1342"
                        height="472"
                        style="display: block; height: 100%; width: 100%; outline: none; user-select: none; touch-action: none; -webkit-tap-highlight-color: transparent;"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gutter" style="left: calc(70% - 4.2px);"></div>
            <div className="cb" style="width: calc(30% - 1.8px);">
              <div className="FW-component">
                <div className="header">
                  <div className="title">
                    <span
                      role="img"
                      aria-label="appstore"
                      className="anticon anticon-appstore"
                      style="cursor: pointer; margin-right: 8px;"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="appstore"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
                      </svg>
                    </span>
                    <div className="main">ExportPanel</div>
                    <div id="FW-internal-slot-5vt871h7algj6a" className="internal-slot"></div>
                  </div>
                </div>
                <div id="FW-component-body-5vt871h7algj6a" className="body">
                  <span className="ant-typography ant-typography-danger css-dev-only-do-not-override-3itlsw">
                    Cannot read properties of undefined (reading 'recentlyCreatedOwnerStacks')
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="leading"></div>
          <div className="statusbar">
            <div className="ant-space css-dev-only-do-not-override-3itlsw ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small">
              <div className="ant-space-item">
                <div className="ant-space css-dev-only-do-not-override-3itlsw ant-space-horizontal ant-space-align-center">
                  <div className="ant-space-item">
                    <span className="ant-typography css-dev-only-do-not-override-3itlsw">FPS:60</span>
                  </div>
                  <span className="ant-space-item-split">
                    <div
                      className="ant-divider css-dev-only-do-not-override-3itlsw ant-divider-vertical"
                      role="separator"
                    ></div>
                  </span>
                  <div className="ant-space-item">
                    <span className="ant-typography css-dev-only-do-not-override-3itlsw">DrawCalls:9</span>
                  </div>
                  <span className="ant-space-item-split">
                    <div
                      className="ant-divider css-dev-only-do-not-override-3itlsw ant-divider-vertical"
                      role="separator"
                    ></div>
                  </span>
                  <div className="ant-space-item">
                    <span className="ant-typography css-dev-only-do-not-override-3itlsw">GPU: 0.16ms/frame</span>
                  </div>
                  <span className="ant-space-item-split">
                    <div
                      className="ant-divider css-dev-only-do-not-override-3itlsw ant-divider-vertical"
                      role="separator"
                    ></div>
                  </span>
                  <div className="ant-space-item">
                    <span className="ant-typography css-dev-only-do-not-override-3itlsw">Shader: 0 compiled</span>
                  </div>
                </div>
              </div>
              <span className="ant-space-item-split">
                <div
                  className="ant-divider css-dev-only-do-not-override-3itlsw ant-divider-vertical"
                  role="separator"
                ></div>
              </span>
              <div className="ant-space-item">
                <button
                  type="button"
                  className="ant-btn css-dev-only-do-not-override-3itlsw ant-btn-text ant-btn-color-default ant-btn-variant-text ant-btn-sm"
                >
                  <span>Pause</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
