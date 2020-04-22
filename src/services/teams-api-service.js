import config from "../config";
import TokenService from "./token-service";

const TeamsApiService = {
getTeams(){
    return fetch(`${config.API_ENDPOINT}/teams`, {
        headers: {}
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
},

getTeamUserList(teamId){
  return fetch(`${config.API_ENDPOINT}/teams/${teamId}/users`, {
    headers: {
      //auth
      //teamid
      team_id : teamId, 
      user_id: 1 // context
    }
  }).then(res =>
    !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  );
}
}

export default TeamsApiService;