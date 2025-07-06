import { FC } from "react"
import { ScrollView, ViewStyle } from "react-native"

import { RecordInputTemplate } from "@/components/templates/RecordInputTemplate"
import { createStyleSheet } from "@/styles/theme"

export const RecordInputPage: FC = () => {
  const styles = useStyles()

  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
      <RecordInputTemplate />
    </ScrollView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
