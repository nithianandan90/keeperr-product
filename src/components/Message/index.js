import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Auth, Storage, API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import ImageAttachment from "./ImageAttachment";
import VideoAttachment from "./VideoAttachment";
import { getUser } from "../../graphql/queries";

dayjs.extend(relativeTime);

const Message = ({ message, managers }) => {
  const [isMe, setIsMe] = useState(false);
  const [downloadedAttachments, setDownloadedAttachements] = useState([]);
  const { width } = useWindowDimensions();
  const [userType, setUserType] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    managers.map((manager) => {
      if (message.userID === manager.id) {
        setUserType("MANAGER");
        setUserName(manager.username);
      }
    });

    if (managers.some((item) => item.id === message.userID)) {
      setUserType("MANAGER");
    }

    isMyMessage();
    // getUserType();
  }, []);

  const downloadAttachments = async () => {
    if (message.Attachments.items) {
      const downloadedAttachments = await Promise.all(
        message.Attachments.items.map((attachment) =>
          Storage.get(attachment.storageKey).then((uri) => ({
            ...attachment,
            uri,
          }))
        )
      );

      setDownloadedAttachements(downloadedAttachments);
    }
  };

  useEffect(() => {
    downloadAttachments();
  }, [JSON.stringify(message.Attachments.items)]);

  const imageContainerWidth = width * 0.8 - 30;

  const getUserType = async () => {
    const userData = await API.graphql(
      graphqlOperation(getUser, { id: message.userID })
    );

    setUserType(userData.data.getUser.userType);
  };

  const isMyMessage = async () => {
    const authUser = await Auth.currentAuthenticatedUser();

    setIsMe(message.userID === authUser.attributes.sub);
  };

  const imageAttachments = downloadedAttachments.filter(
    (at) => at.type === "IMAGE" || at.type === "DOCUMENT"
  );

  const videoAttachments = downloadedAttachments.filter(
    (at) => at.type === "VIDEO"
  );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMe ? "#DCF8C5" : "white",
          alignSelf: isMe ? "flex-end" : "flex-start",
        },
      ]}
    >
      {userType ? (
        <Text style={{ color: "#512da8", fontWeight: 600 }}>
          {userName} ({userType})
        </Text>
      ) : (
        <Text style={{ color: "#512da8", fontWeight: 600 }}>Client</Text>
      )}
      {
        downloadedAttachments.length > 0 && (
          <View style={[{ width: imageContainerWidth }, styles.images]}>
            <ImageAttachment attachments={imageAttachments} />

            <VideoAttachment
              attachments={videoAttachments}
              width={imageContainerWidth}
            />
          </View>
        )

        // <S3Image imgKey={message.images[0]} style={styles.image} />
      }

      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",

    // Shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },

  images: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  imageContainer: {
    padding: 3,
    width: "50%",
    aspectRatio: 1,
  },

  image: {
    flex: 1,
    height: 100,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Message;
