// This is the child element tp AddQuoteParent.js
// This page is only going to handle the textarea and submit button

var React = require('react');

// var Results = require("./grandchildren/Results.js");

const searchBar = {
    width: "90%",
    marginLeft: "5%",
    marginBottom: "2%",
}
const searchBtn = {
    margin: '0 0 2% 5%'
}

var AddQuote = React.createClass({
    getInitialState: function(){
        return {
            text:""
        }
    },
    handleSubmit: function(event){
        // console.log("handleSubmit: ");
         event.preventDefault();
        //  console.log("event.target.value: " + this.state.text);
        this.props.handleSubmit(this.state.text);

    },

    handleChange: function(event){
       event.preventDefault();
    //    console.log("event.target.name: " + event.target.name);
    //    console.log("event.target.value: " + event.target.value);
    //    console.log("child AddQuote, this.state.text: " + this.state.text)
       
       this.setState({
          [event.target.name]: [event.target.value]
       });
    //    console.log("quote Entered: " + JSON.stringify(this.state));
    },

    render: function(){
        return (
            <div className = "row">
              
              <div className = "col-md-2">
              </div>
                
                <div className = "col-md-8">
                    <div className = "searchContainer">
                      <div className = "panel panel-default">
                        <div className = "panel-heading">
                          <h3 className = "panel-title">
                            Insert Quote:
                          </h3>
                        </div>
                            <form onSubmit = {this.handleSubmit} >
                                <div className = "form-group">
                                    <input type = "text" name = "text" onChange={this.handleChange} value={this.state.text} className="form-control" placeholder="Enter quote" style = {searchBar} />
                                    <button type = "submit" className="btn btn-md" style={searchBtn} >
                                        Submit 
                                    </button>
                                </div>
                           </form>
                    </div>
                  </div>
              </div>
                
                <div className = "col-md-2">
                </div>
            </div>
        )
    }
});

module.exports = AddQuote;