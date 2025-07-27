import React from "react"
import { Card } from "@chakra-ui/react"

export const PCSimulator: React.FC<any> = (props) => {
  return (
    <Card.Root css={{ width: "800px", height: "600px" }}>
      <Card.Header css={{ borderBottom: "1px solid", borderBottomColor: "border.emphasized" }}>
        <Card.Title>Simulator</Card.Title>
      </Card.Header>
      <Card.Body
        css={{
          width: "100%",
          height: "100%",
          minHeight: "100px",
          overflow: "hidden",
          position: "relative",
          boxSizing: "border-box",
          userSelect: "none",
        }}
      >
        {props.children}
      </Card.Body>
    </Card.Root>
  )
}
