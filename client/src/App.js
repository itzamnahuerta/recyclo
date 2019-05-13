import React from 'react';
import Header from './components/Header/Header'
import Materials from './components/Materials/Materials'
// import Map from './components/Map/Map'
// import UserProfile from './components/UserProfile/UserProfile'
import LoginForm from './components/LoginForm/LoginForm';
import CreateUser from './components/CreateUser/CreateUser';


function App() {
  return (
    <div className="App">
    <h1> recyclo. </h1>
    <Header />
    <Materials />
    {/* <LoginForm/> */}
    <CreateUser/>
    </div>
  );
}

export default App;
