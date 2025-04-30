import * as avatar from "@ui-collection-kit/avatar"
import { normalizeProps, useMachine } from "@ui-collection-kit/react"
import { useId } from "react"

const defaultProps = {
  name: "Segun Adebayo",
  src: "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/300?cb=20210223094656",
}

type AvatarProps = {
  controls: {
    src?: string
    name?: string
  }
}

export function Avatar(props:AvatarProps) {
  // const { src, name } = props.controls

  const service = useMachine(avatar.machine, {
    id: useId(),
    ...props.controls,
  })

  const api = avatar.connect(service, normalizeProps)

  const initial = name
    .split(" ")
    .map((s) => s[0])
    .join("")

  return (
    <>
      <main className="avatar">
        <div {...api.getRootProps()}>
          <div {...api.getFallbackProps()}>
            <div>{initial}</div>
          </div>
          <img
            alt={defaultProps.name}
            referrerPolicy="no-referrer"
            src={defaultProps.src}
            {...api.getImageProps()}
          />
        </div>
      </main>
    </>
  )
}
