import React, { useState } from 'react';
import { Button, Card, Checkbox, List, Space, Typography } from 'antd';

const scoops = { total: 6, items: ['3 Vanilla'] };
const toppings = { total: 4.5, items: ['M&MA', 'Hot fudge', 'Gummy bear'] };

const OrderSummaryPage = () => {
  const [canSubmit, setCanSubmit] = useState(false);

  const handleChange = () => {
    setCanSubmit(!canSubmit);
  };

  return (
    <Card title="Order Summary" bordered={false}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <List
          header={<h2>Scoops: ${scoops.total.toFixed(2)}</h2>}
          bordered
          dataSource={scoops.items}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text>{item}</Typography.Text>
            </List.Item>
          )}
        />
        <List
          header={<h2>Toppings: ${toppings.total.toFixed(2)}</h2>}
          bordered
          dataSource={toppings.items}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text>{item}</Typography.Text>
            </List.Item>
          )}
        />
        <Typography.Title>
          Total ${(scoops.total + toppings.total).toFixed(2)}
        </Typography.Title>
        <Checkbox onChange={handleChange}>
          I agree to&nbsp;
          <Typography.Link href="">Terms and Conditions</Typography.Link>
        </Checkbox>
        <Button disabled={!canSubmit} type="primary">
          Confirm order
        </Button>
      </Space>
    </Card>
  );
};

export default OrderSummaryPage;
