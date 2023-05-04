/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContacto = /* GraphQL */ `
  query GetContacto($id: ID!) {
    getContacto(id: $id) {
      id
      name
      email
      asunto
      description
      createdAt
      updatedAt
    }
  }
`;
export const listContactos = /* GraphQL */ `
  query ListContactos(
    $filter: ModelContactoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        asunto
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
