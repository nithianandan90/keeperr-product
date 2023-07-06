import { FlatList } from 'react-native';
import ChatListItem from '../../components/ChatListItem';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listChatRooms} from './queries';
import { useEffect, useState } from 'react';
import { onCreateChatRoom, onCreateUserChatRoom } from '../../graphql/subscriptions';
import { useIsFocused } from '@react-navigation/native';



const ChatsScreen = () => {


  const [chatRooms, setChatRooms] = useState([]);
  const [authUser, setAuthUser] = useState([]);
  const [loading, setLoading] = useState(false);


  const isFocused = useIsFocused();


  const fetchChatRooms = async () => {

    setLoading(true);

    setChatRooms([]);

    const authUser = await Auth.currentAuthenticatedUser();

    setAuthUser(authUser);

    const response = await API.graphql(
      graphqlOperation(listChatRooms,{id: authUser.attributes.sub})
    )
    
    
    const rooms = response?.data?.getUser?.ChatRooms?.items.filter((item)=>!item._deleted) || [];
    
    const sortedRooms = rooms.sort((room1, room2)=>new Date(room2.chatRoom.updatedAt) - new Date(room1.chatRoom.updatedAt));

      // console.log(new Date(rooms[0].chatRoom.updatedAt) - new Date(rooms[1].chatRoom.updatedAt));

    setChatRooms(sortedRooms);
  
    setLoading(false);
  } 

  useEffect(()=>{
    
    fetchChatRooms();
    // console.log(chatRooms);
  
 
  
  },[isFocused])


  useEffect(()=>{
    

  if(authUser?.attributes?.sub){    
      console.log("sub",authUser);
      
      console.log('auth user exists')
      
      //if userChatRoom created with this user id, then get the id of the chat room, query it and add it to existing chat 
      
      const subscription = API.graphql(graphqlOperation(onCreateUserChatRoom, {filter: {userId: {eq: authUser.attributes.sub } }} ) 
    ).subscribe({
      next: ({value})=>{

        fetchChatRooms();
        
      },
      error: (err) => console.warn(err)
    })

    return ()=>subscription.unsubscribe();
    }
  },[authUser])

  return (
    <FlatList
      data={chatRooms}
      renderItem={({ item }) => <ChatListItem chat={item.chatRoom} sub={authUser.attributes.sub} />}
      style={{ backgroundColor: 'white' }}
      refreshing = {loading}
      onRefresh = {fetchChatRooms}
    />
  );
};

export default ChatsScreen;
