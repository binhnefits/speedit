import React from 'react';

import { Card } from 'antd';

const Post = (props) => {
  const { title } = props;

  console.log(title);
  return (
    <div style={{ padding: '10px' }}>
      <Card title={<div style={{ whiteSpace: 'normal' }}>{title}</div>}></Card>
    </div>
  );
};

export default Post;
