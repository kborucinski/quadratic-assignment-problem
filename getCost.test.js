import had4 from './data/had4';
import had5 from './data/had5';
import had6 from './data/had6';
import had7 from './data/had7';
import had8 from './data/had8';
import had9 from './data/had9';
import had12 from './data/had12';
import had14 from './data/had14';
import had16 from './data/had16';
import had18 from './data/had18';
import had20 from './data/had20';

import getCost from './getCost';

test('getCost', () => {
  expect(getCost(had4.DISTANCES, had4.FLOWS)([2, 3, 0, 1])).toEqual(395);
  expect(getCost(had5.DISTANCES, had5.FLOWS)([2, 3, 4, 1, 0])).toEqual(314);
  expect(getCost(had6.DISTANCES, had6.FLOWS)([4, 1, 5, 0, 3, 2])).toEqual(313);
  expect(getCost(had7.DISTANCES, had7.FLOWS)([4, 3, 6, 0, 1, 2, 5])).toEqual(
    470
  );
  expect(getCost(had8.DISTANCES, had8.FLOWS)([5, 4, 3, 6, 7, 0, 2, 1])).toEqual(
    904
  );
  expect(
    getCost(had9.DISTANCES, had9.FLOWS)([2, 0, 8, 7, 6, 3, 4, 5, 1])
  ).toEqual(1160);
  expect(
    getCost(
      had12.DISTANCES,
      had12.FLOWS
    )([2, 9, 10, 1, 11, 4, 5, 6, 7, 0, 3, 8])
  ).toEqual(826);
  expect(
    getCost(
      had14.DISTANCES,
      had14.FLOWS
    )([7, 12, 9, 5, 11, 10, 1, 13, 2, 5, 6, 0, 8, 3])
  ).toEqual(1360);
  expect(
    getCost(
      had16.DISTANCES,
      had16.FLOWS
    )([8, 3, 15, 0, 6, 7, 5, 13, 14, 10, 11, 9, 4, 2, 1, 12])
  ).toEqual(1860);
  expect(
    getCost(
      had18.DISTANCES,
      had18.FLOWS
    )([7, 14, 15, 5, 6, 17, 13, 10, 0, 9, 11, 4, 2, 12, 1, 16, 8, 3])
  ).toEqual(2679);
  expect(
    getCost(
      had20.DISTANCES,
      had20.FLOWS
    )([7, 14, 15, 13, 18, 5, 6, 16, 0, 11, 9, 10, 4, 19, 1, 2, 3, 8, 17, 12])
  ).toEqual(3461);
});
