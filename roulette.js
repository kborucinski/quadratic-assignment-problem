import { sum } from '@sandstreamdev/std/array';
import cumulativeSum from './cumulativeSum';

const roulette = (fitnessScores, population, random = Math.random) => {
  const sumOfFitnessScores = sum(fitnessScores);

  const probabilities = cumulativeSum(
    fitnessScores.map(fitnessScore => fitnessScore / sumOfFitnessScores)
  );

  const newSpecies = [];

  while (newSpecies.length !== population.length - 1) {
    const probability = random();

    if (probability < probabilities[0]) {
      newSpecies.push(population[0]);

      continue;
    }

    let index = 0;

    while (probability > probabilities[index]) {
      index++;
    }

    newSpecies.push(population[index]);
  }

  const maxFitnessScore = Math.max(...fitnessScores);
  const index = fitnessScores.indexOf(maxFitnessScore);

  newSpecies.push(population[index]);

  return newSpecies;
};

export default roulette;
