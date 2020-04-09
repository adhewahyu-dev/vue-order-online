const env = {
    database: 'testdb',
    username: 'adhe',
    password: 'S4y4.4dhe',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  