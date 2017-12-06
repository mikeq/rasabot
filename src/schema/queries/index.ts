import { GraphQLObjectType, GraphQLString } from 'graphql';
import randoms from '../types/random';


export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...randoms
  }
});
