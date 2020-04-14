import React from 'react';
import './sequence-footer.css';

export default function SequenceFooter(){
    return (
        <footer className='Sequence-footer'>
            <div className='Sequence-footer-content'>
            <div className='footer-left'>
                <span className='footer-madeby'>{"Made with coffee & love by "} <b classname='footer-name'>Evan Miller</b> &#169;2020</span>
            </div>
            <ul className='footer-right'>
            <li className='footer-about f-li'>About</li>
                <li className='footer-contact f-li'>Contact Me</li>
                <li className='footer-portfolio f-li'>View more work</li>
            </ul>
            </div>
        </footer>
    )
}