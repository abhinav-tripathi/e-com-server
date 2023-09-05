import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import './db.js';
import apolloServer from './apolloServerConfig.js';

const app = express();
app.use(cors(), express.json());
app.use('/graphql', apolloMiddleware(apolloServer));

app.listen({ port: process.env.PORT }, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${process.env.PORT}/graphql`)
});
