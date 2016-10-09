var argv = require('yargs')
  .usage('Usage: $0 -t [template.mst] -d [data.csv]')
  .alias('t', 'template')
  .nargs('t', 1)
  .describe('t', 'Mustache template file')
  .alias('d', 'data')
  .nargs('d', 1)
  .describe('d', 'CSV data file. First row must be column headers.')
  .demand(['t', 'd'])
  .argv;
var fs = require('fs');
var Mustache = require('mustache');
var csv = require('csv');


fs.readFile(argv.t, 'utf8', function(tErr, tData) {
  if (tErr) {
    console.error(tErr);
    return;
  }
  var template = tData;
  Mustache.parse(template);

  fs.readFile(argv.d, 'utf8', function(dErr, dData) {
    csv.parse(dData, {columns: true}, function(pErr, pData) {
      pData.forEach(data => {
        var rendered = Mustache.render(template, data);
        console.log(rendered);
      });
    });
  });
});
