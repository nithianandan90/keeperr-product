/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotifications = /* GraphQL */ `
  subscription OnCreateNotifications(
    $filter: ModelSubscriptionNotificationsFilterInput
  ) {
    onCreateNotifications(filter: $filter) {
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
export const onUpdateNotifications = /* GraphQL */ `
  subscription OnUpdateNotifications(
    $filter: ModelSubscriptionNotificationsFilterInput
  ) {
    onUpdateNotifications(filter: $filter) {
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
export const onDeleteNotifications = /* GraphQL */ `
  subscription OnDeleteNotifications(
    $filter: ModelSubscriptionNotificationsFilterInput
  ) {
    onDeleteNotifications(filter: $filter) {
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
export const onCreateProperties = /* GraphQL */ `
  subscription OnCreateProperties(
    $filter: ModelSubscriptionPropertiesFilterInput
  ) {
    onCreateProperties(filter: $filter) {
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
          ownerOnly
          propertiesID
          usersID
          TenantTasks {
            nextToken
            startedAt
          }
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
      Tenants {
        items {
          id
          propertiesID
          userID
          active
          createdAt
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
export const onUpdateProperties = /* GraphQL */ `
  subscription OnUpdateProperties(
    $filter: ModelSubscriptionPropertiesFilterInput
  ) {
    onUpdateProperties(filter: $filter) {
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
          ownerOnly
          propertiesID
          usersID
          TenantTasks {
            nextToken
            startedAt
          }
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
      Tenants {
        items {
          id
          propertiesID
          userID
          active
          createdAt
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
export const onDeleteProperties = /* GraphQL */ `
  subscription OnDeleteProperties(
    $filter: ModelSubscriptionPropertiesFilterInput
  ) {
    onDeleteProperties(filter: $filter) {
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
          ownerOnly
          propertiesID
          usersID
          TenantTasks {
            nextToken
            startedAt
          }
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
      Tenants {
        items {
          id
          propertiesID
          userID
          active
          createdAt
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
      ownerOnly
      propertiesID
      usersID
      TenantTasks {
        items {
          id
          taskID
          userID
          active
          createdAt
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
      ownerOnly
      propertiesID
      usersID
      TenantTasks {
        items {
          id
          taskID
          userID
          active
          createdAt
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
      ownerOnly
      propertiesID
      usersID
      TenantTasks {
        items {
          id
          taskID
          userID
          active
          createdAt
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
            ownerOnly
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
        Tenants {
          items {
            id
            propertiesID
            userID
            active
            createdAt
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
            ownerOnly
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
        Tenants {
          items {
            id
            propertiesID
            userID
            active
            createdAt
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
            ownerOnly
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
        Tenants {
          items {
            id
            propertiesID
            userID
            active
            createdAt
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
          ownerOnly
          propertiesID
          usersID
          TenantTasks {
            nextToken
            startedAt
          }
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
          Tenants {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
          ownerOnly
          propertiesID
          usersID
          TenantTasks {
            nextToken
            startedAt
          }
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
          Tenants {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
          ownerOnly
          propertiesID
          usersID
          TenantTasks {
            nextToken
            startedAt
          }
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
          Tenants {
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
export const onCreateInvoices = /* GraphQL */ `
  subscription OnCreateInvoices($filter: ModelSubscriptionInvoicesFilterInput) {
    onCreateInvoices(filter: $filter) {
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
export const onUpdateInvoices = /* GraphQL */ `
  subscription OnUpdateInvoices($filter: ModelSubscriptionInvoicesFilterInput) {
    onUpdateInvoices(filter: $filter) {
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
export const onDeleteInvoices = /* GraphQL */ `
  subscription OnDeleteInvoices($filter: ModelSubscriptionInvoicesFilterInput) {
    onDeleteInvoices(filter: $filter) {
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
export const onCreateFirebaseTokens = /* GraphQL */ `
  subscription OnCreateFirebaseTokens(
    $filter: ModelSubscriptionFirebaseTokensFilterInput
  ) {
    onCreateFirebaseTokens(filter: $filter) {
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
export const onUpdateFirebaseTokens = /* GraphQL */ `
  subscription OnUpdateFirebaseTokens(
    $filter: ModelSubscriptionFirebaseTokensFilterInput
  ) {
    onUpdateFirebaseTokens(filter: $filter) {
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
export const onDeleteFirebaseTokens = /* GraphQL */ `
  subscription OnDeleteFirebaseTokens(
    $filter: ModelSubscriptionFirebaseTokensFilterInput
  ) {
    onDeleteFirebaseTokens(filter: $filter) {
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
export const onCreateTenants = /* GraphQL */ `
  subscription OnCreateTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onCreateTenants(filter: $filter) {
      id
      propertiesID
      userID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTenants = /* GraphQL */ `
  subscription OnUpdateTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onUpdateTenants(filter: $filter) {
      id
      propertiesID
      userID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTenants = /* GraphQL */ `
  subscription OnDeleteTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onDeleteTenants(filter: $filter) {
      id
      propertiesID
      userID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTenantTasks = /* GraphQL */ `
  subscription OnCreateTenantTasks(
    $filter: ModelSubscriptionTenantTasksFilterInput
  ) {
    onCreateTenantTasks(filter: $filter) {
      id
      taskID
      userID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTenantTasks = /* GraphQL */ `
  subscription OnUpdateTenantTasks(
    $filter: ModelSubscriptionTenantTasksFilterInput
  ) {
    onUpdateTenantTasks(filter: $filter) {
      id
      taskID
      userID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTenantTasks = /* GraphQL */ `
  subscription OnDeleteTenantTasks(
    $filter: ModelSubscriptionTenantTasksFilterInput
  ) {
    onDeleteTenantTasks(filter: $filter) {
      id
      taskID
      userID
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
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
          Tenants {
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
            ownerOnly
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
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
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
          Tenants {
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
            ownerOnly
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
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
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
          Tenants {
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
            ownerOnly
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
