import fitnessScore from './fitnessScore';
import normalize from './normalize';

const fitnessScores = (distances, flows) => chromosomes =>
  normalize(chromosomes.map(fitnessScore(distances, flows)));

export default fitnessScores;
