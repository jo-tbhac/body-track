import { useCallback, useState } from "react"

import { useDb, weightRecordsTable } from "@/db"
import { DATE_STRING_FORMAT, formatDate } from "@/lib/date"
import { TimeOfDay } from "@/types"

interface SaveWeightRecordParams {
  weight: number | null
  bodyFatRate: number | null
  measuredDate: Date
  timeOfDay: TimeOfDay
}

type UseSaveWeightRecordReturn = [
  (params: SaveWeightRecordParams) => Promise<void>,
  boolean,
]

export const useSaveWeightRecord = (): UseSaveWeightRecordReturn => {
  const db = useDb()

  const [saving, setSaving] = useState(false)

  const saveWeightRecord = useCallback(
    async (params: SaveWeightRecordParams) => {
      if (db == null) {
        return
      }

      setSaving(true)
      const { measuredDate, ...rest } = params
      const measuredDateString = formatDate(measuredDate, DATE_STRING_FORMAT)

      await db
        .insert(weightRecordsTable)
        .values({ measuredDate: measuredDateString, ...rest })
        .onConflictDoUpdate({
          target: [
            weightRecordsTable.measuredDate,
            weightRecordsTable.timeOfDay,
          ],
          set: { weight: rest.weight, bodyFatRate: rest.bodyFatRate },
        })

      setSaving(false)
    },
    [db],
  )

  return [saveWeightRecord, saving]
}
