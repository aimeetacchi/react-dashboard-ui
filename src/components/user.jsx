import React, { Component } from 'react';

export default class user extends Component {
  render() {
    const {name, email, number} = this.props.user;
    return (
      <div className="user_container">

        <div className="user__avatar">
          <img src="/avatar.png" alt="avatar"/>
        </div>

        <i onClick={this.props.editUser} className="fas fa-edit"></i>
        
        <div className="user__info">
          <h2>User Details</h2>
          <p>Name: {name}</p>
          <p>Email Address: {email} </p>
          <p>Number: {number}</p>
        </div>
      </div>
    )
  }
}
