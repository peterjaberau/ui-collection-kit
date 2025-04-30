import { Card, Space, Tag, Typography } from 'antd';

export const NodeWidgetLLM = ({ data }: any) => {
  const { model, temperature, maxTokens, systemPrompt } = data;
  return (
    <Card size="small" className="p-3">
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Model
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            <Tag color="blue" style={{ margin: 0 }}>
              {model}
            </Tag>
          </div>
        </div>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Parameters
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            <Space>
              <Tag style={{ margin: 0 }}>Temperature: {temperature}</Tag>
              <Tag style={{ margin: 0 }}>Frequency Token: {maxTokens}</Tag>
            </Space>
          </div>
        </div>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            System prompt words
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            <Typography.Text style={{ fontSize: 12 }}>{systemPrompt}</Typography.Text>
          </div>
        </div>
      </Space>
    </Card>
  );
};
