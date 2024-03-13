'use strict';

var dbm;
var type;
var seed;
const {encryption}= require('../service');
/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db,callback) {
  const encryptedPassword = await encryption.encrypt('password')
  db.insert('users', ['name', 'password', 'email', 'role'], ['admin', encryptedPassword, 'admin@admin.com',1], callback);
  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
