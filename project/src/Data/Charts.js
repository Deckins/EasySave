import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';


class Charts extends Component {
    state={
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Total expenses for each month",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 100],
            }]
        }
    }

    render() {
        return (
            < div >
                < Bar data={this.state.data} />
            < /div>
    )
        ;
    }
}

export default Charts;