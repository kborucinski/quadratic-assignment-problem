import cumulativeSum from './cumulativeSum';

test('cumulativeSum', () => {
  expect(cumulativeSum([10, 12, 1, 100, 21, 1, 5])).toEqual([
    10,
    22,
    23,
    123,
    144,
    145,
    150
  ]);
  expect(cumulativeSum([0, 1, 1, 0, 1, 1, 1])).toEqual([0, 1, 2, 2, 3, 4, 5]);
  expect(cumulativeSum([])).toEqual([]);
  expect(cumulativeSum([-1, -2, 5])).toEqual([-1, -3, 2]);
});
