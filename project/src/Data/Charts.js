import React, {Component} from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import './Chart.css';
import FormInput from '../FormInput/FormInput';


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
        },
        toggle:false,
        changed:false
    }
    inputHandler = (inputData,id) => {
        console.log(inputData,id,'This is the input')
        let copy = this.state.pie
        copy.datasets[0].data[id] = parseInt(inputData,10)
        this.setState({pie:copy, changed:true})
        console.log(this.state.pie.datasets)

    }
    
    toggleHandler = () => {
        let toggle = !this.state.toggle
        this.setState({toggle:toggle})
    }

    render() {
        let content = 'Budget Dashboard'
        if(this.state.changed === true){
            content = <h1>Content has changed</h1>
        }
        let edit = null
        if(this.state.toggle === true){
            edit = <FormInput inputCallBack={this.inputHandler} />
        }
          
        defaults.global.defaultFontColor = 'white'
        return (
            <div className="dashboard-wrapper">
                <header className="top-header">{content}</header>
                <button className="edit" onClick={this.toggleHandler}>Edit</button>
                {edit}
                <div className='chart-container'>
                    <ul>
                        <li>
                            <Doughnut  width={400} height= {400}
                            options={{ maintainAspectRatio: false  ,responsive:false }}
                            data={this.state.pie} redraw
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
