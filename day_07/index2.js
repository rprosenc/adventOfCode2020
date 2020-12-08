const data = require("./data");

///const rows = data.test;
const rulesRaw = data.real;


const gold = 'shiny gold'

const rules = {
	'no other': {}	
}
rulesRaw.map(rule => {
	const [container, bags] = rule.split(' bags contain ')
	rules[container] = {}
	bags.split(', ').forEach((bag) => { 
		const color = bag.replace(/^\d* /, '').replace(/ bag[s,.]*/g, '')
		rules[container][color] = parseInt(bag) || 0
	});
} )

function sumBags(containerBag) {
	const containedBags = rules[containerBag];

	let sum = 1;
	// recursion only up to the leaves
	for (const bag in containedBags) {
		sum += (containedBags[bag] * sumBags(bag));
	}
	return sum
}

console.log(sumBags(gold)-1)

