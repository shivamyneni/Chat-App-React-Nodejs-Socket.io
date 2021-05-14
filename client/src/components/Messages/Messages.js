import React from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import {RemoveScrollBar} from 'react-remove-scroll-bar'
import './Messages.css'
const Messages=({messages,name})=>{
    return(
        <ScrolltoBottom className='Scroll'>
            <RemoveScrollBar/>
            {console.log(messages)}
            {messages.map((message,i)=><div key={i}><Message message={message} name={name}/></div>)}
        </ScrolltoBottom>
    )

}

export default Messages;