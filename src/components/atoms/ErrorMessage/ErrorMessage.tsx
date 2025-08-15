import { FC } from "react"
import { TextStyle } from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  message: string
}

export const ErrorMessage: FC<Props> = ({ message }) => {
  const styles = useStyles()

  return <Typography style={styles.message}>{message}</Typography>
}

const useStyles = createStyleSheet((theme) => ({
  message: {
    color: theme.colors.semantic.error,
    fontSize: theme.fontSize.sm,
    marginLeft: theme.spacing[1],
    marginTop: theme.spacing[1],
  } satisfies TextStyle,
}))
