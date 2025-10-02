import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const SunIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="sun" size={size} color={color} />
}
