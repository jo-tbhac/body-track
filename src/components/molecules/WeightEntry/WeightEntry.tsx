import { FC } from "react"
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  label: string
  weight: number
  bodyFatRate: number
  bmi: number
}

export const WeightEntry: FC<Props> = ({ label, weight, bodyFatRate, bmi }) => {
  const styles = useStyles()

  return (
    <TouchableOpacity style={styles.wrapper}>
      <Card style={styles.card}>
        <Typography style={styles.label}>{label}</Typography>
        <Typography bold style={styles.weight}>
          {weight}{" "}
          <Typography bold style={styles.weightSuffix}>
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
  weightSuffix: {
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
