import React from 'react';
import ajax from '../ajax';

class Home extends React.Component{

  render(){
    return(
      <div>
        <h4> Home </h4>
        <p> We have lots of information about Star Wars here.</p>
        <p> Select a topic from the list above.</p>
      </div>
    )
  }
}

module.exports = Home;