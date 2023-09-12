import React from 'react';
import { ChatState } from '../../../Context/ChatProvider';

export default function MyChat() {

  const { user, selectedChat , setSelectedChat, chats, setChats  } = ChatState();
  

  return (
    <div>
      my MyChat
    </div>
  )
}
