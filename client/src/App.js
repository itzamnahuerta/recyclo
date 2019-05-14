import React from 'react';
// import "./styles/App.scss";
import {Route} from 'react-router-dom';
import './styles/App.scss'

import Header from './components/Header/Header'
import Materials from './components/Materials/Materials'
// import Map from './components/Map/Map'
// import UserProfile from './components/UserProfile/UserProfile'
import './styles/App.scss';
import Dashboard from './components/Dashboard/Dashboard';


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
    <Route to='/Dashboard' component={Dashboard}/>
    </div>
  );
}

export default App;
