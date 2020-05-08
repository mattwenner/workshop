import lodash from "lodash";
import { ApolloServer, gql, makeExecutableSchema } from "apollo-server";
import { Resolvers } from "./generated/types";
import * as DAL from "./data-access";

// The GraphQL schema
const commonTypeDefs = gql`
  enum Category {
    LEISURE
    GAMING
    FOOD
    EXERCISE
    OUTDOORS
  }

  type Review {
    id: ID!
    name: String!
    rating: Int!
    text: String
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    categories: [Category!]!
    reviews: [Review!]!
  }

  type Query {
    "A simple type for getting started!"
    hello: String
    products: [Product!]!
  }
`;

// A map of functions which return data for the schema.
const commonResolvers: Resolvers = {
  Review: {
    id: (root) => root.id,
    name: (root) => root.name,
    rating: (root) => root.rating,
    text: (root) => root.text ?? null,
  },
  Product: {
    id: (root) => root.id,
    name: (root) => root.name,
    description: (root) => root.description,
    categories: (root) => root.categories,
    reviews: (root) => root.reviews,
  },
  Query: {
    hello: () => "world!",
    products: () => DAL.getProducts(),
  },
};

const schema = makeExecutableSchema({
  typeDefs: [commonTypeDefs],
  resolvers: lodash.merge(commonResolvers),
});

const server = new ApolloServer({
  schema,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
