import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { SimpleContainerComp } from "../containerBase/simpleContainerComp";

const children: any = {
  view: SimpleContainerComp,
  // FIXME: keep extensible
};

export const ContainerBodyChildComp: any = new MultiCompBuilder(children, (props: any, dispatch) => {
  return {
    ...props,
    dispatch: dispatch,
  };
})
  // TODO
  .setPropertyViewFn(() => <></>)
  .build();
