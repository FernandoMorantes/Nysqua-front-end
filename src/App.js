import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/signIn/SignIn.css'
import SingIn from './components/signIn/SignIn.js';

function App() {
  return (
    <div className="App">
      <div className="logo_Card">
        <h1>Logo de la aplicacion</h1>
      </div>
      <div className="card">
          <SingIn/>
      </div>
    </div>
  );
}

export default App;
