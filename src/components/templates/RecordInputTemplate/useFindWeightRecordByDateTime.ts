import { and, eq } from "drizzle-orm"
import { useEffect, useState } from "react"

import { useDb, weightRecordsTable } from "@/db"
import { DATE_STRING_FORMAT, formatDate } from "@/lib/date"
import { TimeOfDay, WeightRecord } from "@/types"

type UseFindWeightRecordResult = [WeightRecord | null, boolean]

export const useFindWeightRecordByDateTime = ({
  timeOfDay,
  measuredDate,
}: {
  timeOfDay: TimeOfDay
  measuredDate: Date
}): UseFindWeightRecordResult => {
  const [result, setResult] = useState<{
    data: WeightRecord | null
    loading: boolean
  }>({ data: null, loading: true })

  const db = useDb()

  useEffect(() => {
    if (!result.loading || db == null || result.data != null) {
      return
    }

    ;(async () => {
      const weightRecords = await db
        .select()
        .from(weightRecordsTable)
        .limit(1)
        .where(
          and(
            eq(
              weightRecordsTable.measuredDate,
              formatDate(measuredDate, DATE_STRING_FORMAT),
            ),
            eq(weightRecordsTable.timeOfDay, timeOfDay),
          ),
        )

      if (weightRecords.length === 0) {
        setResult({ data: null, loading: false })
        return
      }

      const data = {
        ...weightRecords[0],
        measuredDate: new Date(weightRecords[0].measuredDate),
      }

      setResult({ data, loading: false })
    })()
  }, [db, measuredDate, result.data, result.loading, timeOfDay])

  return [result.data, result.loading]
}
