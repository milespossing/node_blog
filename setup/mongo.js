conn = new Mongo();

db = conn.getDB('thisTest');

printjson(db.adminCommand('listDatabases'));