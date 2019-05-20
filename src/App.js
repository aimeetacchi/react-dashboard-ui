import React from 'react';
import './App.scss';

import Header from './components/header';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
