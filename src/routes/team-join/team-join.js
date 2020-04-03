import React, { Component, useEffect, useState } from 'react';
import TeamsApiService from '../../services/teams-api-service';
import './team-join.css'
import TeamSearch from '../../components/team-search-input/ts-input';
import TeamRegister from '../../components/team-register/team-register';

export default function TeamJoin(){
 const [register, showRegister] = useState(false);
        return (
            <section className='Team-choose'>
               { register ? <TeamRegister /> :
               <div>
                <h1 className='Team-choose-dir'>Search for a team</h1>
                <div className='Tc-search-container'>
                    <TeamSearch />
                </div>
                <h1 className='Team-choose-dir2'>...or register a new one</h1>
                <button type='button' className='Team-choose-register-b Radial-button' onClick={() => showRegister(true)}>Register a team</button>
                </div>
               }
            </section>
        )

}