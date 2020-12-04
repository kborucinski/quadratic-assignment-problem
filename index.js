import calculateFitnessScores from './fitnessScores';
import generatePopulation from './generatePopulation';
import tournament from './tournament';
import crossover from './crossover';
import mutation from './mutation';

import { chromosomeSize, distances, flows } from './data/had4';

const CROSSOVER_PROBABILITY = 0.8;
const MUTATION_PROBABILITY = 0.008;
const POPULATION_SIZE = 100;

let population = generatePopulation(chromosomeSize, POPULATION_SIZE);

const selection = method => (scores, population) =>
  method()(scores, population);

for (let i = 0; i < 10; i++) {
  const scores = calculateFitnessScores(distances, flows)(population);

  const parents = selection(tournament)(scores, population);

  const children = crossover(parents)(CROSSOVER_PROBABILITY);

  const maxFitnessScore = Math.max(...scores);
  const maxChromosome = population[scores.indexOf(maxFitnessScore)];

  population = mutation(children)(MUTATION_PROBABILITY);

  console.log(
    `Epoch: ${
      i + 1
    } | Max fitness score: ${maxFitnessScore} | Max chromosome: ${maxChromosome}`
  );
}
