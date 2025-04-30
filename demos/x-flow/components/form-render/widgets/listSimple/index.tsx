import { Button, Space, Popconfirm, Divider } from 'antd';
import { PlusOutlined, CloseOutlined, ArrowUpOutlined, ArrowDownOutlined, CopyOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import FButton from '../components/FButton';

import './index.css';

const getHasBackground = (fields: any[], hasBackground: boolean) => {
  let result = hasBackground;
  if (fields.length === 0) {
    result = false;
  }
  return result;
};

const SimpleList = (props: any) => {
  const {
    form,
    schema: _schema,
    fields,
    rootPath,
    renderCore,
    hasBackground,
    operateBtnType,
    addBtnProps,
    delConfirmProps,
    copyBtnProps,
    deleteBtnProps,
    moveUpBtnProps,
    moveDownBtnProps,

    hideDelete,
    hideCopy,
    hideMove,
    hideAdd,

    addItem,
    copyItem,
    moveItem,
    removeItem,
    temporary,
  } = props;

  const schema = { ..._schema, items: { ..._schema.items } };

  if (!schema.items.displayType) {
    schema.items.displayType = 'inline';
    schema.items.inlineMode = true;
  }

  const handleCopy = (name: number) => {
    const value = form.getFieldValue(rootPath.concat(name));
    copyItem(value, name);
  };

  const isColumm = temporary.displayType === 'column';

  return (
    <div
      className={classnames('fr-list-simple', {
        'fr-list-simple-background': getHasBackground(fields, hasBackground),
        'fr-list-simple-column': isColumm,
      })}
    >
      {fields.map(({ key, name }: any) => {
        const length = fields.length;
        return (
          <div key={key} className="fr-list-item">
            {renderCore({ schema, parentPath: [name], rootPath: [...rootPath, name] })}
            <Space
              className={classnames('fr-list-item-operate')}
              split={operateBtnType !== 'icon' && <Divider type="vertical" />}
            >
              {!hideMove && (
                <>
                  <FButton
                    disabled={name === 0}
                    onClick={() => moveItem(name, name - 1)}
                    icon={<ArrowUpOutlined />}
                    {...moveUpBtnProps}
                  />
                  <FButton
                    disabled={name === length - 1}
                    onClick={() => moveItem(name, name + 1)}
                    icon={<ArrowDownOutlined />}
                    children="move down"
                    {...moveDownBtnProps}
                  />
                </>
              )}
              {!hideDelete && (
                <Popconfirm onConfirm={() => removeItem(name)} {...delConfirmProps}>
                  <FButton icon={<CloseOutlined />} children="delete" btnType={operateBtnType} {...deleteBtnProps} />
                </Popconfirm>
              )}
              {!hideCopy && (
                <FButton onClick={() => handleCopy(name)} icon={<CopyOutlined />} children="copy" {...copyBtnProps} />
              )}
            </Space>
          </div>
        );
      })}
      {(!schema.max || fields.length < schema.max) && !hideAdd && (
        <Button
          className="add-btn"
          icon={<PlusOutlined />}
          onClick={() => addItem()}
          block={fields.length > 0 ? true : false}
          {...addBtnProps}
        />
      )}
    </div>
  );
};

export default SimpleList;
