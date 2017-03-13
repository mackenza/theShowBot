const scraper = require('osmosis');


function Avg() {
    return scraper
    .get('http://theshownation.com/franchises/275472/leaders/AVG')
    .find('table.table > tbody > tr')
    .set({
        'team': 'td[1]',
        'rank': 'td[2]',
        'pos': 'td[3]',
        'player': 'td[4]',
        'avg': 'td[5]'
    })
    .data(function(found) {
        return found.team;
    })
}

module.exports = {
    Avg: Avg
}

