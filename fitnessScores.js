import fitnessScore from "./fitnessScore.js";

const fitnessScores = (distances, flows) => chromosomes =>
  chromosomes.map(fitnessScore(distances, flows));

export default fitnessScores;
