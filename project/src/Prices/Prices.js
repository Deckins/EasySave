import React, { Component } from 'react';
import axios from 'axios';
class Prices extends Component {
    state={
        pricesObj:[]
    }
    componentDidMount(){
        axios.get('http://localhost:5000/')
        .then(response => {
            console.log(response.data)
            this.setState({pricesObj:response.data})

        })
    }
    render() {
        return (
            <div>
                {this.state.pricesObj.map(obj =>{
                    // if(obj.name && obj.price)
                    return obj.map(o =>
                         <p>{o.name} and {o.price}</p>

                    )
                })}
            </div>
        );
    }
}

export default Prices;