import { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { ErrorMessage } from "@/components/atoms/ErrorMessage"
import { InputLabel } from "@/components/atoms/InputLabel"
import { TextInput } from "@/components/atoms/TextInput"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  label: string
  value: string
  handleChangeValue: (newValue: string) => void
  errorMessage?: string
}

export const RecordInputItem: FC<Props> = ({
  label,
  value,
  handleChangeValue,
  errorMessage,
}) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <InputLabel label={label} />
      <TextInput
        style={styles.input}
        inputMode="decimal"
        value={value}
        onChangeText={handleChangeValue}
      />
      {errorMessage != null && <ErrorMessage message={errorMessage} />}
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    marginBottom: theme.spacing[2],
  } satisfies ViewStyle,
  input: {
    textAlign: "center",
  } satisfies TextStyle,
}))
