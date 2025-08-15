import { FC } from "react"
import { TextStyle } from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  label: string
}

export const InputLabel: FC<Props> = ({ label }) => {
  const styles = useStyles()

  return (
    <Typography bold style={styles.label}>
      {label}
    </Typography>
  )
}

const useStyles = createStyleSheet((theme) => ({
  label: {
    color: theme.colors.text.tertiary,
    fontSize: theme.fontSize.sm,
    marginLeft: theme.spacing[1],
    marginBottom: theme.spacing[1],
  } satisfies TextStyle,
}))
