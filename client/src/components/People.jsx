const React = require('react');
import ajax from '../ajax';
import Listings from './Listings'


class People extends React.Component{

  constructor(){
    super()
    this.getNext = this.getNext.bind(this)
    this.getPrev = this.getPrev.bind(this)
    this.state = {nextUrl: null, prevUrl: null, results: []}
  }

  componentDidMount(){
   var url = "http://swapi.co/api/people"; 
    this.makeRequest(url);
   }

   makeRequest(url){
   ajax.get(url,function(data){
    this.setState({nextUrl: data.next, prevUrl: data.previous, results: data.results})
    console.log(this.state.results);
    console.log(this.state.nextUrl);
    console.log(this.state.prevUrl);
    }.bind(this))
  }

   getNext(){
    if (this.state.nextUrl != null){
      this.makeRequest(this.state.nextUrl);
    }
   }

   getPrev(){
    if (this.state.prevUrl != null){
      this.makeRequest(this.state.prevUrl);
    }
   }   

   getDetail(){
    console.log("getDetail called")
   }

  render(){
       return(
         <div>
         <h4> People </h4>
         <Listings toList={this.state.results}/>
         <button onClick={this.getPrev}>Previous</button>
         <button onClick={this.getNext}>Next</button>
      </div>
     )
  }

}

export default People;
