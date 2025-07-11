import { FC, useState } from "react"
import { Modal, View, ViewStyle } from "react-native"
import { Calendar, DateData, LocaleConfig } from "react-native-calendars"

import { Button } from "@/components/atoms/Button"
import { formatDate } from "@/lib/date"
import { Portal } from "@/lib/portal"
import { createStyleSheet, useTheme } from "@/styles/theme"

LocaleConfig.locales["ja"] = {
  ...LocaleConfig.locales[""],
  monthNames: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  dayNames: ["日", "月", "火", "水", "木", "金", "土"],
  dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
}

LocaleConfig.defaultLocale = "ja"
interface Props {
  visible: boolean
  defaultDate?: Date
  closeDatePicker: () => void
  handleSelect: (selectedDate: Date) => void
}

export const DatePicker: FC<Props> = ({
  visible,
  defaultDate = new Date(),
  closeDatePicker,
  handleSelect,
}) => {
  const styles = useStyles()

  const { colors, fontFamily, fontSize } = useTheme()

  const [selectedDate, setSelectedDate] = useState(() => {
    return formatDate(defaultDate, "yyyy-MM-dd")
  })

  const handleChangeDate = (dateData: DateData) => {
    setSelectedDate(dateData.dateString)
  }

  const handlePressSelectButton = () => {
    handleSelect(new Date(selectedDate))
    closeDatePicker()
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={closeDatePicker}
      >
        <View style={styles.backdrop}>
          <View style={styles.container}>
            <Calendar
              initialDate={selectedDate}
              onDayPress={handleChangeDate}
              markedDates={{
                [selectedDate]: { selected: true },
              }}
              monthFormat="yyyy年 M月"
              theme={{
                selectedDayBackgroundColor: colors.primary[500],
                arrowColor: colors.primary[500],
                todayTextColor: colors.text.primary,
                dayTextColor: colors.text.primary,
                monthTextColor: colors.text.primary,
                textDayHeaderFontFamily: fontFamily.NotoSansJP_400,
                textMonthFontFamily: fontFamily.NotoSansJP_400,
                textDayFontFamily: fontFamily.NotoSansJP_400,
                textDayFontSize: fontSize.lg,
                textDayStyle: {
                  lineHeight: fontSize["2xl"],
                },
              }}
            />
            <View style={styles.buttonContainer}>
              <Button
                variant="secondary"
                size="small"
                label="キャンセル"
                onPress={closeDatePicker}
              />
              <Button
                label="選択"
                size="small"
                onPress={handlePressSelectButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
  )
}

const useStyles = createStyleSheet((theme) => ({
  backdrop: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "center",
  } satisfies ViewStyle,
  container: {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.sm,
    gap: theme.spacing[3],
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[3],
    width: "95%",
  } satisfies ViewStyle,
  buttonContainer: {
    backgroundColor: theme.colors.background.secondary,
    flexDirection: "row",
    gap: theme.spacing[2],
    justifyContent: "flex-end",
  } satisfies ViewStyle,
}))
