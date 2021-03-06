/*
Problem 5: Write a JavaScript function to sort the following array of objects by title value.
Hint: Read about the JavaScript sort method.

Example array: [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The final Book of The Hunger Games', libraryID: 3245}
];

*/
/*
using the sort() method with a comparing function;
when the sort() method compares two values, it sends the values to the compare function,
and sorts the values according to the returned (nagative, zero, positive) value.
*/
//object

var books = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The final Book of The Hunger Games', libraryID: 3245}
];

//code starts here

function sortMyBooks (a, b) {
    if (a.title < b.title)                  //comparing the first and second elements insdie our objects;
    return -1;                              //if the condition met, will assign a 'place' to the element;

    else if (a.title > b.title)             //comparing a new set of elements insdie our objects;
    return 1;                               //if the conditrion met, will assign another 'place' to the element;

    else return 0;                          //if above comparsion already have a 'place', last item will take the last 'place';
}

console.log(books.sort(sortMyBooks));       /*output
                                                [ { author: 'Suzanne Collins',
                                                    title: 'Mockingjay: The final Book of The Hunger Games',
                                                    libraryID: 3245 },
                                                { author: 'Bill Gates',
                                                    title: 'The Road Ahead',
                                                    libraryID: 1254 },
                                                { author: 'Steve Jobs',
                                                    title: 'Walter Isaacson',
                                                    libraryID: 4264 } ]
                                            */