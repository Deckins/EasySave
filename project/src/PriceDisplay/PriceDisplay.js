import React, { Component } from 'react';

class PriceDisplay extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name} {this.props.price}</p>
                
            </div>
        );
    }
}

export default PriceDisplay;