const mysql = require('mysql')

const db = mysql.createConnection({
host: "classmysql.engr.oregonstate.edu",
user: "cs340_bertolus",
password: "2426",
database:"cs340_bertolus" 
})

module.exports = db;