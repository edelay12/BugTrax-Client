import React from 'react';
import './team-auth.css'

export default function TeamAuth(){


    return (
        <section className='Team-auth'>
       <form className='Team-auth-form'>
            <span className='Team-auth-label'>Selected Team (id)</span>
            <label htmlFor='Team-auth-i' className='Team-auth-dir'>Please enter the password to join (selected team)</label>
            <input className='Team-auth-i' type='text' name='Team-auth-i' placeholder='Please enter password...' />
            <button className='Team-auth-button Radial-button' type='submit'>Submit</button>
       </form>
        </section>
 
    )
}
