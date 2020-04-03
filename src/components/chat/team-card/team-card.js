import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/fontawesome-free-solid';
import './team-card.css';

export default function TeamCard(){
    return (
        <div className='Team-card'>
            <div className='Tc-pic'>
            <img id='headshot1' src='https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=672&q=80' alt='headshot-1' />
            <FontAwesomeIcon className='fa-menuDots' icon={faEllipsisV} />
            </div>
            <div className='Tc-details'>
            <span className='Tc-name'>John Doe</span>
            <span className='Tc-pos'>Lead Engineer</span>
            </div>
        </div>
    )
}