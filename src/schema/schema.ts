import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import Queries from './queries';

const schema: GraphQLSchema = new GraphQLSchema({
  query: Queries
});

export default schema;
