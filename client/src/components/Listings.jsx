import React from 'react';


var Listings = React.createClass({

  handleClick: function(event){
    event.persist();
    console.log(event.target.innerText)
  },

  render: function(){
      if (!this.props.toList){
        return(
          <div>
          Eek
          </div>)
      }

      var lis = this.props.toList.map(function(item,index){
      return <option value={index} key={index}>
            {item.name}
            </option>
        });

      return (
      <div>
      <ul onClick={this.handleClick}>
      {lis}
      </ul>
      </div>)
   
   
    // return (
    //   <div>
    // <ul onClick={this.handleClick}>
    //     {lis}
    // </ul>
    // </div>
    // )

  }


});



export default Listings;
