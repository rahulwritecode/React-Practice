/* 

what is callback funtion ? 
callback function are the function which are passed into anothter fucntion as an argument and due to which child function get invoke after completing parent function.

but it is good only upto 2 level only, more than that lead to your software at risk 
2 most common problems in multi-level callback function 

1] Inversion of control = you are passing code control to parent function which can call and not call or pass on error data to child function

2] callback hell = multilevel callback  lead to increase in code complexity which is difficult to maintained, operate and understand as it grows code horizontally, this type of situation also call 
pyramid of  Doom.

example are as follows
*/

function fetchNum(n1, n2) {
  let num1 = n1;
  let num2 = n2;
  console.log("n1 = ", num1, "n2 = ", num2);
  addnum(num1, num2);
  return;
}

function addnum(n1, n2) {
  let add = n1 + n2;
  console.log("addition value = ", add);
  return add;
}

fetchNum(5, 10);
