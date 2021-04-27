import {_convertToHttps} from '../../../src/functions';

describe("convert protocol 'http' to 'https':: fn -> _convertToHttps()", () => {
  test('test', () => {
    expect(_convertToHttps('http://testing.com')).toBe('https://testing.com');
  });
});
