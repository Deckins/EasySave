import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import Charts from './Data/Charts';
import SignIn from './SignIn/SignIn';
import Prices from './Prices/Prices';

{/*This is our app for EasySave.  Navbar is implemented and Users will click the links
  and be routed to the certain page based on the link clicked*/}
class App extends Component {
  render() {
    return(
      <div>
            <Navbar/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/charts' component={Charts}/>
            <Route exact path='/' component ={Home}/>
            <Route exact path='/about' component ={About}/>
            <Route exact path='/prices' component={Prices}/>

      </div>
    );
  }
}

export default App;
