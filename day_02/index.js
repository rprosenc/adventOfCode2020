const data = require("./data");

///const passwords = data.test;
const passwords = data.real;

valid = [];
valid2 = [];
for(i=0; i<passwords.length; i++) {
	[policy, password] = passwords[i].split(': ');
	[pSize, pChar] = policy.split(' ');
	[pMin, pMax] = pSize.split('-').map(n=>parseInt(n)-1);

	segments = password.split(pChar);
	found = segments.length - 1;

	if(found >=pMin && found <= pMax) {
		valid.push(passwords[i]);
	}


	//console.log(policy, '"'+password );
	//console.log(pMin, pMax, pChar, password[pMin], password[pMax]);
	if (password[pMin] !== password[pMax]  && (password[pMin]===pChar || password[pMax] === pChar)) {
		valid2.push(passwords[i]);
	}
}

console.log('result part 1');
console.log(valid.length);

console.log('result part 2');
console.log(valid2.length);




