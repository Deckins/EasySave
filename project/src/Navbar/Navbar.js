import React, {Component} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div className="bg-img">
                <div className="container">
                    <div className="topnav">
                        <Link to ='/'><a href="/home">Home</a></Link>
                        <Link to ='/about'><a href="/about">About</a></Link>

                     </div>
                        <Link className ='top-right'to ='/login'><a  href='/'>Log In</a></Link>
                        <Link className ='top-right'to ='/signup'><a href='/'>Sign Up </a></Link>

                </div>
            </div>


    )
        ;
    }
}

export default Navbar;