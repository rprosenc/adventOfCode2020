const data = require("./data");
const log = require("./logger");

const logger = new log.Logger(true, true,null, 3);

function findMissingPairSum(numbers, preabmleLength) {
    let preamble = [];
    for(let i=0; i<numbers.length; i++) {
        preamble.push(numbers[i]);
        if (i<=preabmleLength) {
            continue;
        } else {
            preamble.shift();
        }

        let pair = findPair(numbers[i], preamble);
        if (!pair) {
            logger.trace('iterate', 'invalidNumber: ', numbers[i]);
            return numbers[i];
        }
    }

    logger.trace('ERROR', 'no result found');
    return null;
}

function findPair(sum, candidates) {
    for(let i=0; i<candidates.length; i++) {
        for(let j=0; j<candidates.length; j++) {

            if (candidates[i] !== candidates[j] && (candidates[i] + candidates[j]) === sum) {
                const pair = [candidates[i], candidates[j]];
                return pair;
            }
        }
    }
}

function findContiguousSet(desiredSum, candidates) {
    logger.trace('contiguoous', desiredSum, candidates);
    for(let i=0; i<candidates.length; i++) {
        intermediateSum = candidates[i];
        let j=i+1;
        while(intermediateSum < desiredSum && j<candidates.length) {
            intermediateSum += candidates[j];
            logger.trace(i, j, 'intermediate', intermediateSum, desiredSum);
            if (intermediateSum < desiredSum) {
                j++;
            }
        }
        if (intermediateSum === desiredSum) {
            const result = [];
            for(let k=i; k<=j; k++) {
                result.push(candidates[k]);
            }
            return result;
        }
    }

    logger.trace('ERROR', 'no intermediate sum found');
    return null;
}

numbers = data.test;
preabmleLength = 5;

numbers = data.real;
preabmleLength = 25;

logger.trace('start');
invalidNumber = findMissingPairSum(numbers, preabmleLength);
contiguousSet = findContiguousSet(invalidNumber, numbers);
smallest = contiguousSet.reduce((a,c)=>{return a<c?a:c});
largest = contiguousSet.reduce((a,c)=>{return a>c?a:c});

logger.trace('result', contiguousSet, smallest, largest);
logger.trace('sum', smallest + largest);
