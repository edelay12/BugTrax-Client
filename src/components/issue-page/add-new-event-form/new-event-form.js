import React, {useState, useContext } from 'react';
import Select from 'react-select';
import './new-event-form.css';
import EventApiService from '../../../services/issue-events-api-service';
import { useForm } from 'react-hook-form';
import MainContext from '../../../contexts/main-context';

export default function NewEventForm({issueId, showUpdate}){
const ContextMain = useContext(MainContext);

const statusOptions = [
   { value: 'feedback', label: 'feedback'},
    {value: 'acknowlagedment',  label: 'acknowlagedment'},
    {value: 'in-progress', label: 'in-progress'},
    {value: 'resolved',  label: 'resolved'},
]
const { register, handleSubmit, errors, setError} = useForm();
const [status, setStatus] = useState(null);


const onSubmit = DATA => {
    DATA.status = status;
    DATA.issue_id = Number(issueId);
    DATA.user_id = 2; // use context get user id / name
    DATA.user_name = 'jApple';
    DATA.team_id = 2;

    EventApiService.postNewEvent(DATA)
    .then(res => {
        EventApiService.getEventsByIssueId(issueId)
        .then(events => {
            ContextMain.setTimeline(events)
             window.location.reload();
        })
    })
    .catch(err => console.log(err))

}

    return (
        <div className='NeF-container'>
            <form className='NeF-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='NeF-header'>
                <span className='NeF-title'>Add issue update</span>
                <span className='NeF-number'>issue #{issueId}</span>
                </div>

                <div className='NeF-input-container'>
                <label className='NeF-summary-label' htmlFor='NeF-summary'>Update: </label> 
                    <input className='NeF-summary'  type='text' name='change_summary' maxLength={75} placeholder='Enter a one-line summary of the update.' ref={register}/>
                    <label className='NeF-description-label' htmlFor='NeF-description'>Comments: </label> 
                    <textarea className='NeF-description' name='change_description' required placeholder='Please enter update comments here.' ref={register}/>
                </div>

                <div className='NeF-status-container'>
                <label className='NeF-status-label' htmlFor='NeF-status'>Status: </label> 
                    <Select options={statusOptions} onChange={e => setStatus(e.value)} />
                </div>

<div className='NeF-submit-buttons-container'>
    <button className='NeF-submit-button Radial-button'>Submit</button>
    <button className='NeF-cancel-button' onClick={() => showUpdate(false)}>Cancel</button>
</div>
            </form>
        </div>
    )
}