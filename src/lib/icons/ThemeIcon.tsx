import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const ThemeIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="skin" size={size} color={color} />
}
