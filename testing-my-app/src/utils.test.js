import { sum } from './utils';

describe('basic utils', () => {
  it('should sum 2', () => {
    expect(sum(2, 5)).toBe(7);
    expect(sum(2, 4)).toBe(6);
  });
});
