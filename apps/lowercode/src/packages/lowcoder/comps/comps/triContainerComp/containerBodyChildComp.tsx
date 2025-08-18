import { MultiCompBuilder } from "#lowcoder/comps/generators";
import { SimpleContainerComp } from "../containerBase/simpleContainerComp";

const children = {
  view: SimpleContainerComp,
  // FIXME: keep extensible
};

export const ContainerBodyChildComp = new MultiCompBuilder(children, (props, dispatch) => {
  return {
    ...props,
    dispatch: dispatch,
  };
})
  // TODO
  .setPropertyViewFn(() => <></>)
  .build();
