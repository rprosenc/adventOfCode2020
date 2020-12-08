
const data = require("./data");

///const rows = data.test;
const rawLines = data.real;


const groups = []
let currentGroup = ''
for(i=0; i<rawLines.length; i++) {
	if (rawLines[i] === '') {
		groups.push(currentGroup);
		currentGroup = '';
	} 
	currentGroup += rawLines[i];
}
if (rawLines[i] !== '') {
	groups.push(currentGroup);
} 

function uniq(d){
	let sum = 1;
	d.split('').sort().reduce((a,c) => {if (a!=c) {sum++} return c} );
	return sum;
}

console.log(groups.map(g=> uniq(g)));
console.log( groups.map(g=> uniq(g)).reduce((a,c)=>a+c));
