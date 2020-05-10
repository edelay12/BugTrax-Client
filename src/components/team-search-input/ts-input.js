import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TeamsApiService from "../../services/teams-api-service";
import "./ts-input.css";

export default function TeamSearch() {
  const [teams, setTeams] = useState([]);
  const [show, setShow] = useState(false);
  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    TeamsApiService.getTeams()
      .then(res => {
        setAllTeams(res);
        setTeams(res);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    let results;
    if (!e) {
      setShow(false);
      setTeams(allTeams);
      return;
    } else {
      setShow(true);

      results = allTeams.filter(item => {
        return item.team_name.toLowerCase().startsWith(e.toLowerCase());
      });
      setTeams(results);
    }
  };
  return (
    <div className="Ts-container">
      <input
        type="text"
        className="Ts-i"
        placeholder="Search for a team..."
        onChange={e => handleChange(e.target.value)}
      />
      {show && (
        <div className="Ts-results">
          <ul className="Ts-ul">
            {teams.length < 1 ? (
              <div className="Ts-results-empty">
                <span>No teams found...</span>
              </div>
            ) : (
              teams.map(team => (
                <Link to={`/team-join/${team.id}/${team.team_name}/auth`}>
                  <li className="Ts-li">{team.team_name}</li>
                </Link>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
