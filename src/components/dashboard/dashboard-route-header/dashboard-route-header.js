import React from 'react';
import './dashboard-route-header.css';

export default function DashboardRouteHeader({title}) {
    return (
        <div className='Dashboard-route-header'>
        <h2 className='Dashboard-route-title'>{title}</h2>
      </div>
    )
}