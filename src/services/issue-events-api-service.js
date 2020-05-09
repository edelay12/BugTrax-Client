import config from "../config";
import TokenService from "../services/token-service";

const EventsApiService = {
  getEventsByTeamId(teamId) {
    return fetch(`${config.API_ENDPOINT}/events/team/${teamId}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getEventsByIssueId(issueId) {
    return fetch(`${config.API_ENDPOINT}/events/issue/${issueId}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postNewEvent(event) {
    return fetch(`${config.API_ENDPOINT}/events/newevent`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(event)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default EventsApiService;
