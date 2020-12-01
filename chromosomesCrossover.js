export default (a, b) => {
  let chromosomeA = [...a];
  let chromosomeB = [...b];

  const chromosomeSize = chromosomeA.length;
  const crossoverPoint = Math.floor(Math.random() * chromosomeSize - 1) + 1;

  for (let i = 0; i < crossoverPoint; i++) {
    const geneA = chromosomeA[i];
    const geneB = chromosomeB[i];

    chromosomeA[chromosomeA.indexOf(geneB)] = geneA;
    chromosomeB[chromosomeB.indexOf(geneA)] = geneB;

    chromosomeA[i] = geneB;
    chromosomeB[i] = geneA;
  }

  return [chromosomeA, chromosomeB];
};
