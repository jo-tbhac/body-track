import { FC } from "react"
import { SafeAreaView, ViewStyle } from "react-native"

import { GraphScreenTemplate } from "@/components/templates/GraphScreenTemplate"
import { createStyleSheet } from "@/styles/theme"

export const GraphScreenPage: FC = () => {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
      <GraphScreenTemplate />
    </SafeAreaView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
