import React, { useState} from 'react';
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/Authentication/miscellaneous/SideDrawer';
import MyChat from '../components/Authentication/miscellaneous/MyChat';
import ChatBox from '../components/Authentication/miscellaneous/ChatBox';


export default function ChatPage() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box 
        display="flex" 
        justifyContent="space-between" 
        width="100%" 
        height="91.5vh" 
        padding="10px">
        {user && <MyChat/>}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};
