import { FC } from "react"
import { SafeAreaView, ViewStyle } from "react-native"

import { DataListScreenTemplate } from "@/components/templates/DataListScreenTemplate"
import { createStyleSheet } from "@/styles/theme"

export const DataListScreenPage: FC = () => {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
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
