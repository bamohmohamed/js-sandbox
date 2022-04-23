const arr = [1, 2, 3, 4, 5, 6];

// arr.length = 7; // changing length - not recommended
arr[3] = 8; // update 
console.log(arr[3]); // read

const newArr = new Array(1, 2, 3, 4, 5, 6); // new Array(6) new array with size 6

console.log(arr);
console.log(newArr);

const fillArr = new Array(7);
fillArr.fill(7, 2, 6);
console.log(fillArr);

console.log(arr.includes(3));
console.log(arr.indexOf(3));

arr.push(7, 8, 9, 10);
console.log(arr);

console.log(arr.pop());

arr.unshift(1, 22, 4); // not efficient
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(Array.isArray(arr)); // console.log(arr instanceof Array);

console.log(arr.splice(2, 3, 1111, 2222, 3333, 444));
console.log(arr);

console.log(arr.slice(3, 6)); // last index exclusive
console.log(arr);

const arr2 = arr.concat(123, 45, 67, 21, 55);
console.log(arr);
console.log(arr2);

arr.reverse();
console.log(arr);

console.log(arr.join(' * '));
console.log(arr);

// Iterations
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const v of arr) {
//     console.log(v);
// }

//FP
const arrFP = [4, 22, 100, 5, 1];
arrFP.forEach(function (v, i, arr) {
    console.log(i, v, arr, this.num);
}, { num: 3777 });

