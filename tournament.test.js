import tournament from './tournament';

test('tournament', () => {
  const population = [
    [0, 1, 2, 3],
    [1, 3, 2, 0],
    [2, 1, 3, 0],
    [2, 1, 0, 3]
  ];

  const scores = [20, 25, 30, 10];

  let i = 0;

  const random = () =>
    [
      0.4626771145743793,
      0.4207971260755974,
      0.9394754084244603,
      0.9263082100568227,
      0.8402385463599293,
      0.5119994548898541,
      0.5719938009965466,
      0.410561498441528
    ][i++];

  expect(tournament(random)(scores, population)).toEqual([
    [1, 3, 2, 0],
    [2, 1, 0, 3],
    [2, 1, 3, 0],
    [2, 1, 3, 0]
  ]);
});
