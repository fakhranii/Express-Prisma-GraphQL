import express, {Express} from 'express';
import 'dotenv/config';
import {ApolloServer} from "@apollo/server";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers} from "./graphql/resolvers";
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';

const app: Express = express();

// graphQl
let apolloServer: ApolloServer;
async function startServer(): Promise<void>{
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })
  await apolloServer.start();
  app.use(
      '/graphql',
      cors(),
      json(),
      expressMiddleware(apolloServer)
  );
}

startServer().catch((error) => {
  console.error('Error starting Apollo Server:', error);
});


// express server
app.listen( process.env.APP_PORT, () => {
  console.log('the server is listening on port ' +  process.env.APP_PORT);
})
