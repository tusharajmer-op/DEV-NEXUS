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

exports.up = async function(db,callback) {
  db.createTable('users', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: {type:'string',length:100,notNull:true},  // shorthand notation
      password: { type: 'string', length: 100 ,notNull:true},
      avatar:'string',
      email:{type:'string',length:100,unique:true,notNull:true},
      phone:{type:'string',length:10,unique:true},
      address:'string',
      role:{
        type:'int',
        notNull:true,
        foreignKey: {
          name: 'role_fk',
          table: 'roles',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
      },
      allowedLogin : { type: 'boolean', defaultValue: true },

    }
    },
    ifNotExists: true
  }, callback);
  
  return null;
};

exports.down = function(db,callback) {
  db.dropTable('users', callback);
  return null;
};

exports._meta = {
  "version": 1
};
