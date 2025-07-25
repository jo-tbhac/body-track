import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const ChevronLeftIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="left" size={size} color={color} />
}
