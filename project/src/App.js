import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import {Route,Switch} from 'react-router-dom';
import Home from './Home/Home';
import Charts from './Data/Charts';
import SignIn from './SignIn/SignIn';
{/*import FormInput from './FormInput/FormInput';*/}

{/*This is what create our web page in our local host*/}
{/*We import our work here which will help create the project*/}
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
            <Route exact path='/about' component ={About}/>

            </div>
    );
  }
}

export default App;
