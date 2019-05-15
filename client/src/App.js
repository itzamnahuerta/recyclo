import React from 'react';
import {Route} from 'react-router-dom';
import './styles/App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import AccountSettings from './components/AccountSettings/AccountSettings';
import AddLocation from './components/EditLocation/AddLocation';

function App() {
  return (
    <div className="App">
      <div className="page-title"> 
        <span className="font-one"> RE </span> 
        <span className="font-two">CYCLO</span> 
        <span className="star-character"> *</span>
      </div>
    <main>
      <Route exact path="/account-settings" component={AccountSettings}/>
      <Route exact path='/edit-location' component={AddLocation}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path = '/' component={Home}/>
    </main>
    </div>
  );
}

export default App;
