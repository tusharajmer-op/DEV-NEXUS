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
  db.insert('departments',['department'],['IT'],callback);
  db.insert('departments',['department'],['Admin'],callback);
  return null;
};

exports.down = function(db,callback) {
  db.runSql('DELETE FROM departments WHERE department = "IT"',callback);
  db.runSql('DELETE FROM departments WHERE department = "Admin"',callback);
  return null;
};

exports._meta = {
  "version": 1
};
