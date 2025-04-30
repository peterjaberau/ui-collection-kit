import * as hoverCard from "@ui-collection-kit/hover-card"
import { normalizeProps, useMachine, Portal } from "@ui-collection-kit/react"
import { useId } from "react"

type HoverCardProps = {
  controls: {
    openDelay: number
    closeDelay: number
  }
}

export function HoverCard(props: HoverCardProps) {
  const service = useMachine(hoverCard.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = hoverCard.connect(service, normalizeProps)

  return (
    <div>
      <a
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        {...api.getTriggerProps()}
      >
        <img alt="Twitter" src="/favicon/apple-touch-icon.png" />
      </a>

      {api.open && (
        <Portal>
          <div {...api.getPositionerProps()}>
            <div {...api.getContentProps()}>
              <div {...api.getArrowProps()}>
                <div {...api.getArrowTipProps()} />
              </div>
              <div className="card-wrapper">
                <img
                  alt="Twitter"
                  src="/favicon/apple-touch-icon.png"
                  className="avatar"
                />

                <div className="card-content">
                  <p className="header">
                    <p>UI Collection Kit</p>
                    <p> @ui-collection-kit</p>
                  </p>
                  <p>
                    <p>UI components powered by Finite State Machines.</p>
                    Created by{" "}
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @ui-collection-kit
                    </a>
                  </p>
                  <div className="stats">
                    <div>
                      <p>2</p> <p>Following</p>
                    </div>
                    <div>
                      <p>4,000</p> <p>Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  )
}
