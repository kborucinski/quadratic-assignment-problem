import cross from './cross';

test('cross', () => {
  expect(cross(0)([0, 1, 2, 3], [3, 2, 1, 0])).toEqual([
    [3, 1, 2, 0],
    [0, 2, 1, 3]
  ]);
  expect(cross(1)([0, 1, 2, 3], [3, 2, 1, 0])).toEqual([
    [0, 2, 1, 3],
    [3, 1, 2, 0]
  ]);
  expect(cross(2)([0, 1, 2, 3], [3, 2, 1, 0])).toEqual([
    [0, 2, 1, 3],
    [3, 1, 2, 0]
  ]);
  expect(cross(3)([0, 1, 2, 3], [3, 2, 1, 0])).toEqual([
    [3, 1, 2, 0],
    [0, 2, 1, 3]
  ]);
});
