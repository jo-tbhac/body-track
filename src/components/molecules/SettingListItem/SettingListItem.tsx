import { FC, ReactNode } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  Icon: ReactNode
  label: string
}

export const SettingListItem: FC<Props> = ({ Icon, label }) => {
  const styles = useStyles()

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        {Icon}
        <Typography style={styles.label}>{label}</Typography>
      </View>
    </TouchableOpacity>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.background.secondary,
    flexDirection: "row",
    gap: theme.spacing[5],
    minHeight: 60,
    paddingHorizontal: theme.spacing[5],
    paddingVertical: theme.spacing[3],
  } satisfies ViewStyle,
  label: {
    fontSize: theme.fontSize.base,
  } satisfies TextStyle,
}))
