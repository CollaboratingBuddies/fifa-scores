'use strict';

const Data = require('../../../data/');

module.exports.getMatches = (params) => {
    let key,
        options = {},
        name = params.name;

    if (params.name !== 'all') {
        if (params.filter) {
            key = (params.filter === 'wins') ? 'winner.name' : 'loser.name';
            options = {
                [key]: name
            };
        } else {
            options = {
                $or: [
                    { 'winner.name': name },
                    { 'loser.name': name }
                ]
            };
        }
    } else {
        options = {};
    }

    console.log(params.game + 'MatchResults');

    return Data.Find.pullFromMongo(options, params.game + 'MatchResults')
        .then((response) => {
            return response;
        });
};