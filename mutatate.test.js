import mutate from './mutate';

test('mutate', () => {
  expect(mutate([])(0)).toEqual([]);
});
