import React, { Component , useEffect, useState, useContext} from 'react';
import { Route, Switch, useRouteMatch , match, NavLink} from "react-router-dom";
import Overview from './overview/dashboard-overview';
import './dashboard-main.css'
import Issues from './issues/dashboard-issues';
import IssuePage from '../issue-page/issue-page';
import SubmitIssueForm from '../../components/submit-issue-form/submit-issue-form';
import { faExclamationCircle, faChartPie, faUsers, faAngleDoubleLeft, faCaretDown, faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import { faCircle } from '@fortawesome/fontawesome-free-regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TeamChat from './team/team';
import TeamsApiService from '../../services/teams-api-service';
import TeamTrends from './trends/trends';
import MainContext from '../../contexts/main-context';
import IssueApiService from '../../services/issues-api-service';


export default function Dashboard ({match}) {

    const ContextMain = useContext(MainContext);

    let { path, url } = useRouteMatch();
    let { teamId } = match.params;
    let [sidebar, sIsOpen] = useState(true);
    let [sif , showSif] = useState(false);
    
    useEffect(() => {
     //get team member list
TeamsApiService.getTeamUserList(2)
.then(users => ContextMain.setTeamList(users))
.catch(err => console.log(err));

//get issues
IssueApiService.getIssuesByTeamId(2)
.then(issues => {
    console.log(issues)
    ContextMain.setTeamIssues(issues)
})

.catch(err => console.log(err));

    }, []) 

    return (
            <div className={sidebar ? 'Dashboard' : 'Dashboard-closed'}>
            <header className='Dashboard-header'>
                <div className='Header-left-c'>
                    <span>Home</span>
                    <span>About</span>
                </div>
                <div className='Team-name-c'>
                <h2 className='Team-name'>Team Name</h2>
                </div>
            <div className='Header-right-c'>
                <span className='Show-sif-toggle' onClick={() => showSif(!sif)}><FontAwesomeIcon icon={faPlusCircle}/></span>
                <span className='Header-logout-link'>Logout</span>
                <img id='Header-profile' src='https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=672&q=80' alt='headshot-1' />
                <FontAwesomeIcon className='Profile-options-toggle' icon={faCaretDown} />
            </div>
            </header>
            <section className={sidebar ? 'Dashboard-sidebar' : 'Dashboard-sidebar-closed'}>
            {sidebar ? 
            <h2 id={'Sidebar-logo'}>BugTrax</h2>
            : 
            <h2 id={'Sidebar-logo-closed'}>B</h2>
            }
            <ul className='Sidebar-links'>
            <li className={ sidebar ? 'SidebarL-toggle-lines' : 'SidebarL-toggle-lines-closed'} ><span onClick={()=> sIsOpen(!sidebar)}><FontAwesomeIcon className={sidebar ? 'Sidebar-toggle': 'Sidebar-toggle-closed'} icon={faAngleDoubleLeft} /></span></li>
                <li className='SidebarL'><NavLink to={`${url}`} activeClassName='SidebarLActive'><FontAwesomeIcon className='faIcon faOverview' icon={faCircle}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Overview</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{200}</span></NavLink></li>
                <li className='SidebarL'><NavLink to={`${url}/issues`} activeClassName='SidebarLActive'><FontAwesomeIcon className='faIcon faIssues' icon={faExclamationCircle}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Issues</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{200}</span></NavLink></li>
                <li className='SidebarL'><NavLink to={`${url}/team`} activeClassName='SidebarLActive'><FontAwesomeIcon className='faIcon faTeam' icon={faUsers}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Team</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{200}</span></NavLink></li>
                <li className='SidebarL'><NavLink to={`${url}/trends`} activeClassName='SidebarLActive'><FontAwesomeIcon className='faIcon faTrends' icon={faChartPie}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Trends</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{200}</span></NavLink></li>
            </ul>
            </section>
            <section className='Dashboard-main'>
            {/* pass team id in route params from props */}
      <Route exact path={`${path}/`} render={props => <Overview teamId={teamId}/>} />
      <Route exact path={`${url}/issues`} render={props => <Issues toggleSif={()=> showSif(!sif)} teamId={teamId}/>} />
      <Route exact path={`${url}/team`} render={props => <TeamChat teamId={teamId}/>} />
      <Route exact path={`${url}/trends`} render={props => <TeamTrends teamId={teamId}/>} />
      <Route exact path={`${url}/overview`} component={Overview} />
      <Route exact path={`${url}/issue/:issueId`} render={props => <IssuePage />} />
      { sif && <SubmitIssueForm closeSif={() => showSif(false)} /> }
            </section>
</div>
        )
    }

