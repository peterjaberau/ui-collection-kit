import { ReactNode } from "react"

export interface GenericProps {
  [key: string]: any;
}

export interface GenericCssProps {
  css?: any;
}

export interface GenericLayoutProps extends GenericProps, GenericCssProps {
  children: ReactNode | any;
}

export interface LayoutThreePartsProps extends GenericProps, GenericCssProps {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
}

export interface RootAsidePositionProps extends GenericLayoutProps {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
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
