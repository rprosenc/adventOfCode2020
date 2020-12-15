
const testData =[
    //{start: [0,3,6], target: 2020, result: 436},
    {start: [1,3,2], target: 2020, result: 1},
    {start: [2,1,3], target: 2020, result: 10},
    {start: [1,2,3], target: 2020, result: 27},
    {start: [2,3,1], target: 2020, result: 78},
    {start: [3,2,1], target: 2020, result: 438},
    {start: [3,1,2], target: 2020, result: 1836},

    {start: [0,3,6], target: 30000000, result: 175594},
    {start: [1,3,2], target: 30000000, result: 2578},
    {start: [2,1,3], target: 30000000, result: 3544142},
    {start: [1,2,3], target: 30000000, result: 261214},
    {start: [2,3,1], target: 30000000, result: 6895259},
    {start: [3,2,1], target: 30000000, result: 18},
    {start: [3,1,2], target: 30000000, result: 362},
    //
    {start: [14,3,1,0,9,5], target: 2020, result: NaN},
    //{start: [14,3,1,0,9,5], target: 30, result: NaN},
    //{start: [14,3,1,0,9,5], target: 300, result: NaN},
    //{start: [14,3,1,0,9,5], target: 3000, result: NaN},
    //{start: [14,3,1,0,9,5], target: 30000, result: NaN},
    //{start: [14,3,1,0,9,5], target: 300000, result: NaN},
    //{start: [14,3,1,0,9,5], target: 3000000, result: NaN},
    {start: [14,3,1,0,9,5], target: 30000000, result: NaN},  // 30.000.000 vs 30.000.000
];

console.log('\n\n', testData.map(t => {return {'equals': turnAt(t.start, t.target) === t.result, 'expected': t.result}}));



function turn(prevTurns, cache) {
    // console.log('turn', prevTurns.join(', '));
    const prevTurn = prevTurns.length-1;
    const prevNumber = prevTurns[prevTurn];
    const lastPosition = getLastPosition(prevNumber, prevTurn, cache);
	//console.log('turn',prevTurn, prevNumber, lastPosition, lastPosition >=0?prevTurn - lastPosition:0)
    if (lastPosition >=0) {
	    return prevTurn - lastPosition;
    }
    return 0;
}


function getLastPosition(value, turn, cache) {
	const key = '_'+value;
	let lastPosition = -1;
	if (cache[key] !== undefined) {
		lastPosition = cache[key]
	}
	//console.log('getLastPosition', value, turn, key, lastPosition);
	cache[key] = turn;
	return lastPosition;
}

function turnAt(starts, endTurn) {
    const cache = {}
    const label = starts.join(',')+':'+endTurn
    console.time(label);
    const turns = starts.slice(0);
    // init cache and remove previous turn
    starts.forEach((n,i)=>getLastPosition(n,i, cache));
    while (turns.length < endTurn) {
        turns.push(turn(turns, cache))
    }
//console.log(cache);
    console.log(starts.join(','), '->', turns[endTurn-1]);
    console.timeEnd(label);

    return turns[endTurn-1];
}
