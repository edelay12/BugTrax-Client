import React, { Component, useEffect, useState } from 'react';
import TeamsApiService from '../../services/teams-api-service';
import './ts-input.css'

export default function TeamSearch(){

    const [teams, change] = useState([])
    const [show, setShow] = useState(false)

    let allteams = [];
    
    useEffect(() => {
      TeamsApiService.getTeams()
      .then(teamsa => {
          console.log('teams')
          console.log(teamsa)
          allteams = teamsa
          console.log(allteams)
        change(teamsa)})
      .catch(err => console.log(err))
    },[]);


   let handleChange = e => {
    setShow(true)
    console.log(e)
    if(!e){
        console.log('all')
        setShow(false)
        change(allteams)
        return console.log(teams)
    } else {
        console.log('filter')
        console.log(show)
        let results = allteams.filter(item => {
            console.log(item.team_name)
             return item.team_name.toLowerCase().startsWith(e.toLowerCase());
        });
        console.log(results)
     change(results);
    }
 }
/* e => change(teams.filter(team => team.toLowerCase().startsWith(e.target.value.toLowerCase()))) */

    return (
        <div className='Ts-container'>
              <input type='text' className='Ts-i' placeholder='Search for a team...' onChange={e => handleChange(e.target.value)}/>
              <div className='Ts-results'>
                    <ul className='Ts-ul'>
                {teams.map(team => 
                    <li className='Ts-li'>{team.team_name}</li>
                    )}
                    </ul>
                </div>
        </div>
    )
}