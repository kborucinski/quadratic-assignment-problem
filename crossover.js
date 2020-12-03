import { flatten, partition } from '@sandstreamdev/std/array';
import cross from './cross';
import pair from './pair';
import unpair from './unpair';

const even = x => x % 2 === 0;

export default ([...population]) => probability => {
  const [others, candidates] = partition(() => probability > Math.random())(
    population
  );

  if (!even(candidates.length)) {
    candidates.push(others.pop());
  }

  const pairs = pair(candidates);

  const [chromosome] = population;

  const point = Math.floor(Math.random() * chromosome.length);

  return [
    ...others,
    ...unpair(pairs.map(([xs, ys]) => cross(point)([...xs], [...ys])))
  ];
};
