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

 
    //print to console log the response
    console.log(response);
}