const { ApolloServer, gql } = require('apollo-server');
const Reddit = require('reddit');
const axios = require('axios');

const reddit = new Reddit({
  username: 'speedit-app',
  password: 'nfbc7yqc',
  appId: '5pA-66pvzwy1YA',
  appSecret: 'ifOPiqyIo9-BkH1cxH6mVGtykNM',
});

const typeDefs = gql`
  enum SortType {
    BEST
    HOT
    NEW
    RANDOM
    RISING
    TOP
  }

  type Post {
    id: String!
    subreddit: String!
    subreddit_name_prefixed: String!
    title: String!
    ups: Int!
    total_awards_received: Int!
    spoiler: Boolean!
    num_comments: Int!
    url: String!
    is_video: Boolean!
    selftext: String!
    selftext_html: String!
    gilded: Int!
    stickied: Boolean!
    is_self: Boolean!
    comments(depth: Int, limit: Int): [Comment!]!
  }

  type Comment {
    id: String!
    ups: Int!
    body: String!
    total_awards_received: Int!
    gilded: Int!
  }

  type Query {
    getPosts(subreddit: String!, sortBy: SortType!): [Post!]!
  }
`;

const resolvers = {
  Query: {
    getPosts: async (parent, args) => {
      const res = await reddit.get(`/r/${args.subreddit}/${args.sortBy}`);
      const posts = res.data.children.map((p) => ({
        ...p.data,
      }));
      return posts;
    },
  },
  Post: {
    comments: async (parent, args) => {
      const res = await reddit.get(
        `/r/${parent.subreddit}/comments/${parent.id}`,
        { ...args }
      );
      const comments = res[1].data.children.reduce(
        (acc, cur) => (cur.kind !== 'more' ? acc.concat(cur.data) : acc),
        []
      );
      return comments;
    },
    url_content_type: async (parent) => {
      const res = await axios.get(parent.url);
      console.log(res);
    },
  },
  SortType: {
    BEST: 'best',
    HOT: 'hot',
    NEW: 'new',
    RANDOM: 'random',
    RISING: 'rising',
    TOP: 'top',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
