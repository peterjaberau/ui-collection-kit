'use client'

import { Circle, Icon, Stack, StepsItemContext, Text } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'

export const OnboardingTask = (props: React.PropsWithChildren) => {
  return (
    <StepsItemContext>
      {(step) => (
        <Stack
          direction={{ base: 'row', md: 'column' }}
          align={{ base: 'center', md: 'flex-start' }}
          gap="3"
          minH={{ md: '32' }}
          opacity={step.completed ? 0.5 : 1}
          borderWidth="1px"
          rounded="l2"
          p="4"
          width="full"
        >
          <Circle
            size="8"
            layerStyle={step.current ? 'fill.solid' : 'outline.solid'}
            borderStyle={step.incomplete ? 'dashed' : undefined}
          >
            {step.completed ? (
              <Icon>
                <LuCheck />
              </Icon>
            ) : (
              step.index + 1
            )}
          </Circle>
          <Text
            color={step.completed ? 'fg.muted' : undefined}
            textDecoration={step.completed ? 'line-through' : undefined}
            fontWeight={step.current ? 'medium' : undefined}
          >
            {props.children}
          </Text>
        </Stack>
      )}
    </StepsItemContext>
  )
}
