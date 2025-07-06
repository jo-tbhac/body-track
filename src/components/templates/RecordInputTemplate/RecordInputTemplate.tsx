import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { RecordInputCard } from "@/components/organisms/RecordInputCard"
import { createStyleSheet } from "@/styles/theme"

export const RecordInputTemplate: FC = () => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <RecordInputCard />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[5],
  } satisfies ViewStyle,
}))
