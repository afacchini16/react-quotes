// var React = require('react');

// // var Results = require("./grandchildren/Results.js");

// const searchBar = {
//     width: "90%",
//     marginLeft: "5%",
//     marginBottom: "2%",
// }
// const searchBtn = {
//     margin: '0 0 2% 5%'
// }

// var AddSaveQuote = React.createClass({
//     // getInitialState: function(){
//     //     return {
//     //         text:"",
//     //         favorited: false,
//     //     }
//     // },
//     // handleSubmit: function(event){
//     //     console.log("handleSubmit");
//     //      event.preventDefault();

//     //      console.log(this.props);
//     //     this.props.handleSubmit(this.state.text);
//     // },

//     // handleChange: function(event){
//     //    this.setState({
//     //       [event.target.name]: [event.target.value]
//     //    });
//     //    console.log("quote Entered: " + JSON.stringify(this.state));
//     // },

//     render: function(){
//         return (
//             <div className = "row">
              
//               <div className = "col-md-2">
//               </div>
                
//                 <div className = "col-md-8">
//                     <div className = "searchContainer">
//                       <div className = "panel panel-default">
//                         <div className = "panel-heading">
//                           <h3 className = "panel-title">
//                             Insert Quote:
//                           </h3>
//                         </div>
//                             <form onSubmit = {this.props.handleSubmit}>
//                                 <div className = "form-group">
//                                 <input type = "text" name = "text" onChange={this.props.handleChange} value={this.text} className="form-control" placeholder="Enter quote" style = {searchBar}/>
//                                     <input type = "submit" className="btn btn-md" value="Submit" style={searchBtn} />
//                                 </div>
//                            </form>
//                     </div>
//                   </div>
//               </div>
                
//                 <div className = "col-md-2">
//                 </div>
//             </div>
//         )
//     }
// });

// module.exports = AddSaveQuote;