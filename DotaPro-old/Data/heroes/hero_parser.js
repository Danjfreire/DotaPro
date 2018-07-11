var fs = require('fs')

var obj = JSON.parse(fs.readFileSync('heroes.json','utf-8'));

i = 0;
var logger = fs.createWriteStream('povoamento_heroes.txt', {
     flags: 'a' // 'a' means appending (old data will be preserved)
   })

while(obj.heroes[i] != null){

    logger.write("INSERT INTO hero (id,name) VALUES (")
    logger.write(obj.heroes[i].id.toString())
    logger.write(",")
    logger.write("\'" + obj.heroes[i].localized_name + "\'")
    logger.write(");")
    logger.write("\n") 
    i++;
}

logger.end()