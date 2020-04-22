import React, {useContext} from 'react';
import MainContext from '../../../contexts/main-context';
import CReciever from '../chat-reciever/chat-reciever';
import CSender from '../chat-sender/chat-sender';

export default function MessagesContainer({messages}){
    const ContextMain = useContext(MainContext);
    return (
    <section className="Messages-container">
    {messages.map(v => 
    v.sender_id == ContextMain.userId ?  <CSender message={v.message} /> : <CReciever message={v.message} /> 
    )}
    {/* make own component, send through callback the user and partner, fetch, then send through props to map the messages  */}
</section>
    )
}