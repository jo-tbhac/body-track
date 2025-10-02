import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { createStyleSheet } from "@/styles/theme"

export const DataListScreenTemplate: FC = () => {
  const styles = useStyles()

  return <View style={styles.container}></View>
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    paddingHorizontal: theme.spacing[3],
  } satisfies ViewStyle,
}))
