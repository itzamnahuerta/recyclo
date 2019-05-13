import React from 'react';
// import "./styles/App.scss";

import './components/styles/App.scss'

import Header from './components/Header/Header'
import Materials from './components/Materials/Materials'
import CreateUserContainer from './components/CreateUser/CreateUserContainer';
// import Map from './components/Map/Map'
// import UserProfile from './components/UserProfile/UserProfile'
import './styles/App.scss';


function App() {
  return (
    <div className="App">
      <div className="page-title"> 
        <span className="font-one"> RE </span> 
        <span className="font-two">CYCLO</span> 
        <span className="star-character"> *</span>
      </div>

    <Header />
    <Materials />
    <CreateUserContainer/>
    </div>
  );
}

export default App;
