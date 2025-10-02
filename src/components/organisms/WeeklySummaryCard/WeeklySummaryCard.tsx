import { FC, useMemo } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { SummaryItem } from "@/components/molecules/SummaryItem"
import { useFindProfile } from "@/hooks/profile/useFindProfile"
import {
  SearchWeightRecordsParams,
  useSearchWeightRecords,
} from "@/hooks/weightRecord/useSearchWeightRecords"
import { subDuration } from "@/lib/date"
import { numberFormat } from "@/lib/formatter"
import { createStyleSheet } from "@/styles/theme"
import { calcAverageBmi } from "@/usecase/calcAverageBmi"
import { calcAverageBodyFatRate } from "@/usecase/calcAverageBodyFatRate"
import { calcAverageWeight } from "@/usecase/calcAverageWeight"

export const WeeklySummaryCard: FC = () => {
  const styles = useStyles()

  const searchParams: SearchWeightRecordsParams = useMemo(() => {
    const today = new Date()
    return {
      measuredDateFrom: subDuration(today, { weeks: 1 }),
      measuredDateTo: today,
    }
  }, [])

  const [profile] = useFindProfile()
  const [weightRecords] = useSearchWeightRecords(searchParams)

  const averageWeight = useMemo(() => {
    if (weightRecords == null) {
      return null
    }
    return calcAverageWeight(weightRecords)
  }, [weightRecords])

  const averageBodyFatRate = useMemo(() => {
    if (weightRecords == null) {
      return null
    }
    return calcAverageBodyFatRate(weightRecords)
  }, [weightRecords])

  const averageBmi = useMemo(() => {
    if (weightRecords == null || profile == null) {
      return null
    }
    return calcAverageBmi(profile.height, weightRecords)
  }, [weightRecords, profile])

  const weightDisplayValue = useMemo(() => {
    if (averageWeight == null) {
      return "--"
    }
    return numberFormat(averageWeight)
  }, [averageWeight])

  const bodyFatRateDisplayValue = useMemo(() => {
    if (averageBodyFatRate == null) {
      return "--"
    }
    return numberFormat(averageBodyFatRate)
  }, [averageBodyFatRate])

  const bmiDisplayValue = useMemo(() => {
    if (averageBmi == null) {
      return "--"
    }
    return numberFormat(averageBmi)
  }, [averageBmi])

  return (
    <Card>
      <View style={styles.cardTop}>
        <Typography bold style={styles.cardTitle}>
          週間サマリー
        </Typography>
      </View>
      <View style={styles.cardBottom}>
        <SummaryItem label="平均体重" value={weightDisplayValue} unit="kg" />
        <SummaryItem
          label="平均体脂肪率"
          value={bodyFatRateDisplayValue}
          unit="%"
        />
        <SummaryItem label="平均BMI" value={bmiDisplayValue} />
      </View>
    </Card>
  )
}

const useStyles = createStyleSheet((theme) => ({
  cardTop: {
    marginBottom: theme.spacing[3],
  } satisfies ViewStyle,
  cardTitle: {
    fontSize: theme.fontSize.lg,
  } satisfies TextStyle,
  cardBottom: {
    flexDirection: "row",
    gap: theme.spacing[3],
  } satisfies ViewStyle,
}))
