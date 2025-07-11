import Entypo from "@expo/vector-icons/Entypo"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const ChevronLeftIcon: FC<Props> = ({ size, color }) => {
  return <Entypo name="chevron-left" size={size} color={color} />
}
