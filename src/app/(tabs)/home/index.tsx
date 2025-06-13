import { Text, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { createStyleSheet } from "@/styles/theme"

export default function HomeScreen() {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.background.primary,
    flex: 1,
    justifyContent: "center",
  } satisfies ViewStyle,
}))
