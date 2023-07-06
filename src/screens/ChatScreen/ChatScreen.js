import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Message from '../../components/Message';
import InputBox from '../../components/InputBox';
import bg from '../../../assets/images/BG.png';
import {API, graphqlOperation} from 'aws-amplify';
import { listMessagesByChatRoom } from './ChatScreenQueries';
import { getChatRoom, listUsers } from '../../graphql/queries';
import {onCreateAttachment, onCreateMessage, onUpdateChatRoom} from '../../graphql/subscriptions'
import { Feather } from '@expo/vector-icons';

const ChatScreen = () => {
  
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [managerIDs, setManagerIDs] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const chatroomID = route.params.id;
  const client = route.params.client;



  // fetch Chat Room
  useEffect(()=>{

    API.graphql(graphqlOperation(
      listUsers, {filter:{userType:{eq:'MANAGER'}}}
    )).then((result)=>{
      console.log('results', result.data?.listUsers.items[0].id);
      setManagerIDs(result.data?.listUsers.items)
    })



    API.graphql(
      graphqlOperation(
        getChatRoom, {id: chatroomID}
      )
    ).then((result)=>{
    
      setChatRoom(result.data?.getChatRoom);
      
    })

    const subscription = API.graphql(graphqlOperation(onUpdateChatRoom, {filter: {id: {eq: chatroomID } } } ) 
    ).subscribe({
      next: ({value})=>{
                setChatRoom((cr)=>({...(cr || {}), 
                          ...value.data.onUpdateChatRoom
                        }));
      },
      error: (err) => console.warn(err)
    })




    return ()=>subscription.unsubscribe();

  },[chatroomID])


  //fetch Messages
  useEffect(()=>{

    API.graphql(
      graphqlOperation(
        listMessagesByChatRoom, {chatroomID, sortDirection:"DESC"}
      )
    ).then((result)=>{
    
      setMessages(result.data?.listMessagesByChatRoom?.items);
  
      //loop through messages, check if userID falls within manager id, if yes 

    })

    

    
    //subscribe to new messages

    const subscription = API.graphql(graphqlOperation(onCreateMessage, {filter: {chatroomID: {eq: chatroomID}}})).subscribe({
      next: ({value})=>{
        
       
        setMessages((m)=>[value.data.onCreateMessage, ...m])
      },
      error: (err)=>console.warn(err)
    })

    // Subscribe to new attachments
    const subscriptionAttachments = API.graphql(
      graphqlOperation(onCreateAttachment, {
        filter: { chatroomID: { eq: chatroomID } },
      })
    ).subscribe({
      next: ({ value }) => {
        const newAttachment = value.data.onCreateAttachment;
        setMessages((existingMessages) => {
          const messageToUpdate = existingMessages.find(
            (em) => em.id === newAttachment.messageID
          );
          if (!messageToUpdate) {
            return existingMessages;
          }
          if (!messageToUpdate?.Attachments?.items) {
            messageToUpdate.Attachments.items = [];
          }
          messageToUpdate.Attachments.items.push(newAttachment);

          return existingMessages.map((m) =>
            m.id === messageToUpdate.id ? messageToUpdate : m
          );
        });
      },
      error: (err) => console.warn(err),
    });



    return () => {
      subscription.unsubscribe();
      subscriptionAttachments.unsubscribe();
    }

  },[chatroomID])



  useEffect(() => {

    if(client){
      return
    }
    
    navigation.setOptions({ title: route.params.name, headerRight:()=>
        <Feather onPress = {()=>navigation.navigate("Group Info", {id:chatroomID})} name="more-horizontal" size={24} color="gray" /> 
      });
    
  }, [route.params.name]);

  
  if(!chatRoom || managerIDs.length===0){
    return <ActivityIndicator color={'#512da8'} />;
  }


  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 100}
      style={styles.bg}
    >
      <ImageBackground style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} managers={managerIDs}/>}
          style={styles.list}
          inverted
        />
        <InputBox chatroom={chatRoom} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;
