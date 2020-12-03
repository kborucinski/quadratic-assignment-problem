import { partition, range } from "@sandstreamdev/std/array";
import crossChromosomes from "./crossChromosomes";

const even = x => x % 2 === 0;

const pair = population =>
  range(population.length).map(index => population.slice(index, index + 2));

export default ([...population]) => probability => {
  const [others, candidates] = partition(() => probability > Math.random())(
    population
  );

  if (!even(candidates.length)) {
    candidates.push(others.pop());
  }

  const chromosomes = pair(candidates);

  console.log({ chromosomes, others });

  const [chromosome] = population;

  const point = Math.floor(Math.random() * chromosome.length - 1) + 1;

  return [...others, ...chromosomes.map(crossChromosomes(point))];
};
