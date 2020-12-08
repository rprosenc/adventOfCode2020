const data = require("./data");

///const rows = data.test;
///const rows = data.test_invalid;
///const rows = data.test_valid;
const rawLines = data.real;

requiredFields = [
	'byr', // (Birth Year)  - four digits; at least 1920 and at most 2002.
	'iyr', // (Issue Year) - four digits; at least 2010 and at most 2020.
	'eyr', // (Expiration Year)- four digits; at least 2020 and at most 2030.
	'hgt', // (Height) - a number followed by either cm or in:
		//	If cm, the number must be at least 150 and at most 193.
		//	If in, the number must be at least 59 and at most 76.
	'hcl', // (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
	'ecl', // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
	'pid', // (Passport ID) - a nine-digit number, including leading zeroes.
]

function valid(document) {
	for(i=0;i<requiredFields.length; i++) {
		if (document[requiredFields[i]] === undefined) {
			return false;
		}
	}

	return true;
}

function valid2(document) {
	for(let i=0;i<requiredFields.length; i++) {
		if (document[requiredFields[i]] === undefined) { return false; }
	}

	let byr = document['byr'];
	if (! (byr.match(/^\d{4}$/) && byr >= 1920 && byr <= 2002)) { return false; }

	let iyr = document['iyr'];
	if (! (iyr.match(/^\d{4}$/) && iyr >= 2010 && iyr <= 2020)) { return false; }

	let eyr = document['eyr'];
	if (! (eyr.match(/^\d{4}$/) && eyr >= 2020 && eyr <= 2030)) { return false; }

	let hgt = document['hgt'];
	let height = parseInt(hgt);
	if (! ((hgt.match(/^\d*cm$/) && height >= 150 && height <= 193) || (hgt.match(/^\d*in$/) && height >= 59 && height <= 76)) ) { return false; }

	let hcl = document['hcl'];
	if (! (hcl.match(/^#[0-9a-f]{6}$/)) ) { return false; }

	let ecl = document['ecl'];
	let colors = 'amb blu brn gry grn hzl oth'.split(' ');
	if (! colors.includes(ecl)) { return false; }

	let pid = document['pid'];
	if (! (pid.match(/^\d{9}$/)) ) { return false; }

	return true;
}


const documents = [];
let currentDocument = {};
for(i=0; i<rawLines.length; i++) {
	line = rawLines[i];
	if (line === '') {
		documents.push(currentDocument);
		currentDocument = {};
		continue;
	}

	line.split(' ').forEach(p => {[key, value] = p.split(':'); currentDocument[key] = value} );
}

// push last element, if data did not end with a new line 
if (line !== '') {
	documents.push(currentDocument);
}



validDocuments = [];
documents.forEach(d => { if (valid2(d)) validDocuments.push(d)  } )

/// debug output
//console.log(requiredFields.map(f=>f + ': ' + validDocuments.map(d=>d[f]).sort().join(', ')));
console.log('valid documents: ', validDocuments.length);
