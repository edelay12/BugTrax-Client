import config from "../config";
import TokenService from "./token-service";

const UserApiService = {
getTeams(){
    return fetch(`${config.API_ENDPOINT}/teams`, {
        headers: {}
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
},
userRandomProfileImage(userId){
  return fetch(`${config.API_ENDPOINT}/users/imageupload/${userId}`, {
    method: "POST",
    headers: {
      //auth
      user_id: userId
    }
  }).then(res =>
    !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  );
},

//random profile images
getRandomImage(){

},
}

export default UserApiService;