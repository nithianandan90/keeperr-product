/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotifications = /* GraphQL */ `
  query GetNotifications($id: ID!) {
    getNotifications(id: $id) {
      id
      updateDetails
      opened
      createdAt
      usersID
      taskID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        updateDetails
        opened
        createdAt
        usersID
        taskID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        updateDetails
        opened
        createdAt
        usersID
        taskID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listNotificationsByUser = /* GraphQL */ `
  query ListNotificationsByUser(
    $usersID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationsByUser(
      usersID: $usersID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        updateDetails
        opened
        createdAt
        usersID
        taskID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listNotificationsByTask = /* GraphQL */ `
  query ListNotificationsByTask(
    $taskID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationsByTask(
      taskID: $taskID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        updateDetails
        opened
        createdAt
        usersID
        taskID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProperties = /* GraphQL */ `
  query GetProperties($id: ID!) {
    getProperties(id: $id) {
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
      active
      Tasks {
        items {
          id
          status
          startDate
          completionDate
          createdAt
          title
          subTitle
          taskType
          recurrence
          active
          propertiesID
          usersID
          Attachments {
            nextToken
            startedAt
            __typename
          }
          Notifications {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      usersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
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
        active
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        active
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const propertiesByUsersID = /* GraphQL */ `
  query PropertiesByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertiesByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        active
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      status
      startDate
      completionDate
      createdAt
      title
      subTitle
      taskType
      recurrence
      active
      propertiesID
      usersID
      Attachments {
        items {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Notifications {
        items {
          id
          updateDetails
          opened
          createdAt
          usersID
          taskID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        startDate
        completionDate
        createdAt
        title
        subTitle
        taskType
        recurrence
        active
        propertiesID
        usersID
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        status
        startDate
        completionDate
        createdAt
        title
        subTitle
        taskType
        recurrence
        active
        propertiesID
        usersID
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listTasksByProperty = /* GraphQL */ `
  query ListTasksByProperty(
    $propertiesID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasksByProperty(
      propertiesID: $propertiesID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        startDate
        completionDate
        createdAt
        title
        subTitle
        taskType
        recurrence
        active
        propertiesID
        usersID
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const tasksByUsersID = /* GraphQL */ `
  query TasksByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        startDate
        completionDate
        createdAt
        title
        subTitle
        taskType
        recurrence
        active
        propertiesID
        usersID
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      storageKey
      fileName
      createdAt
      type
      width
      height
      duration
      messageID
      chatroomID
      taskID
      propertiesID
      invoiceID
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAttachments = /* GraphQL */ `
  query SyncAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttachments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByMessageID = /* GraphQL */ `
  query AttachmentsByMessageID(
    $messageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByMessageID(
      messageID: $messageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByChatroomID = /* GraphQL */ `
  query AttachmentsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listAttachmentsByTask = /* GraphQL */ `
  query ListAttachmentsByTask(
    $taskID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachmentsByTask(
      taskID: $taskID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByPropertiesID = /* GraphQL */ `
  query AttachmentsByPropertiesID(
    $propertiesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByPropertiesID(
      propertiesID: $propertiesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const attachmentsByInvoiceID = /* GraphQL */ `
  query AttachmentsByInvoiceID(
    $invoiceID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByInvoiceID(
      invoiceID: $invoiceID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      image
      Messages {
        items {
          id
          createdAt
          text
          chatroomID
          userID
          images
          Attachments {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      users {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chatRoomPropertyId
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            createdAt
            clientID
            name
            username
            email
            telephone
            status
            firebaseToken
            userType
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userImageId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Property {
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
        active
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      LastMessage {
        id
        createdAt
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Attachments {
        items {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomPropertyId
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        Messages {
          items {
            id
            createdAt
            text
            chatroomID
            userID
            images
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Property {
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
          active
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        LastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          Attachments {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomPropertyId
        chatRoomLastMessageId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        Messages {
          items {
            id
            createdAt
            text
            chatroomID
            userID
            images
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Property {
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
          active
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        LastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          Attachments {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomPropertyId
        chatRoomLastMessageId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      text
      chatroomID
      userID
      images
      Attachments {
        items {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      clientID
      name
      username
      email
      telephone
      status
      image {
        id
        storageKey
        fileName
        createdAt
        type
        width
        height
        duration
        messageID
        chatroomID
        taskID
        propertiesID
        invoiceID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      firebaseToken
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          chatRoom {
            id
            name
            image
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chatRoomPropertyId
            chatRoomLastMessageId
            __typename
          }
          user {
            id
            createdAt
            clientID
            name
            username
            email
            telephone
            status
            firebaseToken
            userType
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userImageId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      userType
      Tasks {
        items {
          id
          status
          startDate
          completionDate
          createdAt
          title
          subTitle
          taskType
          recurrence
          active
          propertiesID
          usersID
          Attachments {
            nextToken
            startedAt
            __typename
          }
          Notifications {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Notifications {
        items {
          id
          updateDetails
          opened
          createdAt
          usersID
          taskID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Properties {
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
          active
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      Invoices {
        items {
          id
          title
          createdAt
          invoiceNo
          invoiceAmount
          active
          tasks
          usersID
          status
          Attachments {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userImageId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        clientID
        name
        username
        email
        telephone
        status
        image {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        firebaseToken
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userType
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Properties {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            invoiceAmount
            active
            tasks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        clientID
        name
        username
        email
        telephone
        status
        image {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        firebaseToken
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userType
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Properties {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            invoiceAmount
            active
            tasks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const listUsersByDate = /* GraphQL */ `
  query ListUsersByDate(
    $userType: UserType!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersByDate(
      userType: $userType
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        clientID
        name
        username
        email
        telephone
        status
        image {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        firebaseToken
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userType
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Properties {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            invoiceAmount
            active
            tasks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getInvoices = /* GraphQL */ `
  query GetInvoices($id: ID!) {
    getInvoices(id: $id) {
      id
      title
      createdAt
      invoiceNo
      invoiceAmount
      active
      tasks
      usersID
      status
      Attachments {
        items {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        invoiceNo
        invoiceAmount
        active
        tasks
        usersID
        status
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncInvoices = /* GraphQL */ `
  query SyncInvoices(
    $filter: ModelInvoicesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        createdAt
        invoiceNo
        invoiceAmount
        active
        tasks
        usersID
        status
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const invoicesByUsersID = /* GraphQL */ `
  query InvoicesByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInvoicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    invoicesByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        createdAt
        invoiceNo
        invoiceAmount
        active
        tasks
        usersID
        status
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        image
        Messages {
          items {
            id
            createdAt
            text
            chatroomID
            userID
            images
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        users {
          items {
            id
            chatRoomId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Property {
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
          active
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        LastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          Attachments {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        Attachments {
          items {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomPropertyId
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        createdAt
        clientID
        name
        username
        email
        telephone
        status
        image {
          id
          storageKey
          fileName
          createdAt
          type
          width
          height
          duration
          messageID
          chatroomID
          taskID
          propertiesID
          invoiceID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        firebaseToken
        ChatRooms {
          items {
            id
            chatRoomId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userType
        Tasks {
          items {
            id
            status
            startDate
            completionDate
            createdAt
            title
            subTitle
            taskType
            recurrence
            active
            propertiesID
            usersID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Notifications {
          items {
            id
            updateDetails
            opened
            createdAt
            usersID
            taskID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Properties {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            invoiceAmount
            active
            tasks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          name
          image
          Messages {
            nextToken
            startedAt
            __typename
          }
          users {
            nextToken
            startedAt
            __typename
          }
          Property {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          LastMessage {
            id
            createdAt
            text
            chatroomID
            userID
            images
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
          __typename
        }
        user {
          id
          createdAt
          clientID
          name
          username
          email
          telephone
          status
          image {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
            __typename
          }
          userType
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Notifications {
            nextToken
            startedAt
            __typename
          }
          Properties {
            nextToken
            startedAt
            __typename
          }
          Invoices {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserChatRooms = /* GraphQL */ `
  query SyncUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          name
          image
          Messages {
            nextToken
            startedAt
            __typename
          }
          users {
            nextToken
            startedAt
            __typename
          }
          Property {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          LastMessage {
            id
            createdAt
            text
            chatroomID
            userID
            images
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
          __typename
        }
        user {
          id
          createdAt
          clientID
          name
          username
          email
          telephone
          status
          image {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
            __typename
          }
          userType
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Notifications {
            nextToken
            startedAt
            __typename
          }
          Properties {
            nextToken
            startedAt
            __typename
          }
          Invoices {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          name
          image
          Messages {
            nextToken
            startedAt
            __typename
          }
          users {
            nextToken
            startedAt
            __typename
          }
          Property {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          LastMessage {
            id
            createdAt
            text
            chatroomID
            userID
            images
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
          __typename
        }
        user {
          id
          createdAt
          clientID
          name
          username
          email
          telephone
          status
          image {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
            __typename
          }
          userType
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Notifications {
            nextToken
            startedAt
            __typename
          }
          Properties {
            nextToken
            startedAt
            __typename
          }
          Invoices {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          name
          image
          Messages {
            nextToken
            startedAt
            __typename
          }
          users {
            nextToken
            startedAt
            __typename
          }
          Property {
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
            active
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          LastMessage {
            id
            createdAt
            text
            chatroomID
            userID
            images
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          Attachments {
            nextToken
            startedAt
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
          __typename
        }
        user {
          id
          createdAt
          clientID
          name
          username
          email
          telephone
          status
          image {
            id
            storageKey
            fileName
            createdAt
            type
            width
            height
            duration
            messageID
            chatroomID
            taskID
            propertiesID
            invoiceID
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
            __typename
          }
          userType
          Tasks {
            nextToken
            startedAt
            __typename
          }
          Notifications {
            nextToken
            startedAt
            __typename
          }
          Properties {
            nextToken
            startedAt
            __typename
          }
          Invoices {
            nextToken
            startedAt
            __typename
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
