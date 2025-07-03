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

export interface GenericMiscProps extends GenericLayoutProps {

}

export interface GenericThreePartsProps {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
}

export interface LayoutThreePartsProps
  extends GenericProps, GenericCssProps, GenericThreePartsProps {}

