'use client'
import React, { RefObject, useRef } from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "#components/app/DevLayer"
import { v4 as uuid } from "uuid";

export const LAYOUT_WRAPPER_ID: any = uuid();

export const AnalyticsWrapper: any = ({ children, ...rest }: any) => {
  // const wrapperElement = document.getElementById(LAYOUT_WRAPPER_ID);

  return (
    <DevLayer tagName={`AnalyticsWrapper ${LAYOUT_WRAPPER_ID}`}>
      <Container id={LAYOUT_WRAPPER_ID} p={0} h={"full"} {...rest}>
        {children}
      </Container>
    </DevLayer>
  )
}
