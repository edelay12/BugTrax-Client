import React from 'react';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretDown, faPlusCircle, faEllipsisV } from '@fortawesome/fontawesome-free-solid';
import { faAngleDoubleRight } from '@fortawesome/fontawesome-free-solid';
import './header.css';

export default function Header({sidebar, showSif, sIsOpen}){
   const handleLogoutClick = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
        window.location.reload()
      }

    return (
        <header className='Dashboard-header'>
        <div className='Header-left-c'>
      <span id={ sidebar ? 'Sidebar-toggle-mobile' : 'Sidebar-toggle-mobile-closed'} onClick={()=> sIsOpen(!sidebar)}><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
            <span className='header-link'>Home</span>
            <span className='header-link'>About</span>
        </div>
        <div className='Team-name-c'>
        <h3 className={ sidebar ? 'Team-name-closed' : 'Team-name'}>Team Name</h3>
        </div>
    <div className={sidebar ? 'Header-right-c-closed' :'Header-right-c'}>
        <span className='Show-sif-toggle' onClick={showSif}><FontAwesomeIcon icon={faPlusCircle}/></span>
        <div className='header-profile-container'>
         <img id='Header-profile' src='https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=672&q=80' alt='headshot-1' />
        <FontAwesomeIcon className='Profile-options-toggle' icon={faEllipsisV} />
        </div>
    </div>
    </header>
    )
}

/* 

        <span className='Header-logout-link' onClick={handleLogoutClick}>Logout</span>
*/