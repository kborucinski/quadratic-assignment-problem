import calculateFitnessScores from "./fitnessScores";
import generatePopulation from "./generatePopulation";
import tournament from "./tournament";
import crossover from "./crossover";
import mutate from "./mutate";

import { chromosomeSize, distances, flows } from "./data/had4";

const crossoverProbability = 0.8;
const mutationProbability = 0.008;
const populationSize = 10;

console.log("Hello World!");

let population = generatePopulation(chromosomeSize, populationSize);

console.log(population);

const selection = method => (scores, population) => method(scores, population);

for (let i = 0; i < 10; i++) {
  const fitnessScores = calculateFitnessScores(distances, flows)(population);

  const parents = selection(tournament)(fitnessScores, population);

  const children = crossover(parents)(crossoverProbability);

  console.log({ fitnessScores });
  const maxFitnessScore = Math.max(...fitnessScores);
  const maxChromosome = population[fitnessScores.indexOf(maxFitnessScore)];

  console.log(
    `Epoch: ${i} | Max fitness score: ${maxFitnessScore} | Max chromosome: ${maxChromosome}`
  );

  population = mutate(children)(mutationProbability);
}
