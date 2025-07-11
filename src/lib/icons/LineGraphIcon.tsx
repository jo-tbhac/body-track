import Entypo from "@expo/vector-icons/Entypo"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const LineGraphIcon: FC<Props> = ({ size, color }) => {
  return <Entypo name="line-graph" size={size} color={color} />
}
