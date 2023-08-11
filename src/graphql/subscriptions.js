/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserData = /* GraphQL */ `
  subscription OnCreateUserData(
    $filter: ModelSubscriptionUserDataFilterInput
    $owner: String
  ) {
    onCreateUserData(filter: $filter, owner: $owner) {
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
export const onUpdateUserData = /* GraphQL */ `
  subscription OnUpdateUserData(
    $filter: ModelSubscriptionUserDataFilterInput
    $owner: String
  ) {
    onUpdateUserData(filter: $filter, owner: $owner) {
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
export const onDeleteUserData = /* GraphQL */ `
  subscription OnDeleteUserData(
    $filter: ModelSubscriptionUserDataFilterInput
    $owner: String
  ) {
    onDeleteUserData(filter: $filter, owner: $owner) {
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
export const onCreateUserSubscription = /* GraphQL */ `
  subscription OnCreateUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onCreateUserSubscription(filter: $filter, owner: $owner) {
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
export const onUpdateUserSubscription = /* GraphQL */ `
  subscription OnUpdateUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onUpdateUserSubscription(filter: $filter, owner: $owner) {
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
export const onDeleteUserSubscription = /* GraphQL */ `
  subscription OnDeleteUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onDeleteUserSubscription(filter: $filter, owner: $owner) {
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
export const onCreateAppData = /* GraphQL */ `
  subscription OnCreateAppData(
    $filter: ModelSubscriptionAppDataFilterInput
    $owner: String
  ) {
    onCreateAppData(filter: $filter, owner: $owner) {
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
export const onUpdateAppData = /* GraphQL */ `
  subscription OnUpdateAppData(
    $filter: ModelSubscriptionAppDataFilterInput
    $owner: String
  ) {
    onUpdateAppData(filter: $filter, owner: $owner) {
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
export const onDeleteAppData = /* GraphQL */ `
  subscription OnDeleteAppData(
    $filter: ModelSubscriptionAppDataFilterInput
    $owner: String
  ) {
    onDeleteAppData(filter: $filter, owner: $owner) {
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
