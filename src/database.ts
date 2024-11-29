import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('Missing env var: DATABASE_URL')
}

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
