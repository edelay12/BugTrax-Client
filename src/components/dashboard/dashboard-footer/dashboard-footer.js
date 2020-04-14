import React from 'react';
import './dashboard-footer.css';

export default function DashboardFooter(){
    return (
        <footer className='Dashboard-footer'>
            <div className='Dashboard-footer-content'>
            <div className='D-footer-left'>
                <span className='D-footer-madeby'>{"Made with coffee & love by "} <b classname='footer-name'>Evan Miller</b> &#169;2020</span>
            </div>
            <ul className='D-footer-right'>
            <li className='D-footer-about f-li'>About</li>
                <li className='footer-contact f-li'>Contact me</li>
                <li className='footer-portfolio f-li'>View more work</li>
            </ul>
            </div>
        </footer>
    )
}