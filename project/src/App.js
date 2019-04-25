//This is what create our web page in our local host
//We import our work here which will help create the project

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
// import FormInput from './FormInput/FormInput';
import SignIn from './SignIn/SignIn';
import About from './About/About';
import {Route,Switch} from 'react-router-dom';
import Home from './Home/Home';
import Charts from './Data/Charts';

class App extends Component {

  render() {
    return(
      <div>
            <Switch>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/charts' component={Charts}/>

                <Navbar/>
            </Switch>
            <Route exact path='/' component ={Home}/>
            <Route exact path='/' component ={About}/>

            </div>
    );
  }
}

export default App;
