var React = require('react');

var Results = require('../Results.js');

const panelStyle = {
    marginTop: '-2%',
}
const ulStyle = {
    paddingBottom: '1%',
}
var Favorited = React.createClass({



    render:function(){
        return (
            <div className = "row">
              <div className = "col-md-2">
              </div>

              <div className = "col-md-8">
                <div className = "panel panel-default">
                  <div className = "panel panel-heading">
                    <h3 className = "panel-title">
                    Favorites:
                    </h3>
                  </div>
                  <div className = "form-group" style={panelStyle}>
                    <ul style={ulStyle}>
                    <li>Favorited 1 <button </li>
                    <li>Favorited 2</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )
    }
});

module.exports = Favorited;