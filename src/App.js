import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./LandingPage";
import SignUp from "./Container/SignUp/SignUp";
import LogIn from "./Container/SignIn/SignIn";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from './Container/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
//import jwt_decode from "jwt-decode";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // const decoded = jwt_decode(token);

  // store.dispatch(setCurrentUser(decoded));
}
class App extends React.Component {
  constructor() {
    super();

  }


  componentDidMount() {

  }
  render() {

    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      )
  }
}

export default App;
