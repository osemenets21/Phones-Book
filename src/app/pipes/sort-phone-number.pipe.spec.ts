import { SortPhoneNumberPipe } from './sort-phone-number.pipe';

describe('SortPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
