import React, {Component} from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2'
import './Chart.css';
import FormInput from '../FormInput/FormInput';

/*This is our data page.  In this data page, users will input their data and
  a chart will be created to calculate their expenses*/
/*Bar graph will be shown to users how much they spend in the months*/
/*Pie Chart will be use to show the categories that the users spend their money on.
  For example food, utilities, etc.*/
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
                    data: [10, 10,  10, 10],
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
    userHandler = (name) => {

    }

    toggleHandler = () => {
        let toggle = !this.state.toggle
        this.setState({toggle:toggle})
    }

    render() {

        let edit = null
        if(this.state.toggle === true){
           edit = <div className="input">
                    <FormInput inputCallBack={this.inputHandler} />
                </div>

        }

        defaults.global.defaultFontColor = 'white'
        return (
            <div className="dashboard-wrapper">
                <header className="top-header"><h1>Spending Dashboard</h1></header>
                <button className="edit" onClick={this.toggleHandler}>Edit</button>
                {/* {edit} */}
                <div className='chart-container'>
                    <ul>
                        <li className='list'>
                            <Doughnut  width={340} height= {400}
                            options={{ maintainAspectRatio: false  ,responsive:false }}
                            data={this.state.pie} redraw
                            />
                        </li>
                        <li className='list'>
                            <Bar  width={340} height= {400}
                            options={{ maintainAspectRatio: false ,responsive:false }}
                            data={this.state.bar}
                            />
                        </li>
                        <li style={{display: 'inline-block'}}>
                            {edit}
                        </li>

                    </ul>



                </div>
            </div>
    );
    }
}

export default Charts;
