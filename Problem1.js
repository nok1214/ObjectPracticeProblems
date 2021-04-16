/*
Problem 1:
Write a JavaScript program to delete a property from an object;
*/

//objects
var person = {
    firstName : 'John',
    lastName : 'Smith',
    age : 36,
    eyeColor : 'blue',
    occupation : 'teacher',
    teachingSubject : 'Chemistry',
    hobbies :['reading', 'writing', 'experiment'],
    famousSaying : function() {
        console.log ('try harder!');
    }

};

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

delete person.hobbies;//use delete {object name}. {property name} to delete specific item inside an object;
console.log(person);/* output { firstName: 'John',
                                lastName: 'Smith',
                                age: 36,
                                eyeColor: 'blue',
                                occupation: 'teacher',
                                teachingSubject: 'Chemistry',
                                famousSaying: [Function] };
                    */            

delete car.optionsAdded;//use delete {object name}. {property name} to delete specific item inside an object;
console.log(car);/* output { maker: 'BMW',
                             year: 2021,
                             model: 'X4 M40i',
                             exteriorColor: 'red',
                             wheelSize: '20"',
                             interiorColor: 'Black' };
                */             

//using function to delete properties inside and object;
//code starts here

function removeProperty (object , property) {
    delete object[property];//use delete method but inside a function so that can be called multiple times when needed;
    return object;
}

console.log(removeProperty(car, 'optionsAdded'));/* output { maker: 'BMW',
                                                             year: 2021,
                                                             model: 'X4 M40i',
                                                             exteriorColor: 'red',
                                                             wheelSize: '20"',
                                                             interiorColor: 'Black' };
                                                */             