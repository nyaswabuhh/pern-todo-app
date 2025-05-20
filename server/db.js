
const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    database:"perntodo",
    password:"simbapos@2019",
    host:"localhost",
    port:5432

});

module.exports=pool;