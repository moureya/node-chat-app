let expect = require('expect');

let { generateMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		let from = 'Jen';
		let text = 'Some message';
		let message = generateMessage(from, text);

		expect(typeof message.createdAt).toBe('number');
		expect(message).toMatchObject({
			from,
			text
		});
	});
});
