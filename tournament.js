import { range } from '@sandstreamdev/std/array';

const tournament = (random = Math.random) => (scores, population) => {
  const populationSize = population.length;

  return range(populationSize).map(() => {
    const i = Math.floor(random() * populationSize);
    const j = Math.floor(random() * populationSize);

    return scores[i] > scores[j] ? population[i] : population[j];
  });
};

export default tournament;
