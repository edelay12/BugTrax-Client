import config from '../config';
import ContextMain from '../contexts/main-context';

const ChatApiService = {  
getMessagesByUser(partner){
    return fetch(`${config.API_ENDPOINT}/chat/messages`, {
        headers: {
          "content-type": "application/json",
          user_id: 1 , //ContextMain.userId,
          partner_id: partner
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
  postNewMessage(newMessage){
    return fetch(`${config.API_ENDPOINT}/chat/messages`, {
      method: "POST",
      headers: {
        //get teamaid from context
        "content-type": "application/json"
      },
      body: JSON.stringify(newMessage)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
},
}

export default ChatApiService;