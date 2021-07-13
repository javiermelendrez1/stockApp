//this file will have functions that check if the value input is validate 
//input should only be letters no symbols or numbers or spaces 
//also going to validate numbers that are returned 
//can not have NaN being displayed 

//create a function to make sure the input received is only letters 
const validateInput = (ticker) => {
    let letters = /^[A-Za-z]+$/;
    if (ticker.match(letters)) {
        //we need another if statement in here to check the length of the ticker 
        //stock tickers are no greater than 5 letters 
        if (ticker.length > 5) {
            return false
        } else {
            return true;
        }



    } else {
        return false
    };
    //if you get anything but a letter false will be returned 
}
//we are going to create a function to check for wether if the user ticker entered is undefined 
const isUndefined = (ticker) => {
    let u = "undefined";
    //check if the ticker is equal to this u string 
    if(ticker === undefined){
        return true;
    } else {
        return false;
    }
}