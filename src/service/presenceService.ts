import { RunResult } from "better-sqlite3";
import { getDatabase } from "../insfrastructure/database";

export interface PresenceActivity {
  name: string | null;
  type: number | null;
  details: string | null;
  createdTimestamp: number | null;
}

const db = getDatabase();

const insert = async (
  name: string,
  type: number,
  details: string,
  createdTimestamp: number
): Promise<RunResult> => {
  const statement = db.prepare(`
    INSERT INTO presence_activity (name, type, details, created_timestamp)
    VALUES (?, ?, ?, ?)
  `);
  return statement.run(name, type, details, createdTimestamp);
};

const getAll = async (): Promise<PresenceActivity[]> => {
  const statement = db.prepare(`
    SELECT * FROM presence_activity
  `);
  return statement.all() as PresenceActivity[];
};

const getById = async (id: number): Promise<PresenceActivity | null> => {
  const statement = db.prepare(`
    SELECT * FROM presence_activity WHERE id = ?
  `);
  return statement.get(id) as PresenceActivity | null;
};

const presenceService: {
  insert: typeof insert;
  getAll: typeof getAll;
  getById: typeof getById;
} = {
  insert,
  getAll,
  getById,
};

export default presenceService;
