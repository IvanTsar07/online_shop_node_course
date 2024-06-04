// ? INFO: FOR SEQUELIZE
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node_complete', 'root', '53625362TsarVano', {
//     dialect: 'mysql',
//     host: 'localhost',
// });

// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db = null;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://ivantsar07:xc5SLj1Hn9AhPnix@shop.ihlzhkj.mongodb.net/shop?retryWrites=true&w=majority&appName=Shop"
  )
    .then(client => {
      console.log("Connected!");

      _db = client.db();

      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
