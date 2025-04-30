import classnames from 'classnames';
import './index.css';

const PanelView = ({ children, bordered }: any) => {
  return <div className={classnames('fr-panel', { 'fr-panel-bordered': bordered })}>{children}</div>;
};

export default PanelView;
