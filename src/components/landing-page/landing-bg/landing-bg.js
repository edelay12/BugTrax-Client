import React from 'react';
import Particles from 'react-particles-js';
import './landing-bg.css';

export default function LandingBg(){
    return (
        <Particles className='landing-bg' canvasClassName='landing-bg-canvas'
        params={{
            polygon: {
                enable: true,
                type: 'inside',
                move: {
                    radius: 10
                },
                url: '/assets/svg/9a665a5e54c854a7027d80208e8c7f32.svg'
            }
        }} />
    )
}

/*

 params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#343a40",
                            blur: 5
                        }
                    }
                }
            }}

            */