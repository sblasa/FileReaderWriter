var fs = require("fs"),
    fileName = "fsdata/myCar.json";


var Car = function Car(year, make, model) {
    this.Year = year;
    this.Make = make;
    this.Model = model;
}

fs.stat("fsdata", function (err, stat){
    if(err){
        fs.mkdir("fsdata", function (err){
            console.log (err);
        });
    
    }

    var myCar = new Car(2017, "Mini", "Hardtop");

    fs.writeFile(fileName, JSON.stringify(myCar), function(err) {
        if(err) {
            throw err;

        }
        console.log("The file has been saved.");
    });


});