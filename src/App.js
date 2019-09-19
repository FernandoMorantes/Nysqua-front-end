import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/signIn/SignIn.css'
import SingIn from './components/signIn/SignIn.js';

function App() {
  return (
    <div className="App">
      <div className="card">
          <SingIn/>
      </div>
    </div>
  );
}

export default App;
