var Clapp = require('../modules/clapp-discord');
var avg = require('../scrapers/avg');

module.exports = new Clapp.Command({
  name: "avg",
  desc: "shows top 10 in avg",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return avg.Avg();
  },
  args: [
    {
      name: 'testarg',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: 'testarg isn\'t defined'
    }
  ],
  flags: [
    {
      name: 'testflag',
      desc: 'A test flag',
      alias: 't',
      type: 'boolean',
      default: false
    }
  ]
});