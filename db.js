var MongoClient = require("mongodb").MongoClient,
    MongoServer = require("mongodb").Server,
    Db = require("mongodb").Db;

exports.getClient = function(host,port){
    return new MongoClient(exports.getServer(host, port));
};

exports.connect = function(callback){
    MongoClient.connect(process.env.mongostring || "mongodb://localhost:27017", callback);
};

exports.newDatabase = function(name,server = null){
    let serv = server || exports.getServer();
    return new Db(name,serv);
};

exports.setupDatabase = function(){
};

