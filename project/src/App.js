//This is still a work in progress.  These code could be modified
//For now this is a template code and is the bulding block for the reactjs project

import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import FormInput from './FormInput/FormInput';
import {Route,Switch} from 'react-router-dom';
import Home from './Home/Home';
import Charts from './Data/Charts';
class App extends Component {

  render() {
    return (
        <div>

            <Switch>
                <Route exact path='/signup' component={FormInput}/>
                <Route exact path='/charts' component={Charts}/>

                <Navbar/>
            </Switch>
            <Route exact path='/' component ={Home}/>

            {/*<FormInput/>*/}

        </div>
    );
  }
}

export default App;
