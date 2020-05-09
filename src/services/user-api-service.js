import config from "../config";
import TokenService from "./token-service";
import IdleService from "./idle-service";
import AuthApiService from "./auth-api-service";

const UserApiService = {
  getTeams() {
    return fetch(`${config.API_ENDPOINT}/teams`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  userRandomProfileImage(userId) {
    return fetch(`${config.API_ENDPOINT}/users/imageupload/${userId}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        user_id: userId
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  setUserTeam(teamId, teamName) {
    return fetch(`${config.API_ENDPOINT}/users/setteam/${teamId}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        user_id: TokenService._getUserId(TokenService.readJwtToken()),
        teamName : teamName
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
    .then(res => {
      TokenService.saveAuthToken(res.authToken);
      IdleService.regiserIdleTimerResets();
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
      return TokenService._getUserInfo(TokenService.readJwtToken());
    });
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
};

export default UserApiService;
