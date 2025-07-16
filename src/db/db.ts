import { drizzle } from "drizzle-orm/expo-sqlite"
import * as SQLite from "expo-sqlite"
import { createContext, useContext } from "react"

const expo = SQLite.openDatabaseSync("db.db")
export const db = drizzle(expo)

type Db = typeof db

export const DbContext = createContext<Db | null>(null)
export const useDb = (): Db | null => useContext(DbContext)
