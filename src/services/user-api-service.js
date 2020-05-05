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
setUserTeam(teamId){
  return fetch(`${config.API_ENDPOINT}/users/setteam/${teamId}`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${TokenService.getAuthToken()}`,
      user_id: TokenService._getUserId(TokenService.readJwtToken())
    }
  }).then(res =>
    !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  );
},
getUser(userId) {
  return fetch(`${config.API_ENDPOINT}/users/getuser/${userId}`, {
    headers: {
      authorization: `Bearer ${TokenService.getAuthToken()}`,
      user_id: TokenService._getUserId(TokenService.readJwtToken())
    }
  }).then(res =>
    !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  );
}
}

export default UserApiService;