import classnames from 'classnames';
import './index.css';

export default ({ schema }: any) => {
  return (
    <div className={classnames('fr-void-title', { [schema?.className]: !!schema?.className })}>{schema.title}</div>
  );
};
