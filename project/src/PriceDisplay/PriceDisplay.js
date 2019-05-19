import React, { Component } from 'react';
import './PriceDisplay.css';

{/*Will be imported to the Price Page and used to display the items spend*/}
class PriceDisplay extends Component {
    render() {
        return (
            <div className= 'displaycontainer'>
                <p className= 'props'>{this.props.name} {this.props.price}</p>
            </div>
        );
    }
}

export default PriceDisplay;
