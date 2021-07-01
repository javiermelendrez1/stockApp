//this file will hold formatting functions for the data received from the api

//we need a function to format the market cap
//the market cap should be return as a string not a number reason why
//we want to shorten the number so it just displays 100B or 2T and not with all the other numbers
const formatMarketCap = (num) => {
    //check if the number is greather than 1 trillion
    //so if the number is > 1t divide by 1t than format it than return it 
    if(num > 1000000000000){
        num = num / 1000000000000;
        //pass it into the format float function to format it 
        return formatFloat(num) + 'T'; 
    }
    //check if the number is greater than 1 billion 
    if(num > 1000000000){
        num = num / 1000000000;
        return formatFloat(num) + 'B';
    }
    //else don't do anything 
    return num;
}




//we need a function to format the price and price change
//so price and percentages need to be rounded to the 2 decimal place 
//we need a function that takes in the float and returns the float in the 2 decimal place

const formatFloat = (num) => {
    let formattedNum = Math.round(num * 100) / 100;
    //return the rounded number 
    return formattedNum;
}