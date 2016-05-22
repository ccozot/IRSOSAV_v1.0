var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit : '10',
      host: '127.0.0.1',
      user: 'irsosav',
      password: 'motor970',
      database: 'IRSOSAV',
      port: '3306',
      waitForConnections: 'false',
      debug: 'false'
    });
  console.log('Creando un nuevo pool de conexiones en MySQL.');
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      if (err) {
        return callback(err);
      }
      callback(err, connection);
    });
  };
}

module.exports = new Connection();
