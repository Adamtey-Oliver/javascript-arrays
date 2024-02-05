

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