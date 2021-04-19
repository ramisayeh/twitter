
import React, { Component } from 'react'
import Explore from "./components/explore/Expolre";
import Saved from "./components/saved/Saved";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/signup/Register";
import Login from "./components/signin/Login";
import firebase from "firebase";
import withAuthProtection from './withAuthProtection';
import { auth } from "./firebase";

const ProtectedExplore = withAuthProtection('/')(Explore);
const ProtectedSaved = withAuthProtection('/')(Saved)
const ProtectedHome = withAuthProtection('/')(Home)

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      me: firebase.auth().currentUser
    }
  }
  componentDidMount() {
    auth.onAuthStateChanged(me => {
      this.setState({ me });
    });
    console.log(this.me)
  }



  render() {
    return (
      <div>
         <Router>
        <div className="App">
        <Header/>
        <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} /> 
          <Route exact path="/explore" render={props => (
      <ProtectedExplore me={this.state.me} {...props} />
    )} />
          <Route exact path="/saved" render={props => (
      <ProtectedSaved me={this.state.me} {...props} />
    )} />
          <Route exact path="/home" render={props => (
      <ProtectedHome me={this.state.me} {...props} />
    )} />

        </div>
      </Router>
      </div>
    )
  }
}
