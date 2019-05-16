const request = require('request');
const cheerio = require('cheerio');
var express = require('express');
var app = express();
const port = 5000;
 
request('https://www.expatistan.com/cost-of-living/new-york-city', (error,response,html) => {
    if(!error && response.statusCode==200){
        const $ = cheerio.load(html);
        const foodData = $('.prices');
        // const tableRows = foodData.find('tr')
        
        //Stores all the price data from web scraping into the food object
        let foodObj = []
        $('tr').each((i,element) => {
            const name = $(element).find('.item-name a').text();
            const price = $(element).find('.price.city-1').text().replace(/\s\s+/g, '');  
            foodObj.push({name,price})
        })
        foodObj.splice(0,1)
        let foodTypeObj = []
        let start = 0
        //Splits the all the price data into different types of the array
        foodObj.map((obj,i) =>{
            if(obj.name ==='' && obj.price ===''){
                foodTypeObj.push(foodObj.slice(start,i))
                start = i+1
                console.log(start)                
            }
            // console.log(foodTypeObj)
            // console.log('Expense: ' + obj.name + '\nPrice: ' + obj.price + '\n')
        })   
        // console.log(foodObj)
        foodTypeObj.splice(2,1)
        foodTypeObj.map(foodType => {
            // console.log('\n',foodType)
        })
        console.log(foodTypeObj)
        app.get('/', function (req, res) {
            res.send(foodTypeObj)
          })
    }
    else
        console.log(error)
})


// respond with "hello world" when a GET request is made to the homepage

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.listen(port, () => console.log(`Example app listening on port ${5000}!`))
