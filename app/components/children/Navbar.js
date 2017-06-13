var React = require('react');

var Main = require('../Main.js');
var Search = require("./Search.js");

const navbarBtn = {
    margin: '0',
}

var Navbar = React.createClass({
    
    render: function() {
        return(
        
          <div className = "col-md-12">
            <nav className = "navbar navbar-default navbar-static-top">
              <div className = "navbar-header">
                <a className = "navbar-brand" href = "#">
                  Quote Saver
                </a>
              </div>
                <ul className = "nav navbar-nav navbar-right" style={navbarBtn}>
                  <li className = "active">
                    <a href = "#">Search</a>
                  </li>
                  <li className = "active">
                    <a href = "#">Results</a>
                  </li>
                  <li className = "active">
                    <a href = "#"> Favorited </a>
                  </li>
                </ul>
            </nav>
          </div>
      )
    }
});

module.exports = Navbar;