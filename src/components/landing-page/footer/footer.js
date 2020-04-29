import React from 'react';

export default function LandingFooter(){
    return (
        <footer className="Landing-footer-container">
          <div className='landing-footer-left'>
                <span className='footer-madeby'>{"Made with coffee & love by "}<br /><b classname='footer-name'>Evan Miller</b> &#169;2020</span>
            </div>
            <ul className='landing-footer-right'>
            <li className='footer-about f-li'>About</li>
                <li className='footer-contact f-li'>Contact Me</li>
                <li className='footer-portfolio f-li'>View more work</li>
            </ul>
          </footer>
    )
}