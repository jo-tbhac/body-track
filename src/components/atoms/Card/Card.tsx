import { LinearGradient, LinearGradientProps } from "expo-linear-gradient"
import { FC, useMemo } from "react"
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native"

import { createStyleSheet } from "@/styles/theme"

type BasicCardProps = ViewProps & {
  gradient?: undefined
}

type GradientCardProps = Omit<LinearGradientProps, "colors"> & {
  gradient: LinearGradientProps["colors"]
}

type Props = BasicCardProps | GradientCardProps

export const Card: FC<Props> = ({
  style: overrideStyle,
  gradient,
  ...rest
}) => {
  const baseStyles = useStyles()

  const style = useMemo(() => {
    return StyleSheet.compose<ViewStyle, ViewStyle, ViewStyle>(
      baseStyles.container,
      overrideStyle,
    )
  }, [baseStyles, overrideStyle])

  if (gradient) {
    return <LinearGradient colors={gradient} style={style} {...rest} />
  }

  return <View style={style} {...rest} />
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.secondary,
    borderColor: theme.colors.border.light,
    borderRadius: theme.borderRadius.xl,
    borderWidth: theme.borderWidth[1],
    overflow: "hidden",
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[6],
    width: "100%",
  } satisfies ViewStyle,
}))
