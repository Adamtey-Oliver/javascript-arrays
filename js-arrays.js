
//String
let names = ['Godwin', 'Oliver', 'Sarah', 'Molly'];
names[2] = 'Junior'

let stringNames = names.toString();
console.log(stringNames);

//Join
let joins = ['Godwin', 'Oliver', 'Sarah', 'Molly'];
joins[4] = 'Junior'

let joinNames = joins.join(' and ');
console.log(joinNames);

//Concat
let concats = ['Godwin', 'Oliver', 'Sarah', 'Molly'];
let concats2 = ['AmaliTech', 'Davido'];
let concats3 = ['Get It', 'Go For It'];

let concatNames = joins.concat(concats2, concats3);
console.log(concatNames);


//Splice
let namesplices = ['Godwin', 'Oliver', 'Charles', 'Sarah', 'Molly'];

let namesplicesCopy = [...namesplices]

namesplicesCopy.splice(1, 1)
console.log(namesplices);
console.log(namesplicesCopy)

//Or delete and add using Splice

namesplices.splice(1, 3, 'Bill', 'Bob Marley')
console.log(namesplices);


//Slice 

let sliceNames = ['Charity', 'Mary', 'Naa', 'Confort']

let slice = sliceNames.slice(1, 2)

console.log(slice);


//Indexof

let namesindex = ['Charity', 'Mary', 'Oliver', 'Naa', 'Confort', 'Oliver'];

let index = namesindex.lastIndexOf('Oliver');
console.log(index);



//Flat Array Methods

let nums = [1,2,3,4,5, [5, 6, [7, 8]], 9, 10];

let flat = nums.flat(2);

console.log(flat);


// Higher Order Functions

let highernames = ['Charity', 'Mary', 'Oliver', 'Naa', 'Confort', 'Oliver'];

highernames.forEach(n => {
    console.log(n);
})


// Map

let numbers = [2, 3, 4, 5, 3];

let doubled = numbers.map((n) => n * 2);
console.log(doubled);


// Filter

let blogPost = [
    {title: 'post 1', author: 'Junior'},
    {title: 'post 2', author: 'Junior'},
    {title: 'post 3', author: 'Oliver'},
];

let juniorPosts = blogPost.filter(p => p.author == 'Junior');
console.log(juniorPosts);


// Reduce

let num = [1, 2, 3, 4, 5, 16];

let total = num.reduce((total, currentVal) => total + currentVal);

console.log(total);

// another way
let max = num.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);


//.some() method

let numsome = [1, 2, 3, 4, 5, 16];

let isGreaterThan5 = numsome.some((n) => n > 5);

console.log(isGreaterThan5)

//.every() method

let numevery = [1, 20, 3, 1, 4, 5, 16];

let allGreaterThan0 = numevery.every((n) => n > 0);

console.log(allGreaterThan0);


// find array method

let stock = [
    {item: 'ketcup', quantity: 23},
    {item: 'mayo', quantity: 90},
    {item: 'hot sauce', quantity: 13},
];

let mayo = stock.findIndex((s) => s.item === 'mayo');

console.log(mayo)
