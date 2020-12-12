const cumulativeSum = xs => xs.map((sum => value => (sum += value))(0));

export default cumulativeSum;
