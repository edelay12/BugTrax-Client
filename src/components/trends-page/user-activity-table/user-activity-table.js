import React, { useMemo, useContext, useEffect, useState } from "react";
import "./user-activity-table.css";
import MainContext from "../../../contexts/main-context";
import TokenService from "../../../services/token-service";
import ChartApiService from "../../../services/chart-api-service";
import TeamsApiService from "../../../services/teams-api-service";

export default function UserActivityTable() {
  const ContextMain = useContext(MainContext);
  const [days, setDays] = useState([]);
  useEffect(() => {
    /* *********************
   FEATURE TO BE ADDED IN NEXT VERSION
   ChartApiService.getDaysOnTeam(
      TokenService._getUserInfo(TokenService.readJwtToken()).teamId
    )
      .then(newDays => {
        setDays(newDays);
      })
      .catch(err => console.log(err));
        ********************** */
  }, []);

  const userInfo = TokenService._getUserInfo(TokenService.readJwtToken());

  const getIssuesCreated = user => {
    return [
      ...ContextMain.teamIssues.filter(
        issue => Number(issue.creator_id) === user
      )
    ].length;
  };
  const getIssuesContributed = user => {
    let set = [];
    ContextMain.teamTimeline.map(v => {
      if (!set.includes(v.issue_id) && v.user_id == user) set.push(v.issue_id);
    });
    return set.length;
  };

  const getIssuesResolved = user => {
    return [
      ...ContextMain.resolvedIssues.filter(
        issue => Number(issue.resolved_by) === user
      )
    ].length;
  };

  const getDaysOnTeam = user => {
    return days[user];
  };

  return (
    <div className="user-activity-table-wrap">
      <table className="user-activity-table">
        <col></col>
        <colgroup span="2"></colgroup>
        <colgroup span="2"></colgroup>
        <tr>
          <th colspan="2" scope="colgroup">
            User
          </th>
          <th colspan="4" scope="colgroup">
            Data
          </th>
        </tr>
        <tr>
          <th scope="col">User Name</th>
          <th scope="col">Full Name</th>
          <th scope="col">Issues Created</th>
          <th scope="col">Issues Contributed</th>
          <th scope="col">Issues Resolved</th>
          {/*  <th scope="col">Time on team (days)</th> */}
        </tr>

        <tr>
          <th scope="row">{userInfo.user_name}</th>
          <td>{userInfo.full_name}</td>
          <td>{getIssuesCreated(userInfo.userId)}</td>
          <td>{getIssuesContributed(userInfo.userId)}</td>
          <td>{getIssuesResolved(userInfo.userId)}</td>
          {/* <td>{days[0]}</td>  */}
        </tr>
        {ContextMain.teamList.map((user, i) => (
          <tr>
            <th scope="row">{user.user_name}</th>
            <td>{user.full_name}</td>
            <td>{getIssuesCreated(user.id)}</td>
            <td>{getIssuesContributed(user.id)}</td>
            <td>{getIssuesResolved(user.id)}</td>
            {/*<td className="days">{days[i]}</td>*/}
          </tr>
        ))}
      </table>
    </div>
  );
}
