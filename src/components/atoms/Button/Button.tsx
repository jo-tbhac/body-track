import { FC, useMemo } from "react"
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

const VARIANT = {
  primary: "primary",
  secondary: "secondary",
} as const

type Variant = (typeof VARIANT)[keyof typeof VARIANT]

const SIZE = {
  small: "small",
  medium: "medium",
} as const

type Size = (typeof SIZE)[keyof typeof SIZE]

interface Props {
  variant?: Variant
  size?: Size
  label: string
  containerStyle?: TouchableOpacityProps["style"]
  labelStyle?: TextStyle
  onPress: TouchableOpacityProps["onPress"]
}

export const Button: FC<Props> = ({
  variant = VARIANT.primary,
  size = SIZE.medium,
  label,
  containerStyle: overrideContainerStyle,
  labelStyle: overrideLabelStyle,
  onPress,
}) => {
  const styles = useStyles()

  const containerStyle = useMemo(() => {
    const stylesPool: StyleProp<ViewStyle> = [styles.buttonBase]

    switch (variant) {
      case VARIANT.primary:
        stylesPool.push(styles.primaryButton)
        break
      case VARIANT.secondary:
        stylesPool.push(styles.secondaryButton)
        break
    }

    switch (size) {
      case SIZE.medium:
        stylesPool.push(styles.mediumButtonContainer)
        break
      case SIZE.small:
        stylesPool.push(styles.smallButtonContainer)
        break
    }

    return [...stylesPool, overrideContainerStyle]
  }, [
    overrideContainerStyle,
    size,
    styles.buttonBase,
    styles.mediumButtonContainer,
    styles.primaryButton,
    styles.secondaryButton,
    styles.smallButtonContainer,
    variant,
  ])

  const labelStyle = useMemo(() => {
    const stylesPool: StyleProp<TextStyle> = []

    switch (variant) {
      case VARIANT.primary:
        stylesPool.push(styles.primaryButtonLabel)
        break
      case VARIANT.secondary:
        stylesPool.push(styles.secondaryButtonLabel)
        break
    }

    switch (size) {
      case SIZE.medium:
        stylesPool.push(styles.mediumButtonLabel)
        break
      case SIZE.small:
        stylesPool.push(styles.smallButtonLabel)
        break
    }

    return [...stylesPool, overrideLabelStyle]
  }, [
    overrideLabelStyle,
    size,
    styles.mediumButtonLabel,
    styles.primaryButtonLabel,
    styles.secondaryButtonLabel,
    styles.smallButtonLabel,
    variant,
  ])

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Typography bold style={labelStyle}>
        {label}
      </Typography>
    </TouchableOpacity>
  )
}

const useStyles = createStyleSheet((theme) => ({
  buttonBase: {
    alignItems: "center",
    justifyContent: "center",
  } satisfies ViewStyle,
  primaryButton: {
    backgroundColor: theme.colors.primary[500],
  } satisfies ViewStyle,
  primaryButtonLabel: {
    color: theme.colors.text.inverse,
  } satisfies TextStyle,
  secondaryButton: {
    backgroundColor: theme.colors.neutral[100],
  } satisfies ViewStyle,
  secondaryButtonLabel: {
    color: theme.colors.text.secondary,
  } satisfies TextStyle,
  mediumButtonContainer: {
    borderRadius: theme.borderRadius.md,
    minHeight: 45,
    minWidth: 120,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[1],
  } satisfies ViewStyle,
  smallButtonContainer: {
    borderRadius: theme.borderRadius.sm,
    minHeight: 30,
    minWidth: 60,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[1],
  } satisfies ViewStyle,
  mediumButtonLabel: {
    fontSize: theme.fontSize.base,
  } satisfies TextStyle,
  smallButtonLabel: {
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
}))
