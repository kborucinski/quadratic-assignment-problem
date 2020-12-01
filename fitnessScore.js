const fitnessScore = (distances, flows) => chromosome => {
  let score = 0;
  const chromosomeSize = chromosome.length;

  for (let x = 0; x < chromosomeSize; x++) {
    for (let y = x; y < chromosomeSize; y++) {
      score += distances[x][y] * flows[chromosome[x]][chromosome[y]];
    }
  }

  return score;
};

export default fitnessScore;
