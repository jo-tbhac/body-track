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
  selected: boolean
  label: string
  containerStyle?: TouchableOpacityProps["style"]
  onPress: TouchableOpacityProps["onPress"]
}

export const PeriodButton: FC<Props> = ({
  selected,
  label,
  containerStyle: overrideContainerStyle,
  onPress,
}) => {
  const styles = useStyles()

  const containerStyle = useMemo(() => {
    const flattenBaseStyle = selected
      ? StyleSheet.flatten([styles.container, styles.selectedContainer])
      : styles.container

    return StyleSheet.compose<ViewStyle, ViewStyle, ViewStyle>(
      flattenBaseStyle,
      overrideContainerStyle,
    )
  }, [
    overrideContainerStyle,
    selected,
    styles.container,
    styles.selectedContainer,
  ])

  const textStyle = useMemo(() => {
    return selected ? styles.selectedText : undefined
  }, [selected, styles.selectedText])

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Typography style={textStyle}>{label}</Typography>
    </TouchableOpacity>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.neutral[100],
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    minHeight: 35,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[1],
  } satisfies ViewStyle,
  selectedContainer: {
    backgroundColor: theme.colors.primary[500],
  } satisfies ViewStyle,
  selectedText: {
    color: theme.colors.neutral[50],
  } satisfies TextStyle,
}))
