/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserData = /* GraphQL */ `
  query GetUserData($id: ID!) {
    getUserData(id: $id) {
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
export const listUserData = /* GraphQL */ `
  query ListUserData(
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserSubscription = /* GraphQL */ `
  query GetUserSubscription($id: ID!) {
    getUserSubscription(id: $id) {
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
export const listUserSubscriptions = /* GraphQL */ `
  query ListUserSubscriptions(
    $filter: ModelUserSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAppData = /* GraphQL */ `
  query GetAppData($id: ID!) {
    getAppData(id: $id) {
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
export const listAppData = /* GraphQL */ `
  query ListAppData(
    $filter: ModelAppDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        debugVersion
        prodVersion
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
