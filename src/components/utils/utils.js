import React from 'react';
import './utils.css';
import { faSortDown } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Trigger({name, icon , iconClass}){
    return (
        <div className='trigger'><div className='Trigger-name-container'><FontAwesomeIcon className={`Trigger-name-icon ${iconClass}`}  icon={icon}/><h3 className='Trigger-name'>{name}</h3></div> <div className='Trigger-icon-container'><span className={'Trigger-icon'}><FontAwesomeIcon icon={faSortDown}/></span></div> </div>
    )
}

// error util *********!


