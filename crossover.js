import { flatten, partition, range } from '@sandstreamdev/std/array';

export const even = x => x % 2 === 0;

export const select = (probability, random = Math.random) => population =>
  partition(() => probability > random())(population);

export const pair = population => {
  const [xs, ys] = population.reduce(
    ([xs, ys], current, index) =>
      even(index) ? [[...xs, current], ys] : [xs, [...ys, current]],
    [[], []]
  );

  return xs.map((x, index) => [x, ys[index]]);
};

export const cross = (random = Math.random) => ([[...xs], [...ys]]) => {
  const chromosomeSize = xs.length;

  const point = Math.floor(random() * chromosomeSize) + 1;

  range(point).forEach(index => {
    const x = xs[index];
    const y = ys[index];

    xs[xs.indexOf(y)] = x;
    ys[ys.indexOf(x)] = y;

    xs[index] = y;
    ys[index] = x;
  });

  return [xs, ys];
};

const crossover = population => (probability, random = Math.random) => {
  const [others, candidates] = select(probability, random)(population);

  if (!even(candidates.length)) {
    others.push(candidates.pop());
  }

  return [...others, ...flatten(pair(candidates).map(cross(random)))];
};

export default crossover;
