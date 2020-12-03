import pair from './pair';

test('pair', () => {
  expect(pair([1, 2, 3, 4, 5, 6])).toEqual([
    [1, 2],
    [3, 4],
    [5, 6]
  ]);

  expect(
    pair([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8]
    ])
  ).toEqual([
    [
      [1, 2],
      [3, 4]
    ],
    [
      [5, 6],
      [7, 8]
    ]
  ]);
});
