import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';
import {API, graphqlOperation, Storage} from 'aws-amplify';
import {onUpdateChatRoom} from '../../graphql/subscriptions'
import { MaterialCommunityIcons } from '@expo/vector-icons';

dayjs.extend(relativeTime);

const ChatListItem = ({ chat, sub }) => {
  const navigation = useNavigation();
  const [chatRoom, setChatRoom] = useState(chat);
  const [imageUri, setImageUri] = useState();
  
  const n = chat.users.items[0].user.id===sub?1:0;
  
  const user = chat.users.items[n].user;
 
 
  const getImage = async ()=>{
    
    const uri = await Storage.get(user.image.storageKey);
    setImageUri(uri);
 
  }


  useEffect(()=>{
    if(user.image){
    getImage();
    }
  },[user])

  useEffect(()=>{
   
  

    const subscription = API.graphql(graphqlOperation(onUpdateChatRoom, {filter: {id: {eq: chat.id } } } ) 
    ).subscribe({
      next: ({value})=>{
        setChatRoom((cr)=>({...(cr || {}), 
                          ...value.data.onUpdateChatRoom
                        }));
      },
      error: (err) => console.warn(err)
    })

    return ()=>subscription.unsubscribe();

  },[chat.id])




  return (
    <Pressable
      onPress={() => ('Chat', { id: chatRoom?.id, name: chatRoom?.Property.title })}
      style={styles.container}
    >
       <MaterialCommunityIcons style={styles.image} name="head-dots-horizontal-outline" size={40} color="grey" />
      {/* <Image source={{ uri: imageUri }} style={styles.image} /> */}

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chatRoom.Property?.title || user?.name},  {chatRoom.Property?.streetAddress}
          </Text>
          <Text style={styles.name} numberOfLines={1}>
           
          </Text>
          {chatRoom.LastMessage&&<Text style={styles.subTitle}>{dayjs(chatRoom.LastMessage?.createdAt).fromNow(true)}</Text>}
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chatRoom.LastMessage?.text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // marginRight: 10,
  },
  content: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});

export default ChatListItem;
