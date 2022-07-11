import './App.css';
import React from 'react';
import Landingpage from './components/Landingpage';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details/Details.jsx';
import NewActivity from './components/NewActivity/NewActivity';
import ActCountries from './components/Activities.jsx/ActCountries';

function App() {
  return (
    <div className="App">
      
      <Route exact path={'/'} component= {Landingpage}/>
      
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/home/details/:id'} component={Details}/>
      <Route exact path={'/home/create'} component={NewActivity}/>
      <Route exact path={'/home/activity/:activity'} component={ActCountries}/>
    </div>
  );
}

export default App;
