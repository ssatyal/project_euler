this repo will be a place to chronicle my Project Euler solutions!

##Multiples of 3 and 5
###Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

```js
var numArray = [];

for (i = 1; i < 1000; i++){
  if (i%3 == 0 || i%5 == 0){
    numArray.push(i);
  }
};

console.log(numArray);
var newArray = numArray.reduce(add, 0);
//.reduce collapses an array into one for values, neat!

function add(a, b) {
    return a + b;
}

console.log(newArray);

//233168: correct
```
alternate brute force, but simpler:
```js
var total = 0;
for (var i=1; i < 1000; i++){
  if (i%3 == 0 || i%5 == 0){
    total += i;
  }
}
console.log(total); // 233168
```
