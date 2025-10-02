import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const MoonIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="moon" size={size} color={color} />
}
