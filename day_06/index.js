
groupAnswers = `abc

a
b
c

ab
ac

a
a
a
a

b`


rawLines = groupAnswers.split('\n')
groups = []
currentGroup = ''
for(i=0; i<rawLines.length; i++) {
	if (rawLines[i] == '') {
		groups.push(currentGroup);
		currentGroup = '';
	} 
	currentGroup += rawLines[i];
}
if (rawLines[i] !== '') {
	groups.push(currentGroup);
} 

function uniq(d){
	sum = 1;
	d.split('').sort().reduce((a,c) => {if (a!=c) {sum++} return c} );
	return sum;
}

console.log(groups.map(g=> uniq(g)));
console.log( groups.map(g=> uniq(g)).reduce((a,c)=>a+c));
