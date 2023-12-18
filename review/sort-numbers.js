const numbers = [23, 56, 78, 11, 44, 89, 33, 67, 7, 92];
//compares numbers adjacent and swaps if needed
numbers.sort((a,b) => a-b);
console.log(numbers);


// for decending order

numbers.sort((a,b) => b-a);
console.log(numbers);
