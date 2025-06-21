import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { DailyRecordCard } from "@/components/organisms/DailyRecordCard"
import { createStyleSheet } from "@/styles/theme"

export const HomeScreenTemplate: FC = () => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <DailyRecordCard />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    gap: theme.spacing[4],
    paddingHorizontal: theme.spacing[3],
  } satisfies ViewStyle,
}))
