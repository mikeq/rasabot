import {
  GraphQLString
} from 'graphql';

const hello = {
  type: GraphQLString,
  description: 'The hello world of GraphQL',
  resolve: () => 'world!!!'
};

const random = {
  type: GraphQLString,
  description: 'Something Random',
  resolve: () => 'a random thing'
};

export default {
  hello,
  random
};
