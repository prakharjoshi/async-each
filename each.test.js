var expect = require('expect.js');


describe('asyncEach', function () {

	describe('check for async each function', function() {

		it('should check for async each function', function (done) {
			each([1,2,3], function (a, cb) {
				a++;
				cb()
			}, function (err) {
				if (err) { return err.message; }
				console.log(done);
			});
		});
	});
}
