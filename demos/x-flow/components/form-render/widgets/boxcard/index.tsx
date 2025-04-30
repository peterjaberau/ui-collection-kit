import { Card } from 'antd';
import BoxPanel from '../components/PanelView';

import './index.css';

const BoxCard = ({ children, title, description }: any) => {
  if (!title) {
    return <BoxPanel>{children}</BoxPanel>;
  }
  return (
    <Card
      className="fr-obj-card"
      title={
        <>
          {title}
          {description && <span className="fr-header-desc">{description}</span>}
        </>
      }
      // hoverable={true}
    >
      {children}
    </Card>
  );
};

export default BoxCard;
