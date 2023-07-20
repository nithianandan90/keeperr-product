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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
          }
          Notifications {
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
      }
      usersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        usersID
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        usersID
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        usersID
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
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
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
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        usersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomPropertyId
      chatRoomLastMessageId
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomPropertyId
        chatRoomLastMessageId
      }
      nextToken
      startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomPropertyId
        chatRoomLastMessageId
      }
      nextToken
      startedAt
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
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
        }
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
          }
          nextToken
          startedAt
        }
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
          }
          Notifications {
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
        }
        nextToken
        startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Invoices {
        items {
          id
          title
          createdAt
          invoiceNo
          discount
          additionalCharges
          invoiceAmount
          active
          tasks
          userName
          userEmail
          remarks
          usersID
          status
          Attachments {
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      FirebaseTokens {
        items {
          id
          userType
          token
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userImageId
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            discount
            additionalCharges
            invoiceAmount
            active
            tasks
            userName
            userEmail
            remarks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        FirebaseTokens {
          items {
            id
            userType
            token
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
      }
      nextToken
      startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            discount
            additionalCharges
            invoiceAmount
            active
            tasks
            userName
            userEmail
            remarks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        FirebaseTokens {
          items {
            id
            userType
            token
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
      }
      nextToken
      startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            discount
            additionalCharges
            invoiceAmount
            active
            tasks
            userName
            userEmail
            remarks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        FirebaseTokens {
          items {
            id
            userType
            token
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
      }
      nextToken
      startedAt
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
      discount
      additionalCharges
      invoiceAmount
      active
      tasks
      userName
      userEmail
      remarks
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
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        discount
        additionalCharges
        invoiceAmount
        active
        tasks
        userName
        userEmail
        remarks
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
          }
          nextToken
          startedAt
        }
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
        discount
        additionalCharges
        invoiceAmount
        active
        tasks
        userName
        userEmail
        remarks
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
          }
          nextToken
          startedAt
        }
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
export const listInvoicesByDate = /* GraphQL */ `
  query ListInvoicesByDate(
    $invoiceNo: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelInvoicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoicesByDate(
      invoiceNo: $invoiceNo
      createdAt: $createdAt
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
        discount
        additionalCharges
        invoiceAmount
        active
        tasks
        userName
        userEmail
        remarks
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
          }
          nextToken
          startedAt
        }
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
        discount
        additionalCharges
        invoiceAmount
        active
        tasks
        userName
        userEmail
        remarks
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
          }
          nextToken
          startedAt
        }
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
export const getFirebaseTokens = /* GraphQL */ `
  query GetFirebaseTokens($id: ID!) {
    getFirebaseTokens(id: $id) {
      id
      userType
      token
      usersID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFirebaseTokens = /* GraphQL */ `
  query ListFirebaseTokens(
    $filter: ModelFirebaseTokensFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFirebaseTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userType
        token
        usersID
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
export const syncFirebaseTokens = /* GraphQL */ `
  query SyncFirebaseTokens(
    $filter: ModelFirebaseTokensFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFirebaseTokens(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userType
        token
        usersID
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
export const firebaseTokensByUsersID = /* GraphQL */ `
  query FirebaseTokensByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFirebaseTokensFilterInput
    $limit: Int
    $nextToken: String
  ) {
    firebaseTokensByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userType
        token
        usersID
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          usersID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomPropertyId
        chatRoomLastMessageId
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
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
          }
          nextToken
          startedAt
        }
        Invoices {
          items {
            id
            title
            createdAt
            invoiceNo
            discount
            additionalCharges
            invoiceAmount
            active
            tasks
            userName
            userEmail
            remarks
            usersID
            status
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        FirebaseTokens {
          items {
            id
            userType
            token
            usersID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userImageId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          }
          users {
            nextToken
            startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
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
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
          }
          userType
          Tasks {
            nextToken
            startedAt
          }
          Notifications {
            nextToken
            startedAt
          }
          Properties {
            nextToken
            startedAt
          }
          Invoices {
            nextToken
            startedAt
          }
          FirebaseTokens {
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
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
          }
          users {
            nextToken
            startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
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
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
          }
          userType
          Tasks {
            nextToken
            startedAt
          }
          Notifications {
            nextToken
            startedAt
          }
          Properties {
            nextToken
            startedAt
          }
          Invoices {
            nextToken
            startedAt
          }
          FirebaseTokens {
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
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
          }
          users {
            nextToken
            startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
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
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
          }
          userType
          Tasks {
            nextToken
            startedAt
          }
          Notifications {
            nextToken
            startedAt
          }
          Properties {
            nextToken
            startedAt
          }
          Invoices {
            nextToken
            startedAt
          }
          FirebaseTokens {
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
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
          }
          users {
            nextToken
            startedAt
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
          }
          Attachments {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomPropertyId
          chatRoomLastMessageId
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
          }
          firebaseToken
          ChatRooms {
            nextToken
            startedAt
          }
          userType
          Tasks {
            nextToken
            startedAt
          }
          Notifications {
            nextToken
            startedAt
          }
          Properties {
            nextToken
            startedAt
          }
          Invoices {
            nextToken
            startedAt
          }
          FirebaseTokens {
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userImageId
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
