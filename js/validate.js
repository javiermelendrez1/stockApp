//this file will have functions that check if the value input is validate 
//input should only be letters no symbols or numbers or spaces 
//also going to validate numbers that are returned 
//can not have NaN being displayed 

//create a function to make sure the input received is only letters 
const validateInput = (ticker) => {
    var letters = /^[A-Za-z]+$/;
    if (ticker.match(letters)) {
        return true;
    } else {
        return false
    };
    //if you get anything but a letter false will be returned 
}