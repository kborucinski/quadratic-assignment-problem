import { range } from "@sandstreamdev/std/array";

export const cross = ([xs, ys]) => index => {
  const x = xs[index];
  const y = ys[index];

  xs[xs.indexOf(y)] = y;
  ys[ys.indexOf(x)] = x;

  xs[index] = y;
  ys[index] = x;

  return [xs, ys];
};

export default index => pair => range(index).map(cross(pair));
