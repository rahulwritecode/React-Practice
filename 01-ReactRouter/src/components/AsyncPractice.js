/*

What is async ?
what is await ?
How async await work behind the scenes ?
Example of using asyng and await ?
error handling
interview question
async await vs promise.then.catch 

Notes
1] Async funtion will always return a promise
2] async function has the functionality by default it will return promise but if it is returing some other value like string or number then the data will get wrap inside promise.
for live demo check example 1

*/

// example 1
const dataPromise = async function getData() {
  // now as we know async by default return promise
  // so the return value will get wrapped inside promise
  return "Testing Async function !";
};

console.log("Async funtion return data = ", dataPromise);
