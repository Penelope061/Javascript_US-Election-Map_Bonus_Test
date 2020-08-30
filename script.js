var politicianObj = function(name, partyColor)
{
var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;
politician.partyColor = partyColor;
  
 
  return politician;
  
  };

var biden = politicianObj("Joe Biden",[132, 17, 11]);

var trump = politicianObj("Donald Trump", [245, 141, 136]);

biden.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

trump.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

biden.electionResults[4] = 17;
biden.electionResults[9] = 1;
biden.electionResults[43] = 11;

	console.log(biden.electionResults);

trump.electionResults[4] = 38;
trump.electionResults[9] = 28;
trump.electionResults[43] = 27;
	console.log(trump.electionResults);

var setStateResults = function(state) {

theStates[state].winner;

    if (biden.electionResults[state] > trump.electionResults[state]) 
    {
      theStates[state].winner = biden;
    }
    else if (biden.electionResults[state] < trump.electionResults[state])
    {
      theStates[state].winner = trump;

    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
       theStates[state].rgbcolor = stateWinner.partyColor;
    }
  
    else {
      theStates[state].rgbcolor = [11, 32, 57];
    }

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = theStates[state].nameAbbrev;

politician1.innerText = biden.name;
politician2.innerText = trump.name;

politician1Results.innerText = biden.electionResults[state];
politician2Results.innerText = trump.electionResults[state];

  if (theStates[state].winner === null) {

    winnersName.innerText = "Draw";
  }

  else {
    winnersName.innerText = theStates[state].winner.name;
  }

};
 

biden.totalVotes = function () 
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++) {
    
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
  
};



trump.totalVotes = function () 
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++) {
    
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
  
};


biden.totalVotes();
trump.totalVotes();

console.log(biden.totalVotes);
console.log(trump.totalVotes);

var winner;

  if (biden.totalVotes > trump.totalVotes) {winner = biden.name;}
  else if (biden.totalVotes < trump.totalVotes) {winner = trump.name;}

  else {winner = "It's a draw!";}

console.log(winner);



var tableCountryResults = document.getElementById("countryResults"); 
var row = tableCountryResults.children[0].children[0];

row.children[0].innerText = biden.name;
row.children[1].innerText = biden.totalVotes;
row.children[2].innerText = trump.name;
row.children[3].innerText = trump.totalVotes;
row.children[5].innerText = winner;

var stateCountryResults = document.getElementById("stateResults");
var header = stateCountryResults.children[0];
var body = stateCountryResults.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var politician1 = body.children[0].children[0];
var politician2 = body.children[1].children[0];
var politician1Results = body.children[0].children[1];
var politician2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];



/*console.log("It works so far");*/