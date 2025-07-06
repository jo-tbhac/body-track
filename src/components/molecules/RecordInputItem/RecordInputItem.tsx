import { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { TextInput } from "@/components/atoms/TextInput"
import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  label: string
}

export const RecordInputItem: FC<Props> = ({ label }) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Typography bold style={styles.label}>
        {label}
      </Typography>
      <TextInput style={styles.input} inputMode="decimal" />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    marginBottom: theme.spacing[2],
  } satisfies ViewStyle,
  label: {
    color: theme.colors.text.tertiary,
    fontSize: theme.fontSize.sm,
    marginLeft: theme.spacing[1],
    marginBottom: theme.spacing[1],
  } satisfies TextStyle,
  input: {
    textAlign: "center",
  } satisfies TextStyle,
}))
