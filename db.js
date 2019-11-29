var MongoClient = require("mongodb").MongoClient,
    MongoServer = require("mongodb").Server,
    Db = require("mongodb").Db;

exports.getClient = function(host,port){
    return new MongoClient(exports.getServer(host, port));
};

exports.getServer = function(host,port){
    return new MongoServer(host,port);
};

exports.newDatabase = function(name,server = null){
    let serv = server || exports.getServer("localhost",27017);
    return new Db(name,serv);
};

exports.setupDatabase = function(){
};

