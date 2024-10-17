import { Hospital } from './hospital';

describe('Hospital', () => {
  it('should create an instance', () => {
    expect(new Hospital(1, 'Hospital Name', 'Hospital Address')).toBeTruthy();
  });
});
