import { range, shuffle } from '@sandstreamdev/std/array';

const generatePopulation = (random = Math.random) => (
  chromosomeSize,
  populationSize
) => range(populationSize).map(_ => shuffle(range(chromosomeSize), random));

export default generatePopulation;
