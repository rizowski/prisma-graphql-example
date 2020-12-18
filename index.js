const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const typeDefs = require('./types');
const resolvers = require('./resolvers');

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    console.log(prisma);
    return {
      prisma,
      headers: req.headers,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
