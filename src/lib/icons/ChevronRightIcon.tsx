import Entypo from "@expo/vector-icons/Entypo"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const ChevronRightIcon: FC<Props> = ({ size, color }) => {
  return <Entypo name="chevron-right" size={size} color={color} />
}
