import { JsonataProvider as Provider } from './actors/jsonata.provider'

export const JsonataProvider = ({ children }: any) => {
  return <Provider>{children}</Provider>;
};

