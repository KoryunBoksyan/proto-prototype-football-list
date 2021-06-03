function Leagues(data) {
    this.leagues = data;
    this.teams = data.leagueA.teams;
}

// Array teams
Leagues.prototype.getLeagueTeams = function (league) {
    console.log(league.teams);
    return league.teams;
}

// team scorer
Leagues.prototype.getBestScorerByTeam = function(team) {
    let bestScorer = team.players[0];
    for (let i = 1; i < team.players.length; i++) {
        if (team.players[i].goalCount > bestScorer.goalCount) {
            bestScorer = team.players[i];
        }
    }
    return bestScorer;
}

// League scorer
Leagues.prototype.getBestScorerByLeague = function() {
	let bestLeagueScorer = this.getBestScorerByTeam(this.teams[0]);
    let self = this;
	this.teams.forEach(function(team) {
		const teamBestScorer = self.getBestScorerByTeam(team);
		if(teamBestScorer.goalCount > bestLeagueScorer.goalCount) {
			bestLeagueScorer = teamBestScorer;
		}
	});
	return bestLeagueScorer;
}

// team red cards
Leagues.prototype.getMaxRedCardsByTeam = function(team) {
    let maxRedCardsPlayer = team.players[0];
    for (let i = 1; i < team.players.length; i++) {
        if (team.players[i].redCards > maxRedCardsPlayer.redCards) {
            maxRedCardsPlayer = team.players[i];
        }
    }
    return maxRedCardsPlayer;
}

// league red cards
Leagues.prototype.getMaxRedCardsByLeague = function() {
	let leagueMaxRedCardsPlayer = this.getMaxRedCardsByTeam(this.teams[0]);
    let self = this;
	this.teams.forEach(function(team) {
		const maxRedCardsPlayer = self.getMaxRedCardsByTeam(team);
		if(maxRedCardsPlayer.redCards > leagueMaxRedCardsPlayer.redCards) {
			leagueMaxRedCardsPlayer = maxRedCardsPlayer;
		}
	});
	return leagueMaxRedCardsPlayer;
}

// team yellow cards
Leagues.prototype.getMaxYellowCardsByTeam = function(team) {
    let maxYellowCardsPlayer = team.players[0];
    for (let i = 1; i < team.players.length; i++) {
        if (team.players[i].yellowCards > maxYellowCardsPlayer.yellowCards) {
            maxYellowCardsPlayer = team.players[i];
        }
    }
    return maxYellowCardsPlayer;
}

// league Yellow cards
Leagues.prototype.getMaxYellowCardsByLeague = function() {
	let leagueMaxYellowCardsPlayer = this.getMaxYellowCardsByTeam(this.teams[0]);
    let self = this;
	this.teams.forEach(function(team) {
		const maxYellowCardsPlayer = self.getMaxYellowCardsByTeam(team);
		if(maxYellowCardsPlayer.yellowCards > leagueMaxYellowCardsPlayer.yellowCards) {
			leagueMaxYellowCardsPlayer = maxYellowCardsPlayer;
		}
	});
	return leagueMaxYellowCardsPlayer;
}
// league missed goal
Leagues.prototype.getMaxMissedByLeague = function (league) {
    let maxMissedGoealByLeague = league.teams[0];
    for (let i = 1; i < league.teams.length; i++) {
        if (league.teams[i].missedGoal > maxMissedGoealByLeague.missedGoal) {
            maxMissedGoealByLeague = league.teams[i];
        }
    }
    return maxMissedGoealByLeague;
}

// avarage scored goal by league
Leagues.prototype.getAvarageGoalByLeague = function (league) {
    let avarageGoal = 0;
    for (let i = 0; i < league.teams.length; i++) {
        avarageGoal += league.teams[i].scoredGoal;
    }
    return avarageGoal / league.teams.length;
}

// League coach
Leagues.prototype.getAllCoachs = function (league) {
    let coachArr = [];
    for (let i = 0; i < league.teams.length; i++) {
         coachArr.push(`${league.teams[i].coach}  coach is ${league.teams[i].name}`);
    }
    return coachArr;
}
    



// inheritance
const leaguesData = new Leagues(leagues);
console.log(leaguesData);
// teams, league
const teams = leaguesData.getLeagueTeams(leaguesData.leagues.leagueA);
// team scorer
const scorerTeam = leaguesData.getBestScorerByTeam(teams[0]);
console.log(scorerTeam);
// league scorer
const scorerLeague = leaguesData.getBestScorerByLeague("leagueA");
console.log(scorerLeague);
// red card by team
const redCardsByTeam = leaguesData.getMaxRedCardsByTeam(teams[4]);
console.log(redCardsByTeam);
// red card by league
const redCardsByLeague = leaguesData.getMaxRedCardsByLeague("leagueA");
console.log(redCardsByLeague);
// yellow card by team
const yellowCardsByTeam = leaguesData.getMaxYellowCardsByTeam(teams[2]);
console.log(yellowCardsByTeam);
// yellow card by league
const yellowCardsByLeague = leaguesData.getMaxYellowCardsByLeague("leagueA");
console.log(yellowCardsByLeague);
// missed goal by league
const leagueMissedGoal = leaguesData.getMaxMissedByLeague(leaguesData.leagues.leagueA);
console.log(leagueMissedGoal);
// avarage goal by league
const leagueAvarageGoal = leaguesData.getAvarageGoalByLeague(leaguesData.leagues.leagueA);
console.log(leagueAvarageGoal);
// coach
const leagueCoach = leaguesData.getAllCoachs(leaguesData.leagues.leagueA);
console.log(leagueCoach);


