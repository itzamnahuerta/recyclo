import React from 'react';
import Header from './components/Header/Header'
import Materials from './components/Materials/Materials'
import CreateUserContainer from './components/CreateUser/CreateUserContainer';
// import Map from './components/Map/Map'
// import UserProfile from './components/UserProfile/UserProfile'
import './styles/App.scss';



function App() {
  return (
    <div className="App">
    <h1> recyclo. </h1>
    <Header />
    <Materials />
    <CreateUserContainer/>
    </div>
  );
}

export default App;
