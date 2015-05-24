'use strict';

/* finds all the combinations of given array. 
Combination is a way of selecting members
from a grouping, such that the order of selection
does not matter. *order does not matter*
*/

//arr = array(set of items)
//Num = (side of each combination)
function combinations(arr, num, start, idx, current) {
	var res = [];

	 if (idx === num) {
	 	res.push(current.slice());
	 	return;
	 }
	 for (var i = start; i < arr.length; i += 1){
	 	current[idx] = arr[i];
	 	combinations(arr, num, i + 1, idx + 1, current);
	 }
	}

	 function combination(arr, num) {
	 	var res = [];
	 	combinations(arr, num, 0, 0, []);
	 	var temp = res;

	 	res = null;
	 	return temp;
	 };
