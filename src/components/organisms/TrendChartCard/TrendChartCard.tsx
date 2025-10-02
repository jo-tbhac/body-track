import { FC, useState } from "react"
import { ViewStyle } from "react-native"

import { Card } from "@/components/atoms/Card"
import { PeriodButtons } from "@/components/molecules/PeriodButtons"
import { TrendChart } from "@/components/molecules/TrendChart"
import { PERIOD } from "@/constants"
import { createStyleSheet } from "@/styles/theme"
import { Period } from "@/types"

import { useChartComponentKey } from "./useChartComponentKey"

export const TrendChartCard: FC = () => {
  const styles = useStyles()

  const chartComponentKey = useChartComponentKey()

  const [selectedPeriod, setSelectedPeriod] = useState<Period>(PERIOD["7days"])

  const handleChangePeriod = (newPeriod: Period) => {
    setSelectedPeriod(newPeriod)
  }

  return (
    <Card style={styles.card}>
      <PeriodButtons
        selectedPeriod={selectedPeriod}
        containerStyle={styles.buttonContainer}
        handleChangePeriod={handleChangePeriod}
      />
      <TrendChart key={chartComponentKey} selectedPeriod={selectedPeriod} />
    </Card>
  )
}

const useStyles = createStyleSheet((theme) => ({
  card: {
    paddingHorizontal: theme.spacing[3],
  } satisfies ViewStyle,
  buttonContainer: {
    marginBottom: theme.spacing[5],
  } satisfies ViewStyle,
}))
