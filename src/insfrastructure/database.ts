import Database from "better-sqlite3";

let db: Database.Database;

export const initDatabase = (): void => {
  db = new Database(":memory:");
  db.prepare(
    `
  CREATE TABLE presence_activity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type INTEGER,
    details TEXT,
    created_timestamp INTEGER,
  )
`
  ).run();
};

export const getDatabase = (): Database.Database => db;
