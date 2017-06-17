var React = require('react');

var AddQuote = require('../AddQuotePage/AddQuote');
var Saved = require("../AddQuotePage/Saved");

var API = require('../../utils/API');


var AddQuoteParent = React.createClass({
    getInitialState: function(){
  return { 
    text: "",
    favorited: false,
   }  
 },

 componentDidUpdate: function(){

    API.saveQuote(this.state.text).then(function(data){
    console.log("COMPONENTDIDUPDATE");
    });
    console.log("componentDidUpdate this.state.text: " + this.state.text);
 },
 
 handleSubmit: function(text){
    
    this.setState({
      text: text,
    }); 
    // console.log("this.state.text: " + this.state.text);
    // console.log("text arg: " + text);
  },

    handleChange: function(text) {
        // console.log("handleChange in AddQuoteParent: " + text);
        this.setState({
            text: text
        });
        // console.log("this.state.text: " + this.state.text);
    },

    render: function() {
        return (
            <div>
                <AddQuote handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Saved  text = {this.state.text}/>
            </div>
        )
    }

});

export default AddQuoteParent;