"strict"
var Lecture = require ('../lib/Lecture');


describe ('Lecture', function() {
  
  var lecture

  beforeEach(function(){
		lecture = new Lecture();	
  });

	it ('can hold voters', function() {
		expect(lecture.voters).toBeArray;
	});

	it('can add a voter', function() {
		lecture.addVoter("Anna");
		expect(lecture.voters.length).toEqual(1);
	});

	it('can remove a voter', function(){
    lecture.addVoter("Anna");
    lecture.removeVoter("Anna");
    expect(lecture.voters.length).toEqual(0);
	});

	it('if the voter is not amongst the voters the voters don\t change', function(){
		lecture.addVoter("Anna");
		lecture.removeVoter("Bernie");
    expect(lecture.voters.length).toEqual(1);
	});

	it('removes the right voter', function(){
    lecture.addVoter("Anna");
    lecture.addVoter("Bernie");
		lecture.removeVoter("Bernie");
    expect(lecture.voters.indexOf("Anna")).toNotEqual(-1)
    expect(lecture.voters.indexOf("Bernie")).toEqual(-1)
	})

	it('knows how many voters are connected', function(){
    lecture.addVoter("Anna");
    lecture.addVoter("Bernie");
    expect(lecture.countVoters()).toEqual(2)
	})

	it('can have total votes', function() {
		expect(lecture.totalVotes).toEqual(0);
	});

	it('can add to total votes', function() {
		lecture.updateTotalVotes(1);
	
		expect(lecture.totalVotes).toEqual(1);
	});

});




