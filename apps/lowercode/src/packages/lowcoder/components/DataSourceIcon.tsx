import { getBottomResIcon } from "#lowcoder/util/bottomResUtils";
import { HttpMethod } from "#lowcoder/api/api";
import { useSelector } from "react-redux";
import { getDataSource } from "#lowcoder/redux/selectors/datasourceSelectors";
import { BottomResType } from "#lowcoder/util/bottomResUtils";

export default function DataSourceIcon(props: {
  dataSourceType: BottomResType;
  size?: "middle" | "large";
  httpMethod?: HttpMethod;
}) {
  const { dataSourceType, size, httpMethod } = props;
  const datasourceList = useSelector(getDataSource);
  const datasource = datasourceList.find((i) => i.datasource.type === dataSourceType);
  return getBottomResIcon(
    dataSourceType,
    size,
    datasource?.datasource.pluginDefinition?.icon,
    httpMethod
  );
}
