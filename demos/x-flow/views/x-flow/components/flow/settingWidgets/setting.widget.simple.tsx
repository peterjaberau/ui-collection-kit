import { Input } from 'antd';

export const SettingWidgetSimple = ({ value, onChange, ...rest }: any) => {
  console.log('Parameters', { value, onChange, ...rest });
  return <Input value={value?.inputVal} onChange={(e) => onChange({ inputVal: e.target.value })} />;
};
