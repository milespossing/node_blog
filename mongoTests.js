let mongoTests = require("./db.js");
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

mongoTests.connect(function(err,client){
    listDatabases(client);
    client.close();

});

async function listDatabases(client){
    let databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}