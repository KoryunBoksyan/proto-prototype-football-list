// // //Home Work

// // // create 4 methods
// // getPlayerPosition league // get all Вратар
// // getPlayerPosition team   // get all Врата
// function League(league) {
// 	this.league = league;
// }


// function Team(teamData) {
// 		this.name = teamData.name;
//         this.gameCount = teamData.gameCount;
//         this.winCount = teamData.winCount;
//         this.drawCount = teamData.drawCount;
//         this.louseCount = teamData.louseCount;
//         this.scoredGoal = teamData.scoredGoal;
//         this.missedGoal = teamData.missedGoal;
//         this.point = teamData.point;
//         this.coach = teamData.coach;
//         this.players = teamData.players;
// }

// function Player(playerData) {
// 	this.name = playerData.name;
// 	this.nomber = playerData.nomber;
// 	this.position = playerData.position;
// 	this.redCards = playerData.redCards;
// 	this.yellowCards = playerData.yellowCards;
// 	this.goalCount = playerData.goalCount;
// 	this.matchCount = playerData.matchCount;
// }

// League.prototype.getLeagueTeams = function (leagueName) {
// 	return this.league[leagueName].teams;
// }



// Teams.prototype.getBestLeagueScorer = function() {
// 	let bestLeagueScorer = this.teams[0].getBestScorer();
// 	this.teams.forEach(function(team) {
// 		const teamBestScorer = teams.getBestScorer();
// 		if(teamBestScorer.goalCount > bestLeagueScorer.goalCount) {
// 			bestLeagueScorer = teamBestScorer;
// 		}
// 	});
// 	return bestLeagueScorer;
// }


// let leagues2 = new League(leagues);
// let teams = leagues2.getLeagueTeams("leagueA");
// console.log(teams);

// Team.prototype.getBestTeamScorer = function() {
// 	let bestTeamScorer = this.team.players[0];
// 	this.team.players.forEach(function(player) {
// 		if(team.player.goalCount > bestTeamScorer.goalCount) {
// 			bestTeamScorer = team.player;
// 		}
// 	});
// 	return bestTeamScorer;
// }

// let tim = new Team ();












