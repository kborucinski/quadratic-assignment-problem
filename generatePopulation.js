import { range } from '@sandstreamdev/std/array';
import generateChromosome from './generateChromosome';

export default (chromosomeSize, populationSize) =>
  range(populationSize).map(generateChromosome(chromosomeSize));
