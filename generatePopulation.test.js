import generatePopulation from './generatePopulation';

test('generatePopulation', () => {
  const CHROMOSOME_SIZE = 5;
  const POPULATION_SIZE = 3;

  let i = 0;

  const random = () =>
    [
      0.013606630487694282,
      0.21052486239086554,
      0.28299838254636556,
      0.696161009199874,
      0.32165320593537117,
      0.013606630487694282,
      0.21052486239086554,
      0.28299838254636556,
      0.696161009199874,
      0.32165320593537117,
      0.013606630487694282,
      0.21052486239086554,
      0.28299838254636556,
      0.696161009199874,
      0.32165320593537117
    ][i++];

  expect(generatePopulation(random)(CHROMOSOME_SIZE, POPULATION_SIZE)).toEqual([
    [2, 4, 3, 1, 0],
    [2, 4, 3, 1, 0],
    [2, 4, 3, 1, 0]
  ]);
});
