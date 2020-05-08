import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard-footer.css';

export default function DashboardFooter(){
    return (
        <footer className='Dashboard-footer'>
            <div className='Dashboard-footer-content'>
            <div className='D-footer-left'>
                <span className='D-footer-madeby'>{"Made with coffee & love by "} <b className='footer-name'>Evan Miller</b> &#169;2020</span>
            </div>
            <ul className='D-footer-right'>
            <li className='D-footer-about f-li'><Link to={'/'}>About</Link></li>
                <li className='footer-contact f-li'>Contact me</li>
                <li className='footer-portfolio f-li'><a href={'http://www.evanmiller.co'}>View more work</a></li>
            </ul>
            </div>
        </footer>
    )
}