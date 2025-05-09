import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { TimeFormat } from '@twenty-modules/localization/constants/TimeFormat';
import { createContext } from 'react';

export type UserContextType = {
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
  timeZone: string;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);
