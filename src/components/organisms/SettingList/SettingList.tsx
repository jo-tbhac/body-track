import { useRouter } from "expo-router"
import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { SettingListItem } from "@/components/molecules/SettingListItem"
import { ThemeIcon, UserIcon } from "@/lib/icons"
import { createStyleSheet, useTheme } from "@/styles/theme"

export const SettingList: FC = () => {
  const styles = useStyles()
  const theme = useTheme()

  const router = useRouter()

  const handlePressProfileList = () => {
    router.navigate("/profile")
  }

  return (
    <View style={styles.container}>
      <SettingListItem
        Icon={<UserIcon size={18} color={theme.colors.text.secondary} />}
        label="プロフィール"
        onPress={handlePressProfileList}
      />
      <SettingListItem
        Icon={<ThemeIcon size={18} color={theme.colors.text.secondary} />}
        label="テーマ"
        onPress={() => {}}
      />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
  } satisfies ViewStyle,
}))
