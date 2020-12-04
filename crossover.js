import { partition, range } from '@sandstreamdev/std/array';
import pair from './pair';
import unpair from './unpair';

export const even = x => x % 2 === 0;

export const select = (probability, random = Math.random) => population =>
  partition(() => probability > random())(population);

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
    candidates.push(others.pop());
  }

  return [...others, ...unpair(pair(candidates).map(cross(random)))];
};

export default crossover;
