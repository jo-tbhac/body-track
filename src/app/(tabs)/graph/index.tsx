import { ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

export default function GraphScreen() {
  const styles = useStyles()

  return (
    <SafeAreaView style={styles.container}>
      <Typography>GraphScreen</Typography>
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
