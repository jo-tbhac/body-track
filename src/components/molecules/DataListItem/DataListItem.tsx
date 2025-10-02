import { FC, useMemo } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { TIME_OF_DAY } from "@/constants"
import { formatDate } from "@/lib/date"
import { numberFormat } from "@/lib/formatter"
import { MoonIcon, SunIcon } from "@/lib/icons"
import { createStyleSheet, useTheme } from "@/styles/theme"
import { WeightRecord } from "@/types"

interface Props {
  weightRecord: WeightRecord
}

export const DataListItem: FC<Props> = ({ weightRecord }) => {
  const styles = useStyles()
  const { colors } = useTheme()

  const accentBarColor = useMemo(() => {
    switch (weightRecord.timeOfDay) {
      case TIME_OF_DAY.morning:
        return colors.accent.amber[400]
      case TIME_OF_DAY.evening:
        return colors.accent.blue[800]
      default:
        return undefined
    }
  }, [colors.accent.amber, colors.accent.blue, weightRecord.timeOfDay])

  const timeOfDayItem = useMemo(() => {
    switch (weightRecord.timeOfDay) {
      case TIME_OF_DAY.morning:
        return (
          <View style={styles.timeOfDayItem}>
            <SunIcon size={14} color={colors.text.secondary} />
            <Typography style={styles.timeOfDayLabel}>朝</Typography>
          </View>
        )
      case TIME_OF_DAY.evening:
        return (
          <View style={styles.timeOfDayItem}>
            <MoonIcon size={12} color={colors.text.secondary} />
            <Typography style={styles.timeOfDayLabel}>夜</Typography>
          </View>
        )
      default:
        return null
    }
  }, [
    colors.text.secondary,
    styles.timeOfDayItem,
    styles.timeOfDayLabel,
    weightRecord.timeOfDay,
  ])

  const dateDisplayValue = useMemo(() => {
    return formatDate(weightRecord.measuredDate, "yyyy/MM/dd")
  }, [weightRecord.measuredDate])

  const weightDisplayValue = useMemo(() => {
    if (weightRecord.weight == null) {
      return "--"
    }
    return numberFormat(weightRecord.weight)
  }, [weightRecord.weight])

  const bodyFatRateDisplayValue = useMemo(() => {
    if (weightRecord.bodyFatRate == null) {
      return "--"
    }
    return numberFormat(weightRecord.bodyFatRate)
  }, [weightRecord.bodyFatRate])

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={[styles.accentBar, { backgroundColor: accentBarColor }]} />
        <View style={styles.date}>
          <Typography style={styles.label}>{dateDisplayValue}</Typography>
          {timeOfDayItem}
        </View>
        <View style={styles.weightItem}>
          <Typography style={styles.label}>{weightDisplayValue} kg</Typography>
        </View>
        <View style={styles.bodyFatRateItem}>
          <Typography style={styles.label}>
            {bodyFatRateDisplayValue} %
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.background.secondary,
    flexDirection: "row",
    gap: theme.spacing[2],
    minHeight: 50,
    paddingRight: theme.spacing[5],
  } satisfies ViewStyle,
  accentBar: {
    height: "100%",
    marginRight: theme.spacing[2],
    width: 5,
  } satisfies ViewStyle,
  timeOfDayItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing[1],
  } satisfies ViewStyle,
  date: {
    flex: 1,
  } satisfies ViewStyle,
  weightItem: {
    width: 80,
  } satisfies ViewStyle,
  bodyFatRateItem: {
    width: 80,
  } satisfies ViewStyle,
  label: {
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
  timeOfDayLabel: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
}))
