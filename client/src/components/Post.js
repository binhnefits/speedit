import React from 'react';

import { Card } from 'antd';

const Post = (props) => {
  const { title } = props;

  return (
    <div style={{ padding: '10px' }}>
      <Card title={title}>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default Post;
