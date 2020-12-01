import generateRandomChromosome from "./generateRandomChromosome.js";
import shuffle from "./shuffle.js";

const generateRandomPopulation = (chromosomeSize, populationSize) => {
  const randomPopulation = [];

  for (let i = 0; i < populationSize; i++) {
    const randomChromosome = generateRandomChromosome(chromosomeSize);

    randomPopulation.push(shuffle(randomChromosome));
  }

  return randomPopulation;
};

export default generateRandomPopulation;
