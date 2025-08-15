import AntDesign from "@expo/vector-icons/AntDesign"
import { FC } from "react"

import { BaseProps } from "./types"

type Props = BaseProps

export const SettingIcon: FC<Props> = ({ size, color }) => {
  return <AntDesign name="setting" size={size} color={color} />
}
