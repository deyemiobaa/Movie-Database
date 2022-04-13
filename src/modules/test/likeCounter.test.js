import { likeCounter, showCounter } from '../likeCounter.js';

const show = [
  { item_id: 1, likes: 310, id: 1 },
  { item_id: 2, likes: 454, id: 2 },
  { item_id: 3, likes: 80, id: 3 },
  { item_id: 4, likes: 400, id: 4 },
];
const items = [];

describe('Show counter and Like Counter ', () => {
  test('Count Number of Shows for All', () => {
    expect(showCounter(show)).toBe(4);
  });
  test('Count number of likes for show', () => {
    expect(likeCounter(show[2], 0, show)).toBe(80);
  });
  test('Count Number of Shows for empty data', () => {
    expect(showCounter(items)).toBe(0);
  });
});
