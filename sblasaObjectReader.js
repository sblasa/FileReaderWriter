var fs = require("fs"),
    fileName = "fsdata/myCar.json";


    fs.stat(fileName, function(err, stat){
        if(err) {
            console.log("File isn't there.");

        } else {

            fs.readFile(fileName, "utf8", function(err, data) {
                if(err){
                    throw err;
                }

                var myNewCar = JSON.parse(data);

                console.log(myNewCar.Year + " " + myNewCar.Make + " " + myNewCar.Model);
            });
        }

    });