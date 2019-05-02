import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';
import Charts from '../Data/Charts';
class UserContainer extends Component {
    state={
        name:''
    }
    nameHandler = (name) =>{
        this.setState({name:name})
    }
    render() {
        return (
            <div>
                <Charts name={this.state.name}/>
                <SignIn nameHandler={this.nameHandler}/>
            </div>
        );
    }
}

export default UserContainer;