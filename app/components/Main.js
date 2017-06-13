var React = require('react');

var Navbar = require("./children/Navbar.js");
var Search = require("./children/Search.js");
var Results = require("./children/grandchildren/Results.js");
var Favorited = require('./children/grandchildren/greatGrandChildren/Favorited.js');

// very basic component to get started
var Main = React.createClass({

 getInitialState: function(){
  return { 
    text: "",
    favorited: false,
   }  
 },

 componentDidUpdate: function(){

 },
 
 handleSubmit: function(text){
    console.log("Main handleSubmit arg: " + text);
    this.setState({
      text: text,
    }); 
    this.componentDidUpdate();
  },

 render: function(){
      return (     
        <div className = "row">
          <Navbar />
          <Search handleSubmit={this.handleSubmit} />
          <Results handleSubmit={this.handleSubmit} />
          <Favorited />
        </div>
     )
   }
});
      
      
module.exports = Main;
