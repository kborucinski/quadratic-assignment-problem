const rulleteSelection = (population, scoreList, elitism = true) => {
  const parentPopulation = [];
  const populationSize = elitism ? scoreList.length - 1 : scoreList.length;

  scoreList.reduce((prev, _, index, arr) => (arr[index] += prev), 0);

  let counter;

  for (let i = 0; i < populationSize; i++) {
    let propability = Math.random() * 1;

    if (propability < scoreList[0]) {
      parentPopulation.push(population[0]);
      continue;
    }

    counter = 0;

    while (propability > scoreList[counter]) {
      counter++;
    }

    parentPopulation.push(population[counter]);
  }

  return parentPopulation;
};

export default rulleteSelection;
