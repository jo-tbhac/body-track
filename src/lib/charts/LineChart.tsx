import { FC } from "react"
import {
  LineChart as GiftedLineChart,
  LineChartPropsType as GiftedLineChartPropsType,
  lineDataItem,
} from "react-native-gifted-charts"

type Props = GiftedLineChartPropsType

export type LineChartData = lineDataItem

export interface ChartData {
  label: string
  value: number
  yAxisLabelText?: string
}

export const LineChart: FC<Props> = (props) => {
  return <GiftedLineChart {...props} />
}
