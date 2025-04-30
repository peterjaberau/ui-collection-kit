import { Card, Space, Tag, Typography } from 'antd';

// HTTP request node
export const NodeWidgetHTTP = ({ data }: any) => {
  const { method, url, headers, body } = data;
  return (
    <Card size="small" className="p-3">
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Request
          </Typography.Text>
          <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Tag color={method === 'GET' ? 'green' : 'blue'} style={{ margin: 0 }}>
              {method}
            </Tag>
            <Typography.Text style={{ fontSize: 12 }} ellipsis={{ tooltip: true }}>
              {url}
            </Typography.Text>
          </div>
        </div>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Request Headers
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            <Typography.Text style={{ fontSize: 12 }}>{JSON.stringify(headers)}</Typography.Text>
          </div>
        </div>
        <div style={{ padding: '8px 12px', background: '#f9fafb', borderRadius: 6 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            Request Body
          </Typography.Text>
          <div style={{ marginTop: 4 }}>
            <Typography.Text style={{ fontSize: 12 }}>{JSON.stringify(body)}</Typography.Text>
          </div>
        </div>
      </Space>
    </Card>
  );
};
