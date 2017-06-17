var React = require('react');

var API = require('../../utils/API');

const searchBar = {
    width: "90%",
    marginLeft: "5%",
    marginBottom: "2%",
}
const searchBtn = {
    margin: '0 0 2% 5%'
}

var Saved = React.createClass({
        getInitialState: function(){
  return { 
    text: "",
    favorited: false,
    savedQuotes: "",
   }  
 },

componentDidMount: function(){
  API.getQuotes().then(function(quoteData){
    console.log("componentDidMount data: " + JSON.stringify(quoteData, undefined, 2));
    this.setState({ savedQuotes:quoteData.data });
  }.bind(this));
},
 componentDidUpdate: function(){
    // API.saveQuote(this.state.text);
    // console.log("componentDidUpdate this.state.text: " + this.state.text);
 },
 
 handleSubmit: function(text){
    console.log("Main handleSubmit arg: " + JSON.stringify(text[0]));
    this.setState({
      text: JSON.stringify(text[0]),
    }); 
    console.log(this.state.text)
    console.log("text: " + JSON.stringify(this.state));
    this.componentDidUpdate();
  },

  renderQuotes: function(){
    var thisText = this.state.savedQuotes;
    console.log(JSON.stringify(thisText, undefined, 2));
    console.log("this.state.savedQuotes: " + JSON.stringify(this.state.savedQuotes));

    var arr = Object.keys(thisText).map(function(key){return thisText[key]});
    // .map(function(keys) {return thisText[key]});
    console.log("arr: " + JSON.stringify(arr));

    // return arr.map(function(quote, index){
      // return this.state.savedQuotes.map(function(text, index){
      Object.keys(thisText).map(function(text, key){
        console.log("text: " + text);
        console.log("key: " + key);
      return (
        <div key={key}>
              <li className = "list-group-item">
                <em> {text} </em>
              </li>
        </div>

      )
    }.bind(this));
  },


   renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className = "col-md-2">
          </div>
            <div className="col-md-8">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">
                    <strong>
                      <i className="fa fa-list-alt"></i>
                      Results
                    </strong>
                  </h1>
                </div>
                <div className="panel-body">
                  <ul className="list-group">
                    {this.renderQuotes()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  },

    render: function(){
        /*return (
          <div className = "row">
               <div className = "col-md-2">
               </div>
             <div className = "col-md-8">
               <div className = "panel panel-default">
                 <div className = "panel-heading">
                   <h3 className = "panel-title">
                   Saved:
                   </h3>
                 </div>
                 <div className = "form-group">
                   <ul>
                     <li>{this.props.saved}</li>
                     <li> Quote 2</li>
                   </ul>
                 </div>
               </div>
             </div>
          
                 <div className = "col-md-2">
                 </div>
             </div>
        )*/

        

        if (!this.props.text){
          return (
            <div className = "nothing-container">
              <div className = "col-md-2">
              </div>

              <div className = "col-md-8">
                <li className = "list-group-item">
                  <h3>
                    <span>
                      <em> Nothing here... </em>
                    </span>
                  </h3>
                </li>
              </div>

              <div className = "col-md-2">
              </div>
            </div>
          )
        }



        return this.renderContainer();
    }
});

module.exports = Saved;