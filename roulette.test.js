import roulette from './roulette';

test('roulette', () => {
  const population = [2, 1, 3, 5, 4];

  const fitnessScores = [7.5, 15, 5, 3, 3.75];

  let i = 0;

  const random = () => [0.284, 0.848, 0.004, 0.781, 0.429][i++];

  expect(roulette(fitnessScores, population, random)).toEqual([1, 5, 2, 3, 1]);
});
