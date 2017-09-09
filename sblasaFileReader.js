var fs = require("fs"), 
    fileName = "fsdata/data.txt";


console.log("Starting to load.");

fs.stat("fsdata", function (err,stat) {
    console.log("Check status of the directory");

    if (err) {
        console.log("Error trying to get status of the directory" + err + "/// " + stat);
        fs.mkdir("fsdata", function (error) {
            if (error) {
                console.log("Couldn't create directory" + err);
            
            } else {
                writeFile();
                console.log("Created the directory.");
            }
        });

    } else {
        console.log("The directory exists already.")
        writeFile();

    }
});

console.log("Wow, it's finally done!");

var writeFile = function writeFile() {
    
    fs.writeFile(fileName, "Hello, there!", function(err){
        if(err){
            console.log("Nope." + err.message);

        } else {
            console.log ("Yay, it worked!");
        }
    });
};
