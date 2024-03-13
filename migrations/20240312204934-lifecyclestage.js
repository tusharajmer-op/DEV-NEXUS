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
  db.createTable('lifecyclestage',{
    id:{type:'int',primaryKey:true,autoIncrement:true},
    name:{type:'string',notNull:true,unique:true},
    createdAt:{type:'datetime',defaultValue:new String('CURRENT_TIMESTAMP')},
    updatedAt:'datetime',
    deletedAt:'datetime'
  },callback)
  return null;
};

exports.down = function(db,callback) {
  db.dropTable('lifecyclestage',callback);
  return null;
};

exports._meta = {
  "version": 1
};
