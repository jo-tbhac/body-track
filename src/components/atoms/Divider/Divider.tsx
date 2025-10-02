import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { createStyleSheet } from "@/styles/theme"

export const Divider: FC = () => {
  const styles = useStyles()

  return <View style={styles.container} />
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.border.medium,
    height: 1,
    width: "100%",
  } satisfies ViewStyle,
}))
