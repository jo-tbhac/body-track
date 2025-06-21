import { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { SummaryItem } from "@/components/molecules/SummaryItem"
import { createStyleSheet } from "@/styles/theme"

export const WeeklySummaryCard: FC = () => {
  const styles = useStyles()

  return (
    <Card>
      <View style={styles.cardTop}>
        <Typography bold style={styles.cardTitle}>
          週間サマリー
        </Typography>
      </View>
      <View style={styles.cardBottom}>
        <SummaryItem label="平均体重" value={63.8} unit="kg" />
        <SummaryItem label="平均体脂肪率" value={16.0} unit="%" />
        <SummaryItem label="平均BMI" value={19.0} />
      </View>
    </Card>
  )
}

const useStyles = createStyleSheet((theme) => ({
  cardTop: {
    marginBottom: theme.spacing[3],
  } satisfies ViewStyle,
  cardTitle: {
    fontSize: theme.fontSize.lg,
  } satisfies TextStyle,
  cardBottom: {
    flexDirection: "row",
    gap: theme.spacing[3],
  } satisfies ViewStyle,
}))
