import { sum } from '@sandstreamdev/std/array';

const getFitnessScores = costs => {
  const sumOfCosts = sum(costs);

  return costs.map(cost => sumOfCosts / cost);
};

export default getFitnessScores;
