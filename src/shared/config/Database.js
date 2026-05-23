class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        this.connection = "Database Connected";

        Database.instance = this;
    }

    connect() {
        return this.connection;
    }
}

const databaseInstance = new Database();

module.exports = databaseInstance;