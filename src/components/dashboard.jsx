import React, { Component } from 'react'

import Sidebar from './sideBar';
import Createuser from './createUser';
import User from './user';


export default class dashboard extends Component {
  render() {
    return (
      <div>
        dashboard
        
        <Sidebar/>
        <Createuser/>
        <User/>

      </div>
    )
  }
}
