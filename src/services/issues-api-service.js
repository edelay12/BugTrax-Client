import config from '../config';

const IssueApiService = {
//team id 
    postIssue(issue, teamId) {
        return fetch(`${config.API_ENDPOINT}/issues/team/${teamId}`, {
            method: "POST",
            headers: {
              //get teamaid from context
              "content-type": "application/json"
            },
            body: JSON.stringify(issue)
          }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
          );
    },
    getIssuesByTeamId(teamId){
      return fetch(`${config.API_ENDPOINT}/issues/team/${teamId}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
    getIssueById(issueId){
      return fetch(`${config.API_ENDPOINT}/issues/issue/${issueId}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
    getActiveIssues(teamId){
      return fetch(`${config.API_ENDPOINT}/issues/active/${teamId}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
    getResolvedIssues(teamId){
      return fetch(`${config.API_ENDPOINT}/issues/resolved/${teamId}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
    getRecentlyModifiedIssues(teamId){
      return fetch(`${config.API_ENDPOINT}/issues/recently-modified/${teamId}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
    getTimeline(teamId){
      return fetch(`${config.API_ENDPOINT}/issues/timeline/${teamId}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      );
    },
}

export default IssueApiService;