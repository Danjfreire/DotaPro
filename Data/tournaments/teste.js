var request = require('request');
const readline = require('readline');
const fs = require('fs');

match_id = 3820686389
var matches = []

const rl = readline.createInterface({input: fs.createReadStream('DAC_2018.txt')});

rl.on('line', function (line) 
{
  elements = line.split(" ");
  matches.push(elements[0])
  console.log(elements[0])
  ;});

request('https://api.opendota.com/api/matches/' + match_id, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
//  console.log(body.match_id);
  for (i = 0; i < 20; i++) {
//    console.log(body.draft_timings[i].order);
//    console.log(body.draft_timings[i].pick);
//    console.log(body.draft_timings[i].hero_id);
//    console.log("----------------------------");
  }
});



