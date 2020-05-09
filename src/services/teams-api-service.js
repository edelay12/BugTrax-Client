import config from "../config";
import TokenService from "./token-service";

const TeamsApiService = {
  getTeams() {
    return fetch(`${config.API_ENDPOINT}/teams`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getTeamUserList(teamId) {
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}/users`, {
      headers: {
        //auth
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getTeamName(teamId) {
    return fetch(`${config.API_ENDPOINT}/teams/teamname`, {
      headers: {
        //auth
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        teamId: teamId
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default TeamsApiService;
