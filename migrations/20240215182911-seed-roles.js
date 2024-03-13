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
  db.insert('roles', ['role'], ['superadmin'], callback);
  db.insert('roles', ['role'], ['manager'], callback);
  db.insert('roles', ['role'], ['HR'], callback);
  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
