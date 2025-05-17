import { appShellConstants } from './common.constants';
import { ReactNode } from 'react';
import { AppBarInner } from '#platform/common/app.bar.inner';

interface AppLeftBarProps {
  start?: ReactNode | any;
  center?: ReactNode | any;
  end?: ReactNode | any;
  css?: any;
  [key: string]: any;
}

export const AppLeftBar = (props: AppLeftBarProps) => {
  return (
    <AppBarInner
      width={appShellConstants.appLeftBar.width}
      start={props.start}
      center={props.center}
      end={props.end}
    />
  );
};
