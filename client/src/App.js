import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './styles/App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import AccountSettings from './components/AccountSettings/AccountSettings';
import AddLocation from './components/EditLocation/AddLocation';
import authService from './Services/AuthService';
function App() {
  const authenticate = authService.isAuthenticated()
  return (
    <div className="App">
      <div className="page-title"> 
        <span className="font-one"> RE_</span> 
        <span className="font-two">CYCLO</span> 
        <span className="star-character"> *</span>
      </div>
    <main>
        <Switch>
        <Route exact path="/account-settings" component={AccountSettings}/>
        <Route exact path='/add-location' component={AddLocation}/>
      <Route exact path='/Dashboard' component={(props)=> <Dashboard {...props} authenticate={authenticate}/>}/>
        <Route exact path = '/' component={Home}/>
      </Switch>
    </main>
    </div>
  );
}

export default App;
