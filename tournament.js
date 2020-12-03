export default (scores, population) =>
  population.map(() => {
    const first = Math.floor(Math.random() * population.length);
    const second = Math.floor(Math.random() * population.length);

    return scores[first] > scores[second]
      ? population[first]
      : population[second];
  });
