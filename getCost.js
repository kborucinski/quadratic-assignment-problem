const getCost = (distances, flows) => chromosome => {
  let cost = 0;

  for (let x = 0; x < chromosome.length; x++) {
    for (let y = x; y < chromosome.length; y++) {
      cost += distances[x][y] * flows[chromosome[x]][chromosome[y]];
    }
  }

  return cost;
};

export default getCost;
