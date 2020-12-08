const data = require("./data");

///const rows = data.test;
const passes = data.real;

half = function(range, part) {
	a = range[0];
	c = range[1];
	b = a + parseInt((c-a)/2)
	return part=='B'||part=='R' ? [b+1, c] : [a, b]
}

const pid = function(pass) {
	let range = [0, 127]
 	for(i=0; i<7; i++) {
		//console.log(range, pass[i])
		range = half(range, pass[i])
	}
	let row = [range[0]===range[1]] ? range[0] : console.log('error for row in pass '+pass)
	range = [0, 7]
 	for(i=7; i<=9; i++) {
		//console.log(range, pass[i])
		range = half(range, pass[i])
	}
	let col = [range[0]===range[1]] ? range[0] : console.log('error for col in pass '+pass)
	//return [row, col, (row*8)+col]
	return (row*8)+col;
}

const seatPids = passes.map(p => pid(p));
console.log('Part I (highest PID)')
console.log(seatPids.reduce((a,c) => a>c?a:c));
console.log('')


singleMissingPid = function(pids) {
	const sortedSeats = [];
	for(i=0;i<pids.length; i++) {
		sortedSeats[pids[i]] = pids[i];
	}

	for(i=0;i<sortedSeats.length; i++) {
		if (!sortedSeats[i] && sortedSeats[i-1] && sortedSeats[i+1]) {
			return i;
		}	
	}
}

console.log('Part II (missing PID)')
console.log(singleMissingPid(seatPids));









