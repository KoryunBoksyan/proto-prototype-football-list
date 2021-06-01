// //Home Work
// getBestScorer by team
// getBestScorer by league
// ​
// getMaxMissedGoals by league
// ​
// getAverageScorer by team
// getAverageScorer by league
// ​
// getMaxRedCards team
// getMaxRedCards league
// ​
// getMaxYellowCards team
// getMaxYellowCards league
// ​
// getAllCoachs league // return team name and coach name
// ​
// // create 4 methods
// getPlayerPosition league // get all Вратар
// getPlayerPosition team   // get all Вратар
​
​

​
function League(teams) {
	this.teams = teams;
}
League.prototype.getBestLeagueScorer = function() {
	let bestScorer = this.teams[0].getBestScorer();
	this.teams.forEach(function(team) {
		const teamBestScorer = team.getBestScorer();
		if(teamBestScorer.goalCount > bestScorer.goalCount) {
			bestScorer = teamBestScorer;
		}
	});
}
​
function Team(players) {
	this.players = players;
}
Team.prototype.getBestScorer = function() {
	let bestScorer = this.players[0];
	this.players.forEach(function(player) {
		if(player.goalCount > bestScorer.goalCount) {
			bestScorer = player;
		}
	});
	return bestScorer;
}
​
function Player(playerData) {
	this.name = playerData.name;
	this.position = playerData.position;
	this.goalCount = playerData.goalCount;
}