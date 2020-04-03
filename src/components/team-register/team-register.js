import React from 'react';
import './team-register.css';

export default function TeamRegister(){
//verify passwords match
    return (
        <form className='Team-register-form'>
            <span className='Team-register-dir'>Register your team</span>
            <label htmlFor='Team-register-c' className='Team-register-l'>Company name (not required)</label>
            <input className='Team-register-c' name='Team-register-c' type='text' />
            <label htmlFor='Team-register-c2' className='Team-register-l'>Team name*</label>
            <input className='Team-register-c' name='Team-register-c2' type='text' required/>
            <label className='Team-register-l'>Choose a password*</label>
            <input className='Team-register-c' name='Team-register-c3' type='text' required/>
            <label className='Team-register-l' htmlFor='Team-register-c2'>Re-enter password*</label>
            <input className='Team-register-c' name='Team-register-c4' type='text' required/>
            <button className='Team-register-submit-b Radial-button' type="submit">Create team</button>
        </form>
    )
}