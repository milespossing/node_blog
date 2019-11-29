let mongoTests = require("./db.js");
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

let db = new Db('TestDb01', new Server('localhost',27017));

var collection1 = db.collection("TestCollection");

