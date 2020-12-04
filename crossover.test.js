import crossover, { cross, even, select } from './crossover';

test('even', () => {
  expect(even(2)).toBe(true);
  expect(even(3)).toBe(false);
});

test('select', () => {
  const population = [
    [0, 1, 2, 3],
    [1, 3, 2, 0],
    [2, 1, 3, 0],
    [2, 1, 0, 3]
  ];

  let i = 0;

  const probability = 0.6;

  const random = () =>
    [
      0.4626771145743793,
      0.4207971260755974,
      0.9394754084244603,
      0.9263082100568227
    ][i++];

  expect(select(probability, random)(population)).toEqual([
    [
      [2, 1, 3, 0],
      [2, 1, 0, 3]
    ],
    [
      [0, 1, 2, 3],
      [1, 3, 2, 0]
    ]
  ]);
});

test('cross', () => {
  const pair = [
    [0, 1, 2, 3, 5, 4],
    [4, 2, 1, 0, 3, 5]
  ];

  expect(cross(() => 0)(pair)).toEqual([
    [4, 1, 2, 3, 5, 0],
    [0, 2, 1, 4, 3, 5]
  ]);

  expect(cross(() => 0.390953316998192)(pair)).toEqual([
    [4, 1, 2, 3, 5, 0],
    [0, 2, 1, 4, 3, 5]
  ]);
});

test('crossover', () => {
  const population = [
    [0, 1, 2, 3],
    [1, 3, 2, 0],
    [2, 1, 3, 0],
    [2, 1, 0, 3]
  ];

  const probability = 0.6;

  let i = 0;

  const random = () =>
    [
      0.4626771145743793,
      0.4207971260755974,
      0.9394754084244603,
      0.9263082100568227,
      0.390953316998192
    ][i++];

  expect(crossover(population)(probability, random)).toEqual([
    [2, 1, 3, 0],
    [2, 1, 0, 3],
    [1, 3, 2, 0],
    [3, 0, 2, 1]
  ]);
});
