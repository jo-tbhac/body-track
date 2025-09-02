import { useCallback, useState } from "react"

import { profilesTable, useDb } from "@/db"
import { Sex } from "@/types"

interface SaveProfileParams {
  id?: number
  height: number
  sex: Sex
  birthday: string
}

type UseSaveProfileReturn = [
  (params: SaveProfileParams) => Promise<void>,
  boolean,
]

export const useSaveProfile = (): UseSaveProfileReturn => {
  const db = useDb()

  const [saving, setSaving] = useState(false)

  const saveProfile = useCallback(
    async (params: SaveProfileParams) => {
      if (db == null) {
        return
      }

      setSaving(true)

      await db
        .insert(profilesTable)
        .values(params)
        .onConflictDoUpdate({
          target: profilesTable.id,
          set: {
            height: params.height,
            sex: params.sex,
            birthday: params.birthday,
          },
        })

      setSaving(false)
    },
    [db],
  )

  return [saveProfile, saving]
}
