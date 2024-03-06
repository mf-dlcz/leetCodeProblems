// Baseball Game
// You are keeping the scores for a baseball game with strange rules.
// At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is 
// the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations 
// fit in a 32 - bit integer and that all operations are valid.

const calPoints = function(operations) {
  let sumOfAllScores = 0;
  const record = [];

  for (const operation of operations) {
    if (operation === 'C') {
      sumOfAllScores -= record.pop();

    } else if (operations === 'D') {
      const doublePreviousScore = record[record.length- 1] * 2;
      record.push(doublePreviousScore);
      sumOfAllScores += doublePreviousScore;
    
    } else if (operation === '+') {
      const sumOfPreviousScores = record[record.length - 1] + record[record.length -2];
      record.push(sumOfPreviousScores);
      sumOfAllScores += sumOfPreviousScores;
    
    } else {
      record.push(parseInt(operation));
      sumOfAllScores += parseInt(operation);
    }
  }
  return sumOfAllScores;
}

calPoints(["5", "2", "C", "D", "+"])

module.exports = calPoints;