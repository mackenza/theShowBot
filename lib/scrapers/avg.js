const scrapeIt = require("scrape-it");

scrapeIt("http://theshownation.com/franchises/275472/leaders/AVG", {
    stats: {
        listitem: ".table tbody tr)",
        data: {
            rank: "td"
        }
    }
}).then(page => {
    console.log(page);
});