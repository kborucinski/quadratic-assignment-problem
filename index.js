const math = require("mathjs");

const { distanceMatrix, flowsMatrix, chromosomeSize } = require("./data/had12");

const populationSize = 100;
const crossoverProbability = 0.7;
const mutationProbability = 0.01;

Array.prototype.random = function() {
  return this.sort(() => Math.random() - 0.5);
};

const generatePopulation = (chromosomeSize, populationSize) => {
  const population = [];

  for (let i = 0; i < populationSize; i++) {
    const chromosome = Array.from(
      new Array(chromosomeSize),
      (_, index) => index
    );

    chromosome.random();

    population.push(chromosome);
  }

  return population;
};

const fitnessScore = (population, distanceMatrix, flowsMatrix) => {
  const scoreList = [];

  for (let chromosome of population) {
    let i = 0;
    let score = 0;

    while (i < chromosome.length) {
      let j = i;

      while (j < chromosome.length) {
        score +=
          distanceMatrix.subset(math.index(i, j)) *
          flowsMatrix.subset(math.index(chromosome[i], chromosome[j]));
        j++;
      }
      i++;
    }

    scoreList.push(1 / score);
  }

  return scoreList;
};

const normalize = () => {
  let sum = 0,
    normalized = Object.assign([], this);
  normalized.forEach(elem => {
    sum += elem;
  });
  normalized.forEach((elem, index, arr) => {
    normalized[index] /= sum;
  });
  return normalized;
}

const tournamentSelection = (populationList, scoreList, elitism = true) => {
  const parentPopulation = [];

  const populationSize = elitism ? scoreList.length - 1 : scoreList.length;

  let randomIndexFirst, randomIndexSecond, winnerChromosome;

  for (let i = 0; i <= 5; i++) {
    randomIndexFirst = Math.floor(Math.random() * populationSize);
    randomIndexSecond = Math.floor(Math.random() * populationSize);

    if (scoreList[randomIndexFirst] > scoreList[randomIndexSecond]) {
      winnerChromosome = populationList[randomIndexFirst];
    } else {
      winnerChromosome = populationList[randomIndexSecond];
    }

    parentPopulation.push(winnerChromosome);
  }

  parentPopulation.push(
    populationList[scoreList.indexOf(Math.max(...scoreList))]
  );

  return parentPopulation;
};

const rulleteSelection = (populationList, scoreList, elitism = true) => {
  const parentPopulation = [];
  const populationSize = elitism ? scoreList.length - 1 : scoreList.length;

  scoreList.reduce((prev, _, index, arr) => (arr[index] += prev), 0);

  let counter;
  for (let i = 0; i < populationSize; i++) {
    let propability = Math.random() * 1;

    if (propability < scoreList[0]) {
      parentPopulation.push(populationList[0]);
      continue;
    }

    counter = 0;

    while (propability > scoreList[counter]) {
      counter++;
    }

    parentPopulation.push(populationList[counter]);
  }

  return parentPopulation;
};

const chromosomesCrossover = (chrX, chrY) => {
  let chromosomeX = Object.assign([], chrX);
  let chromosomeY = Object.assign([], chrY);

  let crossoverPoint = Math.floor(Math.random() * chromosomeX.length);

  let genX, genY, genXIndexY, genYIndexX;

  for (let i = 0; i < crossoverPoint; i++) {
    genX = chromosomeX[i];
    genY = chromosomeY[i];

    genXIndexY = chromosomeX.indexOf(genY);
    genYIndexX = chromosomeY.indexOf(genX);

    chromosomeX[genXIndexY] = genX;
    chromosomeY[genYIndexX] = genY;

    chromosomeX[i] = genY;
    chromosomeY[i] = genX;
  }
  return [chromosomeX, chromosomeY];
};

const populationCrossover = (population, crossoverProbability) => {
  const speciesNc = [];
  const crossoverList = [];

  for (let nChrom of population) {
    let rnd = Math.random() * 1;

    if (rnd < crossoverProbability) {
      crossoverList.push(nChrom);
    } else {
      speciesNc.push(nChrom);
    }
  }

  const crossoverTuples = [];
  let crIterate = crossoverList.map((chromosome, index) => [index, chromosome]);

  while (crIterate.length > 0) {
    const [cchIdx, cChrom] = crIterate.pop();

    if (!(crIterate.length > 0)) {
      speciesNc.push(cChrom);
      break;
    }

    const [cbIdx, crossBuddy] = crIterate[
      Math.floor(Math.random() * crIterate.length)
    ];

    crIterate = crIterate.filter(([xK, xV]) => {
      return xK != cbIdx;
    });

    crossoverTuples.push([cChrom, crossBuddy]);
  }

  const afterCover = [];

  for (let crTup of crossoverTuples) {
    let [crO, crT] = chromosomesCrossover(crTup[0], crTup[1]);
    afterCover.push(crO);
    afterCover.push(crT);
  }
  const newSpecies = [...afterCover, ...speciesNc];

  return newSpecies;
};

const mutationPopulation = (newSpecies, mutationProbability) => {
  const mutated = [];

  for (let chromosome of newSpecies) {
    for (let i = 0; i < chromosome.length; i++) {
      let propability = Math.random() * 1;

      if (propability < mutationProbability) {
        let index = Math.floor(Math.random() * chromosome.length);
        let gen = chromosome[i];

        chromosome[i] = chromosome[index];
        chromosome[index] = gen;
      }
    }

    mutated.push(chromosome);
  }

  return newSpecies;
};

let populationList = generatePopulation(chromosomeSize, populationSize);

for (let i = 1; i <= 1000; i++) {
  let fitScores = fitnessScore(populationList, flowsMatrix, distanceMatrix);
  let fitScoresNorm = normalize.call(fitScores);
  let selectedCh = tournamentSelection(populationList, fitScoresNorm, false);
  // let selectedCh = rulleteSelection(populationList, fitScoresNorm, false);
  let crossedCh = populationCrossover(selectedCh, crossoverProbability);
  let mutatedCh = mutationPopulation(crossedCh, mutationProbability);

  // let minFitness = Math.min(...fitScores);
  let avgFitness = math.sum(...fitScores) / fitScores.length;
  let maxFitness = Math.max(...fitScores);
  let maxChromosome = populationList[fitScores.indexOf(maxFitness)];

  console.info(
    `Epoch: ${i} Population fitness score: ${1 / avgFitness} |  Max score: ${1 /
      maxFitness} | Max Chromosome: ${maxChromosome}`
  );

  populationList = mutatedCh;
}
