import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import { FC, ReactNode, useEffect } from "react"

import migrations from "../../drizzle/migrations"
import { DbContext, db, useDbViewer } from "./db"

interface Props {
  children: ReactNode
}

export const DbProvider: FC<Props> = ({ children }) => {
  useDbViewer()

  const { success, error } = useMigrations(db, migrations)

  useEffect(() => {
    if (error) {
      console.error(error)
      return
    }

    if (success) {
      console.log("[INFO]: Migration is completed.")
      return
    }

    console.log("[INFO]: Migration is in progress.")
  }, [error, success])

  return <DbContext.Provider value={db}>{children}</DbContext.Provider>
}
