import jwtDecode from "jwt-decode";
import config from "../config";

let _timeout;
const _TEN_SECONDS = 10000;

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    console.info("clearing token");
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  readJwtToken() {
    return TokenService.parseJwt(TokenService.getAuthToken());
  },
  _getTimeUntilExpiry(payload) {
    return payload.exp * 1000 - Date.now();
  },
  _getUserInfo(payload) {
    return {
      userId: payload.userId,
      teamId: payload.teamId,
      user_name: payload.user_name,
      full_name: payload.full_name,
      team_name: payload.teamName
    };
  },
  _getUserId(payload) {
    return payload.userId;
  },
  queueCallbackBeforeExpiry(callback) {
    /* get the number of ms from now until the token expires */
    const msUntilExpiry = TokenService._getTimeUntilExpiry(
      TokenService.readJwtToken()
    );
    /*
          queue callback that will happen 10 seconds before the token expires
          the callback is passed in as an argument so could be anything,
            in this app, the callback is for calling the refresh endpoint
        */
    _timeout = setTimeout(callback, msUntilExpiry - _TEN_SECONDS);
  },
  clearCallbackBeforeExpiry() {
    clearTimeout(_timeout);
  }
};

export default TokenService;
