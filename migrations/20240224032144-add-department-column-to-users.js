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
  db.addColumn('users','dep_id',{
    type:'int',
    notNull:true,
    foreignKey:{
      name:'user-department-fk',
      table:'departments',
      rules:{
        onDelete:'CASCADE',
        onUpdate:'RESTRICT'
      },
      mapping:'id'
    }
  },callback);
  
  return null;
};

exports.down = function(db,callback) {
  db.removeForeignKey('users','user-department-fk',callback);
  return null;
};

exports._meta = {
  "version": 1
};
