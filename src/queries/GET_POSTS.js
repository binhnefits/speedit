import { gql } from '@apollo/client';

const GET_POSTS = gql`
  query {
    getPosts(subreddit: "all", sortBy: HOT) {
      title
      url
    }
  }
`;

export default GET_POSTS;
