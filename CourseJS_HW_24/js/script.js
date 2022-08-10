"use strict";


//1.
/*
const arr = ["a", "b", "c", "d"];
alert(`'${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}'`);
*/
//2.
/*
const arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + (arr[2] * arr[3]);
alert(result);
*/
//3.
/*
const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
alert(arr[1][0]);
*/
//4.
/*
const obj =  {
    js:["jQuery", "Angular"], 
    php: "hello", 
    css: "world"
};
alert(obj['js'][0]);
*/
//5.
/*
const arr = [];
for (let  x = 'x'; x.length <= 10; x +='x') arr.push(x) ;    
console.log(arr);
*/
//6.
/*
const arr = [];
for (let  x = '1'; x.length <= 10; x +='1') arr.push(x) ;    
console.log(arr);
*/
//7.
/*
const arrayFill = (value, length) => { 
	const arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}
console.log(arrayFill('x', 5));
*/
//8.
/*
const arr = [1,2,3,4,5,6];
console.log(arr.reduce((sum, current) => sum[1] <= 10 ? [sum[0] + 1, sum[1] + current] :
 sum, [0, 0])[0]);
 */

 //9.
 /*
const arr = [1, 2, 3, 4, 5];
arr.sort((a,b) => b - a);
console.log(arr);
*/
//10.
/*
const arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	for (let x = 0; x < arr[i].length; x++) {
		sum += arr[i][x];
	};
};
console.log(sum);
*/
//11.
/*
const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (var i = 0; i < arr.length; i++) {
	for (let x = 0; x < arr[i].length; x++) {
  		for (let k = 0; k < arr[i][x].length; k++) {
			sum += arr[i][x][k];
   		};
	};
};
console.log(sum);
*/
