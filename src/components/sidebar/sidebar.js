import React from 'react';
import { NavLink } from 'react-router-dom';
import { faExclamationCircle, faChartPie, faUsers, faAngleDoubleLeft, faCaretDown, faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import { faCircle } from '@fortawesome/fontawesome-free-regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Sidebar({sidebar, url, sIsOpen}){

    
    return (
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
        <li className='SidebarL'><NavLink to={`${url}/team`} activeClassName='SidebarLActive'><FontAwesomeIcon className='faIcon faTeam' icon={faUsers}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Chat</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{200}</span></NavLink></li>
        <li className='SidebarL'><NavLink to={`${url}/trends`} activeClassName='SidebarLActive'><FontAwesomeIcon className='faIcon faTrends' icon={faChartPie}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Trends</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{200}</span></NavLink></li>
    </ul>
    </section>
    )
}