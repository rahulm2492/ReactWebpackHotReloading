import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import Home  from '../components/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
  ///   const NoMatch = ({ location }) => (
  // <div>
  //   <h3>No match for <code>{location.pathname}</code></h3>
  // </div>
    return (
      <BrowserRouter>
        <div className="container-fluid text-center">
          <Header/>
          <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact  path="/library" render={() => (<div>logout</div>)} />
         </Switch>
        </div>

      </BrowserRouter>
    );
  }
}


export default App;
