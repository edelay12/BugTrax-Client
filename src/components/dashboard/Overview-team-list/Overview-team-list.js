import React , { useContext } from 'react';
import MainContext from '../../../contexts/main-context';
import './overview-team-list.css';

export default function OverviewTeamList({users}){
    const ContextMain = useContext(MainContext);


return (
    <div className='Overview-team-list'>
        <ul className='team-list-ul'>
        { ContextMain.teamList.map(user => 
            <li className='team-list-li'>
                <img src='https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=672&q=80' className='team-li-pic'/>
                <div className='team-li-container'>
                <div className='team-li-details'>
                    <span className='team-li-name'>{user.full_name}</span>
                    <span className='team-li-title'>{user.title}</span>
                </div>
                <span className='team-li-message'>Chat</span>
                </div>
            </li>
        )}
        </ul>

    </div>
)
}