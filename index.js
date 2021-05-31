const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    nome: String!
    idade: Int!
    email: String!
    id: ID!
  }
  type Query {
    users: [User!]!
    getUserByEmail(email: String!): User!
  }
`;

const users = [
  {
    nome: "Ivo Gabriel",
    id: Math.ceil(Math.random() * 1000),
    idade: 20,
    email: "ivognb@hotmail.com",
  },
];

const resolvers = {
  Query: {
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at 🌟 ${url} 🌟`);
});
