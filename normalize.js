const sum = xs => xs.reduce((a, b) => a + b, 0);

const normalize = fitnessScores => {
  const sumOfScores = sum(fitnessScores);

  return fitnessScores.map(score => score / sumOfScores);
};

export default normalize;
