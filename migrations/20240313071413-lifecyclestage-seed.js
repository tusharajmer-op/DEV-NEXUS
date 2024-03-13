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
  db.insert('lifecyclestage',['name'], ['Lead'],callback);
  db.insert('lifecyclestage',['name'], ['Customer'],callback);
  db.insert('lifecyclestage',['name'], ['Sales Qualified Lead'],callback);
  db.insert('lifecyclestage',['name'], ['Marketing Qualified Lead'],callback);
  db.insert('lifecyclestage',['name'], ['Opportunity'],callback);
  db.insert('lifecyclestage',['name'], ['Subscriber'],callback);
  db.insert('lifecyclestage',['name'], ['Evangelist'],callback);
  db.insert('lifecyclestage',['name'], ['Other'],callback);

  return null;
};

exports.down = function(db,callback) {
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Lead"',callback);
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Customer"',callback);
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Sales Qualified Lead"',callback);
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Marketing Qualified Lead"',callback);
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Opportunity"',callback);
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Subscriber"',callback);
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Evangelist"',callback);
  db.runSql('DELETE FROM lifecyclestage WHERE name = "Other"',callback);
  
  return null;
};

exports._meta = {
  "version": 1
};
