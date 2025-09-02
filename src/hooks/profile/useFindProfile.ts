import { useEffect, useState } from "react"

import { profilesTable, useDb } from "@/db"
import { Profile } from "@/types"

type UseFindProfileResult = [Profile | null, boolean]

export const useFindProfile = (): UseFindProfileResult => {
  const [result, setResult] = useState<{
    data: Profile | null
    loading: boolean
  }>({ data: null, loading: true })

  const db = useDb()

  useEffect(() => {
    if (db == null) {
      return
    }

    ;(async () => {
      const profiles = await db.select().from(profilesTable).limit(1)

      if (profiles.length === 0) {
        setResult({ data: null, loading: false })
        return
      }

      setResult({ data: profiles[0], loading: false })
    })()
  }, [db])

  return [result.data, result.loading]
}
