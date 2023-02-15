// Importamos express, ApolloServer, typeDefs, resolvers, mongoose y dotenv
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schemas/schema';
import { resolvers } from './resolvers/resolvers';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Conectamos a la base de datos de MongoDB
mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Creamos una instancia de express
const app = express();

// Creamos una instancia de ApolloServer con typeDefs y resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Conectamos ApolloServer a nuestra instancia de express
server.applyMiddleware({ app });

// Escuchamos en un puerto específico para peticiones HTTP
app.listen({ port: process.env.PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  )
);
