import { ApolloServer } from '@apollo/server';
import { readFile } from 'node:fs/promises';
import { resolvers } from './resolvers.js';

const typeDefs = await readFile('./schema.graphql', 'utf8');
const apolloServer = new ApolloServer({ typeDefs, resolvers });

await apolloServer.start();

export default apolloServer;