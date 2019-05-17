import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import PriceDisplay from '../PriceDisplay/PriceDisplay';
import './Prices.css';

class Prices extends Component {
    state = {
        pricesObj: [
            [{name:'bob',price:'16'}],
            [{name:'bob',price:'16'}],
            [{name:'bob',price:'16'}],
            [{name:'bob',price:'16'}],
            [{name:'bob',price:'16'}]
        ],
        loading: true
    }
    componentDidMount() {
        axios.get('http://localhost:5000/')
            .then(response => {
                this.setState({ pricesObj: response.data })

            })
            .catch(error => console.log(error))
            this.setState({ loading: false })
    }

    render() {
        
        let output = null
        if(this.state.loading){
           output = <div class="lds-circle"><div></div></div>
        }
        else if(!this.state.loading){
            output = (
                <div>
                      {this.state.pricesObj.map(obj => (
                           <TabPanel>
                                {obj.map(o => 
                                    <PriceDisplay price={o.price} name={o.name}/>
                                )}
                           </TabPanel> 
                      ))}
                </div>
            )
        }
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Food</Tab>
                        <Tab>Housing</Tab>
                        <Tab>Clothing</Tab>
                        <Tab>Travel</Tab>
                        <Tab>Utilities</Tab>
                    </TabList>
                    {output}
                </Tabs>

            </div>
        );
    }
}

export default Prices;