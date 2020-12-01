import generateRandomChromosome from "./generateRandomChromosome";

test("fitnessScores", () => {
  expect(generateRandomChromosome(1)).toEqual([0]);
  expect(generateRandomChromosome(2)).toEqual([0, 1]);
  expect(generateRandomChromosome(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
