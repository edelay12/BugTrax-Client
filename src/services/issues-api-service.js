import config from '../config';

const IssueApiService = {
//team id 
    postIssue(issue, teamId) {
        return fetch(`${config.API_ENDPOINT}/issues/${teamId}`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(issue)
          }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
          );
    },
    getIssuesByTeamId(teamId){
      return fetch(`${config.API_ENDPOINT}/issues/${teamId}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },



}


export default IssueApiService;