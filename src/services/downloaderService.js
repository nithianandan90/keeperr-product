import * as FileSystem from "expo-file-system";
import { startActivityAsync } from "expo-intent-launcher";
import { shareAsync } from "expo-sharing";
import { listAttachments } from "../graphql/queries";
import * as mime from "react-native-mime-types";

import { Storage, API, graphqlOperation } from "aws-amplify";

export const getInvoiceFile = async (invoiceID) => {
  const results = await API.graphql(
    graphqlOperation(listAttachments, {
      filter: { invoiceID: { eq: invoiceID } },
    })
  );

  const attachment = results.data.listAttachments.items[0];

  console.log("attachments", results.data);

  if (!attachment) {
    return;
  }

  const uri = await Storage.get(attachment.storageKey);

  return uri;
};

export const downloadFile = async (url, fileName) => {
  const result = await FileSystem.downloadAsync(
    url,
    FileSystem.documentDirectory + fileName
  );

  console.log("result", result);

  save(result.uri);
};

const save = async (uri) => {
  const type = mime.lookup(uri);

  if (Platform.OS === "android") {
    let content = await FileSystem.getContentUriAsync(uri);

    await startActivityAsync("android.intent.action.VIEW", {
      data: content,
      flags: 1,
      type: type,
    });
  } else {
    shareAsync(uri);
  }
};
