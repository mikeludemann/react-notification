import React from 'react';
import logo from './logo.svg';
import './App.css';

import Notification from './components/notification';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Notification 
          position="middle"
          text="An error occured!"
          type="danger"
        ></Notification>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
