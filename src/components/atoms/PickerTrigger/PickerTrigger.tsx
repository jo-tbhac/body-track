import { FC } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  selectedItemText: string
  onPress: () => void
}

export const PickerTrigger: FC<Props> = ({ selectedItemText, onPress }) => {
  const styles = useStyles()

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Typography style={styles.label}>{selectedItemText}</Typography>
      </View>
    </TouchableOpacity>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.neutral[50],
    borderColor: theme.colors.border.light,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[3],
  } satisfies ViewStyle,
  label: {
    color: theme.colors.text.secondary,
    fontFamily: theme.fontFamily.NotoSansJP_700,
    fontSize: theme.fontSize.base,
  } satisfies TextStyle,
}))
