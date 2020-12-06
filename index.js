import fitnessScores from './fitnessScores';
import generatePopulation from './generatePopulation';
import tournament from './tournament';
import crossover from './crossover';
import mutation from './mutation';

import had4 from './data/had4';

const CROSSOVER_PROBABILITY = 0.8;
const MUTATION_PROBABILITY = 0.008;
const POPULATION_SIZE = 100;

const selection = method => (scores, population) => method(scores, population);

const run = ({ CHROMOSOME_SIZE, DISTANCES, FLOWS }) => method => {
  let population = generatePopulation(CHROMOSOME_SIZE, POPULATION_SIZE);

  for (let i = 0; i < 100; i++) {
    const scores = fitnessScores(DISTANCES, FLOWS)(population);

    const parents = selection(method)(scores, population);

    const children = crossover(parents)(CROSSOVER_PROBABILITY);

    const maxScore = Math.max(...scores);

    const chromosome = population[scores.indexOf(maxScore)];

    console.log(
      `Epoch: ${i + 1} | Max fitness score: ${maxScore} | Result: ${chromosome}`
    );

    population = mutation(children)(MUTATION_PROBABILITY);
  }
};

run(had4)(tournament);

export default run;
