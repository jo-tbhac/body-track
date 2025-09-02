import { FC, useMemo, useState } from "react"
import { View, ViewStyle } from "react-native"

import { ErrorMessage } from "@/components/atoms/ErrorMessage"
import { InputLabel } from "@/components/atoms/InputLabel"
import { Picker } from "@/components/atoms/Picker"
import { PickerTrigger } from "@/components/atoms/PickerTrigger"
import { SEX } from "@/constants"
import { createStyleSheet } from "@/styles/theme"
import { Sex } from "@/types"

interface Props {
  value: Sex | ""
  handleChangeValue: (newValue: Sex | "") => void
  errorMessage?: string
}

export const SexInputItem: FC<Props> = ({
  value,
  handleChangeValue,
  errorMessage,
}) => {
  const styles = useStyles()

  const [pickerExpanded, setPickerExpanded] = useState(false)

  const pickerItems: { label: string; value: Sex | "" }[] = useMemo(() => {
    return [
      { label: "選択してください", value: "" },
      { label: "男性", value: SEX.male },
      { label: "女性", value: SEX.female },
    ]
  }, [])

  const selectedItemText = useMemo(() => {
    if (value === "") {
      return ""
    }
    return pickerItems.find((item) => value === item.value)?.label ?? ""
  }, [pickerItems, value])

  const handlePressPickerTrigger = () => {
    setPickerExpanded((currentState) => !currentState)
  }

  return (
    <View style={styles.container}>
      <InputLabel label="先天的性別" />
      <PickerTrigger
        selectedItemText={selectedItemText}
        onPress={handlePressPickerTrigger}
      />
      <Picker
        items={pickerItems}
        selectedValue={value}
        handleChangeValue={handleChangeValue}
        expanded={pickerExpanded}
      />
      {errorMessage != null && <ErrorMessage message={errorMessage} />}
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    marginBottom: theme.spacing[2],
  } satisfies ViewStyle,
}))
