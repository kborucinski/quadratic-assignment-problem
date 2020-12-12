import getCost from './getCost';

const getCosts = (distances, flows) => population =>
  population.map(getCost(distances, flows));

export default getCosts;
