import { drizzle } from "drizzle-orm/expo-sqlite"
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import { useDrizzleStudio } from "expo-drizzle-studio-plugin"
import * as SQLite from "expo-sqlite"
import { createContext, useContext, useEffect } from "react"

import migrations from "../../drizzle/migrations"

const expo = SQLite.openDatabaseSync("db.db")
export const db = drizzle(expo)

type Db = typeof db

export const DbContext = createContext<Db | null>(null)
export const useDb = (): Db | null => useContext(DbContext)

export const useDbViewer = () => {
  useDrizzleStudio(expo)
}

type UseInitializeDbResult = [Db, true] | [null, false]

export const useInitializeDb = (): UseInitializeDbResult => {
  useDrizzleStudio(expo)

  const { success, error } = useMigrations(db, migrations)

  useEffect(() => {
    if (error) {
      console.error("[Error] Failed to initialize db: ", error)
      return
    }

    if (success) {
      console.log("[INFO] Migration is completed.")
      return
    }

    console.log("[INFO] Migration is in progress.")
  }, [error, success])

  if (success) {
    return [db, true]
  }

  return [null, false]
}
