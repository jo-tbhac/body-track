import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { SettingList } from "@/components/organisms/SettingList"
import { createStyleSheet } from "@/styles/theme"

export const SettingScreenTemplate: FC = () => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <SettingList />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
  } satisfies ViewStyle,
}))
