const data = require("./data");

program = function(code) {
	let accumulator = 0;
	let running = true;

	const visitedInstructions = [];
	let lineCounter = 0;

	while (running) {
		if (visitedInstructions[lineCounter]) {
			console.log('terminating at line: ', lineCounter);
			return accumulator;
		}
		visitedInstructions[lineCounter] = true;
		let [opCode, arg] = code[lineCounter].split(' ')
		arg = parseInt(arg);
		console.log('Executing line ', lineCounter, code[lineCounter] )

		switch (opCode) {
			case 'nop':
				lineCounter++;
				break;

			case 'acc':
				accumulator+=arg;
				lineCounter++;
				break;

			case 'jmp':
				lineCounter+=arg;
				break;

			default:
		}
	}
}

//console.log(program(data.test));
console.log(program(data.real));
