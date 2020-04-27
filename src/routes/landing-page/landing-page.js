import React, { Component } from "react";
import "./landing-page.css";
import typer from "typer-js";
import { Link } from "react-router-dom";
import TeamSearch from "../../components/team-search-input/ts-input";
import { faBurn } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LandingPage extends Component {
  componentDidMount() {
    typer(".Landing-banner")
      .line("The new way of bug killing")
      .line("for front-end developers")
      .pause(2000)
      .back(20, 20)
      .pause(1000)
      .continue("designers")
      .pause(2000)
      .back(9, 20)
      .pause(1000)
      .continue("project managers")
      .pause(2000);

    /* .line('Lets get started!', {
            element : 'span'
        }); */
  }

  render() {
    return (
      <div className="Landing-page">
        <header className="Landing-header">
          <div className="Landing-logo-container">
            <span className="Landing-logo"><FontAwesomeIcon icon={faBurn} />  BugTrax</span>
          </div>
          <div className="Landing-links-container">
            <span className="Links Links-about">About</span>
            <span className="Links Links-login">
              <Link to="/login">Login</Link>
            </span>
            <span className="Links Links-getStarted">
              <Link to="/register">Get Started</Link>
            </span>
          </div>
        </header>

        <main className="Landing-main">
          <section className="Landing-banner-container">
            <div className="Banner-frame">
              <h1 className="Landing-banner"></h1>
              <span className="Landing-dir">
                Track and maintain everything in your projects.
                <br />
                Act in real-time when things go south.
              </span>
              <TeamSearch />
            </div>
          </section>
          <section className="Landing-body-container">
            <div className="lBody-frame">
              <svg
                className="bug-report-svg"
                id="b8c64dc2-e86a-49bc-92bf-164106d9e7fb"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="887.87284"
                height="569.68008"
                viewBox="0 0 887.87284 569.68008"
              >
                <title>proud_coder</title>
                <rect
                  x="276.41138"
                  y="0.34664"
                  width="611.46146"
                  height="391.60712"
                  fill="#e6e6e6"
                />
                <rect
                  x="293.89598"
                  y="49.46394"
                  width="576.49225"
                  height="319.32231"
                  fill="#fff"
                />
                <rect
                  x="276.1503"
                  width="611.46146"
                  height="25.97712"
                  fill="#6c63ff"
                />
                <circle cx="295.45441" cy="13.28088" r="4.81466" fill="#fff" />
                <circle cx="313.72965" cy="13.28088" r="4.81466" fill="#fff" />
                <circle cx="332.00489" cy="13.28088" r="4.81466" fill="#fff" />
                <path
                  d="M863.33045,244.53256H675.64331a1.66587,1.66587,0,0,1,0-3.30318H863.33045a1.66587,1.66587,0,0,1,0,3.30318Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M733.2818,262.7H613.94986a1.66587,1.66587,0,0,1,0-3.30317H733.2818a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M863.33045,263.03033H743.9985a1.66587,1.66587,0,0,1,0-3.30317h119.332a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M733.57144,280.86747H614.2395a1.66587,1.66587,0,0,1,0-3.30317H733.57144a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M733.86108,299.03493H614.52914a1.66587,1.66587,0,0,1,0-3.30317H733.86108a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M788.02388,280.86747H753.84629a1.66587,1.66587,0,0,1,0-3.30317h34.17759a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M788.02388,298.70461H753.84629a1.66587,1.66587,0,0,1,0-3.30317h34.17759a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M845.37273,298.70461h-34.1776a1.66587,1.66587,0,0,1,0-3.30317h34.1776a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M647.25853,244.53256h-34.1776a1.66587,1.66587,0,0,1,0-3.30318h34.1776a1.66587,1.66587,0,0,1,0,3.30318Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M732.84734,452.83835H613.51539a1.66587,1.66587,0,0,1,0-3.30317h119.332a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M732.26806,489.17327H612.93611a1.66587,1.66587,0,0,1,0-3.30318h119.332a1.66587,1.66587,0,0,1,0,3.30318Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M732.5577,507.34073H613.22575a1.66587,1.66587,0,0,1,0-3.30318h119.332a1.66587,1.66587,0,0,1,0,3.30318Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M783.53445,489.50359H749.35686a1.66587,1.66587,0,0,1,0-3.30318h34.17759a1.66587,1.66587,0,0,1,0,3.30318Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M783.53445,507.34073H749.35686a1.66587,1.66587,0,0,1,0-3.30318h34.17759a1.66587,1.66587,0,0,1,0,3.30318Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M840.8833,489.50359H806.7057a1.66587,1.66587,0,0,1,0-3.30318h34.1776a1.66587,1.66587,0,0,1,0,3.30318Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M863.47527,471.00581H675.78813a1.66587,1.66587,0,0,1,0-3.30317H863.47527a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <path
                  d="M647.40335,471.00581h-34.1776a1.66587,1.66587,0,0,1,0-3.30317h34.1776a1.66587,1.66587,0,0,1,0,3.30317Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ccc"
                />
                <polygon
                  points="547.965 163.221 501.622 208.985 547.965 254.748 558.392 244.321 523.345 209.274 558.681 173.938 547.965 163.221"
                  fill="#e6e6e6"
                />
                <polygon
                  points="616.32 163.221 662.662 208.985 616.32 254.748 605.893 244.321 640.939 209.274 605.603 173.938 616.32 163.221"
                  fill="#e6e6e6"
                />
                <polygon
                  points="547.965 163.221 501.622 208.985 547.965 254.748 558.392 244.321 523.345 209.274 558.681 173.938 547.965 163.221"
                  fill="#6c63ff"
                />
                <polygon
                  points="616.32 163.221 662.662 208.985 616.32 254.748 605.893 244.321 640.939 209.274 605.603 173.938 616.32 163.221"
                  fill="#6c63ff"
                />
                <path
                  d="M626.6665,711.1954c14.41965,19.311,44.352,21.34353,44.352,21.34353s6.55352-29.2768-7.86613-48.5878-44.352-21.34353-44.352-21.34353S612.24685,691.88439,626.6665,711.1954Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#e6e6e6"
                />
                <path
                  d="M700.12323,718.455c-9.5151,12.74275-29.26658,14.08395-29.26658,14.08395s-4.32447-19.31887,5.19062-32.06162,29.26658-14.084,29.26658-14.084S709.63832,705.71222,700.12323,718.455Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#e6e6e6"
                />
                <polygon
                  points="149.825 460.994 149.825 511.12 135.503 511.12 125.956 458.607 149.825 460.994"
                  fill="#ffb9b9"
                />
                <polygon
                  points="36.445 460.994 36.445 511.12 22.124 511.12 12.576 458.607 36.445 460.994"
                  fill="#ffb9b9"
                />
                <path
                  d="M268.06126,256.64223s-23.014-16.54132-25.89076-8.63026S259.431,270.3068,259.431,270.3068Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ffb9b9"
                />
                <path
                  d="M186.43344,277.85827c0,28.59815,12.31285,29.4867,32.37127,29.4867s40.2667-.88855,40.2667-29.4867-16.26056-51.78152-36.319-51.78152S186.43344,249.26012,186.43344,277.85827Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#2f2e41"
                />
                <path
                  d="M235.69781,277.49868s-2.87676,21.57563,10.78781,23.014-44.58964,5.7535-44.58964,5.7535,15.10294-13.66457,7.19188-24.45239S235.69781,277.49868,235.69781,277.49868Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ffb9b9"
                />
                <path
                  d="M308.33578,662.98336l5.03431,42.43208s25.17158,30.92508,9.34944,28.76751-25.89076.45876-25.89076-2.418-.372-13.155-2.52959-13.155-3.9431,16.23013-3.9431,16.23013-6.47269-.48981-7.19188-1.209-1.43837-41.88017-1.43837-41.88017-2.15757-12.22619,2.15756-17.9797,3.59594-10.78781,3.59594-10.78781Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#2f2e41"
                />
                <path
                  d="M193.76255,662.51677l5.03431,42.43208s25.17158,30.92508,9.34945,28.76751-25.89077.45876-25.89077-2.418-.372-13.155-2.52958-13.155-3.94311,16.23013-3.94311,16.23013-6.47269-.48981-7.19188-1.209-1.43837-41.88017-1.43837-41.88017-2.15756-12.22619,2.15756-17.9797,3.59594-10.78781,3.59594-10.78781Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#2f2e41"
                />
                <path
                  d="M270.938,410.54843s23.014,65.44609,24.45239,79.82985-1.43838,63.28853-1.43838,63.28853,20.85645,84.49856,16.54132,85.21775-28.3456,4.12889-29.06478.533-3.28315-9.16321-2.564-11.32077S276.707,618.02811,276.707,613.713s-10.08416-26.96353-9.365-30.55947-12.22619-56.81584-14.38376-61.131-7.91106-34.521-7.91106-34.521-32.36346,88.46011-33.08264,90.61767-3.59594,5.75351-2.15757,6.47269-2.15756,5.75351-2.15756,5.75351-7.45231,29.84028-7.45231,31.27866,1.43838,17.71926-1.43837,18.43845-32.26142.67328-33.6998-4.361,15.26134-63.33577,15.26134-63.33577,12.2262-36.67858,8.63026-46.028,3.59594-65.4461,6.47269-69.76122,3.59594-30.20589,3.59594-30.20589Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#2f2e41"
                />
                <circle
                  cx="67.04844"
                  cy="101.1913"
                  r="23.01401"
                  fill="#ffb9b9"
                />
                <path
                  d="M235.69781,295.47837s-25.89077.71919-27.32914-1.43837-37.39777,5.03431-37.39777,19.41807,20.85645,70.48041,20.85645,70.48041,7.91106,40.27451,5.7535,44.58964,79.82985-9.34944,77.67229-16.54132-14.38376-23.014,1.43837-36.67858,22.29483-28.04832,22.29483-28.04832l-18.69889-49.624s-18.69888-2.87676-23.014,0S235.69781,295.47837,235.69781,295.47837Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#6c63ff"
                />
                <path
                  d="M293.952,350.85584l5.03432-3.59594s46.7472-48.90478,34.521-58.25422S303.30146,271.026,294.67121,270.3068s-15.82213-7.19188-15.82213-7.19188-9.34945-16.54132-16.54132-5.7535-15.10295,14.38375-5.03432,17.97969,16.54132,2.15757,21.57564,5.75351,24.45238,9.34944,15.82213,11.507a77.19464,77.19464,0,0,0-14.38376,5.03432L270.938,314.17726Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#6c63ff"
                />
                <path
                  d="M212.68379,472.39858s18.69889,27.32914,5.03432,25.89076-20.13726-20.13726-20.13726-20.13726Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#ffb9b9"
                />
                <path
                  d="M176.00521,309.86213l-5.03431,3.59594s-16.54132,90.61767,0,114.35086,17.9797,22.29483,17.9797,22.29483,2.87675-2.15757,4.31512,12.22619-.71918,20.13726,3.59594,20.13726,23.7332-4.31513,22.29483-7.91107-10.78782-24.45238-11.507-29.4867-4.31513-16.54132-5.7535-23.014,6.47269-10.06863,2.87675-23.7332-8.63026-38.11695-8.63026-43.15127S176.00521,309.86213,176.00521,309.86213Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#6c63ff"
                />
                <path
                  d="M200.8172,245.85441c0,7.74533,10.62571,14.02416,23.73319,14.02416s25.17158,4.1494,25.17158-3.59594-12.06409-24.45238-25.17158-24.45238S200.8172,238.10908,200.8172,245.85441Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#2f2e41"
                />
                <path
                  d="M258.85586,282.712s.96872,26.07138-24.939,24.633,3.50113-22.2854,3.50113-22.2854Z"
                  transform="translate(-156.06358 -165.15996)"
                  fill="#2f2e41"
                />
                <rect
                  y="567.37896"
                  width="702.90551"
                  height="2.24072"
                  fill="#3f3d56"
                />
              </svg>
              <h3>Stay on top of current, past, and in-progress bug reports</h3>
            </div>
            <div className="rBody-frame">
              <h3 className="rBody-title">Enjoy pure freedom</h3>
              <h4 className="rBody-sub">
                Choose the events you want to track yourself. No need to pick
                them from a list used by every dev in the universe. Break your
                chains!
              </h4>
            </div>
            <div className="signup-container">
            <h1 className='signup-banner-h1'>The new way of bug killing<br />for everyone</h1> 
            <button className='Links-getStarted'><Link to="/register">Get Started</Link></button>
            </div>
          </section>
        
          <section className="Landing-footer-container">
          <div className='landing-footer-left'>
                <span className='footer-madeby'>{"Made with coffee & love by "}<br /><b classname='footer-name'>Evan Miller</b> &#169;2020</span>
            </div>
            <ul className='landing-footer-right'>
            <li className='footer-about f-li'>About</li>
                <li className='footer-contact f-li'>Contact Me</li>
                <li className='footer-portfolio f-li'>View more work</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}
