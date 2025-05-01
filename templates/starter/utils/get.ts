import { componentsForNavigationMenu } from "../store/data"

export const getComponentApi = (name: any) => {


  return componentsForNavigationMenu.base.items
    .find((item) => item.name === name);

}

