import { FC, useMemo } from "react"
import { StyleSheet, Text, TextProps, TextStyle } from "react-native"

import { createStyleSheet } from "@/styles/theme"

type Props = TextProps & {
  bold?: boolean
}

export const Typography: FC<Props> = ({
  bold = false,
  style: overrideStyle,
  ...rest
}) => {
  const baseStyles = useStyles()

  const style = useMemo(() => {
    const flattenBaseStyle = bold
      ? StyleSheet.flatten([baseStyles.baseText, baseStyles.bold])
      : baseStyles.baseText

    return StyleSheet.compose<TextStyle, TextStyle, TextStyle>(
      flattenBaseStyle,
      overrideStyle,
    )
  }, [bold, baseStyles, overrideStyle])

  return <Text style={style} {...rest} />
}

const useStyles = createStyleSheet((theme) => ({
  baseText: {
    color: theme.colors.text.primary,
    fontFamily: theme.fontFamily.NotoSansJP_400,
    fontSize: theme.fontSize.base,
  } satisfies TextStyle,
  bold: {
    fontFamily: theme.fontFamily.NotoSansJP_700,
  } satisfies TextStyle,
}))
