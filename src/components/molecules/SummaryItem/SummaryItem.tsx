import { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { createStyleSheet } from "@/styles/theme"

interface Props {
  label: string
  value: string | number
  unit?: string
  containerStyles?: ViewStyle
}

export const SummaryItem: FC<Props> = ({
  label,
  value,
  unit,
  containerStyles,
}) => {
  const styles = useStyles()

  return (
    <View style={[styles.container, containerStyles]}>
      <Typography bold style={styles.value}>
        {value}
        {unit != null && (
          <>
            {" "}
            <Typography bold style={styles.unit}>
              {unit}
            </Typography>
          </>
        )}
      </Typography>
      <Typography style={styles.label}>{label}</Typography>
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    flex: 1,
    gap: theme.spacing[1],
    justifyContent: "center",
    paddingVertical: theme.spacing[1],
  } satisfies ViewStyle,
  value: {
    fontSize: theme.fontSize["2xl"],
  } satisfies TextStyle,
  unit: {
    fontSize: theme.fontSize.base,
  } satisfies TextStyle,
  label: {
    color: theme.colors.text.tertiary,
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
}))
