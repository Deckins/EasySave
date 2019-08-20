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
        pricesOrg:[],
        loading: true,
        priceSort: 0
    }
    componentDidMount() {
        axios.get('https://ezsave-5c146.firebaseio.com/PricesData/-Lf8nUUS1Y9MoQiKaaBy/Prices.json')
            .then(response => {
                //The original array is there to keep the original state of the prices array 
                //have to use .slice(0) to make a copy not reference
                this.setState({ pricesObj: response.data })
                const copyArray = this.state.pricesObj.slice(0)
                this.setState({ pricesOrg: copyArray })
            })
            .catch(error => console.log(error))
            this.setState({ loading: false })
    }
    handleChange = (event) => {
        this.setState({priceSort:event.target.value}); 
        console.log('this is the intial value after input', this.state.priceSort)       
        this.setState({pricesObj:this.state.pricesOrg})
        console.log('this is trying to set the org prices:', this.state.pricesObj, 'to' , this.state.pricesOrg)
        let sortedPricesObj = this.state.pricesOrg[0].filter(obj => {
                //This is to remove the intial $ at the beginning of the prices
                let numb = obj.price.substring(1,obj.price.length)
                // console.log(' prices:', numb,'price entered: ', this.state.priceSort)
                return parseInt(numb,10) <= event.target.value
           
        })  

        console.log(sortedPricesObj)
        const copyArr= this.state.pricesObj
        copyArr[0] = sortedPricesObj
        this.setState({pricesObj:copyArr});
       
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
                                {obj.map(o => <PriceDisplay price={o.price} name={o.name}/> )}
                           </TabPanel> 
                      ))}
                </div>
            )
        }
        return (
            <div>
                <label style={{'font-size':'20px'}}> 
                   <strong>Price Filter</strong>  <input type="text"   onChange={this.handleChange} />
        
                </label>
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