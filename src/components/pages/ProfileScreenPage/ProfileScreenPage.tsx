import { FC } from "react"
import { ScrollView, ViewStyle } from "react-native"

import { ProfileScreenTemplate } from "@/components/templates/ProfileScreenTemplate"
import { createStyleSheet } from "@/styles/theme"

export const ProfileScreenPage: FC = () => {
  const styles = useStyles()

  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
      <ProfileScreenTemplate />
    </ScrollView>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    flex: 1,
  } satisfies ViewStyle,
}))
