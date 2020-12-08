
const data = require("./data");

///const rows = data.test;
const rawLines = data.real;

const groups = []
let currentGroup = ''
let people=0
for(i=0; i<rawLines.length; i++) {
	if (rawLines[i] === '') {
		groups.push({p:people, a:currentGroup});
		currentGroup = '';
		people=0
	}  else {
		people++;
	}
	currentGroup += rawLines[i];
}
if (rawLines[i] !== '') {
	groups.push({p:people, a:currentGroup});
} 

function all(d,counts){
	let sum = 0;
	let answers = d.a
	'abcdefghijklmnopqrstuvwxyz'.split('').map(
		(c) => {
			const res = answers.match(new RegExp(c, 'g'))
			return {c:c, a:res?res.length:0}
		}
	).map(
		(c) => { 
			if (c.a===d.p) sum++; 
		}
	);
	return sum;
}

console.log(groups.map(g=>all(g)));
console.log(groups.map(g=>all(g)).reduce((a,c)=>a+c))
