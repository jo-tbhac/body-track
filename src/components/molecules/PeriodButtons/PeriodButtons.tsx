import { FC, useMemo } from "react"
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native"

import { ToggleButton } from "@/components/atoms/ToggleButton"
import { PERIOD } from "@/constants"
import { createStyleSheet } from "@/styles/theme"
import { Period } from "@/types"

interface Props {
  selectedPeriod: Period
  containerStyle?: ViewProps["style"]
  handleChangePeriod: (newPeriod: Period) => void
}

export const PeriodButtons: FC<Props> = ({
  selectedPeriod,
  containerStyle: overrideContainerStyle,
  handleChangePeriod,
}) => {
  const styles = useStyles()

  const containerStyle = useMemo(() => {
    return StyleSheet.compose<ViewStyle, ViewStyle, ViewStyle>(
      styles.container,
      overrideContainerStyle,
    )
  }, [overrideContainerStyle, styles.container])

  const periodButtonDefs = [
    { label: "7日", value: PERIOD["7days"] },
    { label: "1ヶ月", value: PERIOD["1month"] },
    { label: "3ヶ月", value: PERIOD["3months"] },
    { label: "6ヶ月", value: PERIOD["6months"] },
  ] as const

  return (
    <View style={containerStyle}>
      {periodButtonDefs.map(({ label, value }) => (
        <ToggleButton
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
