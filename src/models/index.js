// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserType = {
  "CLIENT": "CLIENT",
  "PARTNER": "PARTNER",
  "MANAGER": "MANAGER"
};

const AttachmentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO",
  "DOCUMENT": "DOCUMENT"
};

const InvoiceStatus = {
  "PAID": "PAID",
  "UNPAID": "UNPAID",
  "OVERDUE": "OVERDUE"
};

const { Notifications, Properties, Task, Attachment, ChatRoom, Message, User, Invoices, FirebaseTokens, UserChatRoom } = initSchema(schema);

export {
  Notifications,
  Properties,
  Task,
  Attachment,
  ChatRoom,
  Message,
  User,
  Invoices,
  FirebaseTokens,
  UserChatRoom,
  UserType,
  AttachmentType,
  InvoiceStatus
};