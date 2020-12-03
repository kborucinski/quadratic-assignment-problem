import calculateFitnessScores from './fitnessScores';
import generatePopulation from './generatePopulation';
import tournament from './tournament';
import crossover from './crossover';
import mutate from './mutate';

import { chromosomeSize, distances, flows } from './data/had4';

const crossoverProbability = 0.8;
const mutationProbability = 0.008;
const populationSize = 100;

let population = generatePopulation(chromosomeSize, populationSize);

const selection = method => (scores, population) => method(scores, population);

for (let i = 0; i < 1000; i++) {
  const scores = calculateFitnessScores(distances, flows)(population);
  const parents = selection(tournament)(scores, population);
  const children = crossover(parents)(crossoverProbability);

  const maxFitnessScore = Math.max(...scores);
  const maxChromosome = population[scores.indexOf(maxFitnessScore)];

  console.log(
    `Epoch: ${i} | Max fitness score: ${maxFitnessScore} | Max chromosome: ${maxChromosome}`
  );

  population = mutate(children)(mutationProbability);
}
