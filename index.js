import plotly from 'plotly';
import getFitnessScores from './getFitnessScores';
import generatePopulation from './generatePopulation';
import tournament from './tournament';
import roulette from './roulette';
import crossover from './crossover';
import mutation from './mutation';
import getCosts from './getCosts';

import had20 from './data/had20';

const { PLOTLY_API_KEY, PLOTLY_LOGIN } = process.env;

const plotlyAccount = plotly(PLOTLY_LOGIN, PLOTLY_API_KEY);

const GRAPH_OPTIONS = {
  filename: 'quadratic-assigment-problem',
  fileopt: 'overwrite'
};

const CROSSOVER_PROBABILITY = 0.002;
const MUTATION_PROBABILITY = 0.0002;
const POPULATION_SIZE = 1000;

const selection = method => (scores, population) => method(scores, population);

const run = ({ CHROMOSOME_SIZE, DISTANCES, FLOWS }) => method => {
  const data = { x: [], y: [], type: 'scatter' };
  const { x, y } = data;

  let population = generatePopulation(CHROMOSOME_SIZE, POPULATION_SIZE);

  for (let epoch = 0; epoch < 5000; epoch++) {
    const costs = getCosts(DISTANCES, FLOWS)(population);
    const fitnessScores = getFitnessScores(costs);
    const parents = selection(method)(fitnessScores, population);
    const children = crossover(parents)(CROSSOVER_PROBABILITY);

    const minCost = Math.min(...costs);
    const maxFitnessScore = Math.max(...fitnessScores);

    const chromosome = population[fitnessScores.indexOf(maxFitnessScore)];

    x.push(epoch);
    y.push(minCost);

    console.log(
      `Epoch: ${
        epoch + 1
      } | Max fitness score: ${maxFitnessScore} | Cost: ${minCost} | Result: ${chromosome}`
    );

    population = mutation(children)(MUTATION_PROBABILITY);
  }

  // plotlyAccount.plot([data], GRAPH_OPTIONS);
};

//run(had20)(tournament);
run(had20)(roulette);

export default run;
