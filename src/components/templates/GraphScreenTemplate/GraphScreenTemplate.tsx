import { FC, useState } from "react"
import { View, ViewStyle } from "react-native"

import { PeriodButtonsCard } from "@/components/organisms/PeriodButtonsCard"
import { PERIOD } from "@/constants"
import { createStyleSheet } from "@/styles/theme"
import { Period } from "@/types/period"

export const GraphScreenTemplate: FC = () => {
  const styles = useStyles()

  const [selectedPeriod, setSelectedPeriod] = useState<Period>(PERIOD["7days"])

  const handleChangePeriod = (newPeriod: Period) => {
    setSelectedPeriod(newPeriod)
  }

  return (
    <View style={styles.container}>
      <PeriodButtonsCard
        selectedPeriod={selectedPeriod}
        handleChangePeriod={handleChangePeriod}
      />
    </View>
  )
}

const useStyles = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.background.primary,
    gap: theme.spacing[4],
    paddingHorizontal: theme.spacing[3],
  } satisfies ViewStyle,
}))
