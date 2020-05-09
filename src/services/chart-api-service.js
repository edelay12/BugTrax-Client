import config from '../config';
import TokenService from './token-service';

const ChartApiService = {
    getIssuesMonthly(){
        return fetch(`${config.API_ENDPOINT}/charts/monthly/${TokenService._getUserInfo(TokenService.readJwtToken()).teamId}`, {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${TokenService.getAuthToken()}`
          }
        }).then(res =>
          !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
      },
    getDaysOnTeam(teamId){
      return fetch(`${config.API_ENDPOINT}/charts/userdays/${teamId}`, {
        headers: {
          "content-type": "application/json",
          teamId : teamId,
          userId : TokenService._getUserId(TokenService.readJwtToken()),
          authorization: `Bearer ${TokenService.getAuthToken()}`,
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
    getPercentageChange(){
      return fetch(`${config.API_ENDPOINT}/charts/changepercentage/${TokenService._getUserInfo(TokenService.readJwtToken()).teamId}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${TokenService.getAuthToken()}`,

        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
    getResolvedPercentageChange(){
      return fetch(`${config.API_ENDPOINT}/charts/changeresolved/${TokenService._getUserInfo(TokenService.readJwtToken()).teamId}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${TokenService.getAuthToken()}`,
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
}

export default ChartApiService;