const mutationPopulation = newSpecies => mutationProbability => {
  const mutated = [];

  for (let chromosome of newSpecies) {
    for (let i = 0; i < chromosome.length; i++) {
      let propability = Math.random() * 1;

      if (propability < mutationProbability) {
        let index = Math.floor(Math.random() * chromosome.length);
        let gen = chromosome[i];

        chromosome[i] = chromosome[index];
        chromosome[index] = gen;
      }
    }

    mutated.push(chromosome);
  }

  return newSpecies;
};

export default mutationPopulation;
