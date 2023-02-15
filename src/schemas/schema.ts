// Importamos gql de apollo-server-express
import { gql } from 'apollo-server-express';

// Definimos el schema de GraphQL utilizando gql para definir nuestros tipos
export const typeDefs = gql`
  type User {
    id: ID! # Id único del usuario
    name: String! # Nombre del usuario
    email: String! # Email del usuario
    age: Int # Edad del usuario, opcional
  }

  type Query {
    users: [User!]! # Lista de todos los usuarios, retorna un array de tipo User
    user(id: ID!): User # Retorna un usuario en particular, basado en el id proporcionado
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User! # Crea un nuevo usuario y lo retorna
    updateUser(id: ID!, name: String, email: String, age: Int): User! # Actualiza un usuario existente y lo retorna
    deleteUser(id: ID!): User! # Elimina un usuario existente y lo retorna
  }
`;

