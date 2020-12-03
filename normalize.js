import { sum } from '@sandstreamdev/std/array';

const normalize = fitnessScores => {
  const sumOfScores = sum(fitnessScores);

  return fitnessScores.map(score => score / sumOfScores);
};

export default normalize;
