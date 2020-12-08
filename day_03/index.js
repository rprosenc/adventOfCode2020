const data = require("./data");

///const rows = data.test;
const rows = data.real;

map = rows.map( r=> r.split(''));
width = rows[0].length;


function tree(x,y) {
   return map[y][x % width] === '#'; 
}

function slope(right, down) {

	trees = 0;
	x = right;
	for(y=down; y<rows.length; y+=down) {
		if (tree(x,y)) {
			trees++;
		}
		x+=right;
	}

	return trees;
}


inputs = [
	[1,1],
	[3,1],
	[5,1],
	[7,1],
	[1,2]
];

inputs.map(a=>console.log(a, slope(a[0], a[1])));
results = inputs.map(a=>slope(a[0], a[1]));
console.log(results);
console.log(results.reduce((a,c)=>a*c))
