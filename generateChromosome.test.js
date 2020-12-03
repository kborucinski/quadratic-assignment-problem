import generateChromosome from "./generateChromosome";

test("generateChromosome", () => {
  let i = 0;

  const random = () =>
    [
      0.013606630487694282,
      0.21052486239086554,
      0.28299838254636556,
      0.696161009199874,
      0.32165320593537117
    ][i++];

  expect(generateChromosome(5, random)).toEqual([2, 4, 3, 1, 0]);
});
