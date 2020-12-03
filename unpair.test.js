import unpair from './unpair';

test('unpair', () => {
  expect(
    unpair([
      [1, 2],
      [3, 4],
      [5, 6]
    ])
  ).toEqual([1, 2, 3, 4, 5, 6]);

  expect(
    unpair([
      [
        [1, 2],
        [3, 4]
      ],
      [
        [5, 6],
        [7, 8]
      ]
    ])
  ).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ]);
});
