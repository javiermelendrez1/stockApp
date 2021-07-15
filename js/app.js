
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

    //check if the user input is acceptable 
    if (validateInput(userInput)) {
        //now that we have user input we are going to call the api for that specific ticker symbol

        getApi(userInput);
    } else {
        alert('yeah we cant accept that bro');
        console.log(userInput.length);
    }


})
//create async function to fetch api and its data
const getApi = async (ticker) => {
    //await for the response of the api
    const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=GJDAGA8VL2CMHAOX`);
    //await for the second response
    //we need a second response because it is two different api fetches 
    const response2 = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=GJDAGA8VL2CMHAOX`);
    //print to console log the response
    // console.log(response2.data["Global Quote"]["05. price"]);
    // console.log(response2.data["Global Quote"]["09. change"]);
    // console.log(response2.data["Global Quote"]["10. change percent"]);
    // console.log(response.data.Name);
    // console.log(response.data.Symbol);
    // console.log(response.data.Description);
    // console.log(response.data.MarketCapitalization);
    // console.log(response.data.PERatio);
    // console.log(response.data.DividendYield);

    //now save the data into variables 
    const stockName = response.data.Name;
    const stockSymbol = response.data.Symbol;
    const stockPrice = formatFloat(response2.data["Global Quote"]["05. price"]);
    const stockPriceChange = formatFloat(response2.data["Global Quote"]["09. change"]);
    const stockPriceChangePercent = response2.data["Global Quote"]["10. change percent"];
    const stockDescription = response.data.Description;
    const stockMarketCap = formatMarketCap(response.data.MarketCapitalization);
    const stockPriceEarningsRatio = formatFloat(response.data.PERatio);
    const stockDividendYield = formatFloat(response.data.DividendYield);

    //we have to do a check right here to see if the user ticker search brings up undefined 
    if(isUndefined(stockName)){
        //if this returns true print error
        //if it does not print data
        printError();
    } else {
            
    //now make a function that will dislay all of this information on screen 
    //pass in all of these variables 
    printData(stockName, stockSymbol, stockPrice, stockPriceChange, stockPriceChangePercent, stockDescription, stockMarketCap, stockPriceEarningsRatio, stockDividendYield);PageTransitionEvent
    }

}
//query for div that will hold ticker info
const tickerInfoDiv = document.querySelector('#tickerInfo');

//create function to print data pass in all data from api fetch
const printData = (name, symbol, price, priceChange, priceChangePercent, description, marketCap, priceEarningsRatio, dividendYield) => {
    //set the inner html equal to the dagta variable
    let data = `    <div class="container" id="tickerInfo">
    <p class="stockName text-center">${name} (${symbol})</p>
    <p class="stockPrice text-center">$${price}</p>
    <p class="stockPriceChange text-center"> ${priceChange} (${priceChangePercent})</p>
    <span>About<br></span>
    <p class="companyDescription">
    ${description}
    </p>
    <div class="container">
    <div class="row">
        <div class="col-md">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Market Capitalization</h5>
                    <p class="card-text">${marketCap}</p>
                </div>
            </div>
        </div>
        <div class="col-md">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Price Earnings Ratio</h5>
                    <p class="card-text">${priceEarningsRatio}</p>
                </div>
            </div>
        </div>
        <div class="col-md">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Dividend Yield</h5>
                    <p class="card-text">${dividendYield}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

    tickerInfoDiv.innerHTML = data;

}

//going to create a second print function to print when the user search brings up undefined 
const printError = () => {
    let data = `<h1>error</h1>`;
    tickerInfoDiv.innerHTML = data;

}

$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

