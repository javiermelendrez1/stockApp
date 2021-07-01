
console.log('app.js is connected');
//query for the input form 
const theForm = document.querySelector('form');
theForm.addEventListener('submit', (e) => {
    //prevent default to stop the page from refreshing 
    e.preventDefault();
    //query for the input and save the value
    const userInput = document.querySelector('input').value;
    console.log('the ticker symbol you entered is ', userInput);
    //reset the form
    theForm.reset();
    //now that we have user input we are going to call the api for that specific ticker symbol
    getApi(userInput);

})
//create async function
const getApi = async (ticker) => {
    //await for the response of the api
    const response  = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=GJDAGA8VL2CMHAOX`);
    //await for the second response
    //we need a second response because it is two different api fetches 
    const response2 = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=GJDAGA8VL2CMHAOX`);
    //print to console log the response
    console.log(response2.data["Global Quote"]["05. price"]); 
    console.log(response2.data["Global Quote"]["09. change"]); 
    console.log(response2.data["Global Quote"]["10. change percent"]); 
    console.log(response.data.Name);
    console.log(response.data.Symbol);
    console.log(response.data.Description);
    console.log(response.data.MarketCapitalization); 
    console.log(response.data.PERatio); 
    console.log(response.data.DividendYield);

    //now save the data into variables 
    const stockName = response.data.Name;
    const stockSymbol = response.data.Symbol;
    const stockPrice = response2.data["Global Quote"]["05. price"];
    const stockPriceChange = response2.data["Global Quote"]["09. change"];
    const stockPriceChangePercent = response2.data["Global Quote"]["10. change percent"];
    const stockDescription = response.data.Description;
    const stockMarketCap = response.data.MarketCapitalization;
    const stockPriceEarningsRatio = response.data.PERatio;
    const stockDividendYield = response.data.DividendYield;

    //now make a function that will dislay all of this information on screen 
    //pass in all of these variables 
    
}
const printData = (name, symbol, price, priceChange, priceChangePercent, marketCap, priceEarningsRatio, dividendYield) => {
    

}