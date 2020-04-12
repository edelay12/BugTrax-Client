import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './submit-issue-form.css';
import { useForm } from 'react-hook-form';
import IssueApiService from '../../services/issues-api-service';
import TeamsApiService from '../../services/teams-api-service';

export default function SubmitIssueForm(props){
    const { register, handleSubmit, errors, setError} = useForm();
    const [category, changeCategory] = useState(null);
    const [priority, changePriority] = useState(null);
    const [severity, changeSeverity] = useState(null);
    const [assignee, changeAssignee] = useState(null);

    const defaultOptions = {
        priority : [
        { value: 'low', label: 'low' },
        { value: 'normal', label: 'normal' },
        { value: 'high', label: 'high' },
        { value: 'urgen', label: 'urgent' }
      ],
        severity : [
        { value: 'tweak', label: 'tweak' },
        { value: 'minor', label: 'minor' },
        { value: 'major', label: 'major' },
        { value: 'crash', label: 'crash' },
      ],
        category : [
        { value: 'api', label: 'api' },
        { value: 'auth', label: 'auth' },
        { value: 'bug', label: 'bug' },
        { value: 'code cleanup', label: 'code cleanup' },
        { value: 'css', label: 'css' },
        { value: 'database', label: 'database' },
        { value: 'feature', label: 'feature' },
        { value: 'html', label: 'html' },
        { value: 'javascript', label: 'javascript' },
        { value: 'migration', label: 'migration' },
        { value: 'other', label: 'other' }
      ],
      assignee : [],
    }

    useEffect(() => {
        console.log('open');
        TeamsApiService.getTeamUserList(2)
        .then(users => {
            console.log(users)
            users.every((v, i) => defaultOptions.assignee.push({value: v.full_name, label: v.full_name}))
            
        })
        .catch(err => console.log(err))
      //get options from team context 
      }, []);

const onSubmit = DATA => {

    DATA.assignee = assignee;
    DATA.resolution = 'new';
    DATA.category = category;
    DATA.severity = severity;
    DATA.priority = priority;

    DATA.team_id = 1;
    DATA.creator_id = 1;
    for (const [key, value] of Object.entries(DATA)) {
        if (value == null && key !== 'assignee') {
        return setError(key, '', 'This field is required');
        }
      }

      IssueApiService.postIssue(DATA, 1)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    //get team and user
console.log(DATA)
console.log(assignee)
}

    return (
<form className='SubmitIssueForm' onSubmit={handleSubmit(onSubmit)}>
    <div className='Sif-header'>
        <label className='Sif-header-label'>Submit new issue</label>
        <span className='Sif-close-b' onClick={props.closeSif}>X</span>
    </div>

<div className='Fis-summary'>
    <input className='Fis-summary-i' type='text' name='summary' maxLength={75} placeholder='Enter a one-line summary of the issue.' required ref={register}/>
</div>
    <div className='Fis-description'>
<label className='Fis-description-label' htmlFor='Fis-description-i'>Description: </label> 
   <textarea className='Fis-description-i' name='description' required placeholder='Steps to reproduce, what you expected to see, and what you saw instead.' ref={register}/> 
    </div>

    <div className='Fis-row'>
        <label className='Fis-label'>Priority:</label>
        <Select ref={register({name: 'priority', required: true})} options={defaultOptions.priority} onChange={e => changePriority(e.value)} name='priority' />
    </div>
{errors.priority && <span className='red'>{errors.priority.message}</span>}

    <div className='Fis-row'>
    <label className='Fis-label'>Severity:</label>
    <Select ref={register({name: 'severity', required: true})} options={defaultOptions.severity} onChange={e => changeSeverity(e.value)} name='severity'/>
    </div>
{errors.severity && <span className='red'>{errors.severity.message}</span>}

    <div className='Fis-row'>
    <label className='Fis-label'>Assignee:</label>
    <Select ref={register({name: 'assignee', required: true})} options={defaultOptions.assignee} onChange={e => changeAssignee(e.value)} name='assignee'/>
    </div>
{errors.assignee && <span className='red'>{errors.assignee.message}</span>}

    <div className='Fis-row'>
    <label className='Fis-label'>Category:</label>
    <Select options={defaultOptions.category} ref={register({name: 'category', required: true})} onChange={e => changeCategory(e.value)} name='category'/>
    </div>
{errors.category && <span className='red'>{errors.category.message}</span>}
    <div className='Sif-footer'>
        <button type='submit' className='Sif-submit-b Radial-button'>Create Issue</button> 
        <button type='button' className='Sif-cancel-b' onClick={props.closeSif}>Cancel</button>
    </div>
</form>
    )
}