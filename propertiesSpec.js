describe("Properties", function() {
	var object; //defined globally here
	
	beforeEach(function() { //before each test is run, this is run
	  object = {}; //making a brand new object
	  setSomePropertiesOn(object); //setting some properties on it
	});

	describe("setSomePropertiesOn", function() {
		it("sets x to 7", function() {
			expect(object.x).toEqual(7);
		});
		
		it("sets y to 8 (and we can use a string to access it)", function() {
			expect(object['y']).toEqual(8);
		});
		
		it("sets the property 'onePlus' to a function that adds one to its parameter", function() {
			expect(object.onePlus(4)).toEqual(5);
			expect(object['onePlus'](123)).toEqual(124);
		});
	});
});

var setSomePropertiesOn = function(object)  {
    object.x = 7;
    object.y = 8;
    object.onePlus = function(number)    {
        return number + 1;
    }
}

console.log(setSomePropertiesOn.x);
