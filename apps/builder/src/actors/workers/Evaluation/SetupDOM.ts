//@ts-expect-error no types.
import * as documentMock from "linkedom/worker"

export default function () {
  for (const [key, value] of Object.entries(documentMock)) {
    //@ts-expect-error no types
    self[key] = value
  }

  const dom = documentMock.parseHTML(`<!DOCTYPE html><body></body>`)

  // @ts-ignore
  self.window = dom.window
  // @ts-ignore
  self.document = dom.window.document
  // @ts-ignore
  self.window = self
}
