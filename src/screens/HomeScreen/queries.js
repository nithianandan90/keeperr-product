export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        streetAddress
        postcode
        city
        state
        headerPic
        type
        physicalAccess
        status
        usersID

        Tasks {
          nextToken
          startedAt
          items {
            active
            id
            status
          }
        }
        Attachments {
          nextToken
          startedAt
          items {
            storageKey
            fileName
          }
        }
        Tenants {
          nextToken
          startedAt
          items {
            id
            propertiesID
            userID
            active
            _version
            _deleted
          }
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
