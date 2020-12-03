export default population => {
  const [xs, ys] = population.reduce(
    ([xs, ys], current, index) =>
      index % 2 ? [xs, [...ys, current]] : [[...xs, current], ys],
    [[], []]
  );

  return xs.map((x, index) => [x, ys[index]]);
};
