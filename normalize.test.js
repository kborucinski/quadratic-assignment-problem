import normalize from './normalize';

test('normalize', () => {
  const scores = [32, 23, 100, 45, 101, 130, 31];

  expect(normalize(scores)).toEqual([
    14.4375,
    20.08695652173913,
    4.62,
    10.266666666666667,
    4.574257425742574,
    3.5538461538461537,
    14.903225806451612
  ]);
});
