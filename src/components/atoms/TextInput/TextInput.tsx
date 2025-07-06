import { FC } from "react"
import {
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from "react-native"

import { createStyleSheet, useTheme } from "@/styles/theme"

type Props = TextInputProps

export const TextInput: FC<Props> = ({ style, ...rest }) => {
  const styles = useStyles()

  const { colors } = useTheme()

  return (
    <RNTextInput
      selectionColor={colors.primary[500]}
      style={[styles.container, style]}
      {...rest}
    />
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.neutral[50],
    borderColor: theme.colors.border.light,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    color: theme.colors.text.secondary,
    fontFamily: theme.fontFamily.NotoSansJP_700,
    fontSize: theme.fontSize.lg,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[3],
  } satisfies TextStyle,
}))
