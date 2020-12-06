import { range, shuffle } from '@sandstreamdev/std/array';

const generatePopulation = (
  chromosomeSize,
  populationSize,
  random = Math.random
) => range(populationSize).map(_ => shuffle(range(chromosomeSize), random));

export default generatePopulation;
