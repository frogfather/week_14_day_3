import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import People from './components/People.jsx';
import Home from './components/Home.jsx';
import Planets from './components/Planets.jsx';
import Ships from './components/Ships.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="people" component={People}/>
        <Route path="planets" component={Planets}/> 
        <Route path="ships" component={Ships}/>       
      </Route>
    </Router>,
    document.getElementById('app')
    );

}

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Main = require('./components/Main.jsx');

// window.onload = function(){
//   ReactDOM.render(
//     <Main></Main>,
//     document.getElementById('app')
//   );
// }
