import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { SettingListItem } from "@/components/molecules/SettingListItem"
import { ThemeIcon, UserIcon } from "@/lib/icons"
import { createStyleSheet, useTheme } from "@/styles/theme"

export const SettingList: FC = () => {
  const styles = useStyles()

  const theme = useTheme()

  return (
    <View style={styles.container}>
      <SettingListItem
        Icon={<UserIcon size={18} color={theme.colors.text.secondary} />}
        label="プロフィール"
      />
      <SettingListItem
        Icon={<ThemeIcon size={18} color={theme.colors.text.secondary} />}
        label="テーマ"
      />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
  } satisfies ViewStyle,
}))
