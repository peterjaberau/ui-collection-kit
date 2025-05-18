'use client';
import { Box, Badge } from '@chakra-ui/react'
import AppLayout from '#platform/app-layout'

export default function Page() {
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
        main={<div>root.main</div>}
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
  );
}
