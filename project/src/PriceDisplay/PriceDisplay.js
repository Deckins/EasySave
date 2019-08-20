import React, { Component } from 'react';
import './PriceDisplay.css';

class PriceDisplay extends Component {
    render() {
        return (
            <div className= 'displaycontainer'>
              <div class='displaycard'>
                <div className= 'name-props'>
                {this.props.name}
                </div>
                <div className= 'price-props'>
                {this.props.price}
                </div>
              </div>
            </div>
        );
    }
}

export default PriceDisplay;
