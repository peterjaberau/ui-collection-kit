"use client"
import "./globals.css"
import { JsonataApp } from './app'
import { JsonataProvider } from './provider'

export default () => {
  return (
   <>
     <JsonataProvider>
       <JsonataApp />
     </JsonataProvider>
   </>
  )
}
