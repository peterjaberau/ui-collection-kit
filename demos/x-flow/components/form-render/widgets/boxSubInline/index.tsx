import { Form } from 'antd';
import classnames from 'classnames';
import './index.css';

const BoxSubInline = (props: any) => {
  const {
    children,
    title,
    hasBackground = true,
    description,
    tooltip,
    fieldCol,
    labelCol,
    labelWidth,
    displayType,
    ...rest
  } = props;

  let _tooltip: any = null;
  let _labelCol: any = { span: 3 };
  let _fieldCol = { flex: 1 };

  if (description) {
    _tooltip = { title: description };
  }
  if (tooltip) {
    _tooltip = tooltip;
  }

  if (labelWidth) {
    _labelCol = { flex: labelWidth + 'px' };
  }

  if (labelCol) {
    _labelCol = labelCol;
  }

  if (fieldCol) {
    _fieldCol = fieldCol;
  }

  return (
    <Form.Item
      {...rest}
      className={classnames('fr-obj-subinline', {
        'fr-obj-subinline-label-hidden': !title,
        'fr-obj-subinline-background': hasBackground,
      })}
      label={title || 'notitle'}
      labelCol={_labelCol}
      wrapperCol={_fieldCol}
      tooltip={_tooltip}
    >
      {children}
    </Form.Item>
  );
};

export default BoxSubInline;
