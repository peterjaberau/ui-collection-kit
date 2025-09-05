import { isEmpty } from "lodash";
import { generateDataTreeModuleInputs, generateModuleInstance } from "./dataTreeUtils";

export const widgetsDataTreeFactory = ({
  moduleInputs,
  moduleInstances,
  moduleInstanceEntities,
  widgets,
  widgetsMeta,
  loadingEntities,
  layoutSystemPayload,
}) => {
  const dataTree: any = {};
  const configTree: any = {};
  const { layoutSystemType, isMobile } = layoutSystemPayload;

  if (!isEmpty(moduleInputs)) {
    const { configEntity, unEvalEntity } = generateDataTreeModuleInputs(moduleInputs);
    if (!!configEntity && !!unEvalEntity) {
      dataTree.inputs = unEvalEntity;
      configTree.inputs = configEntity;
    }
  }

  if (!isEmpty(moduleInstances)) {
    Object.values(moduleInstances).forEach((moduleInstance) => {
      const { configEntity, unEvalEntity } = generateModuleInstance(moduleInstance, moduleInstanceEntities);
      if (!!configEntity && !!unEvalEntity) {
        dataTree[moduleInstance.name] = unEvalEntity;
        configTree[moduleInstance.name] = configEntity;
      }
    });
  }

}
