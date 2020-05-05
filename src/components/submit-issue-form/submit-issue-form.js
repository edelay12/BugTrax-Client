import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import './submit-issue-form.css';
import { useForm } from 'react-hook-form';
import IssueApiService from '../../services/issues-api-service';
import TeamsApiService from '../../services/teams-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/fontawesome-free-solid';
import MainContext from '../../contexts/main-context';
import * as Scroll from 'react-scroll';
import TokenService from '../../services/token-service';



export default function SubmitIssueForm(props){
    const { register, handleSubmit, errors, setError} = useForm();
    const [category, changeCategory] = useState(null);
    const [priority, changePriority] = useState(null);
    const [severity, changeSeverity] = useState(null);
    const [assignee, changeAssignee] = useState(null);
    const [success , showSuccess] = useState(false);

    const defaultOptions = {
        priority : [
        { value: 'low', label: 'low' },
        { value: 'normal', label: 'normal' },
        { value: 'high', label: 'high' },
        { value: 'urgent', label: 'urgent' }
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
    }

    const assigneeOptions = [];

    const ContextMain = useContext(MainContext);

    useEffect(() => {
        TeamsApiService.getTeamUserList(TokenService._getUserInfo(TokenService.readJwtToken()).teamId)
        .then(users => {
            users.every((v, i) => assigneeOptions.push({value: v.full_name, label: v.full_name}))
        })
        .catch(err => console.log(err))
      }, [assigneeOptions]);

const onSubmit = DATA => {

    DATA.assignee = assignee;
    DATA.resolution = 'new';
    DATA.category = category;
    DATA.severity = severity;
    DATA.priority = priority;

    DATA.team_id = 2; ///get team id from context
    DATA.creator_id = 1; //from context
    DATA.creator_user_name = 'jApple'; //from context

    for (const [key, value] of Object.entries(DATA)) {
        if (value == null && key !== 'assignee') {
        return setError(key, '', 'This field is required');
        }
      }

      IssueApiService.postIssue(DATA, DATA.team_id)
      .then(res => {
          showSuccess(true);
          setTimeout(props.closeSif, 2000);  

          //refresh issues
          IssueApiService.getActiveIssues(2)
          .then(issues => {
            ContextMain.setActiveIssues(issues);
          })
          IssueApiService.getIssuesByTeamId(DATA.team_id)
          .then(issues => {
            ContextMain.setTeamIssues(issues);   
      }) 
    })
      .catch(err => console.log(err));
}

    return (
<form className='SubmitIssueForm' onSubmit={handleSubmit(onSubmit)} >
   { success ? <div className='sif-success'>
       <FontAwesomeIcon className='green-logo-sif' icon={faCheckCircle}/>
       <h2 className='sif-success-banner'>Your issue was added</h2>
</div> : (
   <React.Fragment>
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
    <Select ref={register({name: 'assignee', required: true})} options={assigneeOptions} onChange={e => changeAssignee(e.value)} name='assignee'/>
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
    </React.Fragment>
   )}
</form>
    )
}