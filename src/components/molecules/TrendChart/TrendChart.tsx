import { FC, useEffect, useMemo, useRef, useState } from "react"
import {
  LayoutChangeEvent,
  ScrollView,
  TextStyle,
  View,
  ViewStyle,
} from "react-native"

import { Typography } from "@/components/atoms/Typography"
import { PERIOD } from "@/constants"
import {
  SearchWeightRecordsParams,
  useSearchWeightRecords,
} from "@/hooks/weightRecord/useSearchWeightRecords"
import { LineChart } from "@/lib/charts"
import { subDuration } from "@/lib/date"
import { createStyleSheet, useTheme } from "@/styles/theme"
import { Period } from "@/types"

import { useChartData } from "./useChartData"

interface Props {
  selectedPeriod: Period
}

export const TrendChart: FC<Props> = ({ selectedPeriod }) => {
  const { colors, fontSize, fontFamily } = useTheme()
  const styles = useStyles()

  const chartScrollRef = useRef<ScrollView>(null)

  const [chartContainerWidth, setChartContainerWidth] = useState<number | null>(
    null,
  )

  const searchParams: SearchWeightRecordsParams = useMemo(() => {
    const today = new Date()
    const duration = (() => {
      switch (selectedPeriod) {
        case PERIOD["7days"]:
          return { days: 7 }
        case PERIOD["1month"]:
          return { months: 1 }
        case PERIOD["3months"]:
          return { months: 3 }
        case PERIOD["6months"]:
          return { months: 6 }
      }
    })()

    return {
      measuredDateFrom: subDuration(today, duration),
      measuredDateTo: today,
    }
  }, [selectedPeriod])

  const [weightRecords] = useSearchWeightRecords(searchParams)

  const chartData = useChartData(weightRecords)

  useEffect(() => {
    setTimeout(() => {
      chartScrollRef.current?.scrollToEnd({ animated: false })
    })
  }, [selectedPeriod])

  const onLayout = (event: LayoutChangeEvent) => {
    setChartContainerWidth(event.nativeEvent.layout.width)
  }

  return (
    <>
      <View style={styles.chartContainer} onLayout={onLayout}>
        {chartContainerWidth != null && chartData != null && (
          <LineChart
            scrollRef={chartScrollRef}
            data={chartData.weight.dataList}
            // base
            endSpacing={10}
            hideDataPoints
            parentWidth={chartContainerWidth}
            width={chartContainerWidth - 80}
            height={150}
            xAxisColor={colors.border.medium}
            yAxisColor={colors.border.medium}
            xAxisLabelTextStyle={{
              color: colors.text.secondary,
              fontFamily: fontFamily.NotoSansJP_400,
              fontSize: fontSize.sm,
            }}
            yAxisTextStyle={{
              color: colors.text.secondary,
              fontFamily: fontFamily.NotoSansJP_400,
              fontSize: fontSize.sm,
            }}
            // for primary
            color={colors.primary[500]}
            showFractionalValues
            roundToDigits={1}
            noOfSections={chartData.weight.numberOfSection}
            stepValue={chartData.weight.stepValue}
            yAxisOffset={chartData.weight.minValue}
            // for secondary
            secondaryData={chartData.bodyFatRate.dataList}
            secondaryYAxis={{
              yAxisOffset: chartData.bodyFatRate.minValue,
              roundToDigits: 1,
              showFractionalValues: true,
            }}
            secondaryLineConfig={{ color: colors.accent.amber[500] }}
          />
        )}
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legend}>
          <View
            style={[
              styles.legendLine,
              { backgroundColor: colors.primary[500] },
            ]}
          />
          <Typography style={styles.legendLabel}>体重</Typography>
        </View>
        <View style={styles.legend}>
          <View
            style={[
              styles.legendLine,
              { backgroundColor: colors.accent.amber[500] },
            ]}
          />
          <Typography style={styles.legendLabel}>体脂肪率</Typography>
        </View>
      </View>
    </>
  )
}

const useStyles = createStyleSheet((theme) => ({
  chartContainer: {
    width: "100%",
  } satisfies ViewStyle,
  legendContainer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: theme.spacing[2],
    marginTop: theme.spacing[2],
    width: "100%",
  } satisfies ViewStyle,
  legend: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing[1],
  } satisfies ViewStyle,
  legendLine: {
    height: 2,
    width: 30,
  } satisfies ViewStyle,
  legendLabel: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSize.sm,
  } satisfies TextStyle,
}))
