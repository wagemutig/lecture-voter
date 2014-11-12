"strict"
var Lecture = require ('../models/Lecture');


describe ('Lecture', function() {
  var lecture

	it ('can hold voters', function() {
		lecture = new Lecture();
		expect(lecture.voters).toBeArray;
	});

	it('can add a voter', function() {
		lecture = new Lecture;
		lecture.addVoter("Anna");
		expect(lecture.voters.length).toEqual(1);
	})

}); 

