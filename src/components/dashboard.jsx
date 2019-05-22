import React, { Component } from 'react';
import Notes from './notes';
import Sidebar from './sideBar';
import User from './user';


export default class dashboard extends Component {
  constructor(props){
    super()
    this.state = {
        user: {
          name: 'John Doe',
          email: 'email@gmail.com',
          number: '07564372533'
        }
    }
  }


  editUser = () => {
      console.log('editing user');
  }
  
  render() {
    
    return (
      <div className="dashboard_container">
        
        <Sidebar/>

        <div className="dashboard_inner_container">
            <div> Hi {this.state.user.name}, welcome to your dashboard. </div>
            <div className="dashboard__overview">
              <User user={this.state.user} editUser={this.editUser}/>
              <Notes/>
            </div>
          
        </div>
      

      </div>
    )
  }
}
