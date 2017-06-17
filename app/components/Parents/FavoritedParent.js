var React = require('react');

// var AddQuote = require('../AddQuotePage/AddQuote');
// var Saved = require("../AddQuotePage/Saved");


var Favorite = React.createClass({
//     getInitialState: function(){
//   return { 
//     text: "",
//     favorited: false,
//    }  
//  },

//  componentDidUpdate: function(){
//     API.saveQuote(this.state.text);
//     console.log("componentDidUpdate this.state.text: " + this.state.text);
//  },
 
//  handleSubmit: function(text){
//     console.log("Main handleSubmit arg: " + JSON.stringify(text[0]));
//     this.setState({
//       text: JSON.stringify(text[0]),
//     }); 
//     console.log("text: " + JSON.stringify(this.state));
//     this.componentDidUpdate();
//   },

    render: function() {
        return (
            <div>
               <p>Favorite</p>
            </div>
        )
    }

});

export default Favorite;