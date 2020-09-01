import React from 'react';

import { Layout } from 'antd';
import { useQuery } from '@apollo/client';

import GET_POSTS from '../queries/GET_POSTS';
import PostGroup from '../components/PostGroup';

const { Header, Content } = Layout;

const Home = () => {
  const { loading, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Layout>
        <Header></Header>
        <Content>
          <PostGroup posts={data.getPosts}></PostGroup>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
