import React, { useState } from 'react';
import './event-item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/fontawesome-free-regular';

export default function EventItem({change, date, summary, comments}) {
    const [details, showDetails] = useState(false)
    return (
        <div className='Timeline-event-outer'>
    <section className='TimelineEvent' onClick={() => showDetails(!details)}>
        <div className='T-img-container'>
<img id='headshotTl' src='https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=672&q=80' alt='headshot-1' />
        </div>
        <div className='T-details-containerTl'>
<span className='T-user-event'>{change}</span>
<div className='T-user-date-container'>
    <FontAwesomeIcon className='fa-Te' icon={faClock} />
<span className='T-user-date'>{date}</span>
</div>
        </div>
    </section>
{details && (
       <div className='Event-item-content'>
       <div className='Ei-summary-container'>
           <span className='Ei-summary'>Summary: {summary}</span>
           </div>
           <div className='Ei-comments-container'>
           <label className='Ei-summary-label'>Comments:</label>
           <span className='Ei-comments'>{comments}</span>
           </div>
       </div>
       )}
       </div>
    )
}