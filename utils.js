function generateRandomNumber(){
    return Math.floor(Math.random() * 100) +1;
}
function celciusToFerenheit(temp){
    return (temp*9)/5+32;
}
module.exports = { 
    generateRandomNumber,
    celciusToFerenheit
};