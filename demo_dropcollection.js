/*You can also use the dropCollection() method to delete a table (collection).

The dropCollection() method takes two parameters: 
the name of the collection and a callback function.*/

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo=db.db("mydb");
    dbo.dropCollection("customers", function(err, delOk){
        if(err) throw err;
        if(delOk) console.log("Collection deleted");
        db.close();
    })
})