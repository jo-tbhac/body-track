import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Typography } from "@/components/Typography"
import { createStyleSheet } from "@/styles/theme"

export default function HomeScreen() {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
      <Typography>1.HomeScreen</Typography>
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
