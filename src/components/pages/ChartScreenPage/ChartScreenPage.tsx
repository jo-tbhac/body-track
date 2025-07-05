import { FC } from "react"
import { SafeAreaView, ViewStyle } from "react-native"

import { ChartScreenTemplate } from "@/components/templates/ChartScreenTemplate"
import { createStyleSheet } from "@/styles/theme"

export const ChartScreenPage: FC = () => {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
      <ChartScreenTemplate />
    </SafeAreaView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
