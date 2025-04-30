import { Card, Space, Tag, Typography } from 'antd';

export const NodeWidgetClassifier = ({ data }: any) => {
  const { categories, rules, defaultCategory } = data;
  return (
    <Card size="small" className="p-3">
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            分类
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            <Space wrap>
              {categories.map((cat: any) => (
                <Tag key={cat} color={cat === defaultCategory ? 'purple' : 'default'} style={{ margin: 0 }}>
                  {cat}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Rules
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            <Typography.Text style={{ fontSize: 12 }}>{rules}</Typography.Text>
          </div>
        </div>
      </Space>
    </Card>
  );
};
