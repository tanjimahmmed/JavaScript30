const people = [
    {name: 'Wes', year: 1998},
    {name: 'kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015},
];

const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 203423},
    {text: 'Ramen in fav food ever', id: 1233523},
    {text: 'Nice!', id: 543423},
];

// Some and Every Checks
// Array.prototype.some() //is at least one person 19?
// const isAdult = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19){
//         return true;
//     }
// });

// const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19;
// });

const isAdult = people.some(person => ((new Date()).
getFullYear()) - person.year >= 19);

console.log({isAdult});
// Array.prototype.every() // is everyone 19?
const allAdults = people.every(person => ((new Date()).
getFullYear()) - person.year >= 19);

console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just one you are looking for
// find the comment with the ID of 823423
// const comment = comments.find(function(comment) {
//     if(comment.id === 823423){
//         return true;
//     }
// });


const comment = comments.find(comment => comment.id === 823423);
console.log(comment);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423)

console.log(index);

// comments.splice(index, 1);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];