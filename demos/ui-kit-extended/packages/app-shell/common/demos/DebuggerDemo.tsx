import { useChakraContext, use } from "@chakra-ui/react"
import { chakra, Button, Wrap } from "@chakra-ui/react"
import * as Chakra from "@chakra-ui/react"
import * as Ark from "@ark-ui/react"
import chakraData from '../../../../registry/.mock/chakra-ui'

function printChakraUi() {
  const allChakra = Chakra as any

  const getChakra = {
    chakraKeys: Object.keys(allChakra),
    Chakra: allChakra,
  }

  let listObjects: any = []
  let listObjectsByType: any = {
    objects: {},
    symbols: {},
    others: {}
  }
  getChakra.chakraKeys.forEach((key) => {
    let val: any = null
    let val1: any = {}

    if (allChakra[key]?.["$$typeof"]) {
      val = {
        type: 'symbol',
        keys: Object.keys(allChakra[key])
      }
      val1 = Object.keys(allChakra[key])
      listObjectsByType.symbols[key] = val1



    } else {
      if (typeof allChakra[key] === 'object') {
        val = {
          type: 'object',
          parts: Object.keys(allChakra[key])
        }
        val1 = Object.keys(allChakra[key])
        listObjectsByType.objects[key] = val1


      } else {
        val = {
          type: typeof allChakra[key]
        }
        val1 = {
          type: typeof allChakra[key],
          keys: Object.keys(allChakra[key])
        }
        listObjectsByType.others[key] = val1
      }
    }

    listObjects.push({
      [key]: val,
    })


  })

  return {
    listObjects: listObjects,
    listObjectsByType: listObjectsByType,
    ...getChakra,
  }
}

function printChakraUiByType() {

  const chakraUi: any = printChakraUi();
  console.log(chakraUi)

  return {
    symbols: chakraUi.listObjects.filter((item) => item.type === "symbol"),
    objects: chakraUi.listObjects.filter((item) => item.type !== "symbol")
  }
}

function printChakraContextFunctions(context, item) {
  return context.isSlotRecipe(item.toLowerCase())
}


export const DebuggerDemo = () => {
  const ctxChakra = useChakraContext()


  const handleDebugger = (scope) => {
    let output: any = null

    switch (scope) {
      case "context":
        output = ctxChakra
        break
      case "chakra":
        output = printChakraUi()
        break
      case "chakra-bytype":
        output = printChakraUiByType()
        break

      case "chakra-isSlotRecipe":
        output = printChakraContextFunctions(ctxChakra,'Accordion')
        break

      case "chakra-components-list":
        output = Object.keys(chakraData.objects)
        break
      case "ark":
        output = Ark
        break

      default:
        output = null
    }

    console.log(`---scope: ${scope} -----: `, output)
  }

  return (
    <Wrap gap={2}>
      <Button size="2xs" onClick={() => handleDebugger("context")}>
        Context
      </Button>
      <Button size="2xs" onClick={() => handleDebugger("chakra")}>
        Chakra UI
      </Button>

      <Button size="2xs" onClick={() => handleDebugger("chakra-bytype")}>
        Chakra by Types
      </Button>

      <Button size="2xs" onClick={() => handleDebugger("chakra-components-list")}>
        Components List
      </Button>

      <Button size="2xs" onClick={() => handleDebugger("chakra-isSlotRecipe")}>
        isSlotRecipe
      </Button>

      <Button size="2xs" onClick={() => handleDebugger("ark")}>
        Ark UI
      </Button>
    </Wrap>
  )
}
