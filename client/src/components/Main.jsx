import React from 'react';
import People from './People.jsx';
import Home from './Home.jsx';
import Planets from './Planets.jsx';
import Ships from './Ships.jsx';

import {Link} from 'react-router'

class Main extends React.Component {
  render(){
    return (
    <div>
      <h4>Main App</h4>
      <ul>
        <li><Link to="/home">Home</Link>
        </li>
        <li><Link to="/people">People</Link>
        </li>        
        <li><Link to="/planets">Planets</Link>
        </li>       
        <li><Link to="/ships">Ships</Link>
        </li>      
      </ul>
      {this.props.children}
    </div>
    )
  }
};

export default Main;

// var React = require('react');
// var About = require('./About.jsx');
// var Home = require('./Home.jsx');
// var Pricing = require('./Pricing.jsx')

// var Main = React.createClass({
//   getInitialState:function(){
//     return{page:null};
//   },

//   gotoHome:function(e){
//     e.preventDefault();
//     this.setState( { page: '/home'});
//   },
//   gotoAbout:function(e){
//     e.preventDefault();
//     this.setState( { page: '/about'});
//   },
//   gotoPricing:function(e){
//     e.preventDefault();
//     this.setState( { page: '/pricing'});
//   },

//   render: function(){
//     var child
//     switch (this.state.page) {
//       case '/about': child = <About/>; break;
//       case '/pricing': child = <Pricing/>; break;
//       default:  child = <Home/>;
//     }

//     return(
//       <div>
//         <h4> Main App</h4>
//         <ul>
//           <li><a onClick = {this.gotoHome} href='' page="/home">Home</a></li>
//           <li><a onClick = {this.gotoAbout} href='' page="/about">About</a></li>
//           <li><a onClick = {this.gotoPricing} href='' page="/pricing">Pricing</a></li>
//         </ul>
//         {child}
//       </div>
//     )
//   }
// })

// module.exports = Main;
