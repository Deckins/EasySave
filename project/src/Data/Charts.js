import React, {Component} from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import './Chart.css';


class Charts extends Component {
    state={
        bar: {
            labels: ["January", "February", "March" ]
            ,
            fontColor:'white',
            datasets: [{
                label: "Total Spending by Month",
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
            fontColor:'white',
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
        defaults.global.defaultFontColor = 'white'
        return (
            <div className="dashboard-wrapper">
                <header className="top-header">Spending Dashboard</header>
                <div className='chart-container'>
                    <ul>
                        <li>
                            <Doughnut  width={400} height= {400} 
                            options={{ maintainAspectRatio: false  ,responsive:false }}
                            data={this.state.pie} 
                            />
                        </li>
                        <li>
                            <Bar  width={400} height= {400}  
                            options={{ maintainAspectRatio: false ,responsive:false }} 
                            data={this.state.bar} 
                            />
                        </li>
                    </ul>
                   
                </div>
            </div>
    );
    }
}

export default Charts;