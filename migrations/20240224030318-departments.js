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
  db.createTable('departments',{
    id:{type:'int',primaryKey:true,autoIncrement:true},
    department:{type:'string',length:100,notNull:true,unique:true},
  },callback)
  return null;
};

exports.down = function(db,callback) {
  db.dropTable('departments',callback)
  return null;
};

exports._meta = {
  "version": 1
};
