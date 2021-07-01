
const pgp = require('pg-promise')();

class DBFactory {

    constructor(){
        this.dbSettings = {database: 'XXXX'}
        this.db = pgp(this.dbSettings)
    }

    all(){
        return this.db.query(`SELECT * FROM tasks`);
    }

}

module.exports = DBFactory