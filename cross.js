export default index => (xs, ys) => {
  const x = xs[index];
  const y = ys[index];

  xs[xs.indexOf(y)] = x;
  ys[ys.indexOf(x)] = y;

  xs[index] = y;
  ys[index] = x;

  return [xs, ys];
};
