var React = require('react');

var Main = require('../Main.js');
var AddSaveQuote = require("./AddSavedQuote");

import {Link} from "react-router";

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
                    <Link to="/add">Add Quote</Link>
                  </li>
                  <li className = "active">
                    <Link to="favorite"> Favorited </Link>
                  </li>
                </ul>
            </nav>
          </div>
      )
    }
});

module.exports = Navbar;