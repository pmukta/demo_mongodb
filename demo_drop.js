/*The drop() method takes a callback function containing the error object and the result parameter 
which returns true if the collection was dropped successfully, otherwise it returns false.*/

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo=db.db("mydb");
    dbo.collection("customers").drop(function(err, delOk){
        if(err) throw err;
        if(delOk) console.log("Collection deleted");
        db.close();
    })
})