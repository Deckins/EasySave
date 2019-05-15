const request = require('request');
const cheerio = require('cheerio');
 
request('https://www.expatistan.com/cost-of-living/new-york-city', (error,response,html) => {
    if(!error && response.statusCode==200){
        const $ = cheerio.load(html);
        const foodData = $('.prices');
        // const tableRows = foodData.find('tr')
        
        let foodObj = []
        $('tr').each((i,element) => {
            const name = $(element).find('.item-name a').text();
            const price = $(element).find('.price.city-1').text().replace(/\s\s+/g, '');  
            foodObj.push({name,price})
        })
        foodObj.map(obj =>{
            if(obj.name && obj.price)
            console.log('Expense: ' + obj.name + '\nPrice: ' + obj.price + '\n')
        })   
    }
    else
        console.log(error)
})

