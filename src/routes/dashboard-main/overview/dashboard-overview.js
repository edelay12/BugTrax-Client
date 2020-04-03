import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './dashboard-overview.css'
import { Trigger } from '../../../components/utils/utils';
import TimelineEvent from '../../../components/timeline-event/timeline-event';

export default class Overview extends Component {
    state = { error: null }
    componentDidMount(){
        console.log(this.props.teamId)
    }
    render(){
    const { error } = this.state;
    //check user available on key input
    return (
      <div className="Overview">
          <section className='Overview-issues-container'>
        <Collapsible trigger={<Trigger name='Active'/>}>
        <div className='Overview-issues-frame'>
            <div className='O-issue'>
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        </div>

        <div className='O-issue'>
        <p>It can even be another Collapsible component. Check out the next section!</p>
        </div>
        </div>
 </Collapsible>

      <Collapsible trigger={<Trigger name='Resolved'/>}>
      <div className='Overview-issues-frame'>
            <div className='O-issue'>
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        </div>
        
        <div className='O-issue'>
        <p>It can even be another Collapsible component. Check out the next section!</p>
        </div>
        </div>
      </Collapsible>

      <Collapsible trigger={<Trigger name='Recently modified'/>}>
      <div className='Overview-issues-frame'>
            <div className='O-issue'>
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        </div>
        
        <div className='O-issue'>
        <p>It can even be another Collapsible component. Check out the next section!</p>
        </div>
        </div>
      </Collapsible>
      </section>

      <section className='Overview-timeline'>
          <h3>Timeline</h3>
        <TimelineEvent />
        <TimelineEvent />
        <TimelineEvent />
        <TimelineEvent />
      </section>
      </div>
    )
    }
}