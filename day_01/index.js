console.time("total");

const data = require("./data");

///const expenseList = data.test;
const expenseList = data.real;

console.time("part1");
console.log('day 1, two numbers sum to 2020');
part1:
for(i=0; i<expenseList.length; i++) {
	for(j=0; j<expenseList.length; j++) {
		if (expenseList[i]+expenseList[j] == 2020) {
			console.log(expenseList[i], expenseList[j], expenseList[i]*expenseList[j]);
			break part1
		}
	}
}
console.timeEnd("part1");

console.time("part2");
console.log('day 1, three numbers sum to 2020');
part2:
for(i=0; i<expenseList.length; i++) {
	for(j=0; j<expenseList.length; j++) {
		if (expenseList[i]+expenseList[j] > 2020) continue;
		for(k=0; k<expenseList.length; k++) {
			if (expenseList[i]+expenseList[j]+expenseList[k] == 2020) {
				console.log(expenseList[i], expenseList[j], expenseList[k], expenseList[i]*expenseList[j]*expenseList[k]);
				break part2
			}
		}
	}
}
console.timeEnd("part2");
console.timeEnd("total");
console.log('beat 41ms');
