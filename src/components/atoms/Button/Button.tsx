import { FC, useMemo } from "react"
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  label: string
  containerStyle?: TouchableOpacityProps["style"]
  onPress: TouchableOpacityProps["onPress"]
}

export const Button: FC<Props> = ({
  label,
  containerStyle: overrideContainerStyle,
  onPress,
}) => {
  const styles = useStyles()

  const containerStyle = useMemo(() => {
    return StyleSheet.compose<ViewStyle, ViewStyle, ViewStyle>(
      styles.container,
      overrideContainerStyle,
    )
  }, [overrideContainerStyle, styles.container])

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Typography bold style={styles.label}>
        {label}
      </Typography>
    </TouchableOpacity>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.primary[500],
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    minHeight: 45,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[1],
  } satisfies ViewStyle,
  label: {
    color: theme.colors.text.inverse,
  } satisfies TextStyle,
}))
