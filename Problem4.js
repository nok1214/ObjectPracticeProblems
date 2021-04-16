/*
Problem 4: Create and object, then write a JavaScript function that checks whether an object contains the specified key.
*/

//object
var car = {
    maker : 'BMW',
    year : 2021,
    model : 'X4 M40i',
    exteriorColor : 'red',
    wheelSize : '20"',
    interiorColor : 'Black',
    optionsAdded : {
        premiumPackage : true,
        sportsBreaks : true,
        spaceSaver : false,
        advanceGPS: true,
    }
};

//code starts here

console.log(car.hasOwnProperty('wheelSize'));//output true;

