import { useLocalSearchParams } from "expo-router"
import { FC, useMemo } from "react"
import { View, ViewStyle } from "react-native"

import { RecordInputCard } from "@/components/organisms/RecordInputCard"
import { createStyleSheet } from "@/styles/theme"
import { TimeOfDay } from "@/types"

import { useFindWeightRecordByDateTime } from "./useFindWeightRecordByDateTime"

export const RecordInputTemplate: FC = () => {
  const styles = useStyles()

  const { dateString, timeOfDay } = useLocalSearchParams<{
    dateString: string
    timeOfDay: TimeOfDay
  }>()

  const selectedDate = useMemo(() => {
    return new Date(dateString)
  }, [dateString])

  const [weightRecord, loading] = useFindWeightRecordByDateTime({
    timeOfDay,
    measuredDate: selectedDate,
  })

  if (loading) {
    return null
  }

  const defaultFormValue = {
    weight: weightRecord != null ? String(weightRecord.weight) : "",
    bodyFatRate: weightRecord != null ? String(weightRecord.bodyFatRate) : "",
  }

  return (
    <View style={styles.container}>
      <RecordInputCard
        selectedDate={selectedDate}
        timeOfDay={timeOfDay}
        defaultFormValue={defaultFormValue}
      />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[5],
  } satisfies ViewStyle,
}))
