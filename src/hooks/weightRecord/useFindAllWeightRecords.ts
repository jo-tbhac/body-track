import { desc } from "drizzle-orm"
import { useEffect, useState } from "react"

import { useDb, weightRecordsTable } from "@/db"
import { WeightRecord } from "@/types"

type UseFindAllWeightRecordsResult = [WeightRecord[] | null, boolean]

export const useFindAllWeightRecords = (): UseFindAllWeightRecordsResult => {
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
        .orderBy(
          desc(weightRecordsTable.measuredDate),
          desc(weightRecordsTable.timeOfDay),
        )

      if (weightRecords.length === 0) {
        setResult({ data: [], loading: false })
        return
      }

      const data = weightRecords.map((record) => ({
        ...record,
        measuredDate: new Date(record.measuredDate),
      }))

      setResult({ data, loading: false })
    })()
  }, [db])

  return [result.data, result.loading]
}
