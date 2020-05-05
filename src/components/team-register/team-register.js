import React from 'react';
import './team-register.css';
import { useForm } from 'react-hook-form';
import AuthApiService from '../../services/auth-api-service';
import UserApiService from '../../services/user-api-service';

export default function TeamRegister({history}){
    const { register, handleSubmit, errors, getValues} = useForm();

    const onSubmit = DATA => {
        //check fields
        //return to login
        //token get user header ***


        AuthApiService.postTeam(DATA)
        .then(success => {
            console.log('Success')
            console.log(success)
            UserApiService.setUserTeam(success.id)
            .then(() => history.push('/dashboard/overview'))
            .catch(err => console.log(err))
            //history push 
        })
        .catch(err=> console.log(err)); 

        // on green show success page,
        //push history to success new team
        //otherwise show error page
            }

    return (

        <form className='Team-register-form' onSubmit={handleSubmit(onSubmit)}>
            <span className='Team-register-dir'>Register your team</span>
            <div className='Tr-col'>
            <label htmlFor='Team-register-c' className='Team-register-l'>Company*</label>
            <input required className='Team-register-c bt-input' name='company' type='text' ref={register}/>
            </div>
            <div className='Tr-col'>
            <label htmlFor='Team-register-c2' className='Team-register-l'>Team name*</label>
            <input className='Team-register-c bt-input' name='team_name' type='text' required ref={register}/>
            </div>
            <div className="Register-password">
            {errors.team_password && (
          <div className='error-div' role="alert">
        <p className='red'>Password required:</p>
          <ul className='error-list'>
            <li>At least 1 special character</li>
            <li>At least 1 uppercase letter</li>
            <li>Be longer than 10 characters</li>
          </ul>
          </div>
          )
        }
          </div>
            <div className='Tr-col'>
            <label className='Team-register-l'>Choose a password*</label>
            <input className='Team-register-c bt-input' name='team_password' type='password' required ref={register({ pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/ , minLength : 10})}/>
            </div>
            <div className='Tr-col'>
            <label className='Team-register-l' htmlFor='team_passwordRepeat'>Re-enter password*</label>
            <input className='Team-register-c bt-input' name='team_passwordRepeat' type='password' required ref={register( {   validate: { matchesPreviousPassword: (value) => {
              const { team_password } = getValues();
              return team_password === value || 'Passwords should match';
            },
          }})}/>
            </div>
            {errors.team_passwordRepeat && <p className='red'>{errors.team_passwordRepeat.message}</p>}
            <div className='Tr-row'>
            <input className='Team-register-check bt-input' name='team_admin' type='checkbox' ref={register}/>
            <label className='Team-register-l' htmlFor='team_admin'>  Are you this team's administrator?</label>
            </div>

            <button className='Team-register-submit-b Radial-button' type="submit">Create team</button>
        </form>
    )
}