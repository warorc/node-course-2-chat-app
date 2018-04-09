const expect = require('expect');
var app = expect();

var {isRealString} = require('./validation');

describe('validateParams', () => {
  it('should allow string with non-space characters', () => {
    const string = '  Heyheyhey  ';
    const params = isRealString(string);
  
    expect(params).toBe(true);
  });

  it('should  reject non-string value', () => {
    const string = 98;
    const params = isRealString(string);

    expect(params).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const string = '    ';
    const params = isRealString(string);

    expect(params).toBe(false);
  });
});