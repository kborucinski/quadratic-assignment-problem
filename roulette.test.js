import roulette from './roulette';

test('roulette', () => {
  const population = [1, 2, 3, 4, 5];

  const scores = [28, 18, 14, 9, 26];

  let i = 0;

  const random = () => [0.9, 0.18, 0.5, 0.18, 0.5][i++];

  expect(roulette(scores, population, random)).toEqual([5, 1, 3, 1, 3]);
});
