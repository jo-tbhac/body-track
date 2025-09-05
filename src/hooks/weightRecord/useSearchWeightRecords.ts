import { and, between, eq } from "drizzle-orm"
import { useEffect, useState } from "react"

import { useDb, weightRecordsTable } from "@/db"
import { DATE_STRING_FORMAT, formatDate } from "@/lib/date"
import { TimeOfDay, WeightRecord } from "@/types"

type UseSearchWeightRecordsResult = [WeightRecord[] | null, boolean]

export interface SearchWeightRecordsParams {
  timeOfDay?: TimeOfDay
  measuredDateFrom: Date
  measuredDateTo: Date
}

export const useSearchWeightRecords = ({
  timeOfDay,
  measuredDateFrom,
  measuredDateTo,
}: SearchWeightRecordsParams): UseSearchWeightRecordsResult => {
  const [result, setResult] = useState<{
    data: WeightRecord[] | null
    loading: boolean
  }>({ data: null, loading: true })

  const db = useDb()

  useEffect(() => {
    if (db == null) {
      return
    }

    ;(async () => {
      const weightRecords = await db
        .select()
        .from(weightRecordsTable)
        .where(
          and(
            between(
              weightRecordsTable.measuredDate,
              formatDate(measuredDateFrom, DATE_STRING_FORMAT),
              formatDate(measuredDateTo, DATE_STRING_FORMAT),
            ),
            timeOfDay ? eq(weightRecordsTable.timeOfDay, timeOfDay) : undefined,
          ),
        )

      if (weightRecords.length === 0) {
        setResult({ data: [], loading: false })
        return
      }

      const data = weightRecords.map((record) => ({
        ...record,
        measuredDate: new Date(weightRecords[0].measuredDate),
      }))

      setResult({ data, loading: false })
    })()
  }, [db, measuredDateFrom, measuredDateTo, timeOfDay])

  return [result.data, result.loading]
}
