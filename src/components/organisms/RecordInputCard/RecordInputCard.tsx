import { useForm } from "@tanstack/react-form"
import { FC, useMemo } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Button } from "@/components/atoms/Button"
import { Card } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { RecordInputItem } from "@/components/molecules/RecordInputItem"
import { TIME_OF_DAY } from "@/constants"
import { formatDate } from "@/lib/date"
import { createStyleSheet } from "@/styles/theme"
import { TimeOfDay } from "@/types"

import { FormSchema, formSchema } from "./schema"

const defaultValues: FormSchema = {
  weight: "",
  bodyFatRate: "",
}

interface Props {
  selectedDate: Date
  timeOfDay: TimeOfDay
}

export const RecordInputCard: FC<Props> = ({ selectedDate, timeOfDay }) => {
  const styles = useStyles()

  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log("value: ", value)
    },
    validators: {
      onChange: formSchema,
    },
  })

  const title = useMemo(() => {
    const timeOfDayLabel = timeOfDay === TIME_OF_DAY.morning ? "朝" : "夜"

    return formatDate(selectedDate, `yyy年M月d日 ${timeOfDayLabel}の体重を記録`)
  }, [selectedDate, timeOfDay])

  const handlePressSaveButton = () => {
    form.handleSubmit()
  }

  return (
    <Card>
      <View style={styles.cardTop}>
        <Typography bold style={styles.cardTitle}>
          {title}
        </Typography>
      </View>
      <View style={styles.cardBottom}>
        <form.Field name="weight">
          {({ state, handleChange }) => (
            <RecordInputItem
              label="体重（kg）"
              value={state.value}
              handleChangeValue={(newValue) => handleChange(newValue)}
              errorMessage={state.meta.errors[0]?.message}
            />
          )}
        </form.Field>
        <form.Field name="bodyFatRate">
          {({ state, handleChange }) => (
            <RecordInputItem
              label="体脂肪率（%）"
              value={state.value}
              handleChangeValue={(newValue) => handleChange(newValue)}
              errorMessage={state.meta.errors[0]?.message}
            />
          )}
        </form.Field>
        <View style={styles.buttonContainer}>
          <Button label="記録を保存" onPress={handlePressSaveButton} />
        </View>
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
    gap: theme.spacing[2],
  } satisfies ViewStyle,
  buttonContainer: {
    marginTop: theme.spacing[3],
  } satisfies ViewStyle,
}))
