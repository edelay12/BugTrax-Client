import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { faExclamationCircle, faChartPie, faUsers, faAngleDoubleLeft, faCaretDown, faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import { faCircle } from '@fortawesome/fontawesome-free-regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar.css'
import MainContext from '../../contexts/main-context';

export default function Sidebar({sidebar, url, sIsOpen}){
  const ContextMain = useContext(MainContext);
    
    return (
    <section className={sidebar ? 'Dashboard-sidebar' : 'Dashboard-sidebar-closed'}>
    <Link to={`${url}/overview`}>{
      sidebar ? 
    <h2 id={'Sidebar-logo'}>BugTrax</h2>
    : 
    <h2 id={'Sidebar-logo-closed'}>B</h2>
   } </Link> 
    <ul className='Sidebar-links'>
    <li className={ sidebar ? 'SidebarL-toggle-lines' : 'SidebarL-toggle-lines-closed'} ><span onClick={()=> sIsOpen(!sidebar)}><FontAwesomeIcon className={sidebar ? 'Sidebar-toggle': 'Sidebar-toggle-closed'} icon={faAngleDoubleLeft} /></span></li>
      <NavLink to={`${url}/overview`} activeClassName='SidebarLActive'>  <li className='SidebarL'><FontAwesomeIcon className={sidebar ? 'faIcon faOverview' : 'faIcon-closed faOverview'} icon={faCircle}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Overview</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{}</span></li></NavLink>
        <NavLink to={`${url}/issues`} activeClassName='SidebarLActive'><li className='SidebarL'><FontAwesomeIcon className={sidebar ? 'faIcon faIssues' : 'faIcon-closed faIssues'}icon={faExclamationCircle}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Issues</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{ContextMain.activeIssues.length}</span></li></NavLink>
       <NavLink to={`${url}/team`} activeClassName='SidebarLActive'> <li className='SidebarL'><FontAwesomeIcon className={sidebar ? 'faIcon faTeam' : 'faIcon-closed faTeam'} icon={faUsers}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Chat</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{ContextMain.teamList.length}</span></li></NavLink>
       <NavLink to={`${url}/trends`} activeClassName='SidebarLActive'> <li className='SidebarL'><FontAwesomeIcon className={sidebar ? 'faIcon faTrends' : 'faIcon-closed faTrends'} icon={faChartPie}/><span className={sidebar ? 'Sidebar-title' : 'Sidebar-title-closed'}>Trends</span><span className={sidebar ? 'd-num' : 'd-num-closed'}>{2}</span></li></NavLink>
    </ul>
    </section>
    )
}