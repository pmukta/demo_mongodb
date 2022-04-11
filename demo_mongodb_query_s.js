/*Regular expressions can only be used to query strings.

To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:

Example
Find documents where the address starts with the letter "S":*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: /^S/ };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  })
})