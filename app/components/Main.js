var React = require('react');

var Navbar = require("./children/Navbar.js");
// var router = require('../../routes/routes');

// very basic component to get started
var Main = React.createClass({

getInitialState: function() {
  return {

  }
},
componentDidMount: function(){
  // router.get().then(function(){
      
  // })
},

handleChange: function(e) {
  
  console.log("handlChange inside Main: ");
  this.setState({
    text: e.target.value
  })
},


 render: function(){
      var children = React.cloneElement(this.props.children, )
      
      return (     
        <div className = "row">
          <Navbar />
            <div className = "container">
              {this.props.children}
            </div>
        </div>
     )
   }
});
      
      
module.exports = Main;
