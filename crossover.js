import crossover from "./chromosomesCrossover.js";
import shuffle from "./shuffle.js";

export default population => probability => {
  const candidates = [];
  const species = [];

  for (let chromosome of population) {
    const list = probability >= Math.random() ? candidates : species;

    list.push(chromosome);
  }

  const even = candidates.length % 2 === 0;

  if (!even) {
    const [chromosome] = shuffle(population);

    candidates.push(chromosome);
  }

  const amountOfCandidates = candidates.length;

  for (let i = 0; i < amountOfCandidates - 1; i++) {
    species.push(...crossover(candidates[i], candidates[i + 1]));
  }

  return species;
};
