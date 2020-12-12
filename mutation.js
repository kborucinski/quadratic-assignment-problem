export const mutate = ([...chromosome]) => (i, random = Math.random) => {
  const chromosomeSize = chromosome.length;
  const j = Math.floor(random() * chromosomeSize);

  const gene = chromosome[i];
  chromosome[i] = chromosome[j];
  chromosome[j] = gene;

  return chromosome;
};

const mutation = population => (probability, random = Math.random) => {
  const mutated = [];

  for (let chromosome of population) {
    for (let index = 0; index < chromosome.length; index++) {
      if (random() < probability) {
        chromosome = mutate(chromosome)(index, random);
      }
    }

    mutated.push(chromosome);
  }

  return mutated;
};

export default mutation;
