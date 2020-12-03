import { cross } from "./crossChromosomes";

test("cross", () => {
  expect(
    cross([
      [0, 1, 2, 3],
      [3, 2, 1, 0]
    ])(0)
  ).toEqual([
    [3, 1, 2, 3],
    [0, 2, 1, 0]
  ]);
  expect(
    cross([
      [0, 1, 2, 3],
      [3, 2, 1, 0]
    ])(1)
  ).toEqual([
    [0, 2, 2, 3],
    [3, 1, 1, 0]
  ]);
  expect(
    cross([
      [0, 1, 2, 3],
      [3, 2, 1, 0]
    ])(2)
  ).toEqual([
    [0, 1, 1, 3],
    [3, 2, 2, 0]
  ]);
  expect(
    cross([
      [0, 1, 2, 3],
      [3, 2, 1, 0]
    ])(3)
  ).toEqual([
    [0, 1, 2, 0],
    [3, 2, 1, 3]
  ]);
});

// test("crossChromosomes", () => {
//   expect(
//     crossChromosomes(1)([
//       [0, 1, 2, 3],
//       [3, 2, 1, 0]
//     ])
//   ).toEqual([
//     [0, 2, 2, 3],
//     [3, 1, 1, 0]
//   ]);
// });
