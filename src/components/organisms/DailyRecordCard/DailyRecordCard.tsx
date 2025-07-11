import { useRouter } from "expo-router"
import { FC, useMemo, useState } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { DatePicker } from "@/components/atoms/DatePicker"
import { Typography } from "@/components/atoms/Typography"
import { WeightEntry } from "@/components/molecules/WeightEntry"
import { addDuration, formatDate, subDuration } from "@/lib/date"
import { ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons"
import { createStyleSheet, useTheme } from "@/styles/theme"

export const DailyRecordCard: FC = () => {
  const { colors, fontSize } = useTheme()
  const styles = useStyles()

  const router = useRouter()

  const [datePickerVisible, setDatePickerVisible] = useState(false)

  const [selectedDate, setSelectedDate] = useState(new Date())

  const dateLabel = useMemo(() => {
    return formatDate(selectedDate, `yyy年M月d日の記録`)
  }, [selectedDate])

  const handlePressWeightEntry = () => {
    router.navigate("/record-input")
  }

  const handlePressDate = () => {
    setDatePickerVisible(true)
  }

  const handlePressPrevButton = () => {
    setSelectedDate((currentDate) => subDuration(currentDate, { days: 1 }))
  }

  const handlePressNextButton = () => {
    setSelectedDate((currentDate) => addDuration(currentDate, { days: 1 }))
  }

  const closeDatePicker = () => {
    setDatePickerVisible(false)
  }

  const handleSelectDate = (newDate: Date) => {
    setSelectedDate(newDate)
  }

  return (
    <>
      <Card gradient={[colors.primary[500], colors.accent.amber[600]]}>
        <View style={styles.cardTop}>
          <TouchableOpacity onPress={handlePressDate}>
            <Typography bold style={styles.cardTitle}>
              {dateLabel}
            </Typography>
          </TouchableOpacity>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handlePressPrevButton}
            >
              <ChevronLeftIcon size={fontSize.xl} color={colors.text.inverse} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handlePressNextButton}
            >
              <ChevronRightIcon
                size={fontSize.xl}
                color={colors.text.inverse}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardBottom}>
          <WeightEntry
            label="朝の体重"
            weight={64.0}
            bodyFatRate={16.0}
            bmi={19.0}
            onPress={handlePressWeightEntry}
          />
          <WeightEntry
            label="夜の体重"
            weight={64.0}
            bodyFatRate={16.0}
            bmi={19.0}
            onPress={handlePressWeightEntry}
          />
        </View>
      </Card>

      {datePickerVisible && (
        <DatePicker
          visible
          defaultDate={selectedDate}
          closeDatePicker={closeDatePicker}
          handleSelect={handleSelectDate}
        />
      )}
    </>
  )
}

const useStyles = createStyleSheet((theme) => ({
  cardTop: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing[2],
    justifyContent: "space-between",
    marginBottom: theme.spacing[4],
  } satisfies ViewStyle,
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing[2],
  } satisfies ViewStyle,
  iconButton: {
    paddingHorizontal: theme.spacing[2],
    paddingVertical: theme.spacing[1],
  },
  cardTitle: {
    color: theme.colors.text.inverse,
    fontSize: theme.fontSize.lg,
  } satisfies TextStyle,
  cardBottom: {
    flexDirection: "row",
    gap: theme.spacing[3],
  } satisfies ViewStyle,
}))
