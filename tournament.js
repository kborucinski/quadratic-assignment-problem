import { range } from '@sandstreamdev/std/array';

const tournament = (scores, population, random = Math.random) => {
  const populationSize = population.length;

  return range(populationSize).map(() => {
    const i = Math.floor(random() * populationSize);
    const j = Math.floor(random() * populationSize);

    return scores[i] > scores[j] ? population[i] : population[j];
  });
};

export default tournament;
