import React from 'react';
import './timeline-event.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/fontawesome-free-regular';
import getUserPhoto from '../dashboard/Overview-team-list/get-user-photo/get-user-photo';

export default function TimelineEvent({change, date, id}) {
    return (
    <section className='TimelineEvent'>
        <div className='T-img-container'>
<img id='headshotTl' src={getUserPhoto(id)} alt='headshot-1' />
        </div>
        <div className='T-details-containerTl'>
<span className='T-user-event'>{change}</span>
<div className='T-user-date-container'>
    <FontAwesomeIcon className='fa-Te' icon={faClock} />
<span className='T-user-date'>{date}</span>
</div>
        </div>
    </section>
    )
}