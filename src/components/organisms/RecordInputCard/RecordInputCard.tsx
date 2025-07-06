import { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { SubmitButton } from "@/components/atoms/SubmitButton"
import { Typography } from "@/components/atoms/Typography"
import { RecordInputItem } from "@/components/molecules/RecordInputItem"
import { createStyleSheet } from "@/styles/theme"

export const RecordInputCard: FC = () => {
  const styles = useStyles()

  return (
    <Card>
      <View style={styles.cardTop}>
        <Typography bold style={styles.cardTitle}>
          XXの体重を記録
        </Typography>
      </View>
      <View style={styles.cardBottom}>
        <RecordInputItem label="体重（kg）" />
        <RecordInputItem label="体脂肪率（%）" />
        <View style={styles.buttonContainer}>
          <SubmitButton label="記録を保存" onPress={() => {}} />
        </View>
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
    gap: theme.spacing[2],
  } satisfies ViewStyle,
  buttonContainer: {
    marginTop: theme.spacing[3],
  } satisfies ViewStyle,
}))
