import { mergeTwo, random } from './list';
test('merge two', () => {
  expect(mergeTwo([1, 3, 5], [2, 4, 6], (a, b) => a < b)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('random', () => {
  let numbers = random(100, 3);
  console.info(numbers);
  expect(numbers.length).toBe(3);

  numbers = random(100, 6);
  console.info(numbers);
  expect(numbers.length).toBe(6);
});
