import { useMemo } from "react"

import { ChartData } from "@/lib/charts"
import { DATE_STRING_FORMAT, formatDate } from "@/lib/date"
import { WeightRecord } from "@/types"
import { calcAverageBodyFatRate } from "@/usecase/calcAverageBodyFatRate"
import { calcAverageWeight } from "@/usecase/calcAverageWeight"

interface UseChartDataReturn {
  weight: {
    dataList: ChartData[]
    minValue: number
    stepValue: number
    numberOfSection: number
  }
  bodyFatRate: {
    dataList: ChartData[]
    minValue: number
    stepValue: number
    numberOfSection: number
  }
}

export const useChartData = (
  weightRecords: WeightRecord[] | null,
): UseChartDataReturn | null => {
  return useMemo(() => {
    if (weightRecords == null) {
      return null
    }

    const dateRecordsMap = new Map<string, WeightRecord[]>()

    for (const weightRecord of weightRecords) {
      const dateKey = formatDate(weightRecord.measuredDate, DATE_STRING_FORMAT)
      const dateRecordsMapValue = dateRecordsMap.get(dateKey)

      if (dateRecordsMapValue == null) {
        dateRecordsMap.set(dateKey, [weightRecord])
      } else {
        dateRecordsMapValue.push(weightRecord)
        dateRecordsMap.set(dateKey, dateRecordsMapValue)
      }
    }

    const weightDataList: ChartData[] = []
    const bodyFatRateDataList: ChartData[] = []

    const weightValues: number[] = []
    const bodyFatRateValues: number[] = []

    for (const [dateKey, dateRecordsMapValue] of dateRecordsMap.entries()) {
      const weight = calcAverageWeight(dateRecordsMapValue)
      const bodyFatRate = calcAverageBodyFatRate(dateRecordsMapValue)

      if (weight != null) {
        weightDataList.push({
          label: formatDate(new Date(dateKey), "M/d"),
          value: weight,
        })
        weightValues.push(weight)
      }
      if (bodyFatRate != null) {
        bodyFatRateDataList.push({
          label: formatDate(new Date(dateKey), "M/d"),
          value: bodyFatRate,
        })
        bodyFatRateValues.push(bodyFatRate)
      }
    }

    const numberOfSection = 5
    const weightValueOffset = 8
    const bodyFatRateOffset = 2

    const maxWeight =
      weightValues.length > 0
        ? Math.max(...weightValues) + weightValueOffset
        : 0

    const minWeight =
      weightValues.length > 0
        ? Math.min(...weightValues) - weightValueOffset
        : 0

    const maxBodyFatRate =
      bodyFatRateValues.length > 0
        ? Math.max(...bodyFatRateValues) + bodyFatRateOffset
        : 0

    const minBodyFatRate =
      bodyFatRateValues.length > 0
        ? Math.min(...bodyFatRateValues) - bodyFatRateOffset
        : 0

    const weightStepValue = (maxWeight - minWeight) / numberOfSection
    const bodyFatRateStepValue =
      (maxBodyFatRate - minBodyFatRate) / numberOfSection

    return {
      weight: {
        dataList: weightDataList,
        minValue: minWeight,
        stepValue: weightStepValue,
        numberOfSection,
      },
      bodyFatRate: {
        dataList: bodyFatRateDataList,
        minValue: minBodyFatRate,
        stepValue: bodyFatRateStepValue,
        numberOfSection,
      },
    } satisfies UseChartDataReturn
  }, [weightRecords])
}
