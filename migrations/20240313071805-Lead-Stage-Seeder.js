'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
  db.insert('leadStage',['name'], ['New'],callback);
  db.insert('leadStage',['name'], ['Open'],callback);
  db.insert('leadStage',['name'], ['In Progress'],callback);
  db.insert('leadStage',['name'], ['Closed'],callback);
  db.insert('leadStage',['name'], ['Unqualified'],callback);
  db.insert('leadStage',['name'], ['Attempted to Contact'],callback);
  db.insert('leadStage',['name'], ['Connected'],callback);
  db.insert('leadStage',['name'], ['Bad Timing'],callback);
  db.insert('leadStage',['name'], ['Lost'],callback);
  db.insert('leadStage',['name'], ['Not Interested'],callback);
  db.insert('leadStage',['name'], ['No Longer at Company'],callback);
  return null;
};

exports.down = function(db,callback) {
  db.runSql('DELETE FROM leadStage WHERE name = "New"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Open"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "In Progress"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Closed"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Unqualified"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Attempted to Contact"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Connected"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Bad Timing"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Lost"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "Not Interested"',callback);
  db.runSql('DELETE FROM leadStage WHERE name = "No Longer at Company"',callback);
  
  return null;
};

exports._meta = {
  "version": 1
};
