// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {messages, loading} = useGetMessage();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
    }, 100);
  }, [messages]);


  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && 
      messages.length > 0 && 
      messages.map((message) =>(
        <div key={message._id}
        ref={lastMessageRef}
        >
          <Message key={message._id} message={message} />
        </div>
      ))}

     {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
     {!loading && messages.length === 0 && (
				<p className='text-center'>Escreva uma mensagem e inicie uma conversa</p>
			)}
      
    </div>
  )
}

export default Messages