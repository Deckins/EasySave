import React, { Component } from 'react';
import './PriceDisplay.css';

{/*Will be imported to the Price Page and used to display the items spend*/}
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
