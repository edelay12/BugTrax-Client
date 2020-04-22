import config from '../config';

const EventsApiService = {
    getEventsByTeamId(teamId){
        return fetch(`${config.API_ENDPOINT}/events/team/${teamId}`, {
          headers: {
            "content-type": "application/json"
          }
        }).then(res =>
          !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
      },
    getEventsByIssueId(issueId){
        return fetch(`${config.API_ENDPOINT}/events/issue/${issueId}`, {
          headers: {
            "content-type": "application/json"
          }
        }).then(res =>
          !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
      },

      postNewEvent(event){
        return fetch(`${config.API_ENDPOINT}/events/newevent`, {
          method: "POST",
          headers: {
            //get teamaid from context
            "content-type": "application/json"
          },
          body: JSON.stringify(event)
        }).then(res =>
          !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        );
      }
}


export default EventsApiService;