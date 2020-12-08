const data = require("./data");

///const rows = data.test;
const rulesRaw = data.real;


const gold = 'shiny gold'

const rules = {}
rulesRaw.map(rule => {
	[container, contained] = rule.split(' bags contain ')
	rules[container] =  contained.split(', ').map(b => b.replace(/^\d* /, '').replace(/ bag[s,.]*/g, ''));
} )

console.log(rules);

const processed = {}
const found = {};

function findContainers(color, indent) {
	/// escape condition
	if (processed[color]) {
		return 
	}
	processed[color] = true;
	for (const bag in rules) {
		if (rules[bag].includes(color)) {
			console.log(indent + color+' in '+bag);

			/// count all intermediate nodes
			found[bag] = true;  

			findContainers(bag, indent+'   ')

		}
	}
}


findContainers(gold, '')

let possibleBags = 0;
for (const color in found) {
	if (color !== gold) {
		possibleBags++
	}
}

console.log('answer', possibleBags)
