import React from 'react';
@import "./styles/App.scss";
import Header from './components/Header/Header'
import Materials from './components/Materials/Materials'
// import Map from './components/Map/Map'
// import UserProfile from './components/UserProfile/UserProfile'



function App() {
  return (
    <div className="App">
    <h1> recyclo. </h1>
    <Header />
    <Materials />

    </div>
  );
}

export default App;
