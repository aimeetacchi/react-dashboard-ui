import React, { Component } from 'react';
import Notes from './notes';
import Sidebar from './sideBar';
import User from './user';


export default class dashboard extends Component {
  render() {
    return (
      <div className="dashboard_container">
        
        <Sidebar/>

        <div className="dashboard__overview">
            <div> Hi, /Username/, you are viewing your dashboard. </div>

          <User/>
          <Notes/>
        </div>
      

      </div>
    )
  }
}
