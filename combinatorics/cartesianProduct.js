'use strict';

	// Cartesian Product

	var input = [
    // { 'colour' : ['red', 'green'] },
    // { 'material' : ['cotton', 'wool', 'silk'] },
    // { 'shape' : ['round', 'square', 'rectangle'] }
    [1, 2, 3],[3, 2, 1]
];
	function cartesianProduct(input, current) {
		if (!input || !input.length) {
			return [];
		} {

			var head = input[0];
			var tail = input.slice(1);
			var output = [];

			for (var key in head) {
				for( var i = 0; i < head[key].length; i++) {
					var newCurrent = copy(current);
					newCurrent[key] = head[key][i];
					if(tail.length) {
						var productOfTail = cartesianProduct(tail, newCurrent);
						output = output.concat(productOfTail);
					}
					else
						output.push(newCurrent);
				}
			}
			return output;
		}
	}

		function copy(obj) {
			var res = {};
			for (var p in obj) res[p] = obj[p];
				return res;
		}
	