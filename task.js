export const CHROMOSOME_SIZE = 5;

export const DISTANCES = [
  [0, 340, 306, 461, 581],
  [340, 0, 310, 355, 273],
  [306, 310, 0, 173, 455],
  [461, 355, 173, 0, 270],
  [581, 273, 455, 270, 0]
];

export const FLOWS = [
  [0, 0, 1, 0, 0],
  [0, 0, 6, 3, 0],
  [1, 6, 0, 4, 0],
  [0, 3, 4, 0, 2],
  [0, 0, 0, 2, 0]
];

export default { CHROMOSOME_SIZE, DISTANCES, FLOWS };
