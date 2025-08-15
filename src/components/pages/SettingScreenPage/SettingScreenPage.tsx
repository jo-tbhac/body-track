import { FC } from "react"
import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { SettingScreenTemplate } from "@/components/templates/SettingScreenTemplate"
import { createStyleSheet } from "@/styles/theme"

export const SettingScreenPage: FC = () => {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
      <SettingScreenTemplate />
    </SafeAreaView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
