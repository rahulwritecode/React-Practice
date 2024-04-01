/*

Promise
1] It is used to handle asynchronous operation in javascript.
2] Promise is object that represent eventual completion or failure of async operation and its resulting value 

promise store two type of data
1] promise State
state consist of three types, fulfilled, pending and rejected
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

2] promise Result
it is where the data is store inside it 

Promise has inbuilt function with 2 predefine argument resolve and reject
promise is immutable

example are as follows
fetch() => fetch is an async function and as we know async function always return value as promise 

.then() => is callback function which is attached to promise which maintain code control and easy to maintain the data 

so rather than passing callback function as an argument we are attaching callback function using .then() 


*/

console.log("-------------------");

const USER_API_LINK = "https://jsonplaceholder.typicode.com/users";

const userData = fetch(USER_API_LINK);

console.log(userData);

fetch(USER_API_LINK)
  .then((res) => res.json())
  .then((ret) => console.log(ret));
