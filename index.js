import fitnessScores from "./fitnessScores.js";
import generateRandomPopulation from "./generateRandomPopulation.js";
import normalize from "./normalize.js";
import tournamentSelection from "./tournamentSelection.js";
import crossover from "./crossover.js";
import mutationPopulation from "./mutationPopulation.js";

import { chromosomeSize, distances, flows } from "./data/had4.js";

const crossoverProbability = 0.8;
const mutationProbability = 0.008;
const populationSize = 10;

let population = generateRandomPopulation(chromosomeSize, populationSize);

for (let i = 0; i < 1000; i++) {
  const scores = fitnessScores(distances, flows)(population);

  const parents = tournamentSelection(scores)(population);

  const children = crossover(parents)(crossoverProbability);

  const newPopulation = mutationPopulation(children)(mutationProbability);

  console.log({ scores });
  const maxChromosome = population[scores.indexOf(Math.max(...scores))];

  console.log(
    `Epoch: ${i} | Max fitness score: ${Math.max(
      ...scores
    )} | Max chromosome: ${maxChromosome}`
  );

  population = newPopulation;
}
