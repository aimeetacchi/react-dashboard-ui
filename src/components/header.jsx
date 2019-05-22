import React, { Component } from 'react';

export default class Header extends Component {

  render(){
    console.log(this.props)
      return (
          <React.Fragment> 
            <header>
                <img className="logo" src="/logo.png" alt="logo"/>
              
                <div onClick={this.props.isActive} id="burgermenu">
                    <div id="bar" className={this.props.active ? 'rotatebar1': null}></div>
                    <div id="bar" className={this.props.active ? 'hidebar2': null} ></div>
                    <div id="bar" className={this.props.active ? 'rotatebar3': null}></div>
                </div>

            </header>
            <nav className={'main_nav ' + this.props.active ? 'toogleNav': null}>
              <ul>
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
              </ul>
            </nav>
        </React.Fragment>
      )
  }
}
