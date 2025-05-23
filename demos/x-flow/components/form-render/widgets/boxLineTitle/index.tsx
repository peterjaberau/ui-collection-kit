import PanelView from '../components/PanelView';
import './index.css';

const FLineTitle = ({ children, title, description }: any) => {
  if (!title) {
    return <PanelView>{children}</PanelView>;
  }

  return (
    <div className="fr-obj-line-title">
      <div className="fr-obj-header">
        <span className="fr-header-title">{title}</span>
        {description && <span className="fr-header-desc">{description}</span>}
      </div>
      <div className="fr-obj-content">{children}</div>
    </div>
  );
};

export default FLineTitle;
