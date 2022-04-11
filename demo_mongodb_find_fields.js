var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
//You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). 
//If you specify a field with the value 0, all other fields get the value 1, and vice versa:

//To exclude the _id field, you must set its value to 0:

//This example will return only the "name" field:
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });


//This example will give you the same result as the first example; 
//return all fields except the _id field:

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

//Error
//You get an error if you specify both 0 and 1 values in the same object 
//(except if one of the fields is the _id field):

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});