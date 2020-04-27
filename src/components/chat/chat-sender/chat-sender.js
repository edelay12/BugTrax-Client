import React from 'react';
import './chat-sender.css';

export default function CSender({message}) {
    return (
        <div className='Message-sender-bubble'>
            <div className='Sender-message'>
           <span className='message'>{message}</span>
            </div>
        </div>
    )
}