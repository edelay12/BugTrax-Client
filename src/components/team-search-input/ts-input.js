import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamsApiService from '../../services/teams-api-service';
import './ts-input.css'

export default function TeamSearch(){

    const [teams, setTeams] = useState([])
    const [show, setShow] = useState(false)
    const [allTeams , setAllTeams] = useState([])
    
    useEffect(() => {
      TeamsApiService.getTeams()
      .then(res => {
          console.log('teams')
          console.log(res)
          setAllTeams(res)
          console.log(allTeams)
        setTeams(res)
    })
      .catch(err => console.log(err))
    },[]);


 const handleChange = (e) => {
      let results;
    console.log(e)
    console.log(allTeams)
   if(!e){
        console.log('all')
        setShow(false)
        setTeams(allTeams)
        return console.log(teams)
    } else {
        setShow(true)
        console.log('filter')
        console.log(show)
        results = allTeams.filter(item => {
            console.log(item.team_name)
             return item.team_name.toLowerCase().startsWith(e.toLowerCase());
        });
        console.log(results)
     setTeams(results);
    }
 }
/* e => change(teams.filter(team => team.toLowerCase().startsWith(e.target.value.toLowerCase()))) */

    return (
        <div className='Ts-container'>
              <input type='text' className='Ts-i' placeholder='Search for a team...' onChange={e => handleChange(e.target.value)}/>
              {show && (
              <div className='Ts-results'>
                    <ul className='Ts-ul'>

                { teams.length < 1 ? <div className='Ts-results-empty'><span >No teams found...</span></div> :
                    teams.map(team => 
                    <li className='Ts-li'><Link to={`/team-join/${team.id}/${team.team_name}/auth`}>{team.team_name}</Link></li>
                    )}
                    </ul>
                </div>
                )}
        </div>
    )
}