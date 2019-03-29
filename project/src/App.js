import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import FormInput from './FormInput/FormInput';
import {Route,Switch} from 'react-router-dom';
import Home from './Home/Home';
class App extends Component {
  render() {
    return (

          <div>
              <Navbar/>
              <Switch>
                  <Route exact path='/signup' component={FormInput}/>
                  <Route exact path='/' component ={Home}/>

              </Switch>
              {/*<FormInput/>*/}

          </div>


    );
  }
}

export default App;
