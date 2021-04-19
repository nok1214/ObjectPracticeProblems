/*
Problem 2:
Create an array of people objects with first name, last name, and age.
Then, write a JavaScript program to display the first and last name of all people.
*/

//objects

var people = [
    {
        firstName : 'John',
        lastName :   'Doe',
        age :  45
    },
    {
        firstName : 'Jane',
        lastName :   'White',
        age :  27
    },
    {
        firstName : 'Adam',
        lastName :   'Smith',
        age :  36
    },
    {
        firstName : 'Chris',
        lastName :   'Allen',
        age :  7
    },
    {
        firstName : 'Emily',
        lastName :   'Green',
        age :  12
    }
]
//using .map() to extract first name and last name value out from our object
var findFullName = people.map(function(a) {
    return a.firstName + ' ' + a.lastName
});
console.log(findFullName);//output ["John Doe", "Jane White", "Adam Smith", "Chris Allen", "Emily Green"];