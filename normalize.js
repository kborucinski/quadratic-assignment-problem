import { sum } from '@sandstreamdev/std/array';

const normalize = scores => {
  const sumOfScores = sum(scores);

  return scores.map(score => sumOfScores / score);
};

export default normalize;
