import { VStack } from "@chakra-ui/react"
import { ReactNode } from "react"
import { GenericLayoutProps } from './common.types'
import { appShellConstants } from "./common.constants"
import { AppBarInner } from "#platform/common/app.bar.inner"

interface AppRightBarProps {
  start?: ReactNode | any;
  center?: ReactNode | any;
  end?: ReactNode | any;
  css?: any;
  [key: string]: any;
}

export const AppRightBar = (props: AppRightBarProps) => {
  return (
    <AppBarInner
      width={appShellConstants.appRightBar.width}
      start={props.start}
      center={props.center}
      end={props.end}
    />
  );

};
