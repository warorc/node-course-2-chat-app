const expect = require('expect');
var app = expect();

var {generateMessage, generateLocationMessage} = require('./message');

describe('genetareMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Vadim';
    const text = 'Test hello';
    const message = generateMessage(from, text);
    
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Vadim';
    const lattitude = 2342.23423;
    const longitude = 2342.34343;
    const locationObject = generateLocationMessage(from, lattitude, longitude);
    const url = `https://www.google.com/maps?q=${lattitude},${longitude}`
    
    expect(locationObject). toInclude({from, url});
    expect(locationObject.createdAt).toBeA('number');
    
  });
});