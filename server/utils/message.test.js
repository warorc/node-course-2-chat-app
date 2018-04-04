const expect = require('expect');
var app = expect();

var {generateMessage} = require('./message');

describe('genetareMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Vadim';
    const text = 'Test hello';
    const message = generateMessage(from, text);
    
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});