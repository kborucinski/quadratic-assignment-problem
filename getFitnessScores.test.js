import getFitnessScores from './getFitnessScores';

test('getFitnessScores', () => {
  const costs = [23, 31, 32, 45, 100, 101, 130];

  expect(getFitnessScores(costs)).toEqual([
    20.08695652173913,
    14.903225806451612,
    14.4375,
    10.266666666666667,
    4.62,
    4.574257425742574,
    3.5538461538461537
  ]);
});
