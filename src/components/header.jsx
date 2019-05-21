import React from 'react';

export default function header() {
  return (
      <React.Fragment> 
    <header>
        <img className="logo" src="" alt="logo"/>
      
        <div className="burgermenu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
    </header>
        <nav className="main-nav">
          <ul>
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
          </ul>
        </nav>
    </React.Fragment>
  )
}
