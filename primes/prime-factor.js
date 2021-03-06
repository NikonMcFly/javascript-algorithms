'use strict';

// Print out Prime Factors

function primeFactors(n) {
		var factors = [];
		var divisor = 2;

		while(n > divisor) {
			if(n % divisor == 0){
				factors.push(divisor);
				n= n/ divisor;
			}
			else
				divisor++;
		}
		return factors;
	};
