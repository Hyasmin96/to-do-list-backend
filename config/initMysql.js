const pool = require('../config/db');

async function initMysql() {
  try {

    // CREAR TABLA TASKS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        description VARCHAR(250) NOT NULL,
        dueDate VARCHAR(250) NOT NULL
      )
    `);

    // CREAR TABLA GOALS
    await pool.query(`
      CREATE TABLE IF NOT EXISTS goals (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(250) NOT NULL,
        description VARCHAR(250) NOT NULL,
        dueDate VARCHAR(250) NOT NULL
      )
    `);

    console.log("Tablas MySQL verificadas correctamente");

  } catch (error) {
    console.error("Error inicializando MySQL:", error);
    throw error;
  }
}

module.exports = initMysql;