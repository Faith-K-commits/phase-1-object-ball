function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Allan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'Desagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 14,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
}

function playerNumbers(teamName) {
    const game = gameObject();
    const numbers = [];
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            for (const player of Object.values(team.players)) {
                numbers.push(player.number);
            }
        }
    }
    return numbers;
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let reboundsForMaxShoe = 0;
    for (const team of Object.values(game)) {
        for (const player of Object.values(team.players)) {
            if (player.shoe > maxShoeSize) {
                maxShoeSize = player.shoe;
                reboundsForMaxShoe = player.rebounds;
            }
        }
    }
    return reboundsForMaxShoe;
}

// Bonus Questions

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMaxPoints = '';
    for (const team of Object.values(game)) {
        for (const playerName in team.players) {
            const player = team.players[playerName];
            if (player.points > maxPoints) {
                maxPoints = player.points;
                playerWithMaxPoints = playerName;
            }
        }
    }
    return playerWithMaxPoints;
}

function winningTeam() {
    const game = gameObject();
    const teamPoints = {};
    for (const team of Object.values(game)) {
        teamPoints[team.teamName] = 0;
        for (const player of Object.values(team.players)) {
            teamPoints[team.teamName] += player.points;
        }
    }
    return Object.keys(teamPoints).reduce((a, b) => teamPoints[a] > teamPoints[b] ? a : b);
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    for (const team of Object.values(game)) {
        for (const playerName in team.players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;
    for (const team of Object.values(game)) {
        for (const player of Object.values(team.players)) {
            if (player.steals > maxSteals) {
                maxSteals = player.steals;
            }
        }
    }
    return game.players[longestName].steals === maxSteals;
}