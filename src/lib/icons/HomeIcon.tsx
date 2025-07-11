import Entypo from "@expo/vector-icons/Entypo"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const HomeIcon: FC<Props> = ({ size, color }) => {
  return <Entypo name="home" size={size} color={color} />
}
