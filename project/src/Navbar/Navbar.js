import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
class NavBar extends Component {
    render() {
        return (
            <div className="bg-img">
            <Navbar bg="dark" variant="dark">
            <Nav  className="justify-content-end" >
            <div className='link-wrapper'>
            <Link style={{ textDecoration: 'none', color: 'white',  margin:'10px 10px' }}  to="/">Home</Link>

            <Link style={{ textDecoration: 'none', color: 'white',  margin:'10px 10px' }}  to="/about">About</Link>
                <Link style={{ textDecoration: 'none', color: 'white', margin:'10px 10px' }}  to="/signup" >Sign up</Link>
            </div>
            </Nav>
            </Navbar>
            </div>


    )
        ;
    }
}

export default NavBar;