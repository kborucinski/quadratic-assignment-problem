import fitnessScore from "./fitnessScore";

const fitnessScores = (distances, flows) => chromosomes =>
  chromosomes.map(fitnessScore(distances, flows));

export default fitnessScores;
