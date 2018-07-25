import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData} from './redux';
import { Switch, Route, withRouter } from "react-router-dom";

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Champions from './components/Champions'
import Home from './components/Home';
import Profile from './components/Profile';
import ServerStatus from './components/ServerStatus';

import styles from './styles.css';

class App extends Component {

  // componentDidMount(){
  //   this.props.champions()
  //   this.props.getData()
  // }

  render() {
    return (
      <div className="App">
        {/* <h1>h0i</h1> */}
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/champions' component={Champions}/>
          <Route path='/profile' component={Profile} />
          <Route path='/serverStatus' component={ServerStatus} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(state=>state, { getData, })(App));
