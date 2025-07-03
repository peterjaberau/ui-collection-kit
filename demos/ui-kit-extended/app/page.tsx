"use client"
import AppLayout from "#components/app-layout"
import { useEffect, useState } from "react"
import { Container, Stack, HStack, Box, Flex, Badge } from "@chakra-ui/react"


export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <AppLayout
        header={{
          start: (
            <>
              <Badge variant='solid'>header</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>header</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>header</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        footer={{
          start: (
            <>
              <Badge variant='solid'>footer</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>footer</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>footer</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        leftBar={{
          start: (
            <>
              <Badge variant='solid'>LB</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>LB</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>LB</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        left={{
          start: (
            <>
              <Badge variant='solid'>Left</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>Left</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>Left</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        main={
          <div>
            {/*<NavigationBarTop />*/}
          </div>
        }
        rightBar={{
          start: (
            <>
              <Badge variant='solid'>RB</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>RB</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>RB</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
        right={{
          start: (
            <>
              <Badge variant='solid'>Right</Badge>
              <Badge variant='outline'>start</Badge>
            </>
          ),
          center: (
            <>
              <Badge variant='solid'>Right</Badge>
              <Badge variant='outline'>center</Badge>
            </>
          ),
          end: (
            <>
              <Badge variant='solid'>Right</Badge>
              <Badge variant='outline'>end</Badge>
            </>
          ),
        }}
      />
    </>

  )
}

/*

{
        isReady && (
          <For each={panels}>
            {(item: any, index: number) => (
              <EdgePanel id={item.id} key={item.id} />
            )}
          </For>
        )
      }

 */
