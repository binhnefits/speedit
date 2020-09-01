import React from 'react';

import { Row, Col } from 'antd';

import Post from './Post';

const PostGroup = (props) => {
  const { posts } = props;

  return (
    <Row justify='center'>
      <Col lg={12}>
        {posts.map((p) => {
          return <Post title={p.title}></Post>;
        })}
      </Col>
    </Row>
  );
};

export default PostGroup;
