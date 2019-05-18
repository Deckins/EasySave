import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

{/*The Navbar will be used to control where the users can go.
  We have 4 link we can go to which are Home, About, Your Data and Sign in pages.*/}
class NavBar extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark" variant="dark">
            <Nav  className="justify-content-end" >
            <div className='link-wrapper'>
            <Link style={{ textDecoration: 'none', color: 'white',  margin:'10px 10px' }}  to="/">Home</Link>

            <Link style={{ textDecoration: 'none', color: 'white',  margin:'10px 10px' }}  to="/about">About</Link>
            <Link style={{ textDecoration: 'none', color: 'white',  margin:'10px 10px' }}  to="/charts">Your Data</Link>

            <Link style={{ textDecoration: 'none', color: 'white', margin:'10px 10px' }}  to="/signin" >Sign In</Link>
            <Link style={{ textDecoration: 'none', color: 'white', margin:'10px 10px' }}  to="/prices" >Prices</Link>
            
            </div>
            </Nav>
            </Navbar>

            </div>


    )
        ;
    }
}

export default NavBar;
