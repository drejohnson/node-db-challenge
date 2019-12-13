// Update with your config settings.

module.exports = {
  development: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./data/dev.sqlite3"
    }
  },
  migrations: {
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  }
};
