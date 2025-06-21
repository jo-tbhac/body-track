import { FC } from "react"
import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { HomeScreenTemplate } from "@/components/templates/HomeScreenTemplate"
import { createStyleSheet } from "@/styles/theme"

export const HomeScreenPage: FC = () => {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenTemplate />
    </SafeAreaView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
