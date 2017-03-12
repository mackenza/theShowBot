const scraper = require('osmosis');

scraper
    .get('http://theshownation.com/franchises/275472/leaders/AVG')
    .find('table.table')
    .find('tbody')
    .find('tr')
    .set({
        'team': 'td[1]',
        'rank': 'td[2]',
        'pos': 'td[3]',
        'player': 'td[4]',
        'avg': 'td[5]'
    })
    .data(function(found) {
        console.log(found.rank, found.player);
    })
    .log(console.log)
    .error(console.log)
    .debug(console.log)