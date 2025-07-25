import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const ChevronRightIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="right" size={size} color={color} />
}
