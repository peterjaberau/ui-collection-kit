"use client"
import React from "react"
import { Container } from "@chakra-ui/react"
import { DevLayer } from "#components/app/DevLayer"
import { WrappedPropsComponent } from "./editor/WrappedPropsComponent"
import { WrappedComponent } from "./editor/WrappedComponent"
import { LayoutWrappedWidget } from "./layout/LayoutWrappedWidget"
import { FixedLayoutEditorWidgetOnion } from "./layout/FixedLayoutEditorWidgetOnion"
import { WidgetNameLayer } from "./layout/WidgetNameLayer"
import { ResizableComponent } from "./layout/ResizableComponent"

export const PropsComponentRenderer: any = ({ children, propWrappedComponent, ...rest }: any) => {

  return (
    <DevLayer tagName="PropsComponentRenderer" variant='surface'>
      <WrappedPropsComponent {...rest}>
        <WrappedComponent propWrappedComponent={propWrappedComponent}>
         <LayoutWrappedWidget>
           <FixedLayoutEditorWidgetOnion>
             <WidgetNameLayer>
               <ResizableComponent>
                 {children}
               </ResizableComponent>
             </WidgetNameLayer>
           </FixedLayoutEditorWidgetOnion>
         </LayoutWrappedWidget>
        </WrappedComponent>
      </WrappedPropsComponent>
    </DevLayer>
  )
}
