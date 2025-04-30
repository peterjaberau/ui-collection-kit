'use client';
import { memo, useContext } from 'react';
import NodeContainer from '../../components/NodeContainer';
import { ConfigContext } from '../../models/context';

export default memo((props: any) => {
  const { onClick, type, data } = props;
  const { settingMap, widgets, iconFontUrl, globalConfig }: any = useContext(ConfigContext);
  const nodeSetting = settingMap[type] || {};
  const NodeWidget = widgets[nodeSetting?.nodeWidget] || undefined;
  const nodeDescription = nodeSetting?.description || '';
  const hideDesc = nodeSetting?.nodePanel?.hideDesc ?? globalConfig?.nodePanel?.hideDesc ?? false;
  const hideTitleTips = globalConfig?.nodeView?.hideTitleTips ?? false;

  return (
    <NodeContainer
      className="custom-node-code"
      title={data?.title || nodeSetting?.title || 'Start'}
      icon={{
        type: nodeSetting?.icon?.type || 'icon-start',
        style: { fontSize: 14, color: '#fff' },
        bgColor: nodeSetting?.icon?.bgColor || '#17B26A',
      }}
      onClick={onClick}
      hideDesc={hideDesc}
      desc={data?.desc}
      NodeWidget={NodeWidget ? <NodeWidget data={data} /> : undefined}
      iconFontUrl={iconFontUrl}
      description={nodeDescription} // Node description that does not allow users to change
      iconSvg={nodeSetting?.iconSvg}
      hideTitleTips={hideTitleTips}
      nodeSettingTitle={nodeSetting?.title || 'Start'}
    />
  );
});
