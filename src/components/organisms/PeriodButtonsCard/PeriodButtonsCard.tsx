import { FC } from "react"
import { View, ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { PeriodButton } from "@/components/atoms/PeriodButton"
import { PERIOD } from "@/constants"
import { createStyleSheet } from "@/styles/theme"
import { Period } from "@/types/period"

interface Props {
  selectedPeriod: Period
  handleChangePeriod: (newPeriod: Period) => void
}

export const PeriodButtonsCard: FC<Props> = ({
  selectedPeriod,
  handleChangePeriod,
}) => {
  const styles = useStyles()

  const periodButtonDefs = [
    { label: "7日", value: PERIOD["7days"] },
    { label: "1ヶ月", value: PERIOD["1month"] },
    { label: "3ヶ月", value: PERIOD["3months"] },
    { label: "6ヶ月", value: PERIOD["6months"] },
  ] as const

  return (
    <Card>
      <View style={styles.container}>
        {periodButtonDefs.map(({ label, value }) => (
          <PeriodButton
            key={value}
            containerStyle={styles.buttonWrapper}
            label={label}
            selected={selectedPeriod === value}
            onPress={() => {
              handleChangePeriod(value)
            }}
          />
        ))}
      </View>
    </Card>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    gap: theme.spacing[3],
  } satisfies ViewStyle,
  buttonWrapper: {
    flex: 1,
  } satisfies ViewStyle,
}))
