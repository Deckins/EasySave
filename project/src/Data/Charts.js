import React, {Component} from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';


class Charts extends Component {
    state={
        data: {
            labels: ["January", "February", "March" ],
            datasets: [{
                label: "My First dataset",
                data: [ 81, 56, 55, 40],
                backgroundColor: ["#FF6384",
                    "#63FF84",
                    "#8463FF",
                    "#6384FF"],
            }]
        },
        pie : {
            labels: [
                "Food",
                "Utilities",
                "Transporation",
                "Entertainment"
            ],
            datasets: [
                {
                    data: [133.3, 86.2,  51.2, 50.2],
                    backgroundColor: [
                        "#FF6384",
                        "#63FF84",
                        "#8463FF",
                        "#6384FF"
                    ]
                }]
        }
    }

    render() {
        return (
            < div >
                <Doughnut data={this.state.pie} />
                < Bar data={this.state.data} />

        < /div>
    )
        ;
    }
}

export default Charts;