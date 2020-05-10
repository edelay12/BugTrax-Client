import React from "react";
import { Link } from 'react-router-dom';
export default function LandingFooter() {
  return (
    <footer className="Landing-footer-container">
      <div className="landing-footer-left">
        <span className="footer-madeby">
          {"Made with coffee & love by "}
          <br />
          <b className="footer-name">Evan Miller</b> &#169;2020
        </span>
      </div>
      <ul className="landing-footer-right">
        <li className="footer-about f-li"><Link to={'/'}>About</Link></li>
        <li className="footer-contact f-li"><a href={'https://www.linkedin.com/in/evan-miller-b3b278182/'} target='_blank'>Contact Me</a></li>
        <li className="footer-portfolio f-li"><a href={'https://www.evanmiller.co'} target='_blank'>View more work</a></li>
      </ul>
    </footer>
  );
}
