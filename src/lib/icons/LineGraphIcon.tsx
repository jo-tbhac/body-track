import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const LineGraphIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="linechart" size={size} color={color} />
}
