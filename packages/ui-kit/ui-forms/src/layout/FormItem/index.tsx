import { observer } from '@formily/react';

import { useFormilyFieldProps } from '../../hooks';
import { FormItemBase, type FormItemBaseProps } from './FormItemBase';
import { UseFormilyFieldPropsFormItemConfig } from '../../utils';

export interface FormItemProps extends FormItemBaseProps {
  /** 不从FormLayout获取信息 */
  noFormLayout?: boolean,
  /** 手动指定不从外层Field获取信息 */
  noField?: boolean,
}

export const FormItem = observer((props: FormItemProps) => {
  const formilyFieldProps = useFormilyFieldProps(props, UseFormilyFieldPropsFormItemConfig);
  return (
    <FormItemBase
      {...formilyFieldProps}
    />
  );
}, { displayName: 'iimm.Mui.Formily.FormItem' });
