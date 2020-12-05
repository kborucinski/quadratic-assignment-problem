import calculateFitnessScores from './fitnessScores';
import generatePopulation from './generatePopulation';
import tournament from './tournament';
import crossover from './crossover';
import mutation from './mutation';

import had8 from './data/had8';

const CROSSOVER_PROBABILITY = 0.3;
const MUTATION_PROBABILITY = 0.008;
const POPULATION_SIZE = 1000;

const selection = method => (scores, population) =>
  method()(scores, population);

const run = ({ CHROMOSOME_SIZE, DISTANCES, FLOWS }) => {
  let population = generatePopulation(CHROMOSOME_SIZE, POPULATION_SIZE);
  let result;

  for (let i = 0; i < 1000; i++) {
    const scores = calculateFitnessScores(DISTANCES, FLOWS)(population);

    const parents = selection(tournament)(scores, population);

    const children = crossover(parents)(CROSSOVER_PROBABILITY);

    const maxScore = Math.max(...scores);

    result = population[scores.indexOf(maxScore)];

    console.log(
      `Epoch: ${i + 1} | Max fitness score: ${maxScore} | Result: ${result}`
    );

    population = mutation(children)(MUTATION_PROBABILITY);
  }

  return result;
};

run(had8);

export default run;
