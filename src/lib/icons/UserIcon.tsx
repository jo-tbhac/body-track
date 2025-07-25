import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const UserIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="user" size={size} color={color} />
}
