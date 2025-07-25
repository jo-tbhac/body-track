import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const HomeIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="home" size={size} color={color} />
}
