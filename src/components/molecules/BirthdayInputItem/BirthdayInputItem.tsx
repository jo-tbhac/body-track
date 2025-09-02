import { FC, useRef, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { ErrorMessage } from "@/components/atoms/ErrorMessage"
import { InputLabel } from "@/components/atoms/InputLabel"
import { TextInput, TextInputType } from "@/components/atoms/TextInput"
import { isInvalidDate } from "@/lib/date"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  value: string
  handleChangeValue: (newValue: string) => void
  errorMessage?: string
}

export const BirthdayInputItem: FC<Props> = ({
  value,
  handleChangeValue,
  errorMessage,
}) => {
  const styles = useStyles()

  const monthInputRef = useRef<TextInputType>(null)
  const dateInputRef = useRef<TextInputType>(null)

  const [year, setYear] = useState(() =>
    isInvalidDate(value) ? "" : String(new Date(value).getFullYear()),
  )
  const [month, setMonth] = useState(() =>
    isInvalidDate(value) ? "" : String(new Date(value).getMonth() + 1),
  )
  const [date, setDate] = useState(() =>
    isInvalidDate(value) ? "" : String(new Date(value).getDate()),
  )

  const YEAR_MAX_LENGTH = 4
  const MONTH_MAX_LENGTH = 2
  const DATE_MAX_LENGTH = 2

  const buildDateString = ({
    inputYear = year,
    inputMonth = month,
    inputDate = date,
  }) => {
    if (inputYear === "" || inputMonth === "" || inputDate === "") {
      return ""
    }
    return `${inputYear}-${inputMonth.padStart(2, "0")}-${inputDate.padStart(2, "0")}`
  }

  const handleChangeYear = (newYear: string) => {
    const yearAsNum = Number(newYear)
    if (Number.isNaN(yearAsNum) || newYear.length > YEAR_MAX_LENGTH) {
      return
    }
    if (newYear.length === YEAR_MAX_LENGTH) {
      monthInputRef.current?.focus()
    }
    setYear(newYear)
    handleChangeValue(buildDateString({ inputYear: newYear }))
  }

  const handleChangeMonth = (newMonth: string) => {
    const monthAsNum = Number(newMonth)
    if (Number.isNaN(monthAsNum) || newMonth.length > MONTH_MAX_LENGTH) {
      return
    }
    if (newMonth.length === MONTH_MAX_LENGTH || monthAsNum > 2) {
      dateInputRef.current?.focus()
    }
    setMonth(newMonth)
    handleChangeValue(buildDateString({ inputMonth: newMonth }))
  }

  const handleChangeDate = (newDate: string) => {
    const dateAsNum = Number(newDate)
    if (Number.isNaN(dateAsNum) || newDate.length > DATE_MAX_LENGTH) {
      return
    }
    setDate(newDate)
    handleChangeValue(buildDateString({ inputDate: newDate }))
  }

  return (
    <View style={styles.container}>
      <InputLabel label="生年月日" />
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          placeholder="年"
          maxLength={YEAR_MAX_LENGTH}
          value={year}
          onChangeText={handleChangeYear}
        />
        <TextInput
          ref={monthInputRef}
          style={styles.input}
          inputMode="numeric"
          placeholder="月"
          maxLength={MONTH_MAX_LENGTH}
          value={month}
          onChangeText={handleChangeMonth}
        />
        <TextInput
          ref={dateInputRef}
          style={styles.input}
          inputMode="numeric"
          placeholder="日"
          maxLength={DATE_MAX_LENGTH}
          value={date}
          onChangeText={handleChangeDate}
        />
      </View>
      {errorMessage != null && <ErrorMessage message={errorMessage} />}
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    marginBottom: theme.spacing[2],
  } satisfies ViewStyle,
  inputWrapper: {
    flexDirection: "row",
    gap: theme.spacing[2],
  } satisfies ViewStyle,
  input: {
    flex: 1,
    textAlign: "center",
  } satisfies TextStyle,
}))
