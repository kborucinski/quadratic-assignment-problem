import fitnessScore from './fitnessScore';
import * as had4 from './data/had4';
import * as had9 from './data/had9';
import * as had8 from './data/had8';
import * as had7 from './data/had7';
import * as had6 from './data/had6';
import * as had5 from './data/had5';

test('fitnessScores', () => {
  expect(fitnessScore(had4.distances, had4.flows)([2, 3, 0, 1])).toEqual(395);
  expect(fitnessScore(had5.distances, had5.flows)([2, 3, 4, 1, 0])).toEqual(
    314
  );
  expect(fitnessScore(had6.distances, had6.flows)([4, 1, 5, 0, 3, 2])).toEqual(
    313
  );
  expect(
    fitnessScore(had7.distances, had7.flows)([4, 3, 6, 0, 1, 2, 5])
  ).toEqual(470);
  expect(
    fitnessScore(had8.distances, had8.flows)([5, 4, 3, 6, 7, 0, 2, 1])
  ).toEqual(904);
  expect(
    fitnessScore(had9.distances, had9.flows)([2, 0, 8, 7, 6, 3, 4, 5, 1])
  ).toEqual(1160);
});
