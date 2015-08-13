// This component contains the Header to simplify the
// inheritance chain.  Was having problems with owner,
// a React relationship, != parent, a DOM relationship.

// Node Modules
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mui = require('material-ui');

// Local Files
var Actions = require('./actions');
var utl = require('./utils/utl');

// Components
var Paper = mui.Paper

var Main = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext () {
    return {
      muiTheme: utl.themeManager
    };
  },
  mixins : [],
  getInitialState () {
    return {
      user: null,
    }
  },
  render () {
    var user = this.state.user
    return <Paper>
      React Shell
    </Paper>
  },
  _onChange (event, user) {
    this.setState({ user })
  },
});

module.exports = Main;
