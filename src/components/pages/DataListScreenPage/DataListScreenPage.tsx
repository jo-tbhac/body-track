import { useIsFocused } from "@react-navigation/native"
import { FC } from "react"
import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { DataListScreenTemplate } from "@/components/templates/DataListScreenTemplate"
import { createStyleSheet } from "@/styles/theme"

export const DataListScreenPage: FC = () => {
  const styles = useStyles()

  const isFocused = useIsFocused()

  if (!isFocused) {
    return null
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <DataListScreenTemplate />
    </SafeAreaView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
