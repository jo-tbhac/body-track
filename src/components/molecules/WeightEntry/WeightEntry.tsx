import { FC, useMemo } from "react"
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { useFindProfile } from "@/hooks/profile/useFindProfile"
import { useFindWeightRecordByDateTime } from "@/hooks/weightRecord/useFindWeightRecordByDateTime"
import { createStyleSheet } from "@/styles/theme"
import { TimeOfDay } from "@/types"
import { calcBmi } from "@/usecase/calcBmi"

interface Props {
  label: string
  selectedDate: Date
  timeOfDay: TimeOfDay
  handlePressWeightEntry: (timeOfDay: TimeOfDay) => void
}

export const WeightEntry: FC<Props> = ({
  label,
  selectedDate,
  timeOfDay,
  handlePressWeightEntry,
}) => {
  const styles = useStyles()

  const [profile] = useFindProfile()

  const [weightRecord] = useFindWeightRecordByDateTime({
    measuredDate: selectedDate,
    timeOfDay,
  })

  const bmi = useMemo(() => {
    if (profile == null || weightRecord?.weight == null) {
      return "--"
    }
    return calcBmi({ height: profile.height, weight: weightRecord.weight })
  }, [profile, weightRecord?.weight])

  const onPress = () => {
    handlePressWeightEntry(timeOfDay)
  }

  const weight = weightRecord?.weight ?? "--"
  const bodyFatRate = weightRecord?.bodyFatRate ?? "--"

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Card style={styles.card}>
        <Typography style={styles.label}>{label}</Typography>
        <Typography bold style={styles.weight}>
          {weight}{" "}
          <Typography bold style={styles.weightUnit}>
            kg
          </Typography>
        </Typography>
        <Typography style={styles.bodyFatRate}>
          体脂肪率: {bodyFatRate} %
        </Typography>
        <Typography style={styles.bmi}>BMI: {bmi}</Typography>
      </Card>
    </TouchableOpacity>
  )
}

const useStyles = createStyleSheet((theme) => ({
  wrapper: {
    backgroundColor: `${theme.colors.background.secondary}22`,
    borderRadius: theme.borderRadius.xl,
    flex: 1,
  } satisfies ViewStyle,
  card: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
  } satisfies ViewStyle,
  label: {
    color: theme.colors.text.inverse,
  } satisfies TextStyle,
  weight: {
    color: theme.colors.text.inverse,
    fontSize: theme.fontSize["2xl"],
  } satisfies TextStyle,
  weightUnit: {
    color: theme.colors.text.inverse,
    fontSize: theme.fontSize.base,
  } satisfies TextStyle,
  bodyFatRate: {
    color: theme.colors.text.inverse,
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
  bmi: {
    color: theme.colors.text.inverse,
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
}))
