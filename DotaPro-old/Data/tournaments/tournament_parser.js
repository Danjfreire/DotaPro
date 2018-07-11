var request = require('request');
const readline = require('readline');
const fs = require('fs');

var matches = [1,1,2]

const rl = readline.createInterface({input: fs.createReadStream('DAC_2018.txt')});

rl.on('line', function (line) 
{
  elements = line.split(" ");
 // matches.push(elements[0]);
  matches[0] = 0;
  //console.log(elements[0])
});

console.log(matches[0]);
  for(i = 0 ; i < matches.length; i++){
    //console.log("entrou")
  request('https://api.opendota.com/api/matches/' + matches[i], { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    //console.log(body.match_id);
    for (i = 0; i < 20; i++) {
  //    console.log(body.draft_timings[i].order);
  //    console.log(body.draft_timings[i].pick);
  //    console.log(body.draft_timings[i].hero_id);
  //    console.log("----------------------------");
    }
  });

}



