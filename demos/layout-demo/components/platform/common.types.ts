import { ReactNode } from "react"

export interface GenericLayoutProps {
  children: ReactNode | any;
  css?: any;
  [key: string]: any;
}


export interface AppLayoutProps {
  children: ReactNode | any;
  css?: any;
  [key: string]: any;
}


export interface PageLayoutProps {
  children: ReactNode | any;
  css?: any;
  [key: string]: any;
}
