/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
      id
      email
      secondaryEmail
      firstName
      lastName
      phoneNumber
      profilePicUrl
      profession
      organization
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
      id
      email
      secondaryEmail
      firstName
      lastName
      phoneNumber
      profilePicUrl
      profession
      organization
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
      id
      email
      secondaryEmail
      firstName
      lastName
      phoneNumber
      profilePicUrl
      profession
      organization
      userId
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createUserSubscription = /* GraphQL */ `
  mutation CreateUserSubscription(
    $input: CreateUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    createUserSubscription(input: $input, condition: $condition) {
      id
      email
      package
      synaptiQueryRemaining
      synaptiNoteRemaining
      chatGptRemaining
      claudeRemaining
      palmRemaining
      falconRemaining
      lastRenewalDate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUserSubscription = /* GraphQL */ `
  mutation UpdateUserSubscription(
    $input: UpdateUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    updateUserSubscription(input: $input, condition: $condition) {
      id
      email
      package
      synaptiQueryRemaining
      synaptiNoteRemaining
      chatGptRemaining
      claudeRemaining
      palmRemaining
      falconRemaining
      lastRenewalDate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUserSubscription = /* GraphQL */ `
  mutation DeleteUserSubscription(
    $input: DeleteUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    deleteUserSubscription(input: $input, condition: $condition) {
      id
      email
      package
      synaptiQueryRemaining
      synaptiNoteRemaining
      chatGptRemaining
      claudeRemaining
      palmRemaining
      falconRemaining
      lastRenewalDate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createAppData = /* GraphQL */ `
  mutation CreateAppData(
    $input: CreateAppDataInput!
    $condition: ModelAppDataConditionInput
  ) {
    createAppData(input: $input, condition: $condition) {
      id
      debugVersion
      prodVersion
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateAppData = /* GraphQL */ `
  mutation UpdateAppData(
    $input: UpdateAppDataInput!
    $condition: ModelAppDataConditionInput
  ) {
    updateAppData(input: $input, condition: $condition) {
      id
      debugVersion
      prodVersion
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteAppData = /* GraphQL */ `
  mutation DeleteAppData(
    $input: DeleteAppDataInput!
    $condition: ModelAppDataConditionInput
  ) {
    deleteAppData(input: $input, condition: $condition) {
      id
      debugVersion
      prodVersion
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
