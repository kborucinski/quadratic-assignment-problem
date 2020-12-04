import mutation, { mutate } from './mutation';

test('mutate', () => {
  const chromosome = [0, 1, 2, 3];

  const random = () => 0.6880719525653407;

  const index = 1;

  expect(mutate(chromosome)(index, random)).toEqual([0, 2, 1, 3]);
});

test('mutation', () => {
  const population = [
    [0, 1, 2, 3],
    [1, 3, 2, 0],
    [2, 1, 3, 0],
    [2, 1, 0, 3]
  ];

  const probability = 0.18;

  let i = 0;

  const random = () =>
    [
      0.34625130901376955,
      0.9180830529386046,
      0.43722317939877775,
      0.23829039647987593
    ][i++];

  expect(mutation(population)(probability, random)).toEqual([
    [0, 1, 2, 3],
    [1, 3, 2, 0],
    [2, 1, 3, 0],
    [2, 1, 0, 3]
  ]);
});
