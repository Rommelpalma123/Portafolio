/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContacto = /* GraphQL */ `
  mutation CreateContacto(
    $input: CreateContactoInput!
    $condition: ModelContactoConditionInput
  ) {
    createContacto(input: $input, condition: $condition) {
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
export const updateContacto = /* GraphQL */ `
  mutation UpdateContacto(
    $input: UpdateContactoInput!
    $condition: ModelContactoConditionInput
  ) {
    updateContacto(input: $input, condition: $condition) {
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
export const deleteContacto = /* GraphQL */ `
  mutation DeleteContacto(
    $input: DeleteContactoInput!
    $condition: ModelContactoConditionInput
  ) {
    deleteContacto(input: $input, condition: $condition) {
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
