const tournamentSelection = scores => population => {
  const populationSize = population.length;

  const candidates = population.map(() => {
    const first = Math.floor(Math.random() * populationSize);
    const second = Math.floor(Math.random() * populationSize);

    return scores[first] > scores[second]
      ? population[first]
      : population[second];
  });

  return candidates;
};

// 2, 3, 0, 1

export default tournamentSelection;
