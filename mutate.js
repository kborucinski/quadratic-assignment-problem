export default population => probability => {
  const mutated = [];

  for (let chromosome of population) {
    for (let i = 0; i < chromosome.length; i++) {
      if (Math.random() < probability) {
        const index = Math.floor(Math.random() * chromosome.length);

        const gene = chromosome[i];

        chromosome[i] = chromosome[index];
        chromosome[index] = gene;
      }
    }

    mutated.push(chromosome);
  }

  return mutated;
};
