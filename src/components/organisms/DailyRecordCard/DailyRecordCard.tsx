import { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { WeightEntry } from "@/components/molecules/WeightEntry"
import { createStyleSheet, useTheme } from "@/styles/theme"

export const DailyRecordCard: FC = () => {
  const { colors } = useTheme()
  const styles = useStyles()

  return (
    <Card gradient={[colors.primary[500], colors.accent.amber[600]]}>
      <View style={styles.cardTop}>
        <Typography bold style={styles.cardTitle}>
          XX月XX日（X）の記録
        </Typography>
      </View>
      <View style={styles.cardBottom}>
        <WeightEntry
          label="朝の体重"
          weight={64.0}
          bodyFatRate={16.0}
          bmi={19.0}
        />
        <WeightEntry
          label="夜の体重"
          weight={64.0}
          bodyFatRate={16.0}
          bmi={19.0}
        />
      </View>
    </Card>
  )
}

const useStyles = createStyleSheet((theme) => ({
  cardTop: {
    marginBottom: theme.spacing[3],
  } satisfies ViewStyle,
  cardTitle: {
    color: theme.colors.text.inverse,
    fontSize: theme.fontSize.lg,
  } satisfies TextStyle,
  cardBottom: {
    flexDirection: "row",
    gap: theme.spacing[3],
  } satisfies ViewStyle,
}))
