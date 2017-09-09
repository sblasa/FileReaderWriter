var fs = require("fs"),
    fileName = "fsdata/data.txt";

fs.readFile(fileName, "utf8", function(err, data){
    if(err){
        console.log("Error reading file \n" + err.message);
    
    } else {
        console.log(data);
    }
})